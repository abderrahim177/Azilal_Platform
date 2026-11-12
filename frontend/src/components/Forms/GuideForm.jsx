
import { useState } from "react";
import {
  Mountain,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import FormInputs from "./FormInputs";
import axios from "axios";
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

const inputClass = "w-full h-10 rounded-md border border-stone-200 bg-white px-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10 transition";

const labelClass = "block text-sm font-medium text-stone-700 mb-1.5";

export default function GuideForm() {

  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false);

  const toggleItem = (item, list, setList) => {
    setList(
      list.includes(item)
        ? list.filter((value) => value !== item)
        : [...list, item]
    );
  };
  let Form = []
  const data = (data) => {
    Form = data
    return data
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = {
      ...Form,
    };
    try {
      const token = localStorage.getItem('Access_token')
      const response = await axios.post('http://127.0.0.1:8000/api/CompletProfile', formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
    } catch (err) {
      console.error("Registration error:", err);

      if (err.response) {
        const errors = err.response.data.errors;

        if (errors) {
          setError(
            Object.values(errors).flat().join(" ")
          );
        } else {
          setError(
            err.response.data.message || "Registration failed."
          );
        }
      } else if (err.request) {
        setError("Server not responding. Check your Laravel backend.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }finally{
      setLoading(false)
    }

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
        {/* form inputs */}
        <FormInputs
          handleSubmit={handleSubmit}
          toggleItem={toggleItem}
          labelClass={labelClass}
          inputClass={inputClass}
          areas={areas}
          languages={languages}
          data={data}
        />
      </main>
    </div>
  );
}
