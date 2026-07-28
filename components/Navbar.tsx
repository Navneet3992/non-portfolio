"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#work", label: "WORK" },
  { href: "/playground", label: "PLAYGROUND" },
];

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link href={href} className="relative inline-block w-fit cursor-pointer text-text-primary">
      {label}
      <span
        aria-hidden
        className={`absolute -bottom-1 left-0 h-px w-full bg-white transition-opacity ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}

function GetCvLink({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://docs.google.com/document/d/166LHacenr8G2YUuy3xJK2_n3ui6PZ3bpkMiwLHjrHGM/edit?pli=1&tab=t.0"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-block w-fit font-semibold ${className}`}
      style={{
        background: "linear-gradient(to right, #FFB86A, #FF6900)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      GET CV
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 h-px w-full transition-transform duration-300 ease-out"
        style={{
          background: "linear-gradient(to right, #FFB86A, #FF6900)",
          transform: `scaleX(${hovered ? 1 : 0})`,
          transformOrigin: hovered ? "left" : "right",
        }}
      />
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled || menuOpen
          ? "bg-[#141414]/80 backdrop-blur-md border-b border-surface-2"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.gif"
            alt="Non"
            width={120}
            height={52}
            unoptimized
            priority
            className="h-[52px] w-[120px]"
          />
        </Link>

        <div className="hidden items-center gap-6 text-label uppercase tracking-widest sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={link.href === "/#work" ? pathname.startsWith("/work") : pathname === link.href}
            />
          ))}
          <GetCvLink />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            aria-hidden
            className={`h-px w-6 bg-text-primary transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            aria-hidden
            className={`h-px w-6 bg-text-primary transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-surface-2 sm:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 text-label uppercase tracking-widest">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={link.href === "/#work" ? pathname.startsWith("/work") : pathname === link.href}
                />
              ))}
              <GetCvLink />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
