
import { Outlet } from "react-router-dom";

import HeroNavbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Global Header */}
      <HeroNavbar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
