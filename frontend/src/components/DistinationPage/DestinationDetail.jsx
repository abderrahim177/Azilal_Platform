// src/pages/DestinationDetail.jsx

import { useParams, Navigate } from "react-router-dom";
import destinations from "../data/distination";

import DestinationHero from "../places/DestinationHero";
import CultureSection from "../places/CultureSection";
import LocalProducts from "../places/LocalProducts";
import LocalMusic from "../places/LocalMusic";

export default function DestinationDetail() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <Navigate to="/distinations" replace />;
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <DestinationHero destination={destination} />

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        {/* About */}
        <section className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#285B48]">
            À propos de cette destination
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#1c2922]">
            Découvrez son histoire
          </h2>

          <p className="mt-5 text-base leading-8 text-[#66736B]">
            {destination.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {destination.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-[#285B48]/10 bg-white p-5"
              >
                <p className="text-xs text-[#66736B]">{fact.label}</p>
                <p className="mt-2 font-bold text-[#285B48]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CultureSection culture={destination.culture} />

        <LocalProducts products={destination.products} />

        <LocalMusic music={destination.music} />
      </div>
    </main>
  );
}