import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrot Store | Produits frais, bio et locaux",
  description: "Découvrez notre sélection de produits frais, bio et locaux. Livraison rapide et service de qualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        
          {children}
      </body>
    </html>
  );
}
