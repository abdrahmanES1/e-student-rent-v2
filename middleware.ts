import { NextRequest, NextResponse } from "next/server"
import NextAuth from "next-auth"

import authConfig from "@/config/auth"

// Use only one of the two middleware options below
// 1. Use middleware directly
export const { auth: middleware } = NextAuth(authConfig)

// TODO : setup the

// 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(
//   req: NextRequest,
//   res: NextResponse
// ) {
//   const token = await auth()
//   const isAuth = !!token
//   const isAuthPage =
//     req.nextUrl.pathname.startsWith("/login") ||
//     req.nextUrl.pathname.startsWith("/register")

//   if (isAuthPage) {
//     if (isAuth) {
//       return NextResponse.redirect(new URL("/dashboard", req.url))
//     }

//     return null
//   }

//   if (!isAuth) {
//     let from = req.nextUrl.pathname
//     if (req.nextUrl.search) {
//       from += req.nextUrl.search
//     }

//     return NextResponse.redirect(
//       new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
//     )
//   }
// })

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
}
