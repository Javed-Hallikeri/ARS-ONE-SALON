export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  priceLabel?: string; // Leave undefined to show "Enquire for Pricing"
  image?: string;
  iconName:
    | "Scissors"
    | "Palette"
    | "Sparkles"
    | "Droplets"
    | "Crown"
    | "Flower2"
    | "HeartHandshake"
    | "UserCheck"
    | "Star";
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspect: "landscape" | "portrait" | "tall";
}

export interface SalonPillar {
  number: string;
  title: string;
  description: string;
}

/**
 * ARS ONE Professional Unisex Salon — Central Configuration
 * Update contact details, WhatsApp number, address, Google Maps links,
 * and optional service prices here.
 */
export const SALON_CONFIG = {
  brand: {
    name: "ARS ONE Professional Unisex Salon",
    shortName: "ARS-ONE",
    monogram: "ar",
    tagline: "Your Style. Your Signature.",
    subTagline:
      "Experience professional hair, beauty and grooming services designed around you.",
  },
  contact: {
    // Verified salon WhatsApp & telephone number (+91 70575 44212)
    whatsappNumber: "917057544212",
    phoneDisplay: "070575 44212",
    phoneHref: "tel:+917057544212",
    email: "concierge@arsonesalon.com",
    addressLine1: "Mid Town, Shiv, 100 Feet Rd",
    addressLine2: "Opp. Army Canteen, Near Delicious Hotel, Nishant Colony",
    cityStatePin: "Sangli Miraj Kupwad, Maharashtra 416416",
    city: "Sangli",
    state: "Maharashtra",
    postalCode: "416416",
    googleRating: "4.9",
    googleReviewCount: 303,
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=ARSONE+PROFESSIONAL+UNISEX+SALON+SANGLI+100+Feet+Rd+Sangli+416416",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=ARSONE+PROFESSIONAL+UNISEX+SALON+SANGLI+100+Feet+Rd+Sangli+416416&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:00 AM – 9:00 PM" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      handle: "@arsone.salon",
    },
    {
      name: "Google Maps",
      href: "https://www.google.com/maps/search/?api=1&query=ARSONE+PROFESSIONAL+UNISEX+SALON+SANGLI+100+Feet+Rd+Sangli+416416",
      handle: "100 Feet Rd, Sangli",
    },
  ],
  bookingTimeSlots: [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:30 PM",
  ],
} as const;

export const SALON_SERVICES: ServiceCategory[] = [
  {
    id: "haircuts-styling",
    title: "Haircuts & Styling",
    subtitle: "Precision & Shape",
    description:
      "Tailored cuts, blow-dries, and signature styling crafted to complement your face shape, hair texture, and everyday routine.",
    highlights: [
      "Consultation-led precision haircuts",
      "Blow-dry & finish styling",
      "Everyday & occasion restyling",
    ],
    image: "/images/salon/styling-stations-daylight.webp",
    iconName: "Scissors",
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    subtitle: "Dimension & Tone",
    description:
      "From natural root touch-ups to rich global color and dimensional highlights, formulated with professional salon-grade color.",
    highlights: [
      "Global color & root coverage",
      "Highlights & dimensional tones",
      "Shade consultation & color care",
    ],
    image: "/images/salon/salon-floor-perspective.webp",
    iconName: "Palette",
  },
  {
    id: "hair-treatments",
    title: "Hair Treatments",
    subtitle: "Strength & Repair",
    description:
      "Targeted salon treatments designed to restore moisture, smooth frizz, and support healthier, more manageable hair.",
    highlights: [
      "Smoothing & frizz-control rituals",
      "Deep conditioning & repair masks",
      "Texture-specific care plans",
    ],
    iconName: "Sparkles",
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    subtitle: "Scalp & Relaxation",
    description:
      "Unwind in our dedicated wash lounge with soothing scalp rituals, nourishing hair masks, and calming care.",
    highlights: [
      "Scalp detox & nourishment",
      "Relaxing wash-lounge ritual",
      "Hydration for dry or stressed hair",
    ],
    image: "/images/salon/hair-spa-wash-station.webp",
    iconName: "Droplets",
  },
  {
    id: "bridal-party-styling",
    title: "Bridal & Party Styling",
    subtitle: "Occasion Ready",
    description:
      "Refined hairstyling and grooming for weddings, receptions, festive gatherings, and milestone celebrations.",
    highlights: [
      "Custom occasion hairstyling",
      "Pre-event grooming preparation",
      "Coordinated styling appointments",
    ],
    iconName: "Crown",
  },
  {
    id: "facial-skin-care",
    title: "Facial & Skin Care",
    subtitle: "Private Suite Care",
    description:
      "Calm, hygienic skin care sessions in our private treatment room, tailored to cleanse, refresh, and revitalize your complexion.",
    highlights: [
      "Private treatment room comfort",
      "Deep cleansing & hydration",
      "Skin-type conscious care",
    ],
    image: "/images/salon/private-treatment-room.webp",
    iconName: "Flower2",
  },
  {
    id: "beauty-services",
    title: "Beauty Services",
    subtitle: "Polished Details",
    description:
      "Essential personal beauty care delivered with steady precision, clean tools, and attentive service.",
    highlights: [
      "Eyebrow shaping & facial grooming",
      "Personal care essentials",
      "Hygienic single-use standards",
    ],
    iconName: "Star",
  },
  {
    id: "mens-grooming",
    title: "Men's Grooming",
    subtitle: "Sharp & Refined",
    description:
      "Modern haircuts, beard shaping, and scalp & skin grooming designed for a crisp, effortless finish.",
    highlights: [
      "Tailored cuts & fades",
      "Beard trim & detailing",
      "Scalp & facial refresh",
    ],
    image: "/images/salon/private-styling-suite.webp",
    iconName: "UserCheck",
  },
  {
    id: "womens-grooming",
    title: "Women's Grooming",
    subtitle: "Effortless Elegance",
    description:
      "Comprehensive hair, skin, and beauty care in a welcoming, comfortable environment tailored to your preferences.",
    highlights: [
      "Personalized hair & beauty care",
      "Relaxed styling experience",
      "Attentive, unhurried service",
    ],
    iconName: "HeartHandshake",
  },
];

