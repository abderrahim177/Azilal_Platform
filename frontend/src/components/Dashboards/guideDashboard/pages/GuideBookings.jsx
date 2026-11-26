
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

// const bookings = [
//   { id: "BK-001", client: "Youssef Amrani", destination: "Cascades d'Ouzoud", date: "Nov 28, 2026", guests: 4, status: "Confirmed" },
//   { id: "BK-002", client: "Sara Benali", destination: "Aït Bouguemez", date: "Nov 29, 2026", guests: 2, status: "Pending" },
//   { id: "BK-003", client: "Adam Smith", destination: "Bin El Ouidane", date: "Dec 02, 2026", guests: 5, status: "Confirmed" },
//   { id: "BK-004", client: "Lina Martin", destination: "Demnate", date: "Dec 04, 2026", guests: 3, status: "Cancelled" },
//   { id: "BK-005", client: "Mehdi Alaoui", destination: "Aït M'hamed", date: "Dec 06, 2026", guests: 2, status: "Pending" },
// ];

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Cancelled: "bg-red-50 text-red-600",
};

export default function GuideBookings() {
  const [search, setSearch] = useState("");
const [bookings , setBooking] = useState([])
  const filteredBookings = bookings.filter((booking) =>
    `${booking.client} ${booking.destination} ${booking.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Bookings</h1>
        <p className="text-sm text-slate-500">
          Manage and track your tour reservations.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bookings..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#26372d]"
          />
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="border-b bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Booking ID</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Destination</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Guests</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-3 font-medium text-slate-700">{booking.id}</td>
                <td className="px-4 py-3 text-slate-700">{booking.client}</td>
                <td className="px-4 py-3 text-slate-600">{booking.destination}</td>
                <td className="px-4 py-3 text-slate-600">{booking.date}</td>
                <td className="px-4 py-3 text-slate-600">{booking.guests}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[booking.status]}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-400">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
