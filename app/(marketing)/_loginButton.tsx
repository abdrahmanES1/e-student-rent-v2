"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function LoginButton() {
  const { status, data: session, update } = useSession()
  console.log(status, session, update)

  if (status == "loading") return <></>
  return (
    <>
      {status == "authenticated" && (
        <Link
          onClick={(e) => {
            e.preventDefault()
            signOut({ redirect: false })
          }}
          href="#"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          logout
        </Link>
      )}

      {status != "authenticated" && (
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          Login
        </Link>
      )}
    </>
  )
}