export const SALON_GALLERY: GalleryImage[] = [
  {
    id: "styling-floor-wide",
    src: "/images/salon/styling-floor-wide.webp",
    alt: "Main styling floor at ARS ONE Professional Unisex Salon with oval LED mirrors and black styling chairs",
    caption: "The Main Styling Floor — Oval LED Mirrors & Custom Stations",
    category: "Styling Floor",
    aspect: "landscape",
  },
  {
    id: "brand-wall-emblem",
    src: "/images/salon/brand-wall-emblem.webp",
    alt: "Illuminated ARS-ONE logo and monogram on fluted black accent wall",
    caption: "Signature Illuminated ARS-ONE Emblem",
    category: "Brand & Reception",
    aspect: "portrait",
  },
  {
    id: "reception-lounge",
    src: "/images/salon/reception-lounge.webp",
    alt: "ARS ONE reception desk and entrance lounge with modern pendant lighting",
    caption: "Reception & Welcome Desk",
    category: "Brand & Reception",
    aspect: "portrait",
  },
  {
    id: "hair-spa-wash-station",
    src: "/images/salon/hair-spa-wash-station.webp",
    alt: "Dedicated hair wash and spa station with reclining chair and professional hair care products",
    caption: "Hair Spa & Wash Lounge",
    category: "Spa & Care",
    aspect: "portrait",
  },
  {
    id: "styling-stations-daylight",
    src: "/images/salon/styling-stations-daylight.webp",
    alt: "Daylit hair styling stations with backlit oval mirrors and professional color display",
    caption: "Daylit Styling Stations & Color Bar",
    category: "Styling Floor",
    aspect: "portrait",
  },
  {
    id: "private-treatment-room",
    src: "/images/salon/private-treatment-room.webp",
    alt: "Private facial and skin care treatment suite with treatment bed and marble cabinetry",
    caption: "Private Facial & Skin Care Suite",
    category: "Private Suites",
    aspect: "portrait",
  },
  {
    id: "waiting-lounge-display",
    src: "/images/salon/waiting-lounge-display.webp",
    alt: "Client waiting lounge sofa beneath illuminated professional hair care display shelves",
    caption: "Client Waiting Lounge & Retail Display",
    category: "Brand & Reception",
    aspect: "portrait",
  },
  {
    id: "private-styling-suite",
    src: "/images/salon/private-styling-suite.webp",
    alt: "Dedicated styling station with marble wall, oval LED mirror, and warm sconce lighting",
    caption: "Dedicated Styling & Grooming Station",
    category: "Private Suites",
    aspect: "portrait",
  },
  {
    id: "salon-floor-perspective",
    src: "/images/salon/salon-floor-perspective.webp",
    alt: "Perspective view of ARS ONE salon floor showing styling chairs and wash station",
    caption: "Spacious Interior & Clean Sightlines",
    category: "Styling Floor",
    aspect: "portrait",
  },
  {
    id: "salon-floor-wash-view",
    src: "/images/salon/salon-floor-wash-view.webp",
    alt: "Interior view connecting styling stations to the hair wash and spa area",
    caption: "Seamless Flow from Styling to Wash Lounge",
    category: "Spa & Care",
    aspect: "portrait",
  },
];

export const SALON_PILLARS: SalonPillar[] = [
  {
    number: "01",
    title: "Professional Salon Experience",
    description:
      "Every appointment is guided by trained stylists using professional-grade tools, clean stations, and disciplined salon hygiene.",
  },
  {
    number: "02",
    title: "Personalized Styling",
    description:
      "We take time to understand your hair texture, face shape, and lifestyle before recommending a cut, color, or treatment.",
  },
  {
    number: "03",
    title: "Comfortable Salon Ambience",
    description:
      "Thoughtfully designed lighting, spacious stations, a quiet wash lounge, and a private treatment suite let you relax without rush.",
  },
  {
    number: "04",
    title: "Services for Men & Women",
    description:
      "A unified unisex destination offering specialized hairstyling, grooming, and personal care tailored equally for men and women.",
  },
  {
    number: "05",
    title: "Attention to Detail",
    description:
      "From clean parting and balanced proportions to the final blow-dry finish, every step is executed with care and consistency.",
  },
  {
    number: "06",
    title: "Customer-Focused Approach",
    description:
      "Transparent consultations, respectful scheduling, and warm hospitality ensure you leave feeling confident and well cared for.",
  },
];
