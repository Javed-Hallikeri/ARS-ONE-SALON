"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SALON_SERVICES } from "@/config/salon";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>(
    SALON_SERVICES[0].title
  );

  return (
    <div className="min-h-screen bg-ivory text-obsidian">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectServiceForBooking={setSelectedService} />
        <GallerySection />
        <WhyChooseSection />
        <BookingSection preselectedService={selectedService} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
