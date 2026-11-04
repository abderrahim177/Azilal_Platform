// src/components/destinations/DestinationHero.jsx

import { MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DestinationHero({ destination }) {
  return (
    <section className="relative flex min-h-[480px] items-end overflow-hidden">
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2922] via-[#1c2922]/40 to-black/10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32 text-white">
        <Link
          to="/distinations"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Retour aux destinations
        </Link>

        <div className="mb-4 flex items-center gap-2 text-sm text-[#D5E4D8]">
          <MapPin size={17} />
          {destination.region}
        </div>

        <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
          {destination.category}
        </span>

        <h1 className="mt-6 text-4xl font-bold md:text-6xl">
          {destination.name}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
          {destination.shortDescription}
        </p>
      </div>
    </section>
  );
}