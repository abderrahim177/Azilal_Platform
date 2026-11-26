import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sara Williams",
    hotel: "Atlas Mountain Hotel",
    rating: 5,
    message: "Beautiful hotel and wonderful hospitality.",
  },
  {
    name: "Adam Smith",
    hotel: "Ouzoud Valley Lodge",
    rating: 4,
    message: "Very comfortable stay and great location.",
  },
];

export default function HotelRecentReviews() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Recent Reviews
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Guest feedback
        </p>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-900">
                  {review.name}
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  {review.hotel}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium">
                  {review.rating}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-600">
              {review.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}