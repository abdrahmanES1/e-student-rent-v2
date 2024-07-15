import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export default function DropdownFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Icons.filter className="size-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid gap-2 p-2">
          <div className="flex items-center gap-2">
            <Checkbox id="filter-bedrooms" />
            <Label htmlFor="filter-bedrooms">Bedrooms</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Icons.chevronRight className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value="2">
                  <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="4">4+</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="filter-bathrooms" />
            <Label htmlFor="filter-bathrooms">Bathrooms</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Icons.chevronsUpDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value="1">
                  <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="3">3+</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="filter-price" />
            <Label htmlFor="filter-price">Price</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Icons.chevronsUpDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value="500-800">
                  <DropdownMenuRadioItem value="under-500">
                    Under $500
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="500-800">
                    $500 - $800
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="800-1200">
                    $800 - $1,200
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="over-1200">
                    Over $1,200
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="filter-amenities" />
            <Label htmlFor="filter-amenities">Amenities</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Icons.chevronsUpDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem>
                  <Checkbox /> Parking
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Checkbox /> Laundry
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Checkbox /> Gym
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Checkbox /> Pool
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="flex justify-end gap-2 p-2">
          <Button variant="outline" size="sm">
            Clear
          </Button>
          <Button size="sm">Apply</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
