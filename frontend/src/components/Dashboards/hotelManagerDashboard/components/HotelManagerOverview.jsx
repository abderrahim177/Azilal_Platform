import HotelManagerStats from "./HotelManagerStats";
import HotelBookingTable from "./HotelBookingTable";
import HotelRecentReviews from "./HotelRecentReviews";
import HotelCard from "./HotelCard";

const hotels = [
  {
    id: 1,
    name: "Atlas Mountain Hotel",
    location: "Azilal",
    classification: "4 Stars",
    image: "",
  },
  {
    id: 2,
    name: "Ouzoud Valley Lodge",
    location: "Ouzoud",
    classification: "3 Stars",
    image: "",
  },
];

export default function HotelManagerOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Welcome back, Manager
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's an overview of your hotel business.
        </p>
      </div>

      <HotelManagerStats />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Your Properties
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Manage your registered hotels
            </p>
          </div>

          <a
            href="/hotel-manager/dashboard/hotels"
            className="text-xs font-medium text-[#26372d] hover:underline"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      <HotelBookingTable />

      <HotelRecentReviews />
    </div>
  );
}