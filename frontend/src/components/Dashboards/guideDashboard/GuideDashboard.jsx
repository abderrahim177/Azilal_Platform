import { Outlet } from "react-router-dom";
import GuideSidebar from "./components/GuideSidebar";
import GuideHeader from "./components/GuideHeader";

export default function GuideDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <GuideSidebar />

      <div className="md:ml-64">
        <GuideHeader />

        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}