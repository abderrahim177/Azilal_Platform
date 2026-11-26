import {
  CalendarDays,
  Users,
  Star,
  MapPin,
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "24",
    note: "All time bookings",
    icon: CalendarDays,
  },
  {
    title: "Upcoming Tours",
    value: "8",
    note: "Tours scheduled",
    icon: MapPin,
  },
  {
    title: "Completed Tours",
    value: "16",
    note: "Successfully completed",
    icon: Users,
  },
  {
    title: "Average Rating",
    value: "4.9",
    note: "Based on reviews",
    icon: Star,
  },
];

export default function GuideStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-500">
                {stat.title}
              </p>

              <Icon size={17} className="text-slate-400" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {stat.note}
            </p>
          </div>
        );
      })}
    </div>
  );
}