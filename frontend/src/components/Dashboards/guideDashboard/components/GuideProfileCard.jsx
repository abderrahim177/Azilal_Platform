import { UserRound, MapPin, Languages, ArrowUpRight } from "lucide-react";
export default function GuideProfileCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">
          Your Profile
        </h3>

        <a
          href="/guide/dashboard/profile"
          className="text-slate-400 hover:text-slate-700"
        >
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
          <UserRound size={22} className="text-slate-500" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Your Name
          </h4>
          <p className="text-xs text-slate-500">
            Mountain & Nature Guide
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Languages size={15} className="text-slate-400" />
          <span>Arabic, French, English</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600">
          <MapPin size={15} className="text-slate-400" />
          <span>Azilal, Aït Bouguemez</span>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Profile completion
          </span>
          <span className="text-xs font-semibold text-slate-900">
            80%
          </span>
        </div>

        <div className="mt-2 h-1.5 rounded-full bg-slate-200">
          <div className="h-1.5 w-[80%] rounded-full bg-[#26372d]" />
        </div>
      </div>
    </div>
  );
}