export default function SectionHeading({ icon: Icon, title, description }) {
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