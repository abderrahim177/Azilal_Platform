// src/data/destinations.js

const destinations = [
  {
    id: 1,
    slug: "cascades-ouzoud",
    name: "Cascades d'Ouzoud",
    category: "Nature & Aventure",
    shortDescription:
      "Découvrez l'une des plus belles cascades du Maroc, entourée de montagnes et d'oliviers.",
    description:
      "Les cascades d'Ouzoud sont un lieu naturel exceptionnel. Avec leurs eaux impressionnantes, leurs paysages verdoyants et leurs petits sentiers, elles offrent une expérience unique au cœur de la région d'Azilal.",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
    ],
    facts: [
      { label: "Type", value: "Cascade naturelle" },
      { label: "Ambiance", value: "Nature & détente" },
      { label: "À découvrir", value: "Les sentiers et les paysages" },
    ],
    culture: {
      title: "La culture de la région",
      description:
        "La région est connue pour son hospitalité, ses traditions amazighes et son mode de vie lié à la nature et à la montagne.",
      traditions: ["Hospitalité amazighe", "Artisanat traditionnel", "Cuisine locale"],
    },
    products: [
      {
        name: "Huile d'olive",
        description: "Un produit traditionnel issu des oliveraies de la région.",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600",
      },
      {
        name: "Miel naturel",
        description: "Un produit apprécié dans les villages de montagne.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
      {
        name: "Tapis amazigh",
        description: "Un artisanat traditionnel avec des motifs et couleurs authentiques.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600",
      },
    ],
    music: {
      title: "La musique amazighe",
      description:
        "Découvrez les rythmes et les chants traditionnels amazighs qui accompagnent les fêtes et les rassemblements locaux.",
      genre: "Musique amazighe traditionnelle",
    },
  },
 
];

export default destinations;