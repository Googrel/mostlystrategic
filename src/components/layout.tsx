import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" }
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 md:px-10 md:py-14">
      <header className="mb-20 flex flex-col gap-8 md:mb-28 md:flex-row md:items-start md:justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight no-underline">
          Mostly Strategic
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 space-y-1 border-t border-neutral-200 pt-8 text-sm text-neutral-600 md:mt-28">
        <p>Mostly Strategic Consulting</p>
        <p>Bengaluru, India</p>
        <p>© {year}</p>
      </footer>
    </div>
  );
}
