export interface ContactInfo {
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    mapUrl: string;
  };
  contact: {
    email: string;
    phone: string;
    hours: string[];
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  faq: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

export const contactData: ContactInfo = {
  address: {
    street: "123 Avenue de la Carotte",
    city: "Paris",
    postalCode: "75001",
    country: "France",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85836507928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1621956217640!5m2!1sfr!2sfr"
  },
  contact: {
    email: "contact@carrotstore.fr",
    phone: "+33 1 23 45 67 89",
    hours: [
      "Lundi - Vendredi: 9h00 - 19h00",
      "Samedi: 10h00 - 18h00",
      "Dimanche: Fermé"
    ]
  },
  social: {
    facebook: "https://facebook.com/carrotstore",
    instagram: "https://instagram.com/carrotstore",
    twitter: "https://twitter.com/carrotstore",
    linkedin: "https://linkedin.com/company/carrotstore"
  },
  faq: {
    title: "Questions fréquentes",
    questions: [
      {
        question: "Comment sont sélectionnés vos produits ?",
        answer: "Tous nos produits sont rigoureusement sélectionnés selon des critères de qualité, de fraîcheur et de respect de l'environnement. Nous privilégions les producteurs locaux pratiquant une agriculture biologique ou raisonnée."
      },
      {
        question: "Quelles sont les zones de livraison ?",
        answer: "Nous livrons actuellement dans Paris et sa petite couronne. Pour les commandes en dehors de cette zone, veuillez nous contacter directement pour vérifier la disponibilité."
      },
      {
        question: "Quel est le délai de livraison ?",
        answer: "Les commandes passées avant 18h sont généralement livrées le lendemain. Pour les commandes du week-end, la livraison s'effectue le lundi suivant."
      },
      {
        question: "Comment retourner un produit ?",
        answer: "Si vous n'êtes pas satisfait d'un produit, contactez-nous dans les 24h suivant la réception. Nous organiserons un échange ou un remboursement selon votre préférence."
      },
      {
        question: "Proposez-vous des abonnements ?",
        answer: "Oui, nous proposons plusieurs formules d'abonnement hebdomadaire ou mensuel pour nos paniers de fruits et légumes. Consultez notre page Abonnements pour plus d'informations."
      }
    ]
  }
}; 