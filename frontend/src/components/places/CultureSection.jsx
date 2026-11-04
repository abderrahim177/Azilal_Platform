// src/components/destinations/CultureSection.jsx

import { Sparkles } from "lucide-react";

export default function CultureSection({ culture }) {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <span className="text-sm font-bold uppercase tracking-widest text-[#285B48]">
          Identité & patrimoine
        </span>

        <h2 className="mt-3 text-3xl font-bold text-[#1c2922]">
          {culture.title}
        </h2>

        <p className="mt-5 leading-8 text-[#66736B]">
          {culture.description}
        </p>

        <div className="mt-7 space-y-4">
          {culture.traditions.map((tradition) => (
            <div key={tradition} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#285B48]/10 text-[#285B48]">
                <Sparkles size={17} />
              </span>
              <span className="font-medium text-[#1c2922]">
                {tradition}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-[#285B48] p-8 text-white md:p-12">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/20" />
        <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/20" />

        <span className="text-sm text-white/60">Notre patrimoine</span>

        <h3 className="relative mt-5 text-3xl font-bold leading-snug">
          Une culture riche, une identité unique.
        </h3>

        <p className="relative mt-5 leading-8 text-white/75">
          Découvrez les traditions, les savoir-faire et l'hospitalité
          qui rendent chaque région spéciale.
        </p>
      </div>
    </section>
  );
}