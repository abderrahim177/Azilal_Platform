
import { CalendarDays, Clock, CircleCheck, CircleX } from "lucide-react";

const schedule = [
  { day: "Friday", date: "Nov 27, 2026", time: "09:00 - 17:00", status: "Available" },
  { day: "Saturday", date: "Nov 28, 2026", time: "09:00 - 17:00", status: "Booked" },
  { day: "Sunday", date: "Nov 29, 2026", time: "09:00 - 17:00", status: "Available" },
  { day: "Monday", date: "Nov 30, 2026", time: "09:00 - 17:00", status: "Unavailable" },
  { day: "Tuesday", date: "Dec 01, 2026", time: "09:00 - 17:00", status: "Available" },
];

const statusStyles = {
  Available: "bg-emerald-50 text-emerald-700",
  Booked: "bg-blue-50 text-blue-700",
  Unavailable: "bg-slate-100 text-slate-500",
};

export default function GuideAvailability() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Availability</h1>
        <p className="text-sm text-slate-500">
          Manage your working days and tour schedule.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
              <CircleCheck size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500">Available days</p>
              <p className="text-xl font-semibold text-slate-900">3</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
              <CalendarDays size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500">Booked days</p>
              <p className="text-xl font-semibold text-slate-900">1</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
              <CircleX size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500">Unavailable</p>
              <p className="text-xl font-semibold text-slate-900">1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 p-4">
          <h2 className="text-sm font-semibold text-slate-900">Weekly Schedule</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {schedule.map((item) => (
            <div key={item.date} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
                  <CalendarDays size={17} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{item.day}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={14} />
                {item.time}
              </div>

              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
