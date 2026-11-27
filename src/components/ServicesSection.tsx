"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Crown,
  Flower2,
  Star,
  UserCheck,
  HeartHandshake,
  ArrowUpRight,
  X,
  Check,
} from "lucide-react";
import { SALON_SERVICES, ServiceCategory } from "@/config/salon";

const ICON_MAP = {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Crown,
  Flower2,
  Star,
  UserCheck,
  HeartHandshake,
};

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export default function ServicesSection({
  onSelectServiceForBooking,
}: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(
    null
  );

  const handleBookService = (serviceTitle: string) => {
    setActiveService(null);
    onSelectServiceForBooking(serviceTitle);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-obsidian py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-pure/15 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] text-pure sm:text-5xl">
              Curated Hair, Beauty &amp;{" "}
              <span className="italic text-beige">Grooming</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-ivory/75">
            Every service is customized following a personal consultation.
            Explore our core categories or enquire directly for tailored
            recommendations and pricing.
          </p>
        </div>

        {/* 9-Category Editorial Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SALON_SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className="group flex flex-col justify-between border border-pure/12 bg-pure/[0.02] transition-colors duration-300 hover:border-gold/50"
              >
                <div>
                  {/* Optional Real Salon Image Header for Featured Categories */}
                  {service.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-pure/10 bg-obsidian">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                        {service.subtitle}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between border-b border-pure/10 px-6 py-5">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                        {service.subtitle}
                      </span>
                      <span className="font-serif text-sm text-beige/60">
                        0{idx + 1}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-2xl font-normal text-pure transition-colors group-hover:text-gold">
                        {service.title}
                      </h3>
                      <Icon className="h-5 w-5 shrink-0 text-gold/80" />
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Price if provided, otherwise View Details / Enquire */}
                <div className="flex items-center justify-between border-t border-pure/10 px-6 py-4">
                  {service.priceLabel ? (
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                      {service.priceLabel}
                    </span>
                  ) : (
                    <span className="text-[11px] uppercase tracking-[0.18em] text-beige/75">
                      Enquire for Pricing
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-pure transition-colors hover:text-gold"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/85 p-4 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg border border-gold/40 bg-ivory p-8 text-obsidian shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Close service details"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center border border-obsidian/15 text-obsidian transition-colors hover:border-obsidian hover:bg-obsidian hover:text-pure"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
                {activeService.subtitle}
              </span>
              <h3
                id="service-modal-title"
                className="mt-2 font-serif text-3xl text-obsidian"
              >
                {activeService.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-obsidian/80">
                {activeService.description}
              </p>

              <div className="mt-6 border-t border-obsidian/15 pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-obsidian/60">
                  Included Focus Areas
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeService.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-obsidian/85"
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-obsidian/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-obsidian/60">
                    Consultation &amp; Pricing
                  </p>
                  <p className="font-serif text-lg text-obsidian">
                    {activeService.priceLabel ?? "Provided upon consultation"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookService(activeService.title)}
                  className="bg-obsidian px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-pure transition-colors hover:bg-gold hover:text-obsidian"
                >
                  Enquire / Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
