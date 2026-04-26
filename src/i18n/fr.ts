export const t = {
  locale: "fr",
  nav: {
    projects: "Projets",
    experience: "Expérience",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
  },
  common: { skip: "Aller au contenu principal" },
  hero: {
    title: "M.L",
    name: "Matteo Lorenzi",
    role: "UI/UX Designer",
    scroll: "Défiler",
  },
  landing: {
    kicker: "Accueil",
    title: "Bienvenue",
    subtitle: "Sur mon portfolio, n'hésite pas à explorer.",
    modelSrc: "",
    modelAlt: "Aperçu 3D du portfolio",
    modelFallback:
      "Ajoutez un modèle .glb dans /public/models puis renseignez landing.modelSrc.",
  },
  projects: {
    title: "Projets",
    all: "Tous",
    view: "Affichage",
    grid: "Grille",
    list: "Liste",
    compact: "Compact",
    branding: "Branding",
    uiux: "UI/UX",
    motion: "Motion",
    print: "Print",
    illustration: "Illustration",
    count: (n: number) => `[ ${n} projets ]`,
  },
  projectDetail: {
    role: "Rôle",
    tools: "Outils",
    year: "Année",
    quoteLabel: "Retour d'expérience",
    navLabel: "Navigation entre les projets",
    prev: "← Projet précédent",
    backToList: "Tous les projets",
    next: "Projet suivant →",
  },
  contact: {
    title: "Contact",
    email: "lorenzi.matteo30@gmail.com",
    cv: "Télécharger le CV",
    send: "Envoyer",
    emailLabel: "Email",
    nameLabel: "Nom",
    messageLabel: "Message",
    setupHint:
      "Configurez PUBLIC_FORMSPREE_ENDPOINT dans votre fichier .env pour activer l'envoi du formulaire.",
  },
  footer: {
    copyright: "© 2026 M.L",
    legal: "Mentions légales",
    backToTop: "Retour en haut",
  },
  transition: { label: "Changer d'atmosphère" },
  legal: {
    title: "Mentions légales",
    body: "Site portfolio personnel de Matteo Lorenzi. Aucune collecte de données analytiques n'est effectuée.",
  },
  about: {
    strip: "",
  },
  experiencePage: {
    title: "Expérience professionnelle",
    kicker: "Parcours",
    intro:
      "Une galerie de mes expériences de terrain : mission, contexte, responsabilités et impact produit.",
    count: (n: number) => `[ ${n} expériences ]`,
  },
  notFound: {
    kicker: "Erreur 404",
    title: "Page introuvable",
    description:
      "La page que vous recherchez n'existe pas ou a été déplacée. Retournez vers une section principale du portfolio.",
    primaryCta: "Retour à l'accueil",
    secondaryCta: "Voir les projets",
  },
  aboutPage: {
    title: "À propos",
    kicker: "Profil",
    intro:
      "Je suis Matteo Lorenzi, étudiant en informatique passionné par le développement web et le design moderne.",
    personalInfo: {
      name: "Matteo Lorenzi",
      title: "Étudiant Développeur",
      description:
        "Je suis Matteo Lorenzi, étudiant en informatique passionné par le développement web et le design moderne. J'aime créer des expériences utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.",
      initials: "ML",
      githubUrl: "https://github.com/matteo-lorenzi",
      githubLabel: "Voir mon GitHub",
    },
    profileTitle: "Positionnement",
    profile:
      "Je conçois des expériences utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.",
    statsTitle: "Chiffres",
    profileStats: [
      { number: "3+", label: "Années d'études" },
      { number: "10+", label: "Projets réalisés" },
    ],
    skillsTitle: "Compétences",
    skillCategories: [
      {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "SCSS"],
      },
      {
        title: "Backend",
        skills: ["PHP", "Java", "SQL"],
      },
      {
        title: "Design & Outils",
        skills: ["Figma", "UI/UX", "Git/GitHub", "VS Code", "Vite"],
      },
    ],
    approachTitle: "Approche",
    approach:
      "Chaque projet commence par une phase de compréhension : objectifs, contraintes, public et contexte. Je traduis ensuite ces éléments en parcours clairs, systèmes visuels cohérents et prototypes testables.",
    valuesTitle: "Ce qui me guide",
    values: [
      "Simplicité d'usage avant tout",
      "Identité visuelle forte et utile",
      "Méthodologie collaborative et itérative",
    ],
    toolsTitle: "Outils",
    tools: "Figma, suite Adobe, GSAP, HTML/CSS, JavaScript",
    timelineTitle: "Parcours",
    timeline: [
      {
        period: "2025 - 2027",
        title: "Master UX et Web Éditorial",
        institution: "Poitiers",
        institutionUrl: "https://www.univ-poitiers.fr/",
        detail: "Projet de poursuite d'études en expérience utilisateur",
      },
      {
        period: "2023 - 2025",
        title: "2ème - 3ème année",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "Parcours A : Réalisation d'applications Web",
      },
      {
        period: "2022 - 2023",
        title: "1ère année",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "Formation générale en informatique",
      },
    ],
    interestsTitle: "Intérêts",
    interests: [
      { icon: "💻", name: "Nouvelles technologies" },
      { icon: "🎨", name: "Design graphique" },
      { icon: "🚀", name: "Innovation" },
      { icon: "📱", name: "Applications mobiles" },
      { icon: "🌐", name: "Développement web" },
    ],
    ctaLabel: "Parlons de votre projet",
  },
} as const;

export type Translations = typeof t;