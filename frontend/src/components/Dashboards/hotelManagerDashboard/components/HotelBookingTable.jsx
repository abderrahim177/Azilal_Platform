const bookings = [
  {
    guest: "Sara Williams",
    hotel: "Atlas Mountain Hotel",
    checkIn: "Nov 28, 2026",
    status: "Confirmed",
  },
  {
    guest: "Adam Smith",
    hotel: "Ouzoud Valley Lodge",
    checkIn: "Nov 30, 2026",
    status: "Pending",
  },
  {
    guest: "Youssef Amrani",
    hotel: "Atlas Mountain Hotel",
    checkIn: "Dec 04, 2026",
    status: "Confirmed",
  },
];

export default function HotelBookingTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Recent Bookings
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Latest hotel reservations
          </p>
        </div>

        <a
          href="/hotel-manager/dashboard/bookings"
          className="text-xs font-medium text-[#26372d] hover:underline"
        >
          View all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Guest
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Hotel
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Check-in
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={`${booking.guest}-${booking.hotel}`}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                <td className="px-4 py-3 text-xs font-medium text-slate-900">
                  {booking.guest}
                </td>

                <td className="px-4 py-3 text-xs text-slate-600">
                  {booking.hotel}
                </td>

                <td className="px-4 py-3 text-xs text-slate-600">
                  {booking.checkIn}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}