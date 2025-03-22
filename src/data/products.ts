// Types pour les données
export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  rating: number;
  reviewCount: number;
  features?: string[];
  specs?: Record<string, string>;
  images: string[];
  colors?: string[];
  stock?: number;
  categoryId: string;
  isNew?: boolean;
  isBestseller?: boolean;
  relatedProducts?: number[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
}

// Données factices pour les catégories
export const categories: Category[] = [
  { id: "legumes", name: "Légumes", count: 12, image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=800&auto=format&fit=crop" },
  { id: "fruits", name: "Fruits", count: 8, image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop" },
  { id: "bio", name: "Produits Bio", count: 15, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" },
  { id: "nouveautes", name: "Nouveautés", count: 7, image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop" },
];

// Données factices pour les produits
export const products: Product[] = [
  {
    id: 1,
    name: "Carottes Bio Premium",
    description: "Carottes fraîches cultivées sans pesticides",
    longDescription: "Nos carottes bio premium sont cultivées avec soin dans nos fermes partenaires, sans utilisation de pesticides ni d'engrais chimiques. Riches en vitamines et minéraux, elles sont récoltées à maturité optimale pour vous garantir une saveur exceptionnelle et des qualités nutritionnelles préservées.",
    price: 2.99,
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Cultivées sans pesticides",
      "Riches en bêta-carotène",
      "Récoltées à la main",
      "Fraîcheur garantie",
      "Provenance locale",
      "Certification bio"
    ],
    specs: {
      "Origine": "France",
      "Certification": "Agriculture Biologique",
      "Conservation": "1 semaine au réfrigérateur",
      "Conditionnement": "Botte de 500g",
      "Saison": "Toute l'année",
      "Valeur nutritive": "41 kcal/100g"
    },
    images: [
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Orange", "Jaune", "Violet"],
    stock: 150,
    categoryId: "legumes",
    isNew: true,
    isBestseller: true,
    relatedProducts: [2, 3, 5]
  },
  {
    id: 2,
    name: "Pommes Gala Bio",
    description: "Pommes croquantes et juteuses de variété Gala",
    longDescription: "Nos pommes Gala bio sont cultivées dans des vergers respectueux de l'environnement. Leur chair ferme et juteuse offre un équilibre parfait entre douceur et acidité. Idéales pour une consommation directe ou en cuisine, ces pommes sont récoltées à maturité pour garantir une qualité gustative optimale.",
    price: 3.49,
    rating: 4.7,
    reviewCount: 89,
    features: [
      "Culture biologique certifiée",
      "Saveur douce et sucrée",
      "Texture croquante",
      "Sans traitement post-récolte",
      "Conservation longue durée",
      "Riches en fibres et antioxydants"
    ],
    specs: {
      "Origine": "France",
      "Variété": "Gala",
      "Certification": "Agriculture Biologique",
      "Conservation": "3 semaines au réfrigérateur",
      "Conditionnement": "Sachet de 1kg (environ 6 pommes)",
      "Valeur nutritive": "52 kcal/100g"
    },
    images: [
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Rouge", "Jaune"],
    stock: 80,
    categoryId: "fruits",
    isNew: true,
    isBestseller: false,
    relatedProducts: [1, 3, 4]
  },
  {
    id: 3,
    name: "Panier de Légumes Frais",
    description: "Assortiment de légumes de saison fraîchement récoltés",
    longDescription: "Notre panier de légumes frais vous propose une sélection variée de produits de saison, récoltés le jour même de la livraison. Composé selon les récoltes du moment, ce panier vous permet de découvrir ou redécouvrir des saveurs authentiques tout en variant votre alimentation.",
    price: 12.99,
    rating: 4.5,
    reviewCount: 56,
    features: [
      "Légumes 100% de saison",
      "Récoltés le jour même",
      "Variété hebdomadaire",
      "Produits locaux",
      "Agriculture raisonnée",
      "Fraîcheur garantie"
    ],
    specs: {
      "Contenu": "5-7 variétés différentes",
      "Poids": "Environ 3kg",
      "Origine": "Producteurs locaux",
      "Fréquence": "Livraison hebdomadaire possible",
      "Conservation": "1 semaine en moyenne",
      "Conditionnement": "Panier réutilisable"
    },
    images: [
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Mixte"],
    stock: 22,
    categoryId: "legumes",
    isNew: false,
    isBestseller: true,
    relatedProducts: [1, 4, 5]
  },
  {
    id: 4,
    name: "Jus de Carotte Frais",
    description: "Jus pressé à froid, sans additifs ni conservateurs",
    longDescription: "Notre jus de carotte est pressé à froid pour préserver au maximum les nutriments et les saveurs. Sans aucun additif, conservateur ou sucre ajouté, il vous offre tous les bienfaits de la carotte dans un format pratique. Riche en bêta-carotène et en vitamines, c'est un allié santé au quotidien.",
    price: 4.99,
    rating: 4.6,
    reviewCount: 78,
    features: [
      "Pressé à froid",
      "100% pur jus",
      "Sans sucre ajouté",
      "Riche en vitamines",
      "Bouteille en verre recyclable",
      "Conservation courte pour fraîcheur maximale"
    ],
    specs: {
      "Contenu": "500ml",
      "Ingrédients": "100% jus de carotte",
      "Conservation": "3 jours au réfrigérateur",
      "Conditionnement": "Bouteille en verre",
      "Valeur nutritive": "45 kcal/100ml",
      "Méthode": "Extraction à froid"
    },
    images: [
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Orange"],
    stock: 45,
    categoryId: "bio",
    isNew: false,
    isBestseller: false,
    relatedProducts: [1, 3, 6]
  },
  {
    id: 5,
    name: "Graines de Carotte Bio",
    description: "Semences biologiques pour votre potager",
    longDescription: "Nos graines de carotte bio sont sélectionnées parmi les meilleures variétés pour leur goût et leur facilité de culture. Certifiées biologiques, ces semences n'ont subi aucun traitement chimique et vous permettront de cultiver vos propres carottes savoureuses. Idéales pour les jardiniers débutants comme expérimentés.",
    price: 3.29,
    rating: 4.3,
    reviewCount: 42,
    features: [
      "Semences biologiques certifiées",
      "Variété Nantaise (mi-longue)",
      "Taux de germination élevé",
      "Culture facile",
      "Récolte après 70-80 jours",
      "Sachet refermable"
    ],
    specs: {
      "Contenu": "500 graines environ",
      "Variété": "Nantaise",
      "Certification": "Agriculture Biologique",
      "Période de semis": "Mars à Juin",
      "Conservation": "2 ans dans un endroit frais et sec",
      "Origine": "France"
    },
    images: [
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620577438168-c1a6fc0dc5c8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476655-ab0c26c69cbf?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Naturel"],
    stock: 120,
    categoryId: "bio",
    isNew: false,
    isBestseller: false,
    relatedProducts: [1, 3, 6]
  },
  {
    id: 6,
    name: "Huile Essentielle de Carotte",
    description: "Huile 100% pure et naturelle extraite de graines de carotte",
    longDescription: "Notre huile essentielle de carotte est obtenue par distillation à la vapeur des graines de carotte sauvage. Reconnue pour ses propriétés régénérantes et tonifiantes, elle est particulièrement appréciée en aromathérapie et en cosmétique naturelle. Son parfum chaud et terreux apporte une note originale à vos préparations.",
    price: 15.99,
    rating: 4.4,
    reviewCount: 35,
    features: [
      "100% pure et naturelle",
      "Extraction par distillation à la vapeur",
      "Sans additifs ni conservateurs",
      "Flacon en verre ambré protecteur",
      "Compte-gouttes intégré",
      "Certification biologique"
    ],
    specs: {
      "Contenu": "10ml",
      "Nom botanique": "Daucus carota",
      "Partie distillée": "Graines",
      "Méthode d'extraction": "Distillation à la vapeur",
      "Conservation": "3 ans à l'abri de la lumière",
      "Origine": "France"
    },
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611073761523-4e3f4a4f05e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612482830255-5c7b2397ce8b?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Ambre"],
    stock: 35,
    categoryId: "bio",
    isNew: true,
    isBestseller: false,
    relatedProducts: [4, 5, 3]
  }
];

// Fonction pour obtenir un produit par son ID
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

// Fonction pour obtenir les produits liés
export function getRelatedProducts(productIds: number[]): Product[] {
  return products.filter(product => productIds.includes(product.id));
}

// Fonction pour obtenir les produits par catégorie
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId);
}

// Fonction pour obtenir les produits nouveaux
export function getNewProducts(): Product[] {
  return products.filter(product => product.isNew);
}

// Fonction pour obtenir les produits bestsellers
export function getBestsellerProducts(): Product[] {
  return products.filter(product => product.isBestseller);
} 