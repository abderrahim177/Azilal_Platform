import { Search, X  } from "lucide-react";
import { useState } from "react";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "#distination" },
  { name: "Guides", href: "#Guides" },
  { name: "Hotels", href: "#Hotels" },
];

export default function HeroNavbar() {
  const [search, setSearch] = useState(false);
  const [searchValue , setSearchValue]= useState('')

  return (
    <nav className="absolute top-5 left-0 right-0 z-30 w-full flex items-center justify-between px-6">

      {/* Logo */}
      <a href="/" className="text-white font-bold tracking-widest text-xl">
        <span className="text-amber-400">●</span> AZILAL
      </a>

      {/* Navigation / Search */}
      <div className="hidden md:flex items-center">
        {search ? (
            <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-xl px-5 py-3 animate-in fade-in duration-300">
            <Search size={17} className="text-white/70" />

            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
              className="w-64 bg-transparent text-white text-sm outline-none placeholder:text-white/50 "
            />

            <X
              size={19}
              onClick={() => {
                setSearch(false);
                setSearchValue("");
              }}
              className="text-white cursor-pointer hover:text-amber-400 transition-colors"
            />
          </div>
        ) : (
          <div className="flex items-center gap-8 rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl px-8 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 text-sm hover:text-amber-300 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <Search
              onClick={() => setSearch(true)}
              size={17}
              className="text-white cursor-pointer hover:text-amber-300 transition-colors"
            />
          </div>
        )}
      </div>

      {/* Authentication */}
      <div className="flex gap-5">
        <button className="bg-black/50 font-bold text-white rounded-xl px-6 py-2 cursor-pointer shadow-sm shadow-white">
          Login
        </button>

        <button className="bg-black/70 font-bold text-white rounded-xl px-6 py-2 cursor-pointer shadow-sm shadow-white">
          Register
        </button>
      </div>

    </nav>
  );
}