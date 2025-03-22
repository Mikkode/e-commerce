"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Carrot Store</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'} transition-colors`}
            >
              Accueil
            </Link>
            <Link 
              href="/produits" 
              className={`${isActive('/produits') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'} transition-colors`}
            >
              Produits
            </Link>
            <Link 
              href="/categories" 
              className={`${isActive('/categories') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'} transition-colors`}
            >
              Catégories
            </Link>
            <Link 
              href="/a-propos" 
              className={`${isActive('/a-propos') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'} transition-colors`}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'} transition-colors`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="sr-only">Rechercher</span>
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="sr-only">Panier</span>
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="sr-only">Compte</span>
            </button>
            
            {/* Menu mobile (hamburger) */}
            <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 