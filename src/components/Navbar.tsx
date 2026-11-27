"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SALON_CONFIG } from "@/config/salon";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/20 py-3.5"
            : "bg-gradient-to-b from-obsidian/80 via-obsidian/40 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Brand Wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label={SALON_CONFIG.brand.name}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-pure text-obsidian font-serif text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-105">
              {SALON_CONFIG.brand.monogram}
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-[0.18em] text-pure leading-none">
                {SALON_CONFIG.brand.shortName}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.26em] text-gold">
                Professional Unisex Salon
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-ivory/85 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="border border-gold/80 bg-gold/10 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-pure transition-all duration-300 hover:bg-gold hover:text-obsidian"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border border-pure/20 text-pure transition-colors hover:border-gold hover:text-gold md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-obsidian px-6 pt-28 pb-10 text-ivory md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between border-b border-pure/10 pb-4 font-serif text-3xl tracking-wide text-pure transition-colors hover:text-gold"
                >
                  <span>{link.label}</span>
                  <span className="font-sans text-xs tracking-[0.2em] text-gold">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-gold py-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-obsidian transition-colors hover:bg-beige"
              >
                Book Your Appointment
              </a>
              <p className="text-center text-xs tracking-wider text-beige/70">
                {SALON_CONFIG.contact.phoneDisplay} · {SALON_CONFIG.hours[0].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
