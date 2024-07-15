import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

export default function PostPage({ params: { id } }) {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_500px] lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Charming Mountain Retreat with Stunning Views
              </h1>
              <div className="flex items-center gap-4">
                <MapPinIcon className="size-6 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Santa Cruz, California, USA
                </span>
              </div>
            </div>
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Property Image"
                    className="aspect-video object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Property Image"
                    className="aspect-video object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="Property Image"
                    className="aspect-video object-cover rounded-xl"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Property Details
                </h2>
                <div className="prose max-w-none">
                  <p>
                    Welcome to this charming mountain retreat, nestled in the
                    heart of the Santa Cruz Mountains. This cozy home offers
                    stunning views, a peaceful atmosphere, and all the amenities
                    you need for a relaxing getaway.
                  </p>
                  <p>
                    With 3 bedrooms and 2 bathrooms, this home can comfortably
                    accommodate up to 6 guests. The open-concept living area
                    features a fully equipped kitchen, a cozy living room, and
                    access to a private balcony with breathtaking mountain
                    vistas.
                  </p>
                  <p>
                    Enjoy the tranquility of the outdoors with a short hike to
                    nearby trails, or spend a day exploring the charming town of
                    Santa Cruz, just a short drive away. This property is the
                    perfect blend of nature and convenience, making it an ideal
                    choice for your next vacation.
                  </p>
                </div>
              </div>
              <Separator className="my-8" />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">
                    Address
                  </div>
                  <div>123 Mountain View Rd, Santa Cruz, CA 95060</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">
                    Price
                  </div>
                  <div>$400 / night</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">
                    Bedrooms
                  </div>
                  <div>3</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">
                    Total Area
                  </div>
                  <div>2,000 sq ft</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Host Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="font-semibold">Catherine</div>
                      <div className="text-sm text-muted-foreground">
                        Joined in 2010 · Superhost
                      </div>
                    </div>
                  </div>
                  <div className="prose text-sm">
                    <p>
                      Catherine is a Superhost with a wealth of experience
                      hosting guests. She is known for her attention to detail
                      and commitment to ensuring her guests have a comfortable
                      and memorable stay.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">John</div>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <div className="flex items-center gap-1">
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3" />
                          </div>
                          <span>1 week ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="prose text-sm">
                      <p>
                        We had an amazing time at this mountain retreat! The
                        views were breathtaking and the house was very clean and
                        comfortable. Catherine was a great host and we would
                        definitely stay here again.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">Emily</div>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <div className="flex items-center gap-1">
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3 fill-primary" />
                            <StarIcon className="size-3" />
                          </div>
                          <span>2 weeks ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="prose text-sm">
                      <p>
                        This mountain retreat was the perfect getaway. The house
                        was beautifully decorated and had everything we needed.
                        Catherine was a wonderful host and made us feel right at
                        home.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Related Universities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="p-4">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <SchoolIcon className="size-8" />
                    <div className="grid gap-1">
                      <div className="font-semibold">
                        University of California, Santa Cruz
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Distance: 10 miles
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <SchoolIcon className="size-8" />
                    <div className="grid gap-1">
                      <div className="font-semibold">Cabrillo College</div>
                      <div className="text-sm text-muted-foreground">
                        Distance: 15 miles
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <SchoolIcon className="size-8" />
                    <div className="grid gap-1">
                      <div className="font-semibold">
                        California State University, Monterey Bay
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Distance: 25 miles
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <SchoolIcon className="size-8" />
                    <div className="grid gap-1">
                      <div className="font-semibold">De Anza College</div>
                      <div className="text-sm text-muted-foreground">
                        Distance: 30 miles
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
