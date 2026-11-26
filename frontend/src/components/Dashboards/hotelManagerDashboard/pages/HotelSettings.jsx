
import { Bell, Shield, Globe, Settings } from "lucide-react";

export default function HotelSettings() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your dashboard preferences.</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-600">
              <Bell size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Notifications</h2>
              <p className="text-xs text-slate-500">Manage notification preferences.</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Receive new booking notifications",
              "Receive guest review notifications",
              "Receive platform updates",
            ].map((item) => (
              <label key={item} className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-600">{item}</span>
                <input type="checkbox" defaultChecked className="accent-[#26372d]" />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-600">
              <Globe size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Language</h2>
              <p className="text-xs text-slate-500">Dashboard language.</p>
            </div>
          </div>

          <select defaultValue="English" className="w-full max-w-xs rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none">
            <option>English</option>
            <option>Français</option>
            <option>العربية</option>
          </select>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-600">
              <Shield size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Account Security</h2>
              <p className="text-xs text-slate-500">Manage your account security.</p>
            </div>
          </div>

          <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            Change Password
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-600">
              <Settings size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Account</h2>
              <p className="text-xs text-slate-500">General account preferences.</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Account management options will be available here.
          </p>
        </div>
      </div>
    </div>
  );
}
