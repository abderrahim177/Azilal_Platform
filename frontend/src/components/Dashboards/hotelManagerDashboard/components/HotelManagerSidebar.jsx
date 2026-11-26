import {
  LayoutDashboard,
  Hotel,
  CalendarDays,
  Star,
  ChartNoAxesCombined,
  Settings,
  LogOut,
  Mountain,
} from "lucide-react";

const navigation = [
  { name: "Overview", icon: LayoutDashboard, href: "/hotel-manager/dashboard" },
  { name: "My Hotels", icon: Hotel, href: "/hotel-manager/dashboard/hotels" },
  { name: "Bookings", icon: CalendarDays, href: "/hotel-manager/dashboard/bookings" },
  { name: "Reviews", icon: Star, href: "/hotel-manager/dashboard/reviews" },
  { name: "Performance", icon: ChartNoAxesCombined, href: "/hotel-manager/dashboard/performance" },
  { name: "Settings", icon: Settings, href: "/hotel-manager/dashboard/settings" },
];

export default function HotelManagerSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white md:flex md:flex-col">
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#26372d] text-white">
          <Mountain size={18} />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-slate-900">Azilal</h1>
          <p className="text-xs text-slate-500">Business workspace</p>
        </div>
      </div>

      <div className="px-4 pt-6">
        <p className="mb-3 px-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          Management
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.name === "Overview";

            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-[#26372d] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={17} />
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-slate-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-red-50 hover:text-red-600">
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </aside>
  );
}