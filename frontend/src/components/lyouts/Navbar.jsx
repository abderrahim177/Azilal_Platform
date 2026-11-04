
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mountain,
  Menu,
  X,
  ChevronDown,
  Globe
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/distinations" },
  { name: "Culture", href: "/culture" },
  { name: "Guides", href: "/guides" },
  { name: "Hotels", href: "/hotels" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#E9E4DA]">

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-12 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#285B48] flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Mountain className="text-white" size={25} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-[0.15em] text-[#244D3C]">
              TAMAZIRT
            </h1>
            <p className="text-[9px] tracking-[0.25em] text-[#9A7952] font-semibold">
              DISCOVER THE ATLAS
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-[13px] font-medium text-[#55564F] hover:text-[#285B48] transition-colors
              after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
              after:bg-[#B58B59] hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* AUTH BUTTONS */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-sm font-semibold text-[#285B48] hover:text-[#B58B59] transition-colors">
            Login
          </button>

          <button className="px-6 py-1.5 rounded-full bg-[#285B48] text-white text-sm font-semibold
            hover:bg-[#1E4637]">
            Register
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#285B48]"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-t border-[#E9E4DA] px-6 py-6 space-y-5">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-[#55564F] hover:text-[#285B48]"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-3 pt-4 border-t border-[#E9E4DA]">
            <button className="flex-1 py-3 rounded-full border border-[#285B48] text-[#285B48] text-sm font-semibold">
              Login
            </button>

            <button className="flex-1 py-3 rounded-full bg-[#285B48] text-white text-sm font-semibold">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
