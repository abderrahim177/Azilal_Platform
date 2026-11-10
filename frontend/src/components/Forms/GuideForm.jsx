
import { useState } from "react";
import {
  Mountain,
  UserRound,
  Languages,
  MapPin,
  Award,
  Upload,
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const languages = [
  "Arabic",
  "Amazigh",
  "French",
  "English",
  "Spanish",
  "German",
];

const areas = [
  "Azilal",
  "Cascades d'Ouzoud",
  "Bin El Ouidane",
  "Aït Bouguemez",
  "Demnate",
  "Aït M'hamed",
  "Zaouiat Ahansal",
  "Anergui",
];

const inputClass =
  "w-full h-10 rounded-md border border-stone-200 bg-white px-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10 transition";

const labelClass = "block text-sm font-medium text-stone-700 mb-1.5";

function SectionHeading({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="w-9 h-9 shrink-0 rounded-lg bg-[#26372d]/[0.07] text-[#26372d] flex items-center justify-center">
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-stone-800">{title}</h2>
        <p className="text-xs text-stone-500 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function GuideForm() {
  const [form, setForm] = useState({
    professionalTitle: "",
    phone: "",
    bio: "",
    experience: "",
  });

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleItem = (item, list, setList) => {
    setList(
      list.includes(item)
        ? list.filter((value) => value !== item)
        : [...list, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...form,
      languages: selectedLanguages,
      areas: selectedAreas,
      certificates,
    };

    console.log("Guide profile:", formData);
    // من بعد نربطو هاد المعلومات مع Laravel API
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-stone-800">
      {/* Header */}
      <header className="h-16 bg-white border-b border-stone-200 px-5 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#26372d] flex items-center justify-center">
            <Mountain size={20} className="text-amber-400" />
          </div>
          <span className="text-lg font-bold text-[#26372d]">
            Azilal<span className="text-amber-600">.</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-xs text-stone-500">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          Guide account setup
        </div>

        <Link
          to="/register"
          className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#26372d]"
        >
          <ArrowLeft size={15} />
          Back
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 lg:py-10">
        {/* Page title */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Professional profile
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#26372d]">
            Complete your guide profile
          </h1>
          <p className="text-sm text-stone-500 mt-2 max-w-2xl">
            Tell us about your experience, languages and the areas you cover
            to help travelers discover your guided tours.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <div className="h-1 flex-1 rounded-full bg-[#26372d]" />
            <div className="h-1 flex-1 rounded-full bg-stone-200" />
            <div className="h-1 flex-1 rounded-full bg-stone-200" />
          </div>
          <p className="text-[11px] text-stone-400 mt-2">Professional information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Professional information */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <SectionHeading
              icon={UserRound}
              title="Professional information"
              description="Add your contact details and introduce yourself."
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Professional title</label>
                <input
                  name="professionalTitle"
                  value={form.professionalTitle}
                  onChange={updateField}
                  className={inputClass}
                  placeholder="e.g. Mountain tour guide"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  className={inputClass}
                  placeholder="+212 6XX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Years of experience</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="1_3">1 - 3 years</option>
                  <option value="3_5">3 - 5 years</option>
                  <option value="5_plus">More than 5 years</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>About you</label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={updateField}
                  rows={3}
                  maxLength={1000}
                  className={`${inputClass} h-auto py-3 resize-y`}
                  placeholder="Describe your experience, your specialties and the tours you offer..."
                  required
                />
                <p className="text-right text-[11px] text-stone-400 mt-1">
                  {form.bio.length}/1000
                </p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <SectionHeading
              icon={Languages}
              title="Languages"
              description="Select all languages you can use with travelers."
            />

            <div className="flex flex-wrap gap-2">
              {languages.map((language) => {
                const active = selectedLanguages.includes(language);

                return (
                  <button
                    key={language}
                    type="button"
                    onClick={() =>
                      toggleItem(language, selectedLanguages, setSelectedLanguages)
                    }
                    className={`px-3 py-2 rounded-md border text-xs font-medium transition ${
                      active
                        ? "border-[#26372d] bg-[#26372d]/[0.06] text-[#26372d]"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {active ? "✓ " : "+ "}
                    {language}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Areas */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <SectionHeading
              icon={MapPin}
              title="Service areas"
              description="Select the places in Azilal where you offer guided tours."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {areas.map((area) => {
                const active = selectedAreas.includes(area);

                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() =>
                      toggleItem(area, selectedAreas, setSelectedAreas)
                    }
                    className={`min-h-10 px-3 py-2 rounded-md border text-left text-xs transition ${
                      active
                        ? "border-[#26372d] bg-[#26372d]/[0.06] text-[#26372d] font-medium"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {active ? "✓ " : ""}
                    {area}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Certificates */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <SectionHeading
              icon={Award}
              title="Certificates & documents"
              description="Upload your professional certificates or guide license, if available."
            />

            <label className="flex flex-col items-center justify-center border border-dashed border-stone-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#26372d] hover:bg-stone-50 transition">
              <Upload size={22} className="text-stone-400 mb-2" />
              <span className="text-sm font-medium text-stone-700">
                Click to upload certificates
              </span>
              <span className="text-xs text-stone-400 mt-1">
                PDF, JPG or PNG · Multiple files allowed
              </span>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                className="hidden"
                onChange={(e) =>
                  setCertificates((prev) => [
                    ...prev,
                    ...Array.from(e.target.files || []),
                  ])
                }
              />
            </label>

            {certificates.length > 0 && (
              <div className="mt-3 space-y-2">
                {certificates.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-md bg-stone-50 border border-stone-200 px-3 py-2"
                  >
                    <span className="text-xs text-stone-600 truncate">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setCertificates((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="text-stone-400 hover:text-red-600"
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-1">
            <Link
              to="/register"
              className="w-full sm:w-auto h-10 px-5 rounded-md border border-stone-200 bg-white text-sm font-medium text-stone-600 hover:bg-stone-50 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={15} />
              Back to registration
            </Link>

            <button
              type="submit"
              disabled={!selectedLanguages.length || !selectedAreas.length}
              className="w-full sm:w-auto h-10 px-6 rounded-md bg-[#26372d] text-white text-sm font-medium hover:bg-[#354b3c] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              Submit guide profile
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
