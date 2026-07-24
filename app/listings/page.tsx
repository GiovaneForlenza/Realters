import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingsBrowser } from '@/components/listings-browser'

export const metadata: Metadata = {
  title: 'Portfolio — Marlowe & Vale',
  description:
    'Browse available homes for sale and rent, or post a new listing to our portfolio.',
}

export default function ListingsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Portfolio
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Available homes, curated by our advisors.
            </h1>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Every property here is personally vetted by the Marlowe &amp; Vale
              team. Filter to find your fit, or add a home to the collection.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <ListingsBrowser />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
