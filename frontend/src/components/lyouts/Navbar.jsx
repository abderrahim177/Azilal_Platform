
import { Search, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/distinations" },
  { name: "Guides", href: "/guides" },
  { name: "Hotels", href: "/hotels" },
];

export default function HeroNavbar() {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <nav className="absolute top-4 left-4 right-4 z-50 flex w-auto items-center justify-between rounded-2xl border border-white/15 bg-[#26372d]/95 px-5 py-3 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 md:left-8 md:right-8 md:px-8 md:py-4">

      {/* Logo */}
      <Link
        to="/"
        className="shrink-0 text-xl font-bold tracking-widest text-white md:text-2xl"
      >
        <span className="text-amber-400">●</span> AZILAL
      </Link>

      {/* Navigation / Search */}
      <div className="hidden items-center md:flex">
        {search ? (
          <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 animate-in fade-in duration-300">

            <Search size={17} className="text-amber-400" />

            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
              className="w-64 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
            />

            <X
              size={19}
              onClick={() => {
                setSearch(false);
                setSearchValue("");
              }}
              className="cursor-pointer text-white transition-colors hover:text-amber-400"
            />
          </div>
        ) : (
          <div className="flex items-center gap-7 rounded-xl border border-white/10 bg-white/10 px-7 py-3">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white/85 hover:text-amber-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Search
              onClick={() => setSearch(true)}
              size={18}
              className="cursor-pointer text-white transition-colors hover:text-amber-400"
            />
          </div>
        )}
      </div>

      {/* Authentication */}
      <div className="flex shrink-0 gap-2 md:gap-4">

        <Link
          to="/login"
          className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:border-amber-400 hover:bg-amber-500 hover:text-[#26372d] md:px-6"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-[#26372d] shadow-md shadow-black/10 transition-all duration-300 hover:bg-amber-400 md:px-6"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}
