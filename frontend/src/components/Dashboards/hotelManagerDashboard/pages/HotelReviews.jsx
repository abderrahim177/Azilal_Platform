
import { Star } from "lucide-react";

const reviews = [
  { name: "Sara Benali", hotel: "Atlas Mountain Lodge", date: "Nov 20, 2026", rating: 5, comment: "Wonderful place, beautiful views and very welcoming staff." },
  { name: "John Smith", hotel: "Ouzoud Garden Hotel", date: "Nov 18, 2026", rating: 4, comment: "Nice hotel and great location. The breakfast was excellent." },
  { name: "Fatima Zahra", hotel: "Bin El Ouidane Resort", date: "Nov 15, 2026", rating: 5, comment: "Perfect stay. I highly recommend this hotel." },
];

export default function HotelReviews() {
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Reviews</h1>
        <p className="text-sm text-slate-500">Guest feedback about your properties.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs text-slate-500">Average Rating</p>
          <div className="mt-2 flex items-center gap-2">
            <Star size={22} className="fill-amber-400 text-amber-400" />
            <span className="text-2xl font-semibold text-slate-900">{average.toFixed(1)}</span>
            <span className="text-xs text-slate-400">/ 5</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs text-slate-500">Total Reviews</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{reviews.length}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs text-slate-500">5-Star Reviews</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {reviews.filter((review) => review.rating === 5).length}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {reviews.map((review, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{review.name}</p>
                <p className="mt-1 text-xs text-slate-500">{review.hotel}</p>
              </div>

              <p className="text-xs text-slate-400">{review.date}</p>
            </div>

            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
                />
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
