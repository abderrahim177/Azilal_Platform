import { ArrowUpRight } from "lucide-react";

const bookings = [
  {
    name: "Youssef Amrani",
    destination: "Cascades d'Ouzoud",
    date: "Nov 28, 2026",
    status: "Confirmed",
  },
  {
    name: "Sara Williams",
    destination: "Aït Bouguemez",
    date: "Nov 29, 2026",
    status: "Pending",
  },
  {
    name: "Adam Smith",
    destination: "Bin El Ouidane",
    date: "Dec 02, 2026",
    status: "Confirmed",
  },
];

export default function GuideBookingTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Recent Bookings
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Your latest tour reservations
          </p>
        </div>

        <a
          href="/guide/dashboard/bookings"
          className="flex items-center gap-1 text-xs font-medium text-[#26372d] hover:underline"
        >
          View all <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Tourist
              </th>
              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Destination
              </th>
              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Date
              </th>
              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.name}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                <td className="px-4 py-3 text-xs font-medium text-slate-900">
                  {booking.name}
                </td>

                <td className="px-4 py-3 text-xs text-slate-600">
                  {booking.destination}
                </td>

                <td className="px-4 py-3 text-xs text-slate-600">
                  {booking.date}
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