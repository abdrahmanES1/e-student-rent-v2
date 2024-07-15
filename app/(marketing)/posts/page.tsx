import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import DropDownFilter from "./_components/dropdown-filter"
import PostCard from "./_components/post-card"

export default function Component() {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search accommodations..."
              className="max-w-md w-full"
            />
            <DropDownFilter />
          </div>
          <Button variant="outline">
            <Icons.plus className="size-4 mr-2" />
            Add Accommodation
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}
