
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">

      {/* Hero Image */}
      <img
        src="/images/Azilal_ Nature, Culture and Craft.png"
        alt="Azilal - Nature, Culture and Traditional Crafts"
        className="w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* White Fog from Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[45%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.75) 70%, #ffffff 100%)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
        }}
      />

    </section>
  );
}
