"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Portfolio" },
  { href: "/#approach", label: "Studio" },
  { href: "/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            Marlowe
          </span>
          <span className="text-lg text-accent md:text-xl">&amp;</span>
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            Vale
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item, idx) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace("/#", "/"));
            return (
              <Link
                key={idx}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a viewing
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-3 text-base text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Book a viewing
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
