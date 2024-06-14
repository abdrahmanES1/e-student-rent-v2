import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "layout-dashboard",
    },
    {
      title: "Posts",
      href: "/dashboard/posts",
      icon: "post",
    },
    {
      title: "Tasks",
      href: "/dashboard/tasks",
      icon: "list-todo",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings/profile",
      icon: "settings",
    },
  ],
}
