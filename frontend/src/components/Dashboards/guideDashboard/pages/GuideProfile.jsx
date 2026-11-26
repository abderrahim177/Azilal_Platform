
import { UserRound, MapPin, Languages, Award, Pencil } from "lucide-react";
import GuideCertificates from "../components/Forms/GuideCertificates";
import GuideLanguages from "../components/Forms/GuideAreas";
import GuideAreas from "../components/Forms/GuideLanguages";
// const profile = {
//   name: "Mohamed Amine",
//   title: "Mountain & Adventure Guide",
//   email: "amine@example.com",
//   phone: "+212 600 000 000",
//   bio: "Experienced local guide passionate about exploring the Azilal region, its mountains, culture and hidden gems.",
//   languages: ["Arabic", "French", "English"],
//   areas: ["Aït Bouguemez", "Cascades d'Ouzoud", "Zaouiat Ahansal"],
//   certificates: ["Mountain Guide Certificate", "First Aid Certificate"],
// };

export default function GuideProfile() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">My Profile</h1>
        <p className="text-sm text-slate-500">
          Manage your personal information and professional profile.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#26372d] text-white">
              <UserRound size={26} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">profile name</h2>
              <p className="text-sm text-slate-500">profile title</p>
              <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                Active Guide
              </span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#26372d] px-3 py-2 text-sm text-white hover:bg-[#34483b]">
            <Pencil size={15} />
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">Personal Information</h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-slate-700">profile email</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-slate-700">profile phone</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">About</p>
              <p className="leading-6 text-slate-600">profile aboute</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Languages size={16} />
            Languages
          </h3>

          <div className="flex flex-wrap gap-2">
            {/* {profile.languages.map((language) => (
              <span key={language} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                {language}
              </span>
            ))} */}
          </div>

          <h3 className="mb-3 mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
            <MapPin size={16} />
            Tour Areas
          </h3>

          <div className="flex flex-wrap gap-2">
            {/* {profile.areas.map((area) => (
              <span key={area} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
                {area}
              </span>
            ))} */}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Award size={16} />
            Certificates
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* {profile.certificates.map((certificate) => (
              <div key={certificate} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  <Award size={17} />
                </div>
                <p className="text-sm text-slate-700">{certificate}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <GuideLanguages />
        <GuideAreas />
        <GuideCertificates />
      </div>
    </div>
  );
}
