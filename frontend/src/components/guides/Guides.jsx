import React, { useState } from 'react'
import GuideCard from './GuideCard';
import { Compass, Search } from "lucide-react";
const Guides = () => {
    const [GuideINfo , setGuideInfo] = useState([
        {
            id : 1,
            name : 'abderrahman',
            location : 'Azilal',
            image : '',
            Price : 300,
            description : 'Guide certifier de la region de azilal',
            rate : '4/5'
        },
        {
            id : 2,
            name : 'hadou',
            location : 'Zaouit Ahansal',
            image : '',
            Price : 400,
            description : 'Guide certifier sur Zauoit Ahansal',
            rate : '4.5/5'
        },
        {
            id : 3,
            name : 'ahmed',
            location : 'Bougemaze',
            image : '',
            Price : 350,
            description : 'Guide certifier sur Bougemaze  ',
            rate : '4.4/5'
        }
    ]);
    const [search, setSearch] = useState("");
    const filteredGuides = GuideINfo.filter((Guide) =>
    `${Guide.name} ${Guide.region} ${Guide.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <main className='relative isolate overflow-hidden min-h-screen bg-[#FAF9F6]'>
        <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/artisan_Amazigh_Cpier.jpg')",
        }}
      />
    <section className=" relative mx-auto max-w-7xl px-6 py-20 mt-3">      
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
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
        <div className=' grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredGuides.map(( Guide ,index) => (
            <GuideCard
                key={Guide.id}
                Guide = {Guide}
                index = {index}
            />
        ))}
        </div>
        {filteredGuides.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold text-[#1c2922]">
              Aucune Guides trouvée.
            </p>
            <p className="mt-2 text-sm text-[#66736B]">
              Essayez avec un autre nom.
            </p>
          </div>
        )}
    </section>
    </main>
  )
}

export default Guides