// src/pages/Destinations.jsx

import { useState } from "react";
import { Compass, Search } from "lucide-react";
import destinations from "../data/distination";
import DestinationCard from "../places/DestinationCard";

export default function Destinations() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    `${destination.name} ${destination.region} ${destination.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1c2922] px-6 py-24 text-center text-white">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#285B48]/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#8CA68D]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-[#D5E4D8]">
            <Compass size={16} />
            Explorez la région d'Azilal
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Découvrez des lieux
            <span className="block text-[#A8C5A9]">exceptionnels</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
            Explorez les paysages, les traditions et la richesse culturelle
            des destinations de la région d'Azilal.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#285B48]">
              Nos destinations
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1c2922] md:text-4xl">
              Explorez chaque région
            </h2>
            <p className="mt-3 text-[#66736B]">
              Nature, patrimoine et culture dans un seul endroit.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#285B48]/15 bg-white px-4 py-3 md:w-80">
            <Search size={19} className="text-[#285B48]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une destination..."
              className="w-full bg-transparent text-sm text-[#1c2922] outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold text-[#1c2922]">
              Aucune destination trouvée.
            </p>
            <p className="mt-2 text-sm text-[#66736B]">
              Essayez avec un autre nom.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}