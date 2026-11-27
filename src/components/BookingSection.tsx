"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { SALON_CONFIG, SALON_SERVICES } from "@/config/salon";

interface BookingSectionProps {
  preselectedService: string;
}

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function BookingSection({
  preselectedService,
}: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    service: preselectedService || SALON_SERVICES[0].title,
    date: "",
    time: SALON_CONFIG.bookingTimeSlots[1],
    message: "",
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedUrl, setConfirmedUrl] = useState<string | null>(null);
  const [formattedMessage, setFormattedMessage] = useState<string>("");

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const todayISO = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const nextErrors: Partial<BookingFormData> = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      nextErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.service) {
      nextErrors.service = "Please select a service.";
    }
    if (!formData.date) {
      nextErrors.date = "Please choose a preferred date.";
    }
    if (!formData.time) {
      nextErrors.time = "Please choose a preferred time.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildWhatsAppMessage = (data: BookingFormData) => {
    const lines = [
      `Hello ${SALON_CONFIG.brand.name},`,
      `I would like to book an appointment:`,
      ``,
      `• Name: ${data.name.trim()}`,
      `• Phone: ${data.phone.trim()}`,
      `• Service: ${data.service}`,
      `• Preferred Date: ${data.date}`,
      `• Preferred Time: ${data.time}`,
    ];
    if (data.message.trim()) {
      lines.push(`• Notes: ${data.message.trim()}`);
    }
    lines.push(``, `Please confirm availability. Thank you!`);
    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const msg = buildWhatsAppMessage(formData);
    const whatsappNumber = SALON_CONFIG.contact.whatsappNumber.replace(
      /\D/g,
      ""
    );
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;

    setFormattedMessage(msg);
    setConfirmedUrl(url);
    setIsSubmitting(false);
  };

  const handleOpenWhatsApp = () => {
    if (!confirmedUrl) return;
    window.open(confirmedUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setConfirmedUrl(null);
    setFormattedMessage("");
    setErrors({});
  };

  return (
    <section id="booking" className="bg-obsidian py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Visual & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-medium uppercase tracking-[0.26em] text-gold">
                  Reservations
                </span>
              </div>
              <h2 className="font-serif text-4xl font-normal leading-[1.1] text-pure sm:text-5xl">
                Book Your{" "}
                <span className="italic text-beige">Appointment</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ivory/75">
                Select your preferred service, date, and time. Submitting
                prepares a direct WhatsApp booking request to our salon desk for
                quick confirmation.
              </p>
            </div>

            <div className="mt-10 hidden overflow-hidden border border-pure/15 lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/salon/hair-spa-wash-station.webp"
                  alt="ARS ONE Hair Spa and Wash Station"
                  fill
                  sizes="40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                    Direct Concierge
                  </p>
                  <p className="mt-0.5 font-serif text-lg text-pure">
                    Instant WhatsApp Scheduling
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Booking Form / Confirmation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="border border-pure/15 bg-pure/[0.03] p-6 sm:p-10 lg:col-span-7"
          >
            {confirmedUrl ? (
              <div className="space-y-6 py-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">
                      Ready to Send
                    </p>
                    <h3 className="mt-1 font-serif text-3xl text-pure">
                      Confirm Your WhatsApp Booking
                    </h3>
                    <p className="mt-2 text-sm text-ivory/75">
                      Review your appointment summary below, then tap the button
                      to send it directly to ARS ONE on WhatsApp.
                    </p>
                  </div>
                </div>

                <pre className="whitespace-pre-wrap border border-pure/15 bg-obsidian/70 p-5 font-sans text-sm leading-relaxed text-ivory/90">
                  {formattedMessage}
                </pre>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="inline-flex flex-1 items-center justify-center gap-2.5 bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian transition-colors hover:bg-pure"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Proceed to WhatsApp</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 border border-pure/25 px-6 py-4 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Edit Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Customer Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="mb-2 block text-xs uppercase tracking-[0.2em] text-beige"
                    >
                      Customer Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your full name"
                      className="w-full border border-pure/20 bg-obsidian/60 px-4 py-3.5 text-sm text-pure placeholder:text-ivory/35 focus:border-gold focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-gold">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="mb-2 block text-xs uppercase tracking-[0.2em] text-beige"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone)
                          setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className="w-full border border-pure/20 bg-obsidian/60 px-4 py-3.5 text-sm text-pure placeholder:text-ivory/35 focus:border-gold focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-gold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="mb-2 block text-xs uppercase tracking-[0.2em] text-beige"
                  >
                    Service Selection *
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full border border-pure/20 bg-obsidian px-4 py-3.5 text-sm text-pure focus:border-gold focus:outline-none"
                  >
                    {SALON_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-beige"
                    >
                      <Calendar className="h-3.5 w-3.5 text-gold" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      min={todayISO}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      className="w-full border border-pure/20 bg-obsidian/60 px-4 py-3.5 text-sm text-pure focus:border-gold focus:outline-none [color-scheme:dark]"
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs text-gold">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-time"
                      className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-beige"
                    >
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      id="booking-time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full border border-pure/20 bg-obsidian px-4 py-3.5 text-sm text-pure focus:border-gold focus:outline-none"
                    >
                      {SALON_CONFIG.bookingTimeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="mb-2 block text-xs uppercase tracking-[0.2em] text-beige"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share any styling preferences, hair/skin notes, or questions..."
                    className="w-full border border-pure/20 bg-obsidian/60 px-4 py-3 text-sm text-pure placeholder:text-ivory/35 focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition-colors duration-300 hover:bg-pure disabled:opacity-60"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>
                    {isSubmitting
                      ? "Preparing Booking..."
                      : "Continue to WhatsApp Confirmation"}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
