import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"

export default function PostCard() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <Link href="#" className="block" prefetch={false}>
        <Image
          src="/placeholder.svg"
          alt="Accommodation 3"
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link
            href="#"
            className="hover:text-primary-foreground"
            prefetch={false}
          >
            Studio Apartment
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Compact and modern studio apartment with a kitchenette.
        </p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Icons.bed className="size-4 mr-2" />1 Bedroom
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Icons.bath className="size-4 mr-2" />1 Bathroom
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Icons.dollarSign className="size-4 mr-2" />
          $500/month
        </div>
      </div>
    </div>
  )
}
