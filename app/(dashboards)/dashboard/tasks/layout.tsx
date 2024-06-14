import { notFound } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/header"
import { LayoutNav } from "@/components/nav"


interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function SettingsLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <>
      <DashboardHeader
        heading="Welcome back!"
        text="Here's a list of your tasks for this month!"
      >
        {/* <PostCreateButton /> */}
      </DashboardHeader>
      <Separator className="my-6" />
      <div className="flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="">
          <div className="pb-16">{children}</div>
        </div>
      </div>
    </>
  )
}
