import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Mail,
  MapPin,
  Maximize,
  Phone,
  Ruler,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PropertyGallery } from '@/components/property-gallery'
import { PropertyCard } from '@/components/property-card'
import { formatPrice, getListing, listings } from '@/lib/listings'

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const listing = getListing(id)
  if (!listing) return { title: 'Listing not found — Marlowe & Vale' }
  return {
    title: `${listing.title} — ${listing.city} | Marlowe & Vale`,
    description: listing.summary,
  }
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const listing = getListing(id)
  if (!listing) notFound()

  const stats = [
    { icon: BedDouble, label: 'Bedrooms', value: listing.beds },
    { icon: Bath, label: 'Bathrooms', value: listing.baths },
    { icon: Maximize, label: 'Interior', value: `${listing.area.toLocaleString()} sqft` },
    { icon: Ruler, label: 'Lot', value: listing.lot },
    { icon: CalendarDays, label: 'Year built', value: listing.year },
  ]

  const related = listings.filter((l) => l.id !== listing.id).slice(0, 3)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 pt-8">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>
        </div>

        {/* Header */}
        <section className="mx-auto max-w-6xl px-5 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="rounded-sm bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                {listing.status}
              </span>
              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                {listing.title}
              </h1>
              <p className="mt-3 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-4 text-accent" />
                {listing.location}, {listing.city}
              </p>
            </div>
            <div className="md:text-right">
              <div className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                {formatPrice(listing.price, listing.status)}
              </div>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                {listing.type}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto mt-8 max-w-6xl px-5">
          <PropertyGallery images={listing.gallery} title={listing.title} />
        </section>

        {/* Body */}
        <section className="mx-auto mt-12 max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              {/* Stat strip */}
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.label} className="bg-card px-4 py-5 text-center">
                    <s.icon className="mx-auto size-5 text-accent" />
                    <div className="mt-2 font-serif text-lg font-semibold">
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-semibold">
                  About this home
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {listing.summary}
                </p>
                {listing.description.map((p, i) => (
                  <p key={i} className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-semibold">
                  Features &amp; amenities
                </h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {listing.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="flex size-6 items-center justify-center rounded-sm bg-accent/15 text-accent-foreground">
                        <Check className="size-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agent / contact card */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-sm border border-border bg-card p-6">
                <h3 className="font-serif text-xl font-semibold">
                  Arrange a viewing
                </h3>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Listing advisor
                  </p>
                  <p className="mt-2 font-serif text-lg font-semibold">
                    {listing.agent.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {listing.agent.title}
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={`tel:${listing.agent.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Phone className="size-4" /> {listing.agent.phone}
                  </a>
                  <a
                    href={`mailto:${listing.agent.email}?subject=Viewing request: ${listing.title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <Mail className="size-4" /> Email advisor
                  </a>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Prefer a private tour? Mention your ideal dates and we will
                  coordinate directly with the seller.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        <section className="mx-auto mt-16 max-w-6xl border-t border-border px-5 py-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">
            You may also like
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
