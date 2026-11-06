import { Search } from "lucide-react";

const navLinks = [
   { name: "Home", href: "/" },
  { name: "Destinations", href: "#destinations" },
  { name: "Guides", href: "#Guides" },
  { name: "Hotels", href: "#Hotels" },
];

export default function HeroNavbar() {
  return (
    <nav className="absolute top-5 left-5 right-5 z-30 w-full flex items-center justify-between px-6">

      {/* Logo */}
      
      <a href="/" className="text-white font-bold tracking-widest text-xl">
        <span className="text-amber-400">●</span> AZILAL
      </a>
      <div>
      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl px-8 py-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/80 text-sm hover:text-amber-300 transition-colors"
          >
            {link.name}
          </a>
        ))}

        <Search size={15} className="text-white cursor-pointer" />
      </div>  
      </div>
      <div className="flex gap-5">
        <button className="bg-black/50 font-bold text-white rounded-xl px-6 py-2 cursor-pointer shadow-sm shadow-white">Login</button>
        <button className="bg-black/70 font-bold text-white rounded-xl px-6 py-2 cursor-pointer shadow-sm shadow-white">Register</button>
      </div>    
    </nav>
  );
}