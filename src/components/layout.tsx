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
    <div className="mx-auto flex min-h-screen w-full max-w-[46rem] flex-col px-6 sm:px-8">
      <header className="flex flex-col gap-6 pb-[72px] pt-10 sm:flex-row sm:items-start sm:justify-between">
        <Link
          href="/"
          className="font-display text-base font-medium leading-[22px] tracking-[-0.01em] text-[#111111]"
        >
          Mostly Strategic
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#111111]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-[#e6e6e6] pt-24 text-sm leading-6 text-[#5e5e5e]">
        <p>Mostly Strategic Consulting</p>
        <p>Bengaluru, India</p>
        <p>© {year}</p>
      </footer>
    </div>
  );
}
