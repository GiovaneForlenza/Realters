import Link from "next/link";
import { ArrowRight, Home, Key, LineChart, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PropertyCard } from "@/components/property-card";
import { listings } from "@/lib/listings";

const stats = [
  { value: "$1.2B", label: "In closed sales" },
  { value: "480+", label: "Homes placed" },
  { value: "18 yrs", label: "Guiding buyers" },
  { value: "4.9/5", label: "Client rating" },
];

const services = [
  {
    icon: Home,
    title: "Buying",
    body: "We hunt down homes that fit your life, not just your budget — often before they hit the market.",
  },
  {
    icon: Key,
    title: "Selling",
    body: "Editorial photography, sharp positioning, and a network of qualified buyers to close with confidence.",
  },
  {
    icon: LineChart,
    title: "Advisory",
    body: "Honest valuations and market intelligence so every decision you make is a well-informed one.",
  },
];

export default function HomePage() {
  const featured = listings.filter((l) => l.featured).slice(0, 3);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Boutique Real Estate Studio
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-8xl">
            Homes with a<span className="text-accent"> story</span> to tell.
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Marlowe &amp; Vale is a small team of advisors obsessed with
              matching remarkable properties to the people who will love them.
            </p>
            <div className="flex gap-3">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Browse portfolio <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-sm">
            <img
              src="/homes/hero-estate.png"
              alt="A modern luxury home at golden hour"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="py-8 md:py-10">
                <div className="font-serif text-3xl font-semibold md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured listings */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Featured
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Currently on the market
              </h2>
            </div>
            <Link
              href="/listings"
              className="hidden shrink-0 items-center gap-2 text-sm font-medium text-primary hover:text-accent md:inline-flex"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>

          <Link
            href="/listings"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent md:hidden"
          >
            View all listings <ArrowRight className="size-4" />
          </Link>
        </section>

        {/* Approach / Studio */}
        <section
          id="approach"
          className="border-t border-border bg-secondary/40"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
              <div className="md:sticky md:top-28">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  The Studio
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                  A quieter, more considered way to move.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  We take on fewer clients so we can give each one our full
                  attention. From first viewing to final signature, you work
                  with the same dedicated advisor.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-1">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="flex gap-5 rounded-sm border border-border bg-card p-6"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent-foreground">
                      <s.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <Quote className="mx-auto size-8 text-accent" />
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-snug text-balance md:text-4xl">
            “They understood what we wanted before we could put it into words —
            and found us a home we never would have discovered on our own.”
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">
            Amara &amp; David Okafor · Bought in Portland
          </p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="overflow-hidden rounded-sm bg-primary px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Ready to find your next address?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Tell us what you are looking for and we will curate a shortlist
              worth your time.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore homes <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:hello@marlowevale.com"
                className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Email an advisor
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
