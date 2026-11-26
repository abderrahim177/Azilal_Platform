
import { UserRound, Mail, Phone, Pencil, Building2 } from "lucide-react";

const manager = {
  name: "Omar El Idrissi",
  email: "omar@example.com",
  phone: "+212 600 000 000",
  business: "Atlas Hospitality",
  bio: "Hotel manager specializing in hospitality and accommodation services in the Azilal region.",
};

export default function HotelProfile() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Manager Profile</h1>
        <p className="text-sm text-slate-500">Manage your business account information.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#26372d] text-white">
              <UserRound size={23} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">{manager.name}</h2>
              <p className="text-sm text-slate-500">Hotel Manager</p>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#26372d] px-3 py-2 text-sm text-white hover:bg-[#34483b]">
            <Pencil size={15} />
            Edit Profile
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-5 text-sm font-semibold text-slate-900">Account Information</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
              <Mail size={17} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="mt-1 text-sm text-slate-700">{manager.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
              <Phone size={17} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="mt-1 text-sm text-slate-700">{manager.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
              <Building2 size={17} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Business Name</p>
              <p className="mt-1 text-sm text-slate-700">{manager.business}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="text-xs text-slate-400">About</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{manager.bio}</p>
        </div>
      </div>
    </div>
  );
}
