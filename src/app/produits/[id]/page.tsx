import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";

// Importation du composant de carrousel (à créer)
import ProductCarousel from "@/components/product/ProductCarousel";
import RatingStars from "@/components/ui/RatingStars";

// Données factices pour les produits
const products = [
  {
    id: 1,
    name: "Casque Audio Premium",
    description: "Son immersif avec réduction de bruit active pour une expérience d'écoute exceptionnelle. Profitez de votre musique préférée avec une clarté sonore inégalée et un confort optimal pour une utilisation prolongée.",
    price: 299.99,
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Réduction de bruit active avancée",
      "Autonomie de 30 heures",
      "Connexion Bluetooth 5.3",
      "Commandes tactiles intuitives",
      "Microphones intégrés pour les appels",
      "Pliable pour un transport facile"
    ],
    specs: {
      "Type": "Circum-aural",
      "Réponse en fréquence": "4Hz - 40kHz",
      "Impédance": "32 Ohm",
      "Sensibilité": "105 dB/mW",
      "Poids": "280g",
      "Connectivité": "Bluetooth 5.3, Jack 3.5mm"
    },
    images: [
      "/products/headphones-1.jpg", 
      "/products/headphones-2.jpg", 
      "/products/headphones-3.jpg",
      "/products/headphones-4.jpg"
    ],
    colors: ["Noir", "Blanc", "Bleu Nuit"],
    stock: 15,
    category: "Audio",
    relatedProducts: [2, 3, 5]
  },
  {
    id: 2,
    name: "Montre Connectée Ultra",
    description: "Suivez vos performances sportives et restez connecté avec cette montre intelligente dotée des dernières technologies. Écran AMOLED haute résolution et capteurs de pointe pour un suivi précis de votre santé.",
    price: 349.99,
    rating: 4.7,
    reviewCount: 89,
    features: [
      "Écran AMOLED 1.4 pouces",
      "GPS intégré",
      "Suivi cardiaque continu",
      "Étanche jusqu'à 50m",
      "Autonomie de 14 jours",
      "Plus de 100 modes sportifs"
    ],
    specs: {
      "Écran": "AMOLED 1.4\" (454 x 454 px)",
      "Batterie": "420 mAh",
      "Étanchéité": "5 ATM",
      "Capteurs": "Accéléromètre, gyroscope, cardiaque, SpO2",
      "Poids": "35g (sans bracelet)",
      "Connectivité": "Bluetooth 5.2, Wi-Fi"
    },
    images: [
      "/products/smartwatch-1.jpg", 
      "/products/smartwatch-2.jpg",
      "/products/smartwatch-3.jpg"
    ],
    colors: ["Noir", "Argent", "Or Rose"],
    stock: 8,
    category: "Montres",
    relatedProducts: [1, 3, 4]
  },
  {
    id: 3,
    name: "Enceinte Portable Aqua",
    description: "Résistante à l'eau avec 24h d'autonomie, cette enceinte vous accompagnera partout. Son puissant et basses profondes pour animer vos soirées en intérieur comme en extérieur.",
    price: 129.99,
    rating: 4.5,
    reviewCount: 56,
    features: [
      "Résistante à l'eau (IP67)",
      "Autonomie de 24 heures",
      "Son à 360°",
      "Connexion multiple",
      "Microphone intégré",
      "Fonction PowerBank"
    ],
    specs: {
      "Puissance": "30W",
      "Batterie": "7500 mAh",
      "Étanchéité": "IP67",
      "Réponse en fréquence": "60Hz - 20kHz",
      "Poids": "980g",
      "Connectivité": "Bluetooth 5.1, AUX"
    },
    images: [
      "/products/speaker-1.jpg", 
      "/products/speaker-2.jpg",
      "/products/speaker-3.jpg"
    ],
    colors: ["Bleu", "Noir", "Rouge"],
    stock: 22,
    category: "Audio",
    relatedProducts: [1, 4, 5]
  }
];

