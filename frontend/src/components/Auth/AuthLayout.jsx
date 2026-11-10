
import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen w-full bg-[#f8f7f3] flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl border border-stone-200 px-2 py-2 sm:px-6 sm:py-7">

        <div className="w-full">
          <h1 className="text-2xl font-bold tracking-tight text-[#26372d] text-center">
            {title}
          </h1>

          <p className="text-xs text-stone-500 mt-2 mb-5 text-center">
            {subtitle}
          </p>

          {children}
        </div>

        <p className="text-[10px] text-stone-400 text-center mt-2">
          © 2026 Azilal Tourism. All rights reserved.
        </p>
      </div>
    </div>
  );
}
