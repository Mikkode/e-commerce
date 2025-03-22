import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/layout/NavBar";
// import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrot Store | Produits frais, bio et locaux",
  description: "Découvrez notre sélection de produits frais, bio et locaux. Livraison rapide et service de qualité.",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
