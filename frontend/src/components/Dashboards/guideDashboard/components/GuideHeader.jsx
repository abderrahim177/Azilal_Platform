import { Bell, Menu } from "lucide-react";

export default function GuideHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden">
          <Menu size={19} />
        </button>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Guide Dashboard
          </h2>
          <p className="text-xs text-slate-500">
            Manage your guiding activity
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
          <Bell size={17} />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#26372d] text-xs font-semibold text-white">
            G
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-medium text-slate-900">Guide</p>
            <p className="text-[11px] text-slate-500">Professional guide</p>
          </div>
        </div>
      </div>
    </header>
  );
}