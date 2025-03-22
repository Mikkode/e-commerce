import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";
import RatingStars from "@/components/ui/RatingStars";
import { notFound } from "next/navigation";

// Composant pour la carte de produit (réutilisé de la page produits)
const ProductCard = ({ product }: { product: ReturnType<typeof getProductsByCategory>[0] }) => {
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
        <Link href={`/produits/${product.id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
        <div className="mt-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {product.reviewCount} avis
          </span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product.price.toFixed(2)} €
          </span>
          <Link 
            href={`/produits/${product.id}`}
            className="rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Voir le produit
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const categoryId = params.id;
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return {
      title: "Catégorie non trouvée | Carrot Store",
      description: "La catégorie que vous recherchez n'existe pas."
    };
  }
  
  return {
    title: `${category.name} | Carrot Store`,
    description: `Découvrez notre sélection de ${category.name.toLowerCase()} frais, bio et locaux.`
  };
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id;
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    notFound();
  }
  
  const products = getProductsByCategory(categoryId);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* En-tête */}
        <div className="mb-12">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/produits" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Produits
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/produits/categories" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Catégories
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{category.name}</span>
          </nav>
          
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
              <p className="text-white/90 max-w-2xl">
                Découvrez notre sélection de {category.name.toLowerCase()} frais, bio et locaux.
              </p>
            </div>
          </div>
        </div>
        
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
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Aucun produit trouvé</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Nous n'avons pas de produits dans cette catégorie pour le moment.
              </p>
              <Link 
                href="/produits" 
                className="mt-6 inline-block rounded-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Voir tous les produits
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 