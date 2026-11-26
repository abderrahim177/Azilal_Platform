
import { useState } from "react";
import { Languages, Plus, Trash2 } from "lucide-react";

const languageOptions = [
  "Arabic",
  "Tamazight",
  "French",
  "English",
  "Spanish",
  "German",
  "Italian",
  "Portuguese",
  "Other",
];

const levels = ["Beginner", "Intermediate", "Advanced", "Native"];

export default function GuideLanguages() {
  const [languages, setLanguages] = useState([
    { id: 1, name: "Arabic", level: "Native" },
    { id: 2, name: "French", level: "Intermediate" },
  ]);

  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("Intermediate");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!language) return;

    const alreadyExists = languages.some(
      (item) => item.name.toLowerCase() === language.toLowerCase()
    );

    if (alreadyExists) return;

    setLanguages((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: language,
        level,
      },
    ]);

    setLanguage("");
    setLevel("Intermediate");
  };

  const handleDelete = (id) => {
    setLanguages((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-slate-900">
          Languages
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Add the languages you can communicate with tourists.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-700">
              Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#26372d] focus:ring-1 focus:ring-[#26372d]"
            >
              <option value="">Select a language</option>

              {languageOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-700">
              Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#26372d] focus:ring-1 focus:ring-[#26372d]"
            >
              {levels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!language}
          className="flex items-center gap-2 rounded-lg bg-[#26372d] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#34483b] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus size={16} />
          Add Language
        </button>
      </form>

      {/* Languages list */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Your Languages
          </h3>

          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
            {languages.length}
          </span>
        </div>

        {languages.length === 0 ? (
          <p className="py-5 text-center text-xs text-slate-400">
            No languages added yet.
          </p>
        ) : (
          <div className="space-y-2">
            {languages.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                    <Languages size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.level}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="rounded-md p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label="Delete language"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
