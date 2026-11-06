export default function DestinationCard({
  image,
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl
      border border-white/70 group ${className}`}
    >

      <img
        src={image}
        className="w-full h-full object-cover
        transition-transform duration-700
        group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t
        from-black/50 via-transparent to-black/20" />

      {/* Card information */}
      <div className="absolute top-3 left-3 right-3
        flex justify-between items-center">
      </div>

    </div>
  );
}