
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import AuthLayout from "../../Auth/AuthLayout";
import GoogleButton from "../../Auth/GoogleButton";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا غادي نربطو Laravel API من بعد
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account."
    >
      <GoogleButton />

      <div className="flex items-center gap-4 my-6">
        <div className="h-px bg-stone-200 flex-1" />
        <span className="text-xs text-stone-400">OR CONTINUE WITH EMAIL</span>
        <div className="h-px bg-stone-200 flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-stone-700">
            Email address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-stone-200 bg-white text-sm outline-none transition focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-stone-700">
              Password
            </label>
            <Link to="/forgot-password" className="text-xs font-medium text-[#526b58] hover:text-amber-700">
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="w-full h-11 pl-10 pr-11 rounded-lg border border-stone-200 bg-white text-sm outline-none transition focus:border-[#26372d] focus:ring-2 focus:ring-[#26372d]/10"
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

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="accent-[#26372d]" />
          <label htmlFor="remember" className="text-sm text-stone-500">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-lg bg-[#26372d] text-white text-sm font-semibold hover:bg-[#354b3c] transition-all shadow-sm"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-stone-500 mt-7">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-[#26372d] hover:text-amber-700">
          Create account
        </Link>
      </p>
    </AuthLayout>
  );
}
