
import { Compass, UserRound, Hotel, Check } from "lucide-react";

const roles = [
  {
    id: "visitor",
    title: "Visitor",
    description: "Discover destinations and explore Azilal.",
    icon: Compass,
  },
  {
    id: "guide",
    title: "Tourist Guide",
    description: "Share your experience and offer guided tours.",
    icon: UserRound,
  },
  {
    id: "hotel_manager",
    title: "Hotel Manager",
    description: "Manage your hotel and welcome visitors.",
    icon: Hotel,
  },
];

export default function RoleSelector({ value, onChange }) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-[#26372d]">
          Choose your account type
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Select how you want to use Azilal Tourism.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {roles.map((role) => {
          const Icon = role.icon;
          const selected = value === role.id;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => onChange(role.id)}
              className={`relative flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all duration-200
                ${
                  selected
                    ? "border-[#26372d] bg-[#26372d]/5 shadow-sm"
                    : "border-stone-200 bg-white hover:border-[#26372d]/50"
                }`}
            >
              {selected && (
                <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#26372d] flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </span>
              )}

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2
                  ${
                    selected
                      ? "bg-[#26372d] text-amber-400"
                      : "bg-stone-100 text-stone-600"
                  }`}
              >
                <Icon size={21} />
              </div>

              <span className="text-xs font-semibold text-[#26372d]">
                {role.title}
              </span>

              <span className="text-[10px] text-stone-500 mt-1 leading-relaxed">
                {role.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
