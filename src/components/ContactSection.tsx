"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ArrowUpRight, Star } from "lucide-react";
import { SALON_CONFIG } from "@/config/salon";

export default function ContactSection() {
  const whatsappDirectUrl = `https://wa.me/${SALON_CONFIG.contact.whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello ${SALON_CONFIG.brand.name}, I would like to enquire about your salon services.`
  )}`;

  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                Visit Us
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] text-obsidian sm:text-5xl">
              Location &amp; <span className="italic">Contact</span>
            </h2>

            <div className="mt-5 inline-flex items-center gap-2.5 border border-obsidian/15 bg-pure px-4 py-2 text-xs uppercase tracking-[0.18em] text-obsidian">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span>
                {SALON_CONFIG.contact.googleRating} Rating ·{" "}
                {SALON_CONFIG.contact.googleReviewCount} Google Reviews
              </span>
            </div>

            <div className="mt-10 divide-y divide-obsidian/15 border-y border-obsidian/15">
              {/* Address */}
              <div className="flex items-start gap-4 py-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-obsidian/60">
                    Salon Address
                  </p>
                  <p className="mt-1.5 font-serif text-xl text-obsidian">
                    {SALON_CONFIG.contact.addressLine1}
                  </p>
                  <p className="mt-1 text-sm text-obsidian/75">
                    {SALON_CONFIG.contact.addressLine2}
                  </p>
                  <p className="text-sm text-obsidian/75">
                    {SALON_CONFIG.contact.cityStatePin}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 py-6">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-obsidian/60">
                    Telephone &amp; Desk
                  </p>
                  <a
                    href={SALON_CONFIG.contact.phoneHref}
                    className="mt-1.5 inline-block font-serif text-2xl text-obsidian transition-colors hover:text-gold"
                  >
                    {SALON_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 py-6">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div className="w-full">
                  <p className="text-xs uppercase tracking-[0.2em] text-obsidian/60">
                    Opening Hours
                  </p>
                  <div className="mt-2 space-y-1.5">
                    {SALON_CONFIG.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-center justify-between text-sm text-obsidian/85"
                      >
                        <span>{row.days}</span>
                        <span className="font-medium text-obsidian">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SALON_CONFIG.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-obsidian px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-pure transition-colors hover:bg-gold hover:text-obsidian"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-obsidian/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-obsidian transition-colors hover:border-gold hover:bg-gold/10"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                <span>WhatsApp Salon</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {SALON_CONFIG.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-obsidian/75 transition-colors hover:text-gold"
                >
                  <span>
                    {item.name} · {item.handle}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Map / Salon Lounge Showcase */}
          <div className="lg:col-span-6">
            {SALON_CONFIG.contact.googleMapsEmbedUrl ? (
              <div className="h-full min-h-[420px] w-full overflow-hidden border border-obsidian/15">
                <iframe
                  title="ARS ONE Professional Unisex Salon Google Maps Location"
                  src={SALON_CONFIG.contact.googleMapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden border border-obsidian/15 bg-obsidian">
                <Image
                  src="/images/salon/waiting-lounge-display.webp"
                  alt="ARS ONE Professional Unisex Salon waiting lounge and product display"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent" />
                <div className="relative z-10 p-8 text-pure">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                    Google Maps Location
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    {SALON_CONFIG.brand.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-ivory/80">
                    Tap below to open turn-by-turn navigation to our salon in
                    Google Maps.
                  </p>
                  <a
                    href={SALON_CONFIG.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 border border-gold/80 bg-obsidian/70 px-5 py-3 text-xs uppercase tracking-[0.2em] text-pure backdrop-blur-sm transition-colors hover:bg-gold hover:text-obsidian"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
