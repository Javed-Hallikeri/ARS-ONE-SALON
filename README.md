# ARS ONE Professional Unisex Salon

Official website for **ARS ONE Professional Unisex Salon** (100 Feet Rd, Sangli, Maharashtra) — built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- **Luxury Editorial Design**: Minimalist black (`#101010`), warm ivory (`#F5F0E8`), soft beige (`#D8C6AE`), white (`#FFFFFF`), and subtle champagne gold (`#C6A46A`) accents paired with *Cormorant Garamond* and *Plus Jakarta Sans* typography.
- **Real Salon Photography**: Showcases the salon's actual styling floor, illuminated `ARS-ONE` emblem, reception lounge, hair spa & wash station, and private skin care suite.
- **9 Editable Service Categories**: Haircuts & Styling, Hair Coloring, Hair Treatments, Hair Spa, Bridal & Party Styling, Facial & Skin Care, Beauty Services, Men's Grooming, and Women's Grooming, with detail modals and direct booking pre-selection.
- **Interactive Salon Gallery**: Filterable editorial grid with a full-screen lightbox and keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
- **WhatsApp Appointment Booking**: Validated booking form with date/time selection, formatted message preview, and direct WhatsApp redirection.
- **Local SEO & Structured Data**: `HairSalon` JSON-LD schema, OpenGraph metadata, embedded Google Map, and Google Maps directions.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```text
├── public/images/salon/       # Real salon photographs (.webp)
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme tokens & base styles
│   │   ├── layout.tsx         # Root layout, fonts, SEO & JSON-LD
│   │   └── page.tsx           # Main landing page
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky header & mobile drawer
│   │   ├── HeroSection.tsx    # Full-screen hero
│   │   ├── AboutSection.tsx   # Brand philosophy & layered photography
│   │   ├── ServicesSection.tsx# 9 service categories & detail modal
│   │   ├── GallerySection.tsx # Filterable gallery & lightbox
│   │   ├── WhyChooseSection.tsx
│   │   ├── BookingSection.tsx # WhatsApp appointment form
│   │   ├── ContactSection.tsx # Address, hours, map & directions
│   │   └── Footer.tsx
│   └── config/
│       └── salon.ts           # Central business & service configuration
```

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

## Configuration

All salon contact details, WhatsApp number, opening hours, Google Maps links, gallery items, and service categories (including optional `priceLabel` fields) are managed in [`src/config/salon.ts`](src/config/salon.ts).
