
import HeroNavbar from "./Navbar";
import HeroContent from "./HeroContent";
import DestinationGallery from "./DestinationGallery";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full
      overflow-hidden">

      {/* Main container */}
      <div className="relative w-full h-full overflow-hidden
        rounded-sm border border-white/10">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center
          scale-105"
          style={{
            backgroundImage: "url('/public/images/Amazigh Mountain Valley at Sunset.png')",
          }}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r
          from-black/75 via-black/20 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t
          from-black/50 via-transparent to-black/20" />

        {/* Components */}
        <HeroNavbar />

        <HeroContent />

        <DestinationGallery />
      </div>
    </section>
  );
}