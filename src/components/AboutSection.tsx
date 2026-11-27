"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                About The Salon
              </span>
            </div>

            <h2 className="font-serif text-4xl font-normal leading-[1.1] text-obsidian sm:text-5xl">
              Where Style Meets{" "}
              <span className="italic">Professional Care</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-obsidian/80">
              <p>
                At{" "}
                <strong className="font-medium text-obsidian">
                  ARS ONE Professional Unisex Salon
                </strong>
                , grooming is treated as a thoughtful craft rather than a rushed
                routine. Designed for both men and women, our space brings
                together clean architectural aesthetics, modern styling
                stations, and an unhurried, welcoming atmosphere.
              </p>
              <p>
                From precision haircuts and dimensional hair coloring to
                restorative hair spa rituals and private facial care, every
                session begins with an attentive consultation. We focus on what
                suits your hair, skin, and personal style—delivering consistent
                care in a calm, hygienic environment.
              </p>
            </div>

            {/* Authentic Salon Space Highlights */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-obsidian/15 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-serif text-2xl text-obsidian">Unisex</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-obsidian/65">
                  Men &amp; Women
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-obsidian">Private</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-obsidian/65">
                  Skin &amp; Spa Suites
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-obsidian">Tailored</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-obsidian/65">
                  Consultation First
                </p>
              </div>
            </div>
          </motion.div>

          {/* Layered Real Salon Photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-obsidian sm:w-[88%] sm:ml-auto">
              <Image
                src="/images/salon/reception-lounge.webp"
                alt="ARS ONE Professional Unisex Salon reception desk and illuminated brand wall"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Real Brand Emblem Photo */}
            <div className="mt-6 w-full border-4 border-ivory bg-obsidian shadow-xl sm:absolute sm:bottom-8 sm:left-0 sm:mt-0 sm:w-56">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/salon/brand-wall-emblem.webp"
                  alt="ARS-ONE illuminated wall emblem"
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  className="object-cover object-center"
                />
              </div>
              <div className="border-t border-gold/30 bg-obsidian px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  Signature Space
                </p>
                <p className="mt-0.5 font-serif text-sm text-pure">
                  Reception &amp; Styling Floor
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
