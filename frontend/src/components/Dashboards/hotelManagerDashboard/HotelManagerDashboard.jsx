
import { Outlet } from "react-router-dom";

import HotelManagerSidebar from "./components/HotelManagerSidebar";
import HotelManagerHeader from "./components/HotelManagerHeader";

export default function HotelManagerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">

      <HotelManagerSidebar />

      <div className="md:ml-64">
        <HotelManagerHeader />

        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
