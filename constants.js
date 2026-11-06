export const PERSONAL_INFO = {
  name: "Quonain Ejaz",
  role: "Software Engineer | Full-Stack & Mobile Developer",
  tagline:
    "Building high-performance web, mobile, and desktop applications with clean, maintainable code and scalable architecture.",
  about:
    "Software Engineer with 2+ years of professional experience building high-performance web, mobile, and desktop applications. Skilled in developing scalable front-end and back-end solutions using React.js, Next.js, Node.js, Express.js, MongoDB, PHP/Laravel, and React Native, with additional experience in cross-platform desktop application development using Tauri and Rust. Experienced in building responsive user interfaces, reusable and modular components, RESTful APIs, database-driven applications, and end-to-end product features with a strong focus on clean, maintainable code, performance, and scalability.",
};

export const CONTACT_INFO = {
  phone: "+92 348 2449429",
  email: "quonainejaz123@gmail.com",
  location: "Lahore, Pakistan (Open to Remote Roles)",
  linkedin:
    "https://www.linkedin.com/in/quonainejaz/",
  github: "https://github.com/quonainejaz-official/",
  website: "https://quonainejaz.vercel.app",
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Appliconsoft",
    period: "June, 2025 – Oct, 2026",
    description:
      "Delivering and enhancing production-ready web and desktop applications across diverse enterprise client projects.",
    achievements: [
      "Delivered and enhanced production-ready web and desktop applications using Vite, Next.js, Vue.js, PHP/Laravel, Node.js, Tauri, and Rust across diverse development projects.",
      "Built and maintained 3 Vite-based and 2 Next.js applications using JavaScript and TypeScript, focusing on reusable architecture, responsive interfaces, and maintainable code.",
      "Developed features across 3 PHP/Laravel applications and a Node.js application, strengthening backend functionality, API integrations, business logic, and full-stack workflows.",
      "Successfully migrated an existing Vite application to Next.js, restructuring the codebase while preserving core functionality and improving long-term maintainability.",
      "Expanded cross-platform development capabilities by contributing to Vue.js and Tauri/Rust applications, delivering solutions across both modern web and desktop environments.",
    ],
  },
  {
    id: 2,
    role: "Associate Software Engineer",
    company: "Whetstonez",
    period: "Dec, 2024 – June, 2025",
    description:
      "Engineered mobile applications for Android and built custom browser extensions with interactive user workflows.",
    achievements: [
      "Developed and maintained 3 React Native applications for Android, building responsive interfaces, reusable components, and smooth mobile user experiences.",
      "Built application features using JavaScript and TypeScript, integrating APIs, navigation, dynamic data, and core business logic.",
      "Developed and enhanced Chrome Extensions, working with browser-based functionality, user interactions, and extension-specific workflows.",
      "Debugged and optimized mobile and browser-based applications, resolving UI, functionality, and performance issues for more stable releases.",
    ],
  },
  {
    id: 3,
    role: "Technical Support Specialist",
    company: "Fulfilman",
    period: "2024 – 2025",
    description:
      "Managed client onboarding, technical troubleshooting, third-party API configurations, and automated business workflows.",
    achievements: [
      "Provided technical support and troubleshooting for application installation, configuration, setup, and software-related issues.",
      "Managed client onboarding, application setup, account configuration, and system requirements for new clients.",
      "Diagnosed and resolved software, configuration, integration, and functionality issues.",
      "Configured third-party applications and services, including API integrations and application integrations.",
      "Built and maintained workflow automations using Zapier to connect applications and streamline business processes.",
      "Assisted clients with system configuration, application setup, integrations, and technical issue resolution.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Punjab University",
    year: "Graduated: 2024",
  },
  {
    id: 2,
    degree: "Microsoft Azure Administrator Associate",
    institution: "Microsoft Certified",
    year: "Completed: 2024",
  },
  {
    id: 3,
    degree: "Cloud Computing Certification",
    institution: "Corvit System",
    year: "Completed: Oct 2024",
  },
  {
    id: 4,
    degree: "Fundamentals of Web Development",
    institution: "Bano Qabil Lahore",
    year: "Completed: June 2024",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Vue.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
    icon: "Layout",
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "API Integration",
    ],
    icon: "Database",
  },
  {
    title: "Cross-Platform & Desktop",
    skills: [
      "Tauri",
      "Rust",
      "Chrome Extensions",
      "React Native (Android & iOS)",
    ],
    icon: "Smartphone",
  },
  {
    title: "State Management & Logic",
    skills: [
      "Redux Toolkit",
      "Zustand",
      "Context API",
    ],
    icon: "Code",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Azure",
      "Virtual Machines",
      "Docker",
      "Docker Swarm",
      "Git & GitHub",
      "Deployment",
      "Server Configuration",
    ],
    icon: "Cloud",
  },
  {
    title: "IT Support & Automation",
    skills: [
      "Technical Support",
      "Application Support",
      "Client Onboarding",
      "Troubleshooting",
      "Zapier Automation",
      "Issue Resolution",
    ],
    icon: "Zap",
  },
  {
    title: "Software & AI Tools",
    skills: [
      "Full-Stack Development",
      "AI-Assisted Development",
      "Cursor",
      "Claude",
      "ChatGPT",
      "Codex",
      "Windsurf",
      "Performance Optimization",
      "Debugging",
    ],
    icon: "GitBranch",
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Bizee Partner Platform",
    category: "Full-Stack Web",
    type: "web",
    description:
      "Developed a Laravel/PHP Partner API and Vue.js/TypeScript portal for business formation and post-formation orders across all 50 U.S. states, integrating with Bizee's upstream Atomic API, atomic-resources, compliance-system, DSL, checkout, service-foundation within a microservices architecture. Implemented state-specific validation, OAuth2, tenant isolation, webhooks, and Redis/Horizon queues for secure asynchronous order processing and partner integrations.",
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "TypeScript",
      "Redis/Horizon",
      "OAuth2",
      "Microservices",
      "Webhooks",
      "Docker",
    ],
    link: "https://bizee.com/",
    github: "",
    image: "/projects/bizee.svg",
  },
  {
    id: 2,
    title: "Jobsite Sentry — Remote Monitoring & Surveillance",
    category: "React Vite",
    type: "web",
    description:
      "Developed a real-time construction site monitoring and surveillance platform using React, Vite, Redux, Leaflet, and Recharts. Built responsive dashboards and interactive interfaces for live camera monitoring, multi-site visualization, geospatial mapping, monitoring data, and analytics. Implemented interactive maps, data visualizations, charts, monitoring dashboards, and state-managed workflows to help users monitor construction sites and security operations.",
    technologies: [
      "React",
      "Vite",
      "Redux",
      "Leaflet",
      "Recharts",
      "Geospatial Mapping",
      "Tailwind CSS",
    ],
    link: "https://cmd.jobsitesentry.com/",
    github: "",
    image: "/projects/Jobsite-sentry.png",
  },
  {
    id: 3,
    title: "MyQuicks — AI Marketing Platform",
    category: "React Next.js",
    type: "web",
    description:
      "Developed and enhanced an AI-powered marketing platform using Next.js, React.js, and Context API, enabling users to generate and manage AI-powered blogs, social media posts, captions, hashtags, keywords, images, and videos. Implemented responsive and reusable UI components for content creation, brand management, social media scheduling, competitor analysis, SEO optimization, and multi-platform publishing.",
    technologies: [
      "Next.js",
      "React.js",
      "Context API",
      "AI Integration",
      "SEO Optimization",
      "Tailwind CSS",
    ],
    link: "https://myquicks.com/",
    github: "",
    image: "/projects/MyQuicks.png",
  },
  {
    id: 4,
    title: "EZPick — Student Pick-up & Tracking App",
    category: "React Native",
    type: "mobile",
    description:
      "Developed a cross-platform mobile application using React Native during an internship to streamline and automate the student school pick-up process. Implemented user-facing mobile interfaces for student attendance, location tracking, real-time pickup updates, notifications, and pickup status monitoring, helping parents and school staff efficiently track and manage student pickups. Published on the Google Play Store.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "Maps Integration",
      "Push Notifications",
      "Android",
    ],
    link: "https://play.google.com/store/apps/details?id=com.app.ezpick",
    github: "",
    image: "/projects/Ezpick.png",
  },
  {
    id: 5,
    title: "AimOnIt — Industrial Video Surveillance",
    category: "React Vite",
    type: "web",
    description:
      "A white-labeled video surveillance solution for industrial monitoring. Features include mobile surveillance unit management, live monitoring, real-time map tracking with MapLibre, incident response tools, and WebSocket streaming for security teams.",
    technologies: ["React", "Vite", "Redux", "MapLibre", "WebSockets"],
    link: "https://cmd.aimonit.com/",
    github: "",
    image: "/projects/Aimonit.png",
  },
  {
    id: 6,
    title: "Eblal Patient App",
    category: "React Native",
    type: "mobile",
    description:
      "A patient portal application for Eblal Group, facilitating appointment booking, medical report viewing, prescription management, and secure communication with healthcare providers on Android and iOS.",
    technologies: [
      "React Native",
      "RESTful API",
      "React Navigation",
      "AsyncStorage",
      "Android & iOS",
    ],
    link: "https://play.google.com/store/search?q=Eblal+Patient+App&c=apps",
    github: "",
    image: "/projects/Eblal.png",
  },
  {
    id: 7,
    title: "CSS Daily Prep — AI Study Companion",
    category: "React Vite",
    type: "web",
    description:
      "A comprehensive mobile-first study companion for CSS aspirants in Pakistan. Features AI-curated daily articles for subjects like Pak Affairs and IR, combined with a persistent personal note-taking system.",
    technologies: ["React", "Vite", "TypeScript", "Groq SDK", "Tailwind CSS"],
    link: "https://cssdailyprep.vercel.app/",
    github: "https://github.com/quonainejaz-official/",
    image: "/projects/cssDailyPrep.png",
  },
  {
    id: 8,
    title: "Chrome Extensions Suite — Automation & Workflows",
    category: "Chrome Extension",
    type: "desktop",
    description:
      "Developed and enhanced Chrome Extensions, working with browser-based functionality, user interactions, DOM manipulation, automated workflow triggers, and extension-specific API integrations for productivity and client operations.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Chrome Extension API",
      "DOM Automation",
      "REST APIs",
    ],
    link: "https://github.com/quonainejaz-official/",
    github: "https://github.com/quonainejaz-official/",
    image: "/projects/chrome-extension.svg",
  },
  {
    id: 9,
    title: "Cross-Platform Desktop App — Tauri & Rust",
    category: "Tauri / Rust",
    type: "desktop",
    description:
      "Engineered cross-platform desktop application using Tauri and Rust combined with modern Vue.js and Vite. Delivers ultra-low memory footprint, high performance, native OS capabilities, and secure system-level operations.",
    technologies: ["Tauri", "Rust", "Vue.js", "Vite", "Desktop APIs"],
    link: "https://github.com/quonainejaz-official/",
    github: "https://github.com/quonainejaz-official/",
    image: "/projects/tauri-app.svg",
  },
];
