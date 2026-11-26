import {
  LayoutDashboard,
  CalendarDays,
  UserRound,
  Star,
  CalendarCheck,
  Mountain,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Overview", icon: LayoutDashboard, href: "/guide/dashboard" },
  { name: "Bookings", icon: CalendarDays, href: "/guide/dashboard/bookings" },
  { name: "My Profile", icon: UserRound, href: "/guide/dashboard/profile" },
  { name: "Reviews", icon: Star, href: "/guide/dashboard/reviews" },
  { name: "Availability", icon: CalendarCheck, href: "/guide/dashboard/availability" },
];

export default function GuideSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white md:flex md:flex-col">

      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#26372d] text-white">
          <Mountain size={18} />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-slate-900">
            Azilal
          </h1>

          <p className="text-xs text-slate-500">
            Guide workspace
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 pt-6">
        <p className="mb-3 px-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/guide/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-[#26372d] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={17} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="mt-auto border-t border-slate-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-red-50 hover:text-red-600">
          <LogOut size={17} />
          Logout
        </button>
      </div>

    </aside>
  );
}