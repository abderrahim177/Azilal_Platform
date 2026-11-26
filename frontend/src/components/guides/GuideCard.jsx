import React from 'react'
import { Link } from "react-router-dom";
import {MapPin ,MoonStar} from "lucide-react";

const GuideCard = ({Guide , index}) => {
  return (
     <Link
      to={`/Guide/${Guide.id}`}
      className="group block"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <article className="animate-card overflow-hidden rounded-3xl border border-[#285B48]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-72 overflow-hidden">
          <img
            src={Guide.image}
            alt={Guide.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2922]/80 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-[#FAF9F6]/95 px-4 py-2 text-xs font-semibold text-[#285B48]">
            {Guide.Price}DH
          </span>

          <div className="absolute bottom-5 left-5 text-white">
            <div className="mb-2 flex items-center gap-1.5 text-sm text-white/80">
              <MapPin size={15} />
              {Guide.location}
            </div>

            <h3 className="text-2xl font-bold">{Guide.name}</h3>
            <div className='flex items-center gap-1'>
            <p className='text-orange-500 text-bold text-sm'>{Guide.rate}</p>
            <MoonStar size={10}/>
            </div>
            
          </div>
        </div>

        <div className="p-6">
          <p className="line-clamp-2 text-sm leading-7 text-[#66736B]">
            {Guide.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-[#285B48]/10 pt-4">
            <span className="text-sm font-semibold text-[#285B48]">
              Découvrir la destination
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default GuideCard