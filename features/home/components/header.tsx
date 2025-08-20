import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "@/features/auth/components/user-button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-2 md:py-3 pointer-events-none">
      <div className="w-full flex items-center justify-center px-3 sm:px-6">
        <nav className="pointer-events-auto w-full max-w-6xl rounded-full border border-border/60 bg-background/40 backdrop-blur-lg supports-[backdrop-filter]:bg-background/40 h-12 md:h-14 px-4 md:px-6 flex items-center justify-between shadow-lg">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={28} height={28} priority />
            <span className="hidden sm:block font-extrabold text-base md:text-lg leading-none select-none">CodeVed</span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6 uppercase text-sm text-foreground/80">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <UserButton />
            {/* Mobile menu icon */}
            <button aria-label="Menu" className="md:hidden inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;