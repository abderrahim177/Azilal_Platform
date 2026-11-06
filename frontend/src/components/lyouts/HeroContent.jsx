import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="absolute z-20 left-7 md:left-14 bottom-24 md:bottom-36 max-w-lg">

      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        <span className="text-white/70 uppercase tracking-[0.3em] text-[10px]">
          Morocco · Atlas Mountains
        </span>
      </div>

      <h1 className="text-white uppercase font-black
        text-5xl sm:text-6xl md:text-8xl
        tracking-tight leading-[0.9]">
        AZILAL
      </h1>

      <p className="text-white/70 text-sm leading-6 mt-6 max-w-sm">
        Discover the hidden treasures of the Atlas Mountains.
        Explore breathtaking waterfalls, authentic Amazigh culture
        and unforgettable natural landscapes.
      </p>

      <a
        className="inline-flex items-center text-gray-800 gap-3 mt-7
        bg-amber-300 text-black rounded-full px-6 py-3
        text-md font-bold hover:bg-amber-500
        transition-all duration-300 cursor-pointer shadow-xl shadow-black"
      >
        Explore Azilal
        <ArrowRight size={15} />
      </a>

    </div>
  );
}