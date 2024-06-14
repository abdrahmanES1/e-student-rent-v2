import { notFound } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/header"
import { LayoutNav } from "@/components/nav"

import { sidebarNavLinks } from "./_links"

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
        heading="Settings"
        text=" Manage your account settings and set e-mail preferences."
      >
        {/* <PostCreateButton /> */}
      </DashboardHeader>
      <Separator className="my-6" />
      <div className="flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="sticky top-0 lg:w-1/5">
          <LayoutNav items={sidebarNavLinks} />
        </aside>
        <div className="w-full p-1 pr-4 lg:max-w-xl">
          <div className="pb-16">{children}</div>
        </div>
      </div>
    </>
  )
}
