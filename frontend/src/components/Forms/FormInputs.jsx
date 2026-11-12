
import React, { useState, useEffect } from "react";
import {
  UserRound,
  Upload,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const FormInputs = ({
  languages,
  areas,
  inputClass,
  labelClass,
  handleSubmit,
  data,
}) => {
  const [ProfileImage, setProfileImage] = useState(null);
  const [imageError, setImageError] = useState("");

  const [form, setForm] = useState({
    selectedLanguages: [],
    selectedAreas: [],
    phone: "",
    bio: "",
    experience: "",
  });

  // Update normal inputs
  const updateField = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toggle languages and areas
  const toggleSelection = (item, field) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter((value) => value !== item)
        : [...prev[field], item],
    }));
  };

  // Send updated data to parent
  useEffect(() => {
    data({
      ...form,
      ProfileImage,
    });
  }, [form, ProfileImage, data]);

  // Handle profile image upload
  const handleProfileImageUpload = (e) => {
    const file = e.target.files?.[0];

    setImageError("");

    if (!file) return;

    // Validate image type
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      setImageError("Please upload a JPG or PNG image.");
      e.target.value = "";
      return;
    }

    // Validate image size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setImageError("Image size must not exceed 2MB.");
      e.target.value = "";
      return;
    }

    setProfileImage(file);

    // Reset input to allow selecting the same image again
    e.target.value = "";
  };

  // Remove profile image
  const removeProfileImage = () => {
    setProfileImage(null);
    setImageError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Professional information */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">

        <SectionHeading
          icon={UserRound}
          title="Professional information"
          description="Add your contact details and introduce yourself."
        />

        <div className="grid sm:grid-cols-2 gap-4">

          {/* Phone */}
          <div>
            <label className={labelClass}>
              Phone number
            </label>

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={updateField}
              className={inputClass}
              placeholder="+212 6XX XXX XXX"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className={labelClass}>
              Years of experience
            </label>

            <select
              name="experience"
              value={form.experience}
              onChange={updateField}
              className={inputClass}
              required
            >
              <option value="">Select experience</option>
              <option value="less_than_1">
                Less than 1 year
              </option>
              <option value="1_3">
                1 - 3 years
              </option>
              <option value="3_5">
                3 - 5 years
              </option>
              <option value="5_plus">
                More than 5 years
              </option>
            </select>
          </div>

          {/* Bio */}
          <div className="sm:col-span-2">
            <label className={labelClass}>
              About you
            </label>

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
          icon={UserRound}
          title="Languages"
          description="Select the languages you speak."
        />

        <div className="flex flex-wrap gap-2">

          {languages.map((language) => {
            const active = form.selectedLanguages.includes(language);

            return (
              <button
                key={language}
                type="button"
                onClick={() =>
                  toggleSelection(language, "selectedLanguages")
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
          icon={UserRound}
          title="Areas of expertise"
          description="Select the areas where you offer your guide services."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">

          {areas.map((area) => {
            const active = form.selectedAreas.includes(area);

            return (
              <button
                key={area}
                type="button"
                onClick={() =>
                  toggleSelection(area, "selectedAreas")
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

      {/* Profile Image */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">

        <SectionHeading
          icon={UserRound}
          title="Profile Image"
          description="Upload a professional photo for your guide profile."
        />

        <label className="flex flex-col items-center justify-center border border-dashed border-stone-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#26372d] hover:bg-stone-50 transition">

          {ProfileImage ? (
            <div className="flex flex-col items-center gap-3">

              <img
                src={URL.createObjectURL(ProfileImage)}
                alt="Profile preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-stone-200"
              />

              <span className="text-sm font-medium text-stone-700">
                {ProfileImage.name}
              </span>

              <span className="text-xs text-stone-400">
                Click to change your photo
              </span>

            </div>
          ) : (
            <>
              <Upload
                size={22}
                className="text-stone-400 mb-2"
              />

              <span className="text-sm font-medium text-stone-700">
                Click to upload profile image
              </span>

              <span className="text-xs text-stone-400 mt-1">
                JPG or PNG · Maximum 2MB
              </span>
            </>
          )}

          <input
            name="profile_image"
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={handleProfileImageUpload}
          />

        </label>

        {/* Image error */}
        {imageError && (
          <p className="text-xs text-red-500 mt-2">
            {imageError}
          </p>
        )}

        {/* Remove image */}
        {ProfileImage && (
          <button
            type="button"
            onClick={removeProfileImage}
            className="mt-3 text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <X size={14} />
            Remove image
          </button>
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
          disabled={
            !form.selectedLanguages.length ||
            !form.selectedAreas.length
          }
          className="w-full sm:w-auto h-10 px-6 rounded-md bg-[#26372d] text-white text-sm font-medium hover:bg-[#354b3c] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          Submit guide profile
          <ArrowRight size={16} />
        </button>

      </div>

    </form>
  );
};

export default FormInputs;
