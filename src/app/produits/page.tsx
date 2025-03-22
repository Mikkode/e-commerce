import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import RatingStars from "@/components/ui/RatingStars";

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Tous nos produits | TechStore",
  description: "Découvrez notre gamme complète de produits technologiques innovants pour améliorer votre quotidien.",
};

// Données factices pour les catégories
const categories = [
  { id: "audio", name: "Audio", count: 12, image: "/categories/audio.jpg" },
  { id: "montres", name: "Montres Connectées", count: 8, image: "/categories/watches.jpg" },
  { id: "accessoires", name: "Accessoires", count: 15, image: "/categories/accessories.jpg" },
  { id: "nouveautes", name: "Nouveautés", count: 7, image: "/categories/new.jpg" },
];

// Données factices pour les produits
const products = [
  {
    id: 1,
    name: "Casque Audio Premium",
    description: "Son immersif avec réduction de bruit active",
    price: 299.99,
    rating: 4.8,
    reviewCount: 124,
    images: ["/products/headphones-1.jpg", "/products/headphones-2.jpg", "/products/headphones-3.jpg"],
    category: "audio",
    isNew: true,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Montre Connectée Ultra",
    description: "Suivi fitness avancé et notifications intelligentes",
    price: 349.99,
    rating: 4.7,
    reviewCount: 89,
    images: ["/products/smartwatch-1.jpg", "/products/smartwatch-2.jpg"],
    category: "montres",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Enceinte Portable Aqua",
    description: "Résistante à l'eau avec 24h d'autonomie",
    price: 129.99,
    rating: 4.5,
    reviewCount: 56,
    images: ["/products/speaker-1.jpg", "/products/speaker-2.jpg"],
    category: "audio",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Écouteurs Sans Fil Pro",
    description: "Son cristallin et autonomie exceptionnelle",
    price: 179.99,
    rating: 4.6,
    reviewCount: 78,
    images: ["/products/earbuds-1.jpg", "/products/earbuds-2.jpg"],
    category: "audio",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Bracelet Connecté Fit",
    description: "Suivi d'activité complet et design élégant",
    price: 89.99,
    rating: 4.3,
    reviewCount: 42,
    images: ["/products/band-1.jpg", "/products/band-2.jpg"],
    category: "montres",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Support Téléphone Magnétique",
    description: "Fixation sécurisée pour voiture et bureau",
    price: 29.99,
    rating: 4.4,
    reviewCount: 35,
    images: ["/products/holder-1.jpg", "/products/holder-2.jpg"],
    category: "accessoires",
    isNew: true,
    isBestseller: false,
  },
];

// Composant pour la carte de produit
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              Nouveau
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Populaire
            </span>
          )}
        </div>
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center">
          <RatingStars rating={product.rating} size="sm" />
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            ({product.reviewCount})
          </span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
          </span>
          <Link 
            href={`/produits/${product.id}`}
            className="rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Composant pour la carte de catégorie
const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
  return (
    <Link 
      href={`/produits/${category.id}`}
      className="group relative overflow-hidden rounded-xl aspect-square"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
        <p className="text-sm text-white/80">{category.count} produits</p>
      </div>
    </Link>
  );
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/products-hero.jpg"
          alt="Nos produits technologiques"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Nos Produits
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 max-w-2xl"
          >
            Découvrez notre sélection de produits technologiques innovants
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Catégories */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Catégories</h2>
            <Link 
              href="/categories" 
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              Voir toutes les catégories
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        {/* Filtres et tri */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Filtres
                <svg className="inline-block ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex items-center">
                  Audio
                  <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <button className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex items-center">
                  Nouveautés
                  <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Trier par:</span>
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
              </select>
            </div>
          </div>
        </section>
        
        {/* Liste des produits */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="sr-only">Précédent</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">2</button>
              <button className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
              <span className="text-gray-500 dark:text-gray-400">...</span>
              <button className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">8</button>
              
              <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="sr-only">Suivant</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
} 