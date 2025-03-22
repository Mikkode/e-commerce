import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { categories } from "@/data/products";

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Catégories | Carrot Store",
  description: "Découvrez toutes nos catégories de produits frais, bio et locaux.",
};

// Composant pour la carte de catégorie
const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
  return (
    <Link 
      href={`/produits/categories/${category.id}`}
      className="group relative overflow-hidden rounded-xl shadow-sm"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
          <p className="text-lg text-white/80">{category.count} produits</p>
          <span className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
            Découvrir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos catégories</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Parcourez nos différentes catégories de produits frais, bio et locaux pour trouver ce qui vous convient.
          </p>
        </div>
        
        {/* Liste des catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 