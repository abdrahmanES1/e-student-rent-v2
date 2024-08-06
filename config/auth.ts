import { cookies } from "next/headers"
import { axiosInstance } from "@/utils/axiosInstance"
import { Account, User as AuthUser, type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

import { env } from "@/env.mjs"

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
        try {
          const res = await axiosInstance.post("/api/auth/login", {
            ...credentials,
          })
          const token = await res.data.token

          cookies().set("token", token)
          const {
            data: { data: user },
          } = await axiosInstance.get("/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          })
          cookies().set("user", JSON.stringify(user))
          return user
        } catch (error) {
          throw new Error(error)
          return null
        }
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
          ...user,
          id: u._id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      //  user.
      // TODO : add a backend api to signin with email
      // check if the user already exits login eslse register
      if (account.provider == "github") {
        try {
          const { email, name } = user
          const res = await axiosInstance.post("/api/auth/register", {
            username: name,
            email: email,
            password: "1234567890",
          })
          const token = await res.data.token

          cookies().set("token", token)
          const {
            data: { data: newUser },
          } = await axiosInstance.get("/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          })
          cookies().set("user", JSON.stringify(newUser))
          return true
        } catch (error) {
          return false
        }
      }
      return true
    },
  },
  debug: process.env.NODE_ENV === "development",
  trustHost: true,
} satisfies NextAuthConfig
