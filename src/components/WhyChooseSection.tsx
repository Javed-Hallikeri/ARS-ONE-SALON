"use client";

import { motion } from "framer-motion";
import { SALON_PILLARS } from "@/config/salon";

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="border-y border-obsidian/10 bg-beige/45 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky Editorial Intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                  The ARS ONE Standard
                </span>
              </div>
              <h2 className="font-serif text-4xl font-normal leading-[1.1] text-obsidian sm:text-5xl">
                Why Choose{" "}
                <span className="italic block mt-1">ARS ONE</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-obsidian/75">
                Every detail of our salon—from the lighting at our styling
                mirrors to the calm of our wash lounge—is designed around
                consistent quality and your comfort.
              </p>
            </div>
          </div>

          {/* Right 6-Pillar Grid */}
          <div className="grid gap-px bg-obsidian/15 border border-obsidian/15 sm:grid-cols-2 lg:col-span-8">
            {SALON_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.08 }}
                className="bg-ivory p-8 sm:p-10"
              >
                <span className="font-serif text-2xl text-gold">
                  {pillar.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-normal text-obsidian">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-obsidian/75">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
