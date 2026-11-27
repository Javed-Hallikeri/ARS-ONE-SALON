"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { SALON_CONFIG } from "@/config/salon";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-obsidian pt-28 pb-16 sm:pb-24"
    >
      {/* Full-Screen Real Salon Interior Photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/salon/styling-floor-wide.webp"
          alt="ARS ONE Professional Unisex Salon main styling floor with oval LED mirrors and styling chairs"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Luxury Editorial Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/45 to-transparent" />
      </div>

      {/* Editorial Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              {SALON_CONFIG.brand.name}
            </span>
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.03] tracking-tight text-pure sm:text-6xl lg:text-7xl">
            Your Style.{" "}
            <span className="italic font-normal text-beige">
              Your Signature.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            {SALON_CONFIG.brand.subTagline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition-all duration-300 hover:bg-pure"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-3 border border-pure/40 bg-obsidian/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-pure backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <span>Explore Our Services</span>
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Minimal Footer Bar Inside Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-pure/15 pt-6 text-xs uppercase tracking-[0.2em] text-beige/80"
        >
          <span>Men &amp; Women · Hair · Skin · Grooming</span>
          <span>Open Daily · {SALON_CONFIG.hours[0].time}</span>
        </motion.div>
      </div>
    </section>
  );
}
