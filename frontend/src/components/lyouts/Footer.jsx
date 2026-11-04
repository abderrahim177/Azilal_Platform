
import { Link } from "react-router";

import {
  Mountain,
  MapPin,
  ArrowUpRight,
  Mail,
  Phone,
  ArrowUp,
  Compass,
  Sun,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c1b15] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Azilal_ Nature, Culture and Craft.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07150f]/90" />

      {/* Decorative Patterns */}
      <div className="pointer-events-none absolute left-0 top-0 text-8xl text-[#d9a66b]/10">
        ❖
      </div>

      <div className="pointer-events-none absolute bottom-16 right-5 text-8xl text-[#d9a66b]/10">
        ❖
      </div>

      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-8 md:px-10">

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-3">
              <Mountain
                size={43}
                strokeWidth={1.5}
                className="text-[#e5ad62]"
              />

              <div>
                <h2 className="text-3xl font-bold tracking-[0.16em]">
                  AZILAL
                </h2>

                <p className="mt-1 text-[9px] tracking-[0.35em] text-[#d9a66b]">
                  DISCOVER THE ATLAS
                </p>
              </div>
            </Link>

            <div className="mb-4 h-px w-36 bg-gradient-to-r from-[#d9a66b] to-transparent" />

            <p className="max-w-[250px] text-[12px] leading-6 text-white/65">
              Découvrez la beauté d'Azilal, explorez ses montagnes,
              vivez la culture amazighe et plongez dans ses traditions uniques.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-300 hover:border-[#e5ad62] hover:bg-[#e5ad62] hover:text-[#17251e]"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-300 hover:border-[#e5ad62] hover:bg-[#e5ad62] hover:text-[#17251e]"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-300 hover:border-[#e5ad62] hover:bg-[#e5ad62] hover:text-[#17251e]"
              >
                <FaYoutube size={15} />
              </a>

              <a
                href="mailto:contact@azilal.ma"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-300 hover:border-[#e5ad62] hover:bg-[#e5ad62] hover:text-[#17251e]"
              >
                <Mail size={15} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold tracking-wide">
              <Compass size={17} className="text-[#e5ad62]" />
              Explorer
            </h3>

            <ul className="space-y-3 text-[12px] text-white/65">

              <li>
                <Link to="/" className="flex items-center gap-2 transition hover:text-[#e5ad62]">
                  <span className="text-[#e5ad62]">›</span>
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/destinations" className="flex items-center gap-2 transition hover:text-[#e5ad62]">
                  <span className="text-[#e5ad62]">›</span>
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/culture" className="flex items-center gap-2 transition hover:text-[#e5ad62]">
                  <span className="text-[#e5ad62]">›</span>
                  Culture & Patrimoine
                </Link>
              </li>

              <li>
                <Link to="/guides" className="flex items-center gap-2 transition hover:text-[#e5ad62]">
                  <span className="text-[#e5ad62]">›</span>
                  Guides locaux
                </Link>
              </li>

              <li>
                <Link to="/hotels" className="flex items-center gap-2 transition hover:text-[#e5ad62]">
                  <span className="text-[#e5ad62]">›</span>
                  Hôtels
                </Link>
              </li>

            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold tracking-wide">
              <Sun size={17} className="text-[#e5ad62]" />
              Découvrir
            </h3>

            <div className="space-y-3">

              <a href="#nature" className="group flex items-center gap-3">
                <img
                  src="/images/Azilal_ Nature, Culture and Craft.png"
                  alt="Montagnes d'Azilal"
                  className="h-12 w-16 rounded-md object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="text-[11px] leading-4 text-white/70 transition group-hover:text-[#e5ad62]">
                  Montagnes
                  <br />
                  d'Azilal
                </span>
              </a>

              <a href="#crafts" className="group flex items-center gap-3">
                <img
                  src="/images/pexels-sonniewing-34448175.jpg"
                  alt="Artisanat traditionnel"
                  className="h-12 w-16 rounded-md object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="text-[11px] leading-4 text-white/70 transition group-hover:text-[#e5ad62]">
                  Artisanat
                  <br />
                  traditionnel
                </span>
              </a>

              <a href="#culture" className="group flex items-center gap-3">
                <img
                  src="/images/pexels-kaeciine-33282224.jpg"
                  alt="Culture amazighe"
                  className="h-12 w-16 rounded-md object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="text-[11px] leading-4 text-white/70 transition group-hover:text-[#e5ad62]">
                  Culture
                  <br />
                  amazighe
                </span>
              </a>

              <a href="#food" className="group flex items-center gap-3">
                <img
                  src="/images/pexels-mographe-30374223.jpg"
                  alt="Artisanat local"
                  className="h-12 w-16 rounded-md object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="text-[11px] leading-4 text-white/70 transition group-hover:text-[#e5ad62]">
                  Gastronomie
                  <br />
                  locale
                </span>
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold tracking-wide">
              <ArrowUpRight size={17} className="text-[#e5ad62]" />
              Contact
            </h3>

            <p className="mb-5 max-w-[230px] text-[12px] leading-5 text-white/65">
              Une question ? Une envie de découvrir Azilal ?
              Nous sommes à votre écoute.
            </p>

            <div className="mb-3 flex items-center gap-3 text-[12px] text-white/65">
              <MapPin size={15} className="shrink-0 text-[#e5ad62]" />
              <span>Azilal, Maroc</span>
            </div>

            <a
              href="tel:+212612345678"
              className="mb-3 flex items-center gap-3 text-[12px] text-white/65 transition hover:text-[#e5ad62]"
            >
              <Phone size={15} className="text-[#e5ad62]" />
              +212 6 12 34 56 78
            </a>

            <a
              href="mailto:contact@azilal.ma"
              className="mb-5 flex items-center gap-3 text-[12px] text-white/65 transition hover:text-[#e5ad62]"
            >
              <Mail size={15} className="text-[#e5ad62]" />
              contact@azilal.ma
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#edc078] to-[#d99b4d] px-5 py-2.5 text-[11px] font-semibold text-[#17251e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[#d9a66b]/20"
            >
              Nous contacter
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/15 bg-[#07150f]/70">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row md:px-10">

          <p className="text-center text-[10px] text-white/50">
            © {new Date().getFullYear()} AZILAL. Tous droits réservés.
          </p>

          <div className="hidden items-center gap-3 text-[#d9a66b] md:flex">
            <span className="h-px w-12 bg-[#d9a66b]/50" />
            <span className="text-xl">ⵣ</span>
            <span className="h-px w-12 bg-[#d9a66b]/50" />
          </div>

          <p className="text-[10px] text-white/60">
            Fait avec <span className="text-red-500">♥</span> au Maroc
          </p>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9a66b]/60 bg-[#17251e] text-[#e5ad62] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9a66b] hover:text-[#17251e]"
          >
            <ArrowUp size={17} />
          </button>

        </div>
      </div>

    </footer>
  );
}
