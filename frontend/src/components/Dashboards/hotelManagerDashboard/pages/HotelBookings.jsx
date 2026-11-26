
import { Search } from "lucide-react";
import { useState } from "react";

// const bookings = [
//   { id: "HB-101", guest: "Sara Benali", hotel: "Atlas Mountain Lodge", checkIn: "Nov 28, 2026", checkOut: "Nov 30, 2026", guests: 2, status: "Confirmed" },
//   { id: "HB-102", guest: "John Smith", hotel: "Ouzoud Garden Hotel", checkIn: "Dec 01, 2026", checkOut: "Dec 03, 2026", guests: 3, status: "Pending" },
//   { id: "HB-103", guest: "Fatima Zahra", hotel: "Bin El Ouidane Resort", checkIn: "Dec 04, 2026", checkOut: "Dec 06, 2026", guests: 2, status: "Confirmed" },
//   { id: "HB-104", guest: "Adam Wilson", hotel: "Atlas Mountain Lodge", checkIn: "Dec 07, 2026", checkOut: "Dec 09, 2026", guests: 4, status: "Cancelled" },
// ];

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Cancelled: "bg-red-50 text-red-600",
};

export default function HotelBookings() {
    const [search, setSearch] = useState("");
    const [bookings , setBooking] = useState([])
    const filteredBookings = bookings.filter((booking) =>
        `${booking.guest} ${booking.hotel} ${booking.id}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Bookings</h1>
        <p className="text-sm text-slate-500">Manage guest reservations.</p>
      </div>

      <div className="relative w-full sm:max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reservations..."
          className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#26372d]"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[850px] text-left text-sm">
          <thead className="border-b bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Booking ID</th>
              <th className="px-4 py-3 font-medium">Guest</th>
              <th className="px-4 py-3 font-medium">Hotel</th>
              <th className="px-4 py-3 font-medium">Check-in</th>
              <th className="px-4 py-3 font-medium">Check-out</th>
              <th className="px-4 py-3 font-medium">Guests</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
         
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-3 font-medium text-slate-700">{booking.id}</td>
                <td className="px-4 py-3 text-slate-700">{booking.guest}</td>
                <td className="px-4 py-3 text-slate-600">{booking.hotel}</td>
                <td className="px-4 py-3 text-slate-600">{booking.checkIn}</td>
                <td className="px-4 py-3 text-slate-600">{booking.checkOut}</td>
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
                <td colSpan={7} className="px-4 py-10 text-center text-sm text-slate-400">
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
