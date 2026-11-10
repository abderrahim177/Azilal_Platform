
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Auth/AuthLayout";
import GoogleButton from "../../Auth/GoogleButton";
import RoleSelector from "../../Auth/RoleSelector";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Default role
  const [role, setRole] = useState("visitor");
   const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = {
      name,
      email,
      password,
      role,
    };

    console.log("Register data:", formData);
    if (role === "guide") {
    navigate("/guide-setup");
  } else if (role === "hotel_manager") {
    navigate("/hotel-setup");
  } else {
    navigate("/");
  }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join us and start discovering the beauty of Azilal."
    >
      <GoogleButton />

      <div className="flex items-center gap-4 my-4">
        <div className="h-px bg-stone-200 flex-1" />
        <span className="text-xs text-stone-400">
          OR REGISTER WITH EMAIL
        </span>
        <div className="h-px bg-stone-200 flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Full name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-stone-700">
            Full name
          </label>

          <div className="relative">
            <UserRound
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-stone-200 outline-none text-sm focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-stone-700">
            Email address
          </label>

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-stone-200 outline-none text-sm focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-stone-700">
            Password
          </label>

          <div className="relative">
            <LockKeyhole
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full h-10 pl-10 pr-11 rounded-lg border border-stone-200 outline-none text-sm focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-stone-700">
            Confirm password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className="w-full h-10 px-4 rounded-lg border border-stone-200 outline-none text-sm focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
          />
        </div>

        {/* Account Role */}
        <RoleSelector
          value={role}
          onChange={setRole}
        />

        {/* Terms */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 accent-[#26372d]"
          />

          <label
            htmlFor="terms"
            className="text-xs text-stone-500 leading-relaxed"
          >
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-medium text-[#26372d] underline"
            >
              Terms of Service
            </Link>{" "}
            and Privacy Policy.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-10 rounded-lg bg-[#26372d] text-white text-sm font-semibold hover:bg-[#354b3c] transition-all shadow-sm"
        >
          Create account
        </button>
      </form>

      <p className="text-center text-sm text-stone-500 mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#26372d] hover:text-amber-700"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
