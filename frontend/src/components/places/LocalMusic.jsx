// src/components/destinations/LocalMusic.jsx

import { Music2, Play } from "lucide-react";

export default function LocalMusic({ music }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-[#1c2922] p-8 text-white md:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#285B48]">
            <Music2 size={24} />
          </div>

          <span className="text-sm font-semibold uppercase tracking-widest text-[#A8C5A9]">
            Patrimoine musical
          </span>

          <h2 className="mt-3 text-3xl font-bold">{music.title}</h2>

          <p className="mt-4 leading-8 text-white/65">
            {music.description}
          </p>

          <p className="mt-5 text-sm font-semibold text-[#A8C5A9]">
            {music.genre}
          </p>
        </div>

        <div className="flex h-36 w-36 shrink-0 items-center justify-center self-center rounded-full border border-white/20 bg-white/5 md:h-44 md:w-44">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#285B48]">
            <Play size={30} fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}