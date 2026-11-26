
import { useState } from "react";
import { MapPin, Plus, Trash2 } from "lucide-react";

const availableAreas = [
  "Azilal",
  "Cascades d'Ouzoud",
  "Bin El Ouidane",
  "Aït Bouguemez",
  "Demnate",
  "Aït M'hamed",
  "Zaouiat Ahansal",
  "Anergui",
];

export default function GuideAreas() {
  const [areas, setAreas] = useState([
    "Cascades d'Ouzoud",
    "Aït Bouguemez",
  ]);

  const [selectedArea, setSelectedArea] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!selectedArea || areas.includes(selectedArea)) return;

    setAreas((prev) => [...prev, selectedArea]);
    setSelectedArea("");
  };

  const handleDelete = (area) => {
    setAreas((prev) => prev.filter((item) => item !== area));
  };

  const remainingAreas = availableAreas.filter(
    (area) => !areas.includes(area)
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-slate-900">
          Tour Areas
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Select the destinations where you offer guided tours.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
      >
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-700">
            Destination
          </label>

          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#26372d] focus:ring-1 focus:ring-[#26372d]"
          >
            <option value="">Select an area</option>

            {remainingAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!selectedArea}
          className="flex items-center gap-2 rounded-lg bg-[#26372d] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#34483b] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus size={16} />
          Add Area
        </button>
      </form>

      {/* Areas list */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Your Tour Areas
          </h3>

          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
            {areas.length}
          </span>
        </div>

        {areas.length === 0 ? (
          <p className="py-5 text-center text-xs text-slate-400">
            No areas added yet.
          </p>
        ) : (
          <div className="space-y-2">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                    <MapPin size={17} />
                  </div>

                  <p className="text-sm font-medium text-slate-800">
                    {area}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(area)}
                  className="rounded-md p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${area}`}
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
