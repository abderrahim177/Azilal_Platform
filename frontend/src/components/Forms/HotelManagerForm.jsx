
import { useState } from "react";
import {
  Mountain,
  Hotel,
  MapPin,
  Plus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  "Azilal",
  "Ouzoud",
  "Bin El Ouidane",
  "Demnate",
  "Aït Bouguemez",
  "Aït M'hamed",
  "Zaouiat Ahansal",
  "Anergui",
  "Other",
];

const categories = [
  "Unclassified",
  "1 Star",
  "2 Stars",
  "3 Stars",
  "4 Stars",
  "5 Stars",
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

const createHotel = () => ({
  id: crypto.randomUUID(),
  name: "",
  category: "",
  location: "",
  address: "",
  description: "",
});

export default function HotelManagerForm() {
  const [manager, setManager] = useState({
    phone: "",
    businessEmail: "",
  });

  const [hotels, setHotels] = useState([createHotel()]);

  const updateManager = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  const updateHotel = (id, field, value) => {
    setHotels((prev) =>
      prev.map((hotel) =>
        hotel.id === id ? { ...hotel, [field]: value } : hotel
      )
    );
  };

  const addHotel = () => {
    setHotels((prev) => [...prev, createHotel()]);
  };

  const removeHotel = (id) => {
    setHotels((prev) => prev.filter((hotel) => hotel.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...manager,
      hotels: hotels.map(({ id, ...hotel }) => hotel),
    };

    console.log("Hotel manager profile:", formData);

    // من بعد نربطو المعلومات مع Laravel API
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
          Hotel manager account setup
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
            Business profile
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#26372d]">
            Register your hotels
          </h1>

          <p className="text-sm text-stone-500 mt-2 max-w-2xl">
            Add your hotel information and help travelers find the right
            accommodation in the Azilal region.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <div className="h-1 flex-1 rounded-full bg-[#26372d]" />
            <div className="h-1 flex-1 rounded-full bg-stone-200" />
            <div className="h-1 flex-1 rounded-full bg-stone-200" />
          </div>

          <p className="text-[11px] text-stone-400 mt-2">
            Business information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Manager contact */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <SectionHeading
              icon={Building2}
              title="Manager contact information"
              description="Contact details for the person managing these properties."
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  name="phone"
                  value={manager.phone}
                  onChange={updateManager}
                  className={inputClass}
                  placeholder="+212 6XX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Business email</label>
                <input
                  type="email"
                  name="businessEmail"
                  value={manager.businessEmail}
                  onChange={updateManager}
                  className={inputClass}
                  placeholder="contact@yourhotel.com"
                  required
                />
              </div>
            </div>
          </section>

          {/* Hotels */}
          <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <SectionHeading
                icon={Hotel}
                title="Hotel information"
                description="Add the hotels or accommodations you manage."
              />

              <button
                type="button"
                onClick={addHotel}
                className="h-9 shrink-0 px-3 rounded-md bg-[#26372d]/[0.07] text-[#26372d] text-xs font-semibold hover:bg-[#26372d]/[0.12] flex items-center justify-center gap-2"
              >
                <Plus size={15} />
                Add another hotel
              </button>
            </div>

            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  className="border border-stone-200 rounded-lg p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-md bg-[#26372d] text-white text-xs flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>

                      <h3 className="text-sm font-semibold text-stone-800">
                        Hotel {index + 1}
                      </h3>
                    </div>

                    {hotels.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeHotel(hotel.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-md text-stone-400 hover:bg-red-50 hover:text-red-600 transition"
                        title="Remove hotel"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Hotel name</label>
                      <input
                        value={hotel.name}
                        onChange={(e) =>
                          updateHotel(hotel.id, "name", e.target.value)
                        }
                        className={inputClass}
                        placeholder="e.g. Hotel Atlas"
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Hotel category</label>
                      <select
                        value={hotel.category}
                        onChange={(e) =>
                          updateHotel(hotel.id, "category", e.target.value)
                        }
                        className={inputClass}
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>City / Area</label>
                      <select
                        value={hotel.location}
                        onChange={(e) =>
                          updateHotel(hotel.id, "location", e.target.value)
                        }
                        className={inputClass}
                        required
                      >
                        <option value="">Select location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Full address</label>
                      <input
                        value={hotel.address}
                        onChange={(e) =>
                          updateHotel(hotel.id, "address", e.target.value)
                        }
                        className={inputClass}
                        placeholder="Street, district, landmark..."
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelClass}>Hotel description</label>
                      <textarea
                        value={hotel.description}
                        onChange={(e) =>
                          updateHotel(hotel.id, "description", e.target.value)
                        }
                        rows={3}
                        maxLength={1000}
                        className={`${inputClass} h-auto py-3 resize-y`}
                        placeholder="Describe the hotel, its services, rooms and facilities..."
                        required
                      />
                      <p className="text-right text-[11px] text-stone-400 mt-1">
                        {hotel.description.length}/1000
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addHotel}
              className="mt-4 w-full h-10 rounded-md border border-dashed border-stone-300 text-xs font-medium text-stone-600 hover:border-[#26372d] hover:text-[#26372d] transition flex items-center justify-center gap-2"
            >
              <Plus size={15} />
              Add another property
            </button>
          </section>

          {/* Location note */}
          <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/70 p-4">
            <MapPin size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-amber-900">
              Make sure each hotel's location and address are accurate.
              Travelers will use this information to find your property.
            </p>
          </div>

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
              className="w-full sm:w-auto h-10 px-6 rounded-md bg-[#26372d] text-white text-sm font-medium hover:bg-[#354b3c] transition flex items-center justify-center gap-2"
            >
              Submit business profile
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
