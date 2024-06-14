import { compareHashPassword } from "@/utils/password"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

// import { Client } from "postmark"

import { env } from "@/env.mjs"
import { db } from "@/lib/db"

export default {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const user = await db.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        })

        if (!user) {
          console.log("No user found")
          throw new Error("No user found")
          return null
        }
        const validUser = await compareHashPassword(
          credentials.password as string,
          user?.password!
        )
        if (!validUser) {
          throw new Error("Password mismatch")
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl))
      }
      return true
    },
    async session({ token, session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      }
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
  debug: process.env.NODE_ENV === "development",
  trustHost: true,
} satisfies NextAuthConfig
