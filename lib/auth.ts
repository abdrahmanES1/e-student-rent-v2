import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import { env } from "@/env.mjs"
import authConfig from "@/config/auth"
import { db } from "@/lib/db"

// import { Client } from "postmark"
// const postmarkClient = new Client(env.POSTMARK_API_TOKEN)

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db as any),
  secret: env.NEXTAUTH_SECRET,
  ...authConfig,
})
