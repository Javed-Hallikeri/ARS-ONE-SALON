import type { Metadata } from "next";
import "./globals.css";
import { SALON_CONFIG } from "@/config/salon";

export const metadata: Metadata = {
  metadataBase: new URL("https://arsonesalon.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  title: {
    default: "ARS ONE Professional Unisex Salon | Sangli — Hair, Beauty & Grooming",
    template: "%s | ARS ONE Professional Unisex Salon Sangli",
  },
  description:
    "ARS ONE Professional Unisex Salon on 100 Feet Rd, Sangli offers expert haircuts, hair coloring, hair spa, bridal styling, facial & skin care, and men's & women's grooming in a clean, hygienic environment.",
  keywords: [
    "ARS ONE Professional Unisex Salon",
    "ARSONE Professional Unisex Salon Sangli",
    "Best unisex salon in Sangli",
    "Hair salon 100 Feet Rd Sangli",
    "Beauty salon Sangli Miraj Kupwad",
    "Men's grooming Sangli",
    "Women's hair styling Sangli",
    "Salon appointment booking Sangli",
    "Hair spa and treatments",
    "Bridal and party styling",
  ],
  openGraph: {
    title: "ARS ONE Professional Unisex Salon | Your Style. Your Signature.",
    description:
      "Experience professional hair, beauty and grooming services designed around you.",
    type: "website",
    locale: "en_IN",
    siteName: "ARS ONE Professional Unisex Salon",
    images: [
      {
        url: "/images/salon/styling-floor-wide.webp",
        width: 1200,
        height: 900,
        alt: "ARS ONE Professional Unisex Salon Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARS ONE Professional Unisex Salon",
    description:
      "Experience professional hair, beauty and grooming services designed around you.",
    images: ["/images/salon/styling-floor-wide.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SALON_CONFIG.brand.name,
    description:
      "Professional unisex salon in Sangli offering expert haircuts, hair coloring, hair spa, facial & skin care, and grooming services for men and women in a clean, hygienic environment.",
    telephone: SALON_CONFIG.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SALON_CONFIG.contact.addressLine1}, ${SALON_CONFIG.contact.addressLine2}`,
      addressLocality: SALON_CONFIG.contact.city,
      addressRegion: SALON_CONFIG.contact.state,
      postalCode: SALON_CONFIG.contact.postalCode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SALON_CONFIG.contact.googleRating,
      reviewCount: SALON_CONFIG.contact.googleReviewCount,
    },
    openingHours: "Mo-Su 10:00-21:00",
    image: "/images/salon/styling-floor-wide.webp",
    sameAs: SALON_CONFIG.social.map((s) => s.href),
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="bg-ivory text-obsidian font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
