"use client"
import { Search } from "@/components/search"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { tasks } from "./_data/tasks"

export default function Tasks() {
  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
