import Link from 'next/link'

const columns = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Portfolio', href: '/listings' },
      { label: 'The Studio', href: '/#approach' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: 'Buy & Sell',
    links: [
      { label: 'For Sale', href: '/listings?status=For+Sale' },
      { label: 'For Rent', href: '/listings?status=For+Rent' },
      { label: 'List with us', href: '/#contact' },
      { label: 'Valuations', href: '/#contact' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'hello@marlowevale.com', href: 'mailto:hello@marlowevale.com' },
      { label: '(415) 555-0100', href: 'tel:+14155550100' },
      { label: '210 Ivy Street, Suite 4', href: '/#contact' },
      { label: 'San Francisco, CA', href: '/#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold">Marlowe</span>
              <span className="text-xl text-accent">&amp;</span>
              <span className="font-serif text-2xl font-semibold">Vale</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A boutique real estate studio pairing distinctive homes with the
              people who will love them.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marlowe &amp; Vale. All rights reserved.</p>
          <p>Licensed Real Estate Brokerage · Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  )
}
