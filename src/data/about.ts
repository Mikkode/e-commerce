export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  mission: {
    title: string;
    content: string;
  };
  story: {
    title: string;
    content: string[];
  };
  values: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
}

export const aboutData: AboutContent = {
  title: "À propos de Carrot Store",
  subtitle: "Une histoire de passion pour les produits frais et bio",
  mission: {
    title: "Notre mission",
    content: "Chez Carrot Store, notre mission est de rendre accessibles à tous des produits frais, bio et locaux de qualité exceptionnelle. Nous croyons fermement qu'une alimentation saine et responsable devrait être à la portée de chacun, tout en soutenant les producteurs locaux et en respectant l'environnement."
  },
  story: {
    title: "Notre histoire",
    content: [
      "Carrot Store est né en 2018 de la passion de deux amis, Marie et Thomas, pour l'agriculture durable et les produits de qualité. Frustrés par la difficulté à trouver des produits frais, bio et locaux à des prix raisonnables, ils ont décidé de créer leur propre solution.",
      "Au début, Carrot Store n'était qu'un petit stand sur le marché local, proposant une sélection de légumes et fruits bio provenant de quelques producteurs de la région. Le succès a été immédiat, et la demande n'a cessé de croître.",
      "En 2020, nous avons lancé notre boutique en ligne pour rendre nos produits accessibles à un public plus large. Aujourd'hui, Carrot Store travaille avec plus de 50 producteurs locaux et propose une large gamme de produits frais, transformés et d'épicerie, tous sélectionnés avec soin pour leur qualité et leur impact environnemental."
    ]
  },
  values: {
    title: "Nos valeurs",
    items: [
      {
        title: "Qualité",
        description: "Nous sélectionnons rigoureusement chaque produit pour garantir une qualité exceptionnelle et des saveurs authentiques.",
        icon: "star"
      },
      {
        title: "Durabilité",
        description: "Nous privilégions les méthodes de production respectueuses de l'environnement et les emballages éco-responsables.",
        icon: "leaf"
      },
      {
        title: "Transparence",
        description: "Nous partageons ouvertement l'origine de nos produits et nos méthodes de travail pour établir une relation de confiance.",
        icon: "eye"
      },
      {
        title: "Équité",
        description: "Nous assurons une rémunération juste à nos producteurs partenaires et proposons des prix accessibles à nos clients.",
        icon: "scale"
      }
    ]
  },
  team: {
    title: "Notre équipe",
    subtitle: "Des passionnés qui font vivre Carrot Store au quotidien",
    members: [
      {
        id: 1,
        name: "Marie Dupont",
        role: "Co-fondatrice & Directrice",
        bio: "Ingénieure agronome de formation, Marie a travaillé pendant 5 ans dans le développement de projets d'agriculture durable avant de fonder Carrot Store.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Thomas Leroy",
        role: "Co-fondateur & Responsable des partenariats",
        bio: "Ancien chef cuisinier passionné par les produits de qualité, Thomas est en charge des relations avec nos producteurs partenaires.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "Sophie Martin",
        role: "Responsable qualité",
        bio: "Experte en nutrition et contrôle qualité, Sophie veille à ce que tous nos produits respectent nos standards d'excellence.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 4,
        name: "Lucas Bernard",
        role: "Responsable logistique",
        bio: "Lucas optimise notre chaîne d'approvisionnement pour garantir la fraîcheur de nos produits et minimiser notre empreinte carbone.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
      }
    ]
  }
}; 