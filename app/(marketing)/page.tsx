import Image from "next/image"
import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default async function IndexPage() {
  return (
    <>
      <section className=" pb-8 pt-6 md:pb-12 md:pt-10 lg:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Suitable Home
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Effortlessly discover, compare, and secure student housing
                  near your university with our user-friendly platform.
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-center space-x-2">
                  <CheckIcon className="size-5 text-primary" />
                  <span className="text-muted-foreground">
                    Comprehensive Listings Across Major Student Cities{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckIcon className="size-5 text-primary" />
                  <span className="text-muted-foreground">
                    Advanced Search Filters to Fit Your Budget and Preferences
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckIcon className="size-5 text-primary" />
                  <span className="text-muted-foreground">
                    Real-Time Notifications for New Listings
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckIcon className="size-5 text-primary" />
                  <span className="text-muted-foreground">
                    Verified Properties for Safe and Secure Living
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/posts"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Start Your Search
                </Link>
                <Link
                  href="/posts"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Listings
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=90&w=550&h=550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
              height="550"
              alt="Hero"
              loading="lazy"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover how our platform helps students find the perfect home in
            Morocco with ease and convenience.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.list className="size-12 " />
              <div className="space-y-2">
                <h3 className="font-bold">Comprehensive Listings</h3>
                <p className="text-sm text-muted-foreground">
                  Explore a wide range of student housing options across major
                  cities in Morocco.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.search className="size-12 " />
              <div className="space-y-2">
                <h3 className="font-bold">Advanced Search Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Customize your search based on preferences like location,
                  budget, and amenities.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.rss className="size-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Real-Time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Stay informed with real-time updates on property availability
                  and price changes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.ui className="size-12 " />
              <div className="space-y-2">
                <h3 className="font-bold">Enhanced User Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Benefit from a user-friendly interface with interactive
                  property maps and photo galleries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Accommodation for Students
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Looking for student accommodation for your next year at uni? We know
            having the right base is a big deal, and we are here to help you
            find the right rent offer that meets your budget. Just use our
            online search engine to find somewhere that`s right for you. Perhaps
            youre looking for somewhere close to your university or whatever
            you're looking for, we`ll help you find it. And if you just want to
            see what accommodation is available in your city, simply have a
            browse and take it from there. Best of all, our service is 100% free
            . So why not make yourself a drink and start your search now!
          </p>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
