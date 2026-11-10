
import { useEffect, useRef, useState } from "react";

const crafts = [
  {
    title: "Tapis Amazigh",
    description: "Des tapis traditionnels tissés à la main.",
    image: "/images/fantasia.jfif",
  },
  {
    title: "Poterie traditionnelle",
    description:
      "Un savoir-faire artisanal transmis de génération en génération.",
    image: "/images/pexels-mographe-30374223.jpg",
  },
  {
    title: "Artisanat local",
    description:
      "Des créations inspirées de la culture amazighe.",
    image: "/images/fantasia2.jfif",
  },
];

export default function CraftsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f5f0e7] px-5 py-20 md:px-12 lg:px-16 lg:py-28"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/artisan_Amazigh_Cpier.jpg')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#f5f0e7]/80" />

      {/* Top Gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,240,231,0.95), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[5px] text-[#a47743] md:text-sm">
            Héritage Amazigh
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#26372d] md:text-5xl lg:text-6xl">
            L'artisanat d'Azilal
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#a47743]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-[#625d53] md:text-base">
            Découvrez la beauté et l'authenticité des créations
            artisanales de notre région, un patrimoine riche
            transmis de génération en génération.
          </p>
        </div>

        {/* Crafts Cards */}
        <div className="mx-auto flex max-w-6xl flex-col gap-20 md:gap-28">

          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`craft-card w-full md:w-[88%] ${
                visible ? "craft-visible" : ""
              } ${
                index % 2 === 0
                  ? "self-start"
                  : "self-end"
              }`}
              style={{ "--delay": `${index * 0.35}s` }}
            >
              {/* Image */}
              <div className="group relative h-[280px] w-full overflow-hidden rounded-2xl shadow-xl shadow-[#26372d]/15 sm:h-[350px] md:h-[420px] lg:h-[490px]">

                <img
                  src={craft.image}
                  alt={craft.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Text */}
              <div className="mt-6 px-2 md:mt-8">
                <h3 className="text-2xl font-bold text-[#26372d] md:text-3xl lg:text-4xl">
                  {craft.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#777166] md:text-base">
                  {craft.description}
                </p>

                <div className="mt-5 h-[2px] w-16 rounded-full bg-[#a47743] transition-all duration-500 group-hover:w-28" />
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-24 text-center">
          <p className="text-sm font-medium italic tracking-wide text-[#a47743] md:text-base">
            L'art, la tradition et l'identité d'Azilal.
          </p>
        </div>

      </div>
    </section>
  );
}
