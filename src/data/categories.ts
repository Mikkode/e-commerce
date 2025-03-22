// Interface pour les catégories
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

// Fonction pour obtenir une catégorie par son ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

// Fonction pour obtenir toutes les catégories
export function getAllCategories(): Category[] {
  return categories;
}

// Fonction pour mettre à jour les compteurs de produits dans les catégories
export function updateCategoryCounts(productCounts: Record<string, number>): void {
  categories.forEach(category => {
    if (productCounts[category.id]) {
      category.count = productCounts[category.id];
    }
  });
} 