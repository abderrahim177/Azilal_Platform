
import { Search, MapPin, Hotel, Pencil, Eye } from "lucide-react";
import { useState } from "react";

const hotels = [
  { id: 1, name: "Atlas Mountain Lodge", location: "Aït Bouguemez", category: "3 Stars", status: "Active" },
  { id: 2, name: "Ouzoud Garden Hotel", location: "Cascades d'Ouzoud", category: "4 Stars", status: "Active" },
  { id: 3, name: "Bin El Ouidane Resort", location: "Bin El Ouidane", category: "5 Stars", status: "Pending" },
];

export default function HotelList() {
  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter((hotel) =>
    `${hotel.name} ${hotel.location} ${hotel.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">My Hotels</h1>
        <p className="text-sm text-slate-500">
          Manage your hotel properties and information.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hotels..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#26372d]"
          />
        </div>

        <button className="rounded-lg bg-[#26372d] px-4 py-2 text-sm font-medium text-white hover:bg-[#34483b]">
          + Add Hotel
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-100 p-3 text-slate-600">
                  <Hotel size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">{hotel.name}</h2>
                  <p className="mt-1 text-xs text-slate-500">{hotel.category}</p>
                </div>
              </div>

              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                hotel.status === "Active"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}>
                {hotel.status}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={15} />
              {hotel.location}
            </div>

            <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50">
                <Eye size={14} />
                View
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50">
                <Pencil size={14} />
                Edit
              </button>
            </div>
          </div>
        ))}

        {filteredHotels.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-400 lg:col-span-2">
            No hotels found.
          </div>
        )}
      </div>
    </div>
  );
}
