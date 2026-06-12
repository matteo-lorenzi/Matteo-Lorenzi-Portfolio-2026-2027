export const t = {
  locale: "en",
  nav: {
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  common: { skip: "Skip to main content" },
  hero: {
    title: "M.L",
    name: "Matteo Lorenzi",
    role: "UI/UX Designer",
    scroll: "Scroll",
  },
  landing: {
    kicker: "Home",
    title: "Welcome",
    subtitle: "Feel free to explore my portfolio.",
    modelSrc: "",
    modelAlt: "3D preview of the portfolio",
    modelFallback:
      "Add a .glb model in /public/models then set landing.modelSrc.",
  },
  projects: {
    title: "Projects",
    all: "All",
    view: "View",
    grid: "Grid",
    list: "List",
    compact: "Compact",
    branding: "Branding",
    uiux: "UI/UX",
    motion: "Motion",
    print: "Print",
    illustration: "Illustration",
    count: (n: number) => `[ ${n} projects ]`,
  },
  projectDetail: {
    role: "Role",
    tools: "Tools",
    year: "Year",
    watchVideo: "Watch project video",
    quoteLabel: "Project insight",
    navLabel: "Project navigation",
    prev: "← Prev Project",
    backToList: "All Projects",
    next: "Next Project →",
  },
  contact: {
    title: "Contact",
    email: "lorenzi.matteo30@gmail.com",
    cv: "Download CV",
    send: "Send",
    emailLabel: "Email",
    nameLabel: "Name",
    messageLabel: "Message",
  },
  footer: {
    copyright: "© 2026 M.L",
    legal: "Legal notice",
    backToTop: "Back to top",
  },
  transition: { label: "Switch Atmosphere" },
  legal: {
    title: "Legal notice",
    body: "Personal portfolio website of Matteo Lorenzi. No analytics or tracking scripts are used.",
  },
  about: {
    strip:
      "Designing interfaces, brand systems, and visual rhythm for contemporary web experiences.",
  },
  experiencePage: {
    title: "Professional Experience",
    kicker: "Journey",
    intro:
      "A gallery view of my hands-on work experience: mission context, responsibilities, and product impact.",
    count: (n: number) => `[ ${n} experiences ]`,
  },
  notFound: {
    kicker: "Error 404",
    title: "Page not found",
    description:
      "The page you are looking for does not exist or has moved. Return to a main portfolio section.",
    primaryCta: "Back to home",
    secondaryCta: "Browse projects",
  },
  aboutPage: {
    title: "About",
    kicker: "Profile",
    intro:
      "I am Matteo Lorenzi, a computer science student passionate about web development and modern design.",
    personalInfo: {
      name: "Matteo Lorenzi",
      title: "Student Developer",
      description:
        "I am Matteo Lorenzi, a computer science student passionate about web development and modern design. I enjoy creating innovative and aesthetic user experiences that combine functionality with visual elegance.",
      initials: "ML",
      githubUrl: "https://github.com/matteo-lorenzi",
      githubLabel: "View my GitHub",
    },
    profileTitle: "Positioning",
    profile:
      "I create innovative and aesthetic user experiences that combine functionality with visual elegance.",
    statsTitle: "Stats",
    profileStats: [
      { number: "3+", label: "Years of study" },
      { number: "10+", label: "Completed projects" },
    ],
    skillsTitle: "Skills",
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
        title: "Design & Tools",
        skills: ["Figma", "UI/UX", "Git/GitHub", "VS Code", "Vite"],
      },
    ],
    approachTitle: "Approach",
    approach:
      "Every project starts with understanding goals, constraints, users, and context. I then translate that into clear journeys, coherent visual systems, and testable prototypes.",
    valuesTitle: "What guides my work",
    values: [
      "Usability first",
      "Strong visual identity with purpose",
      "Collaborative and iterative methodology",
    ],
    toolsTitle: "Tools",
    tools: "Figma, Adobe suite, GSAP, HTML/CSS, JavaScript",
    timelineTitle: "Journey",
    timeline: [
      {
        period: "2025 - 2027",
        title: "Master UX et Web Editorial",
        institution: "Poitiers",
        institutionUrl: "https://www.univ-poitiers.fr/",
        detail: "Planned continuation in user experience studies",
      },
      {
        period: "2023 - 2025",
        title: "2nd - 3rd year",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "Track A: Building web applications",
      },
      {
        period: "2022 - 2023",
        title: "1st year",
        institution: "IUT2 Grenoble",
        institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
        detail: "General computer science training",
      },
    ],
    interestsTitle: "Interests",
    interests: [
      { icon: "💻", name: "Emerging technologies" },
      { icon: "🎨", name: "Graphic design" },
      { icon: "🚀", name: "Innovation" },
      { icon: "📱", name: "Mobile applications" },
      { icon: "🌐", name: "Web development" },
    ],
    ctaLabel: "Let us discuss your project",
  },
} as const;
