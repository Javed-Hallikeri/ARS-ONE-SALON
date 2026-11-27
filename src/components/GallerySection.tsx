"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { SALON_GALLERY } from "@/config/salon";

const CATEGORIES = [
  "All",
  "Styling Floor",
  "Brand & Reception",
  "Spa & Care",
  "Private Suites",
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? SALON_GALLERY
      : SALON_GALLERY.filter((img) => img.category === selectedCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header & Category Filter */}
        <div className="flex flex-col justify-between gap-8 border-b border-obsidian/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                Inside ARS ONE
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] text-obsidian sm:text-5xl">
              The Salon <span className="italic">Gallery</span>
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter gallery images"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    active
                      ? "bg-obsidian text-pure"
                      : "border border-obsidian/20 text-obsidian/75 hover:border-gold hover:text-obsidian"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Masonry / Responsive Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item, idx) => {
            const isHeroWide =
              selectedCategory === "All" && item.aspect === "landscape";
            return (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.06 }}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden bg-obsidian text-left focus:outline-none focus:ring-2 focus:ring-gold ${
                  isHeroWide
                    ? "sm:col-span-2 aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
                aria-label={`View ${item.caption} in full screen`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    isHeroWide
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Editorial Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-pure/30 bg-obsidian/50 text-pure opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gold">
                    {item.category}
                  </span>
                  <p className="mt-1 font-serif text-lg text-pure sm:text-xl">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-obsidian/95 p-4 backdrop-blur-md sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-ivory"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-[0.24em] text-gold">
                {lightboxIndex + 1} / {filteredImages.length} ·{" "}
                {filteredImages[lightboxIndex].category}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="flex h-10 w-10 items-center justify-center border border-pure/20 text-pure transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div
              className="relative mx-auto my-4 flex h-[72vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {filteredImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center border border-pure/25 bg-obsidian/70 text-pure backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:left-4"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center border border-pure/25 bg-obsidian/70 text-pure backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:right-4"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-serif text-xl text-pure sm:text-2xl">
                {filteredImages[lightboxIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
