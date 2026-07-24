"use client";

import { useMemo, useState } from "react";
import { Plus, Search, SlidersHorizontal, X } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { listings as seedListings, type Listing } from "@/lib/listings";
import { cn } from "@/lib/utils";

const statusFilters = ["All", "For Sale", "For Rent", "Pending"] as const;
const typeFilters = ["All", "House", "Villa", "Penthouse", "Estate"] as const;
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "beds", label: "Most Bedrooms" },
] as const;

type Status = (typeof statusFilters)[number];
type TypeF = (typeof typeFilters)[number];
type Sort = (typeof sortOptions)[number]["value"];

const blankForm = {
  title: "",
  location: "",
  city: "",
  price: "",
  status: "For Sale" as Listing["status"],
  type: "House" as Listing["type"],
  beds: "3",
  baths: "2",
  area: "2000",
  agentName: "",
  summary: "",
};

export function ListingsBrowser() {
  const [items, setItems] = useState<Listing[]>(seedListings);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("All");
  const [type, setType] = useState<TypeF>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(blankForm);

  const filtered = useMemo(() => {
    let result = items.filter((l) => {
      const matchesQuery =
        query.trim() === "" ||
        `${l.title} ${l.location} ${l.city}`
          .toLowerCase()
          .includes(query.toLowerCase());
      const matchesStatus = status === "All" || l.status === status;
      const matchesType = type === "All" || l.type === type;
      return matchesQuery && matchesStatus && matchesType;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-desc":
          return b.price - a.price;
        case "price-asc":
          return a.price - b.price;
        case "beds":
          return b.beds - a.beds;
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });
    return result;
  }, [items, query, status, type, sort]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = `${form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}-${Date.now().toString().slice(-4)}`;
    const newListing: Listing = {
      id,
      title: form.title || "Untitled Listing",
      location: form.location || "Address on request",
      city: form.city || "Location TBD",
      price: Number(form.price) || 0,
      status: form.status,
      type: form.type,
      beds: Number(form.beds) || 0,
      baths: Number(form.baths) || 0,
      area: Number(form.area) || 0,
      lot: "On request",
      year: new Date().getFullYear(),
      featured: false,
      cover: "/homes/interior-living.png",
      gallery: [
        "/homes/interior-living.png",
        "/homes/interior-kitchen.png",
        "/homes/interior-bedroom.png",
      ],
      summary: form.summary || "A new listing from our advisors.",
      description: [
        form.summary ||
          "Details coming soon. Contact the listing advisor for a full brief.",
      ],
      features: ["Newly listed"],
      agent: {
        name: form.agentName || "Marlowe & Vale",
        title: "Listing Advisor",
        phone: "(415) 555-0100",
        email: "hello@marlowevale.com",
      },
    };
    setItems((prev) => [newListing, ...prev]);
    setForm(blankForm);
    setShowForm(false);
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, street, or city"
              className="w-full rounded-sm border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-sm border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          {/* <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {showForm ? <X className="size-4" /> : <Plus className="size-4" />}
            {showForm ? "Close" : "Post a home"}
          </button> */}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {statusFilters.map((s) => (
            <FilterChip
              key={s}
              active={status === s}
              onClick={() => setStatus(s)}
            >
              {s}
            </FilterChip>
          ))}
          <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
          {typeFilters.map((t) => (
            <FilterChip key={t} active={type === t} onClick={() => setType(t)}>
              {t}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "home" : "homes"} available
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-sm border border-dashed border-border py-20 text-center">
          <p className="font-serif text-xl font-semibold">
            No homes match those filters
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try broadening your search or clearing a filter.
          </p>
        </div>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-sm border px-3 py-1.5 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
