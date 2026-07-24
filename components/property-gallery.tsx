'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function PropertyGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [active, setActive] = useState(0)
  const gallery = images.length > 0 ? images : ['/placeholder.svg']

  return (
    <div>
      <div className="overflow-hidden rounded-sm border border-border">
        <img
          src={gallery[active] || '/placeholder.svg'}
          alt={`${title} — view ${active + 1}`}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {gallery.slice(0, 4).map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={cn(
                'overflow-hidden rounded-sm border transition-colors',
                active === i ? 'border-accent' : 'border-border hover:border-muted-foreground',
              )}
            >
              <img
                src={src || '/placeholder.svg'}
                alt={`${title} thumbnail ${i + 1}`}
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
