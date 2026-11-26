import { MapPin, ArrowUpRight, Hotel } from "lucide-react";

export default function HotelCard({ hotel }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 bg-slate-100">
        {hotel.image ? (
          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Hotel size={36} className="text-slate-300" />
          </div>
        )}

        <span className="absolute right-3 top-3 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-medium text-green-700">
          Active
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {hotel.name}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin size={13} />
              {hotel.location}
            </div>
          </div>

          <button className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xs text-slate-500">
            Classification
          </span>

          <span className="text-xs font-medium text-slate-900">
            {hotel.classification}
          </span>
        </div>
      </div>
    </div>
  );
}