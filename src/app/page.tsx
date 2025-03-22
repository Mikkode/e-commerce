import Image from "next/image";
import Link from "next/link";
// import { motion } from "motion/react";
import * as motion from "motion/react-client"

// Données factices pour les produits
const featuredProducts = [
  {
    id: 1,
    name: "Casque Audio Premium",
    description: "Son immersif avec réduction de bruit active",
    price: 299.99,
    rating: 4.8,
    reviewCount: 124,
    images: ["/products/headphones-1.jpg", "/products/headphones-2.jpg", "/products/headphones-3.jpg"],
  },
  {
    id: 2,
    name: "Montre Connectée Ultra",
    description: "Suivi fitness avancé et notifications intelligentes",
    price: 349.99,
    rating: 4.7,
    reviewCount: 89,
    images: ["/products/smartwatch-1.jpg", "/products/smartwatch-2.jpg"],
  },
  {
    id: 3,
    name: "Enceinte Portable Aqua",
    description: "Résistante à l'eau avec 24h d'autonomie",
    price: 129.99,
    rating: 4.5,
    reviewCount: 56,
    images: ["/products/speaker-1.jpg", "/products/speaker-2.jpg"],
  },
];

// Composant pour les étoiles de notation
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) ? "text-amber-400" : "text-gray-300"
          } ${i === Math.floor(rating) && rating % 1 > 0 ? "text-amber-400" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
        ({rating})
      </span>
    </div>
  );
};

// Composant pour la carte de produit
const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => {
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
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
        <div className="mt-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {product.reviewCount} avis
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Produits technologiques modernes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Technologie du Futur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mb-8"
          >
            Découvrez notre collection 2025 d'appareils innovants conçus pour transformer votre quotidien
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/produits" 
              className="rounded-full bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explorer la collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Produits Populaires
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Nos produits les plus appréciés, sélectionnés pour leur qualité exceptionnelle et leur design innovant
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/produits" 
            className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-8 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Voir tous les produits
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Pourquoi nous choisir
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Qualité Premium</h3>
              <p className="text-gray-600 dark:text-gray-400">Tous nos produits sont soigneusement sélectionnés pour leur durabilité et leurs performances exceptionnelles.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Livraison Rapide</h3>
              <p className="text-gray-600 dark:text-gray-400">Livraison express en 24h sur tous nos produits et service de suivi en temps réel de votre commande.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Garantie 2 Ans</h3>
              <p className="text-gray-600 dark:text-gray-400">Tous nos produits sont garantis pendant 2 ans avec un service après-vente réactif et efficace.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-4">Restez informé</h2>
              <p className="text-gray-300 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres exclusives et les dernières nouveautés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/newsletter-image.jpg"
                alt="Restez informé des dernières tendances"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">TechStore</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Votre destination pour la technologie de pointe et les gadgets innovants.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/produits" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Produits</Link></li>
              <li><Link href="/a-propos" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link href="/produits/audio" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Audio</Link></li>
              <li><Link href="/produits/montres" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Montres Connectées</Link></li>
              <li><Link href="/produits/accessoires" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Accessoires</Link></li>
              <li><Link href="/produits/nouveautes" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Nouveautés</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>123 Avenue de la Tech</p>
              <p>75001 Paris, France</p>
              <p className="mt-2">Email: contact@techstore.fr</p>
              <p>Tél: +33 1 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2025 TechStore. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
