// src/components/destinations/DestinationCard.jsx

import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function DestinationCard({ destination, index }) {
  return (
    <Link
      to={`/distination/${destination.id}`}
      className="group block"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <article className="animate-card overflow-hidden rounded-3xl border border-[#285B48]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-72 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2922]/80 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-[#FAF9F6]/95 px-4 py-2 text-xs font-semibold text-[#285B48]">
            {destination.category}
          </span>

          <div className="absolute bottom-5 left-5 text-white">
            <div className="mb-2 flex items-center gap-1.5 text-sm text-white/80">
              <MapPin size={15} />
              {destination.region}
            </div>

            <h3 className="text-2xl font-bold">{destination.name}</h3>
          </div>

          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF9F6] text-[#285B48] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#285B48] group-hover:text-white">
            <ArrowUpRight size={21} />
          </div>
        </div>

        <div className="p-6">
          <p className="line-clamp-2 text-sm leading-7 text-[#66736B]">
            {destination.shortDescription}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-[#285B48]/10 pt-4">
            <span className="text-sm font-semibold text-[#285B48]">
              Découvrir la destination
            </span>
            <ArrowUpRight
              size={18}
              className="text-[#285B48] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}