import GuideStats from "./GuideStats";
import GuideBookingTable from "./GuideBookingTable";
import GuideProfileCard from "./GuideProfileCard";
import GuideRecentReviews from "./GuideRecentReviews";

export default function GuideOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Welcome back, Guide
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's an overview of your guiding activity.
        </p>
      </div>

      <GuideStats />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <GuideBookingTable />
        </div>

        <GuideProfileCard />
      </div>

      <GuideRecentReviews />
    </div>
  );
}