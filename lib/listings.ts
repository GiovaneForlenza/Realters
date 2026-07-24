export type Listing = {
  id: string
  title: string
  location: string
  city: string
  price: number
  status: 'For Sale' | 'For Rent' | 'Pending'
  type: 'House' | 'Villa' | 'Penthouse' | 'Estate'
  beds: number
  baths: number
  area: number // square feet
  lot: string
  year: number
  featured: boolean
  cover: string
  gallery: string[]
  summary: string
  description: string[]
  features: string[]
  agent: {
    name: string
    title: string
    phone: string
    email: string
  }
}

const galleryPool = [
  '/homes/interior-living.png',
  '/homes/interior-kitchen.png',
  '/homes/interior-bedroom.png',
]

const agents = {
  clara: {
    name: 'Clara Mendez',
    title: 'Principal Broker',
    phone: '(415) 555-0132',
    email: 'clara@marlowevale.com',
  },
  julian: {
    name: 'Julian Reyes',
    title: 'Senior Advisor',
    phone: '(415) 555-0187',
    email: 'julian@marlowevale.com',
  },
  sofia: {
    name: 'Sofia Aldous',
    title: 'Luxury Specialist',
    phone: '(415) 555-0164',
    email: 'sofia@marlowevale.com',
  },
}

export const listings: Listing[] = [
  {
    id: 'the-glasshouse',
    title: 'The Glasshouse',
    location: 'Bel Canyon Drive',
    city: 'Los Angeles, CA',
    price: 4250000,
    status: 'For Sale',
    type: 'Villa',
    beds: 5,
    baths: 6,
    area: 6200,
    lot: '0.8 acre',
    year: 2021,
    featured: true,
    cover: '/homes/modern-villa.png',
    gallery: ['/homes/modern-villa.png', ...galleryPool],
    summary:
      'A dramatic contemporary villa where walls of glass dissolve the line between interior and the surrounding canyon.',
    description: [
      'Set behind a private gate, The Glasshouse is an exercise in restraint and light. Floor-to-ceiling glazing wraps the main living volume, framing the pool and canyon beyond.',
      'The chef’s kitchen opens to a double-height great room, while the primary suite occupies its own wing with a spa bath and private terrace.',
    ],
    features: [
      'Infinity-edge pool',
      'Home cinema',
      'Wine cellar',
      'Smart home system',
      'Three-car garage',
      'Solar array',
    ],
    agent: agents.clara,
  },
  {
    id: 'maple-house',
    title: 'Maple House',
    location: '48 Linden Avenue',
    city: 'Portland, OR',
    price: 1180000,
    status: 'For Sale',
    type: 'House',
    beds: 4,
    baths: 3,
    area: 2850,
    lot: '0.25 acre',
    year: 1998,
    featured: true,
    cover: '/homes/craftsman-house.png',
    gallery: ['/homes/craftsman-house.png', ...galleryPool],
    summary:
      'A warm, beautifully maintained craftsman on a quiet tree-lined street, minutes from the city core.',
    description: [
      'Maple House balances period character with thoughtful updates. Original millwork and built-ins meet a renovated kitchen and refreshed baths.',
      'A covered front porch and landscaped rear garden make outdoor living effortless through every season.',
    ],
    features: [
      'Covered porch',
      'Renovated kitchen',
      'Hardwood floors',
      'Finished basement',
      'Detached studio',
      'EV charger',
    ],
    agent: agents.julian,
  },
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    location: 'One Harbor Tower, PH-3',
    city: 'Seattle, WA',
    price: 3100000,
    status: 'For Sale',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    area: 3400,
    lot: 'N/A',
    year: 2019,
    featured: true,
    cover: '/homes/city-penthouse.png',
    gallery: ['/homes/city-penthouse.png', ...galleryPool],
    summary:
      'A full-floor penthouse with a wraparound terrace and uninterrupted views of the skyline and sound.',
    description: [
      'Perched atop One Harbor Tower, this residence offers private elevator access and a 900-square-foot terrace built for entertaining.',
      'Interiors feature wide-plank oak, an integrated appliance kitchen, and floor-to-ceiling glass on three exposures.',
    ],
    features: [
      'Private elevator',
      'Wraparound terrace',
      'Concierge service',
      'Fitness center',
      'Two parking spaces',
      'Storage suite',
    ],
    agent: agents.sofia,
  },
  {
    id: 'dune-retreat',
    title: 'Dune Retreat',
    location: '12 Seagrass Lane',
    city: 'Cape Cod, MA',
    price: 2450000,
    status: 'For Sale',
    type: 'House',
    beds: 4,
    baths: 4,
    area: 3100,
    lot: '0.5 acre',
    year: 2016,
    featured: false,
    cover: '/homes/coastal-home.png',
    gallery: ['/homes/coastal-home.png', ...galleryPool],
    summary:
      'A cedar-clad coastal home with panoramic ocean views and direct beach access.',
    description: [
      'Dune Retreat captures the light and rhythm of the coast. Expansive windows frame the water while the open plan flows to a wraparound deck.',
      'A ground-floor suite and separate bunk room make it ideal for multigenerational gatherings.',
    ],
    features: [
      'Beach access',
      'Wraparound deck',
      'Outdoor shower',
      'Screened porch',
      'Mudroom',
      'Fireplace',
    ],
    agent: agents.clara,
  },
  {
    id: 'ashford-estate',
    title: 'Ashford Estate',
    location: '9 Wexford Hollow',
    city: 'Greenwich, CT',
    price: 6800000,
    status: 'For Sale',
    type: 'Estate',
    beds: 7,
    baths: 8,
    area: 9800,
    lot: '3.2 acres',
    year: 2008,
    featured: false,
    cover: '/homes/country-estate.png',
    gallery: ['/homes/country-estate.png', ...galleryPool],
    summary:
      'A stately brick estate on more than three private acres with formal gardens and a carriage house.',
    description: [
      'Ashford Estate is a timeless residence of grand proportions. A sweeping circular drive leads to formal reception rooms and a paneled library.',
      'The grounds include manicured gardens, a tennis court, and a two-bedroom carriage house.',
    ],
    features: [
      'Formal gardens',
      'Tennis court',
      'Carriage house',
      'Paneled library',
      'Wine room',
      'Six fireplaces',
    ],
    agent: agents.julian,
  },
  {
    id: 'mesa-modern',
    title: 'Mesa Modern',
    location: '77 Agave Trail',
    city: 'Scottsdale, AZ',
    price: 1950000,
    status: 'For Rent',
    type: 'House',
    beds: 3,
    baths: 3,
    area: 2600,
    lot: '0.4 acre',
    year: 2022,
    featured: false,
    cover: '/homes/desert-modern.png',
    gallery: ['/homes/desert-modern.png', ...galleryPool],
    summary:
      'A sculptural desert-modern residence framed by mountain views and low-water landscaping.',
    description: [
      'Mesa Modern pairs concrete, glass, and steel to striking effect. Deep overhangs and shaded courtyards keep interiors cool and serene.',
      'A resort-style pool and outdoor kitchen extend the living space into the desert evening.',
    ],
    features: [
      'Resort pool',
      'Outdoor kitchen',
      'Xeriscaped grounds',
      'Clerestory windows',
      'Casita',
      'Rooftop deck',
    ],
    agent: agents.sofia,
  },
]

export function getListing(id: string): Listing | undefined {
  return listings.find((l) => l.id === id)
}

export function formatPrice(price: number, status: Listing['status']): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
  return status === 'For Rent' ? `${formatted}/mo` : formatted
}
