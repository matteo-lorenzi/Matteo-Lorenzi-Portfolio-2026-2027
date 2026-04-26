export const t = {
  locale: "fr",
  nav: {
    projects: "Projets",
    experience: "Experience",
    about: "A propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
  },
  common: { skip: "Aller au contenu principal" },
  hero: {
    title: "M.L",
    name: "Matteo Lorenzi",
    role: "UI/UX Designer",
    scroll: "Defiler",
  },
  landing: {
    kicker: "Accueil",
    title: "Bienvenue",
    subtitle: "Sur mon portfolio, n hesite pas a explorer.",
    modelSrc: "",
    modelAlt: "Apercu 3D du portfolio",
    modelFallback:
      "Ajoutez un modele .glb dans /public/models puis renseignez landing.modelSrc.",
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
    role: "Role",
    tools: "Outils",
    year: "Annee",
    quoteLabel: "Retour d experience",
    navLabel: "Navigation entre les projets",
    prev: "← Projet precedent",
    backToList: "Tous les projets",
    next: "Projet suivant →",
  },
  contact: {
    title: "Contact",
    email: "lorenzi.matteo30@gmail.com",
    cv: "Telecharger le CV",
    send: "Envoyer",
    emailLabel: "Email",
    nameLabel: "Nom",
    messageLabel: "Message",
    setupHint:
      "Configurez PUBLIC_FORMSPREE_ENDPOINT dans votre fichier .env pour activer l envoi du formulaire.",
  },
  footer: {
    copyright: "© 2026 M.L",
    legal: "Mentions legales",
    backToTop: "Retour en haut",
  },
  transition: { label: "Changer atmosphere" },
  legal: {
    title: "Mentions legales",
    body: "Site portfolio personnel de Matteo Lorenzi. Aucune collecte de donnees analytiques n'est effectuee.",
  },
  about: {
    strip: "",
  },
  experiencePage: {
    title: "Experience professionnelle",
    kicker: "Parcours",
    intro:
      "Une galerie de mes experiences de terrain: mission, contexte, responsabilites et impact produit.",
    count: (n: number) => `[ ${n} experiences ]`,
  },
  notFound: {
    kicker: "Erreur 404",
    title: "Page introuvable",
    description:
      "La page que vous recherchez n existe pas ou a ete deplacee. Retournez vers une section principale du portfolio.",
    primaryCta: "Retour a l accueil",
    secondaryCta: "Voir les projets",
  },
  aboutPage: {
    title: "A propos",
    kicker: "Profil",
    intro:
      "Je suis Matteo Lorenzi, etudiant en informatique passionne par le developpement web et le design moderne.",
    personalInfo: {
      name: "Matteo Lorenzi",
      title: "Etudiant Developpeur",
      description:
        "Je suis Matteo Lorenzi, etudiant en informatique passionne par le developpement web et le design moderne. J aime creer des experiences utilisateur innovantes et esthetiques qui combinent fonctionnalite et elegance visuelle.",
      initials: "ML",
      githubUrl: "https://github.com/matteo-lorenzi",
      githubLabel: "Voir mon GitHub",
    },
    profileTitle: "Positionnement",
    profile:
      "Je conçois des experiences utilisateur innovantes et esthetiques qui combinent fonctionnalite et elegance visuelle.",
    statsTitle: "Chiffres",
    profileStats: [
      { number: "3+", label: "Annees d etudes" },
      { number: "10+", label: "Projets realises" },
    ],
    skillsTitle: "Competences",
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
      "Chaque projet commence par une phase de comprehension: objectifs, contraintes, public et contexte. Je traduis ensuite ces elements en parcours clairs, systemes visuels coherents et prototypes testables.",
    valuesTitle: "Ce qui me guide",
    values: [
      "Simplicite d usage avant tout",
      "Identite visuelle forte et utile",
      "Methodologie collaborative et iterative",
    ],
    toolsTitle: "Outils",
    tools: "Figma, suite Adobe, GSAP, HTML/CSS, JavaScript",
    timelineTitle: "Parcours",
    timeline: [
      {
        period: "2025 - 2027",
        title: "Master UX et Web Editorial",
        institution: "Poitiers",
        institutionUrl: "https://www.univ-poitiers.fr/",
        detail: "Projet de poursuite d etudes en experience utilisateur",
      },
      {
        period: "2023 - 2025",
        title: "2eme - 3eme annee",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "Parcours A : Realisation d applications Web",
      },
      {
        period: "2022 - 2023",
        title: "1ere annee",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "Formation generale en informatique",
      },
    ],
    interestsTitle: "Interets",
    interests: [
      { icon: "💻", name: "Nouvelles technologies" },
      { icon: "🎨", name: "Design graphique" },
      { icon: "🚀", name: "Innovation" },
      { icon: "📱", name: "Applications mobiles" },
      { icon: "🌐", name: "Developpement web" },
    ],
    ctaLabel: "Parlons de votre projet",
  },
} as const;

export type Translations = typeof t;
