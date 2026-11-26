import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sara Williams",
    rating: 5,
    message: "Amazing experience and very knowledgeable guide!",
    date: "2 days ago",
  },
  {
    name: "Adam Smith",
    rating: 5,
    message: "Beautiful trip and great organization.",
    date: "5 days ago",
  },
];

export default function GuideRecentReviews() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Recent Reviews
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Feedback from tourists
        </p>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-900">
                    {review.name}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium">{review.rating}</span>
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