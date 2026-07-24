import Link from 'next/link'
import { Bath, BedDouble, MapPin, Maximize } from 'lucide-react'
import { formatPrice, type Listing } from '@/lib/listings'

const statusStyles: Record<Listing['status'], string> = {
  'For Sale': 'bg-accent text-accent-foreground',
  'For Rent': 'bg-primary text-primary-foreground',
  Pending: 'bg-muted text-muted-foreground',
}

export function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.cover || '/placeholder.svg'}
          alt={`Exterior of ${listing.title}`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-xs font-medium ${statusStyles[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold leading-tight text-balance">
            {listing.title}
          </h3>
          <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
            {listing.type}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 text-accent" />
          {listing.location}, {listing.city}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4" /> {listing.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4" /> {listing.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4" /> {listing.area.toLocaleString()} sqft
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="font-serif text-lg font-semibold text-primary">
            {formatPrice(listing.price, listing.status)}
          </span>
          <span className="text-sm text-accent-foreground/0 transition-colors group-hover:text-accent">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}
