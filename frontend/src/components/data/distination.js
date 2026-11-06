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

  {
    id: 2,
    slug: "bin-el-ouidane",
    name: "Bin El Ouidane",
    category: "Lac & Montagne",
    shortDescription:
      "Un magnifique lac entouré de montagnes, idéal pour admirer les paysages et profiter du calme.",
    description:
      "Bin El Ouidane est une destination connue pour son lac et ses paysages montagneux. C'est un endroit idéal pour découvrir la beauté naturelle de la région.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    ],
    facts: [
      { label: "Type", value: "Lac et montagne" },
      { label: "Ambiance", value: "Calme & nature" },
      { label: "À découvrir", value: "Les panoramas du lac" },
    ],
    culture: {
      title: "Traditions locales",
      description:
        "Les villages autour du lac conservent un patrimoine amazigh riche, marqué par les traditions rurales et l'accueil chaleureux.",
      traditions: ["Traditions amazighes", "Vie rurale", "Cuisine traditionnelle"],
    },
    products: [
      {
        name: "Miel de montagne",
        description: "Un produit local apprécié pour son goût naturel.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
      {
        name: "Produits du terroir",
        description: "Des produits issus de l'agriculture locale.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
      },
    ],
    music: {
      title: "Les rythmes du Moyen Atlas",
      description:
        "Les chants et les rythmes amazighs font partie de l'identité culturelle des villages de montagne.",
      genre: "Chants traditionnels amazighs",
    },
  },

  {
    id: 3,
    slug: "ait-bouguemez",
    name: "Vallée des Aït Bouguemez",
    category: "Culture & Montagne",
    shortDescription:
      "Une vallée authentique connue pour ses villages, ses montagnes et son patrimoine amazigh.",
    description:
      "La vallée des Aït Bouguemez offre une immersion dans la vie traditionnelle du Haut Atlas. Ses villages, ses paysages et son patrimoine en font une destination culturelle remarquable.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
    facts: [
      { label: "Type", value: "Vallée montagneuse" },
      { label: "Ambiance", value: "Culture & authenticité" },
      { label: "À découvrir", value: "Villages et patrimoine" },
    ],
    culture: {
      title: "L'identité amazighe",
      description:
        "La vallée est réputée pour ses traditions amazighes, son architecture en terre, ses fêtes et son artisanat.",
      traditions: ["Architecture traditionnelle", "Tissage amazigh", "Fêtes locales"],
    },
    products: [
      {
        name: "Tapis traditionnel",
        description: "Des tapis tissés avec des motifs inspirés du patrimoine local.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600",
      },
      {
        name: "Miel de montagne",
        description: "Un produit du terroir des montagnes du Haut Atlas.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
    ],
    music: {
      title: "Ahwach",
      description:
        "L'Ahwach est une expression artistique collective qui associe chants, rythmes et danses traditionnelles.",
      genre: "Ahwach amazigh",
    },
  },
  {
    id: 3,
    slug: "ait-bouguemez",
    name: "Vallée des Aït Bouguemez",
    category: "Culture & Montagne",
    shortDescription:
      "Une vallée authentique connue pour ses villages, ses montagnes et son patrimoine amazigh.",
    description:
      "La vallée des Aït Bouguemez offre une immersion dans la vie traditionnelle du Haut Atlas. Ses villages, ses paysages et son patrimoine en font une destination culturelle remarquable.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
    facts: [
      { label: "Type", value: "Vallée montagneuse" },
      { label: "Ambiance", value: "Culture & authenticité" },
      { label: "À découvrir", value: "Villages et patrimoine" },
    ],
    culture: {
      title: "L'identité amazighe",
      description:
        "La vallée est réputée pour ses traditions amazighes, son architecture en terre, ses fêtes et son artisanat.",
      traditions: ["Architecture traditionnelle", "Tissage amazigh", "Fêtes locales"],
    },
    products: [
      {
        name: "Tapis traditionnel",
        description: "Des tapis tissés avec des motifs inspirés du patrimoine local.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600",
      },
      {
        name: "Miel de montagne",
        description: "Un produit du terroir des montagnes du Haut Atlas.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
    ],
    music: {
      title: "Ahwach",
      description:
        "L'Ahwach est une expression artistique collective qui associe chants, rythmes et danses traditionnelles.",
      genre: "Ahwach amazigh",
    },
  },
  {
    id: 3,
    slug: "ait-bouguemez",
    name: "Vallée des Aït Bouguemez",
    category: "Culture & Montagne",
    shortDescription:
      "Une vallée authentique connue pour ses villages, ses montagnes et son patrimoine amazigh.",
    description:
      "La vallée des Aït Bouguemez offre une immersion dans la vie traditionnelle du Haut Atlas. Ses villages, ses paysages et son patrimoine en font une destination culturelle remarquable.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
    facts: [
      { label: "Type", value: "Vallée montagneuse" },
      { label: "Ambiance", value: "Culture & authenticité" },
      { label: "À découvrir", value: "Villages et patrimoine" },
    ],
    culture: {
      title: "L'identité amazighe",
      description:
        "La vallée est réputée pour ses traditions amazighes, son architecture en terre, ses fêtes et son artisanat.",
      traditions: ["Architecture traditionnelle", "Tissage amazigh", "Fêtes locales"],
    },
    products: [
      {
        name: "Tapis traditionnel",
        description: "Des tapis tissés avec des motifs inspirés du patrimoine local.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600",
      },
      {
        name: "Miel de montagne",
        description: "Un produit du terroir des montagnes du Haut Atlas.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
    ],
    music: {
      title: "Ahwach",
      description:
        "L'Ahwach est une expression artistique collective qui associe chants, rythmes et danses traditionnelles.",
      genre: "Ahwach amazigh",
    },
  },
  {
    id: 3,
    slug: "ait-bouguemez",
    name: "Vallée des Aït Bouguemez",
    category: "Culture & Montagne",
    shortDescription:
      "Une vallée authentique connue pour ses villages, ses montagnes et son patrimoine amazigh.",
    description:
      "La vallée des Aït Bouguemez offre une immersion dans la vie traditionnelle du Haut Atlas. Ses villages, ses paysages et son patrimoine en font une destination culturelle remarquable.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
    facts: [
      { label: "Type", value: "Vallée montagneuse" },
      { label: "Ambiance", value: "Culture & authenticité" },
      { label: "À découvrir", value: "Villages et patrimoine" },
    ],
    culture: {
      title: "L'identité amazighe",
      description:
        "La vallée est réputée pour ses traditions amazighes, son architecture en terre, ses fêtes et son artisanat.",
      traditions: ["Architecture traditionnelle", "Tissage amazigh", "Fêtes locales"],
    },
    products: [
      {
        name: "Tapis traditionnel",
        description: "Des tapis tissés avec des motifs inspirés du patrimoine local.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600",
      },
      {
        name: "Miel de montagne",
        description: "Un produit du terroir des montagnes du Haut Atlas.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
      },
    ],
    music: {
      title: "Ahwach",
      description:
        "L'Ahwach est une expression artistique collective qui associe chants, rythmes et danses traditionnelles.",
      genre: "Ahwach amazigh",
    },
  },
];

export default destinations;