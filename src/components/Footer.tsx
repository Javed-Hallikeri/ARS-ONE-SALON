import { SALON_CONFIG } from "@/config/salon";

export default function Footer() {
  return (
    <footer className="border-t border-pure/10 bg-obsidian py-14 text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-pure font-serif text-xl font-semibold text-obsidian">
            {SALON_CONFIG.brand.monogram}
          </span>
          <div>
            <p className="font-serif text-lg tracking-[0.18em] text-pure">
              {SALON_CONFIG.brand.shortName}
            </p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-gold">
              Professional Unisex Salon
            </p>
          </div>
        </div>

        <nav
          className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-ivory/70"
          aria-label="Footer Navigation"
        >
          <a href="#about" className="transition-colors hover:text-gold">
            About
          </a>
          <a href="#services" className="transition-colors hover:text-gold">
            Services
          </a>
          <a href="#gallery" className="transition-colors hover:text-gold">
            Gallery
          </a>
          <a href="#booking" className="transition-colors hover:text-gold">
            Booking
          </a>
          <a href="#contact" className="transition-colors hover:text-gold">
            Contact
          </a>
        </nav>

        <p className="text-xs text-ivory/50">
          © {new Date().getFullYear()} {SALON_CONFIG.brand.name}.
        </p>
      </div>
    </footer>
  );
}