// Fonction pour générer les métadonnées dynamiques
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: "Produit non trouvé | TechStore",
      description: "Le produit que vous recherchez n'existe pas."
    };
  }
  
  return {
    title: `${product.name} | TechStore`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [product.images[0]],
    },
  };
}

// Composant pour les avis clients
const ReviewSection = ({ rating, reviewCount }: { rating: number, reviewCount: number }) => {
  // Génération de faux avis
  const reviews = [
    {
      id: 1,
      author: "Sophie M.",
      date: "15 mars 2025",
      rating: 5,
      content: "Excellent produit, je suis très satisfaite de mon achat. La qualité est au rendez-vous et le rapport qualité-prix est imbattable."
    },
    {
      id: 2,
      author: "Thomas L.",
      date: "2 février 2025",
      rating: 4,
      content: "Très bon produit, conforme à mes attentes. Seul petit bémol sur l'autonomie qui pourrait être meilleure."
    },
    {
      id: 3,
      author: "Julie D.",
      date: "18 janvier 2025",
      rating: 5,
      content: "Je recommande vivement ! Design élégant et fonctionnalités au top. La livraison a été rapide et le service client très réactif."
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Avis clients</h3>
      
      <div className="flex items-center mb-8">
        <div className="mr-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">{rating}</span>
          <span className="text-gray-500 dark:text-gray-400">/5</span>
        </div>
        <div>
          <RatingStars rating={rating} />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Basé sur {reviewCount} avis</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {reviews.map(review => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 dark:border-gray-800 pb-6"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{review.author}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
              <RatingStars rating={review.rating} />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{review.content}</p>
          </motion.div>
        ))}
      </div>
      
      <button className="mt-8 w-full py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Voir tous les {reviewCount} avis
      </button>
    </div>
  );
};

// Composant pour les produits similaires
const RelatedProducts = ({ productIds }: { productIds: number[] }) => {
  const relatedProducts = products.filter(p => productIds.includes(p.id));
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Produits similaires</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <Link 
            key={product.id} 
            href={`/produits/${product.id}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
              <div className="mt-1 flex items-center">
                <RatingStars rating={product.rating} />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviewCount})
                </span>
              </div>
              <p className="mt-2 font-bold text-gray-900 dark:text-white">
                {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Produit non trouvé</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Le produit que vous recherchez n'existe pas ou a été retiré.</p>
        <Link 
          href="/produits" 
          className="rounded-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Voir tous les produits
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Fil d'Ariane */}
        <nav className="flex text-sm font-medium mb-8">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/produits" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Produits
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/produits/${product.category.toLowerCase()}`} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            {product.category}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>
        
        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carrousel d'images */}
          <div className="sticky top-8 self-start">
            <ProductCarousel images={product.images} productName={product.name} />
          </div>
          
          {/* Informations produit */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
              
              <div className="mt-4 flex items-center">
                <RatingStars rating={product.rating} />
                <Link href="#reviews" className="ml-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  {product.reviewCount} avis
                </Link>
              </div>
              
              <p className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </p>
              
              <div className="mt-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Sélection de couleur */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Couleur</h3>
                <div className="mt-3 flex space-x-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`relative rounded-full border ${index === 0 ? 'border-blue-600 dark:border-blue-400 ring-2 ring-blue-600 dark:ring-blue-400' : 'border-gray-300 dark:border-gray-700'} px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Disponibilité */}
              <div className="mt-8 flex items-center">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {product.stock > 0 
                    ? `En stock (${product.stock} disponibles)` 
                    : 'Rupture de stock'}
                </span>
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
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Spécifications techniques */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Spécifications techniques</h3>
                <div className="border-t border-gray-200 dark:border-gray-800">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div key={index} className={`py-3 flex justify-between ${index !== Object.entries(product.specs).length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''}`}>
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
        <RelatedProducts productIds={product.relatedProducts} />
      </div>
    </div>
  );
} 