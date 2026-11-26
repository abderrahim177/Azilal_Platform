import { Routes, Route } from "react-router-dom";
import "./index.css";

import MainLayout from "./components/lyouts/MainLayout";
import Home from "./components/lyouts/home";
import Destinations from "./components/DistinationPage/Destinations";
import DestinationDetail from "./components/DistinationPage/DestinationDetail";
import Guides from "./components/guides/Guides";
import Hotel from "./components/hotels/Hotel";

import Login from "./components/pages/Auth/login";
import Register from "./components/pages/Auth/register";

// Guide Dashboard
import GuideDashboard from "./components/Dashboards/guideDashboard/GuideDashboard";
import GuideOverview from "./components/Dashboards/guideDashboard/components/GuideOverview";
import GuideBookings from "./components/Dashboards/guideDashboard/pages/GuideBookings";
import GuideProfile from "./components/Dashboards/guideDashboard/pages/GuideProfile";
import GuideReviews from "./components/Dashboards/guideDashboard/pages/GuideReviews";
import GuideAvailability from "./components/Dashboards/guideDashboard/pages/GuideAvailability";

// Hotel Manager Dashboard
import HotelManagerDashboard from "./components/Dashboards/hotelManagerDashboard/HotelManagerDashboard";
import HotelManagerOverview from "./components/Dashboards/hotelManagerDashboard/components/HotelManagerOverview";
import HotelList from "./components/Dashboards/hotelManagerDashboard/pages/HotelList";
import HotelBookings from "./components/Dashboards/hotelManagerDashboard/pages/HotelBookings";
import HotelReviews from "./components/Dashboards/hotelManagerDashboard/pages/HotelReviews";
import HotelProfile from "./components/Dashboards/hotelManagerDashboard/pages/HotelProfile";
import HotelSettings from "./components/Dashboards/hotelManagerDashboard/pages/HotelSettings";

function App() {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/distinations" element={<Destinations />} />
        <Route path="/distination/:id" element={<DestinationDetail />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/hotels" element={<Hotel />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Guide Dashboard Layout */}
      <Route path="/guide/dashboard" element={<GuideDashboard />}>
        <Route index element={<GuideOverview />} />
        <Route path="bookings" element={<GuideBookings />} />
        <Route path="profile" element={<GuideProfile />} />
        <Route path="reviews" element={<GuideReviews />} />
        <Route path="availability" element={<GuideAvailability />} />
      </Route>

      {/* Hotel Manager Dashboard Layout */}
      <Route path="/hotel-manager/dashboard" element={<HotelManagerDashboard />}>
        <Route index element={<HotelManagerOverview />} />
        <Route path="hotels" element={<HotelList />} />
        <Route path="bookings" element={<HotelBookings />} />
        <Route path="reviews" element={<HotelReviews />} />
        <Route path="profile" element={<HotelProfile />} />
        <Route path="settings" element={<HotelSettings />} />
      </Route>
    </Routes>
  );
}

export default App;