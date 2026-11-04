
import { useEffect, useRef, useState } from "react";

const crafts = [
  {
    title: "Tapis Amazigh",
    description: "Des tapis traditionnels tissés à la main.",
    image: "/images/pexels-sonniewing-34448175.jpg",
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
    image: "/images/pexels-kaeciine-33282224.jpg",
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
      className="relative overflow-hidden bg-[#f5f0e7] px-6 pb-24 pt-10 md:px-16"
    >
      {/* Soft fog transition from Hero */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,240,231,0.25) 0%, rgba(245,240,231,0.75) 45%, #f5f0e7 100%)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[5px] text-[#a47743]">
            Héritage Amazigh
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#26372d] md:text-6xl">
            L'artisanat d'Azilal
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#777166]">
            Découvrez la beauté et l'authenticité des créations
            artisanales de notre région.
          </p>
        </div>

        {/* Crafts Cards */}
        <div className="mx-auto flex max-w-3xl flex-col gap-16">

          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`craft-card ${
                visible ? "craft-visible" : ""
              } ${index % 2 === 0 ? "self-start" : "self-end"}`}
              style={{ "--delay": `${index * 0.5}s` }}
            >
              <div className="craft-image-wrapper">
                <img
                  src={craft.image}
                  alt={craft.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-semibold text-[#26372d]">
                  {craft.title}
                </h3>

                <p className="mt-2 text-[#777166]">
                  {craft.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
