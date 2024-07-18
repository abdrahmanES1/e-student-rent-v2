/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B1KEM1pvckY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-background shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary">
          List Your Apartment
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter the details below to advertise your rental.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="landlord-name" className="text-sm font-medium">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Studio Apartment"
                className="border-input focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Apartment Address
              </Label>
              <Input
                id="address"
                placeholder="123 Main St, Anytown USA"
                className="border-input focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="bedrooms" className="text-sm font-medium">
                  Bedrooms
                </Label>
                <Select
                  // id="bedrooms"
                  // className="border-input focus:ring-primary focus:border-primary"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rent" className="text-sm font-medium">
                  Monthly Rent
                </Label>
                <Input
                  id="rent"
                  type="number"
                  placeholder="$1,000"
                  className="border-input focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="rent" className="text-sm font-medium">
                  Area
                </Label>
                <Input
                  id="rent"
                  type="number"
                  placeholder="30m"
                  className="border-input focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bedrooms" className="text-sm font-medium">
                  Bedrooms
                </Label>
                <Select
                  // id="bedrooms"
                  // className="border-input focus:ring-primary focus:border-primary"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amenities" className="text-sm font-medium">
                Apartment Amenities
              </Label>
              <Textarea
                id="amenities"
                rows={3}
                placeholder="Describe the apartment amenities..."
                className="border-input focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Images
              </Label>
              <Input type="file" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                rows={5}
                placeholder="Provide any additional notes or instructions for tenants..."
                className="border-input focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm font-medium">Location</Label>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div className="size-full border  rounded-lg">Map</div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            List Apartment
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
