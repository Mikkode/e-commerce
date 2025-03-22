import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductCarousel from "@/components/product/ProductCarousel";
import RatingStars from "@/components/ui/RatingStars";
import { notFound } from "next/navigation";

// Composant pour la section des avis
const ReviewSection = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Avis clients</h3>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <RatingStars rating={rating} size="lg" />
          <span className="ml-2 text-gray-900 dark:text-white font-medium">{rating.toFixed(1)}</span>
        </div>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-600 dark:text-gray-400">{reviewCount} avis</span>
      </div>
      
      {/* Avis factices */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
              ML
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Marie L.</h4>
              <div className="flex items-center mt-1">
                <RatingStars rating={5} size="sm" />
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">Il y a 2 jours</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Produit de très bonne qualité, livraison rapide et emballage soigné. Je recommande vivement !
          </p>
        </div>
        
        <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
              TD
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Thomas D.</h4>
              <div className="flex items-center mt-1">
                <RatingStars rating={4} size="sm" />
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">Il y a 1 semaine</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Très satisfait de mon achat. Le rapport qualité-prix est excellent. Seul petit bémol sur le délai de livraison un peu long.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
              SB
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Sophie B.</h4>
              <div className="flex items-center mt-1">
                <RatingStars rating={5} size="sm" />
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">Il y a 2 semaines</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Parfait ! Je suis cliente régulière et je n'ai jamais été déçue. La qualité est toujours au rendez-vous.
          </p>
        </div>
      </div>
      
      <button className="mt-8 w-full py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Voir tous les avis
      </button>
    </div>
  );
};

// Composant pour les produits similaires
const RelatedProducts = ({ productIds }: { productIds?: number[] }) => {
  if (!productIds || productIds.length === 0) return null;
  
  const relatedProducts = getRelatedProducts(productIds);
  
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Produits similaires</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Link 
            key={product.id} 
            href={`/produits/${product.id}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{product.name}</h4>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price.toFixed(2)} €</span>
                <div className="flex items-center">
                  <RatingStars rating={product.rating} size="sm" />
                  <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({product.rating})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Correction de la fonction generateMetadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Pas besoin d'await sur params.id directement
  const id = parseInt(params.id);
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: "Produit non trouvé | Carrot Store",
      description: "Le produit que vous recherchez n'existe pas ou a été supprimé."
    };
  }
  
  return {
    title: `${product.name} | Carrot Store`,
    description: product.description,
    openGraph: {
      images: [product.images[0]],
    },
  };
}

// Rendre la fonction de page asynchrone également
export default async function ProductPage({ params }: { params: { id: string } }) {
  // Pas besoin d'await sur params.id directement
  const id = parseInt(params.id);
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }
  
  // Récupérer la catégorie pour l'affichage
  const categoryId = product.categoryId;
  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Fil d'Ariane */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/produits" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Produits
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/categories/${product.categoryId}`} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            {categoryName}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
        </nav>
        
        {/* Produit */}
        <div className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Carrousel d'images */}
            <div>
              <ProductCarousel images={product.images} productName={product.name} />
            </div>
            
            {/* Informations produit */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="mb-4">
                {product.isNew && (
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    Nouveau
                  </span>
                )}
                {product.isBestseller && (
                  <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Populaire
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <RatingStars rating={product.rating} />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {product.reviewCount} avis
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">{product.longDescription || product.description}</p>
              
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {product.price.toFixed(2)} €
              </div>
              
              {/* Sélection de couleur */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Couleur</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantité */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quantité</h3>
                <div className="flex items-center">
                  <button className="w-10 h-10 rounded-l-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 h-10 border-t border-b border-gray-300 dark:border-gray-700 text-center text-gray-900 dark:text-white bg-white dark:bg-gray-950"
                  />
                  <button className="w-10 h-10 rounded-r-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  
                  <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                    {product.stock && product.stock > 0 
                      ? `${product.stock} en stock` 
                      : 'Rupture de stock'}
                  </span>
                </div>
              </div>
              
              {/* Boutons d'action */}
              <div className="mt-8 space-y-4">
                <button className="w-full rounded-full bg-black dark:bg-white text-white dark:text-black py-3 px-8 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Ajouter au panier
                </button>
                
                <button className="w-full rounded-full border border-gray-300 dark:border-gray-700 py-3 px-8 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Ajouter aux favoris
                </button>
              </div>
              
              {/* Caractéristiques */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Caractéristiques principales</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Spécifications techniques */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Spécifications techniques</h3>
                <div className="border-t border-gray-200 dark:border-gray-800">
                  {product.specs && Object.entries(product.specs).map(([key, value], index) => (
                    <div key={index} className={`py-3 flex justify-between ${index !== Object.entries(product.specs || {}).length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''}`}>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{key}</dt>
                      <dd className="text-sm text-gray-900 dark:text-white">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Section des avis */}
        <div id="reviews" className="mt-16">
          <ReviewSection rating={product.rating} reviewCount={product.reviewCount} />
        </div>
        
        {/* Produits similaires */}
        {product.relatedProducts && <RelatedProducts productIds={product.relatedProducts} />}
      </div>
    </div>
  );
} 