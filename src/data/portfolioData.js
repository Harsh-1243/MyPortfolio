import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiSocketdotio,
  SiRedis,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

import {
  Server,
  Bot,
  Sparkles,
  Globe,
  Component,
  Layers,
  BarChart3,
  ShieldCheck,
  KeyRound,
  Cookie,
  CreditCard,
  Truck,
  PackageOpen,
  Zap,
  Search,
} from "lucide-react";

// NOTE: if any "Si..." icon ever throws an import error after a package
// upgrade, look up the current export name at
// https://react-icons.github.io/react-icons/icons/si/ and swap it below.

export const navLinks = [
  { id: "hero", label: "hero.tsx" },
  { id: "about", label: "about.js" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects/" },
  { id: "experience", label: "experience.log" },
  { id: "contact", label: "contact.send()" },
];

export const personalInfo = {
  name: "Harsh Panchal",
  role: "Full Stack Engineer",
  rolesTyped: [
    "Full Stack Engineer",
    "React.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
  ],
  location: "Ahmedabad, Gujarat, India",
  email: "harshpanchal1243@gmail.com",
  phone: "+91 8487991243",
  linkedin: "https://www.linkedin.com/in/harsh-panchal-728306262/",

  // TODO: add your GitHub profile URL — the GitHub button/icon appears
  // automatically once this is filled in.
  github: "https://github.com/Harsh-1243",

  // TODO: point this at your resume PDF, e.g. "/harsh-panchal-resume.pdf"
  // placed inside the /public folder.
  resumeUrl: "HarshPanchalFullStackDeveloperCV.pdf",

  // TODO: drop your avatar images inside /public and point these to the
  // file names, e.g. avatarSrc: "/avatar-hero.png". Leave as null to use
  // the generated "HP" fallback avatar.
  avatarSrc: null,
  avatarAltSrc: null,

  summary:
    "I build scalable, high-performance web applications with React.js, Node.js, Express.js and MySQL and MongoDB — from admin dashboards to real-time systems. I care about clean architecture, responsive UI, and shipping things that actually work in production.",

  aboutParagraph1:
    "I'm a full stack developer currently building scalable web applications at NovaHex Solution, working across the whole stack — from crafting responsive React interfaces to designing RESTful APIs and managing MySQL-backed services.",
  aboutParagraph2:
    "I enjoy turning fairly complex product requirements — admin panels, e-commerce flows, real-time tracking — into clean, maintainable code. Outside of shipping features, I'm usually exploring new tools in the JavaScript ecosystem or refining the details of a UI.",
};

export const socialLinks = [
  { label: "Email", icon: "mail", href: `mailto:${personalInfo.email}` },
  {
    label: "Phone",
    icon: "phone",
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  { label: "LinkedIn", icon: "linkedin", href: personalInfo.linkedin },
  ...(personalInfo.github
    ? [{ label: "GitHub", icon: "github", href: personalInfo.github }]
    : []),
];

export const heroBadges = ["React.js", "Node.js", "Express.js", "MySQL"];

export const aboutStats = [
  { label: "Projects", value: 4, suffix: "+" },
  { label: "Core Stack", value: 4, suffix: "" },
  { label: "Since", value: 2024, suffix: "" },
];

export const aboutFacts = [
  { key: "location", value: personalInfo.location },
  { key: "education", value: "BCA — Dr. Babasaheb Ambedkar Open University" },
  { key: "languages", value: "English, Gujarati, Hindi" },
  { key: "focus", value: "Scalable web apps & clean architecture" },
];

// export const skillCategories = [
//   {
//     title: "Frontend",
//     items: [
//       { name: "React.js", icon: SiReact },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "Redux", icon: SiRedux },
//       { name: "JavaScript (ES6+)", icon: SiJavascript },
//       { name: "HTML5", icon: SiHtml5 },
//       { name: "CSS3", icon: SiCss },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "Bootstrap", icon: SiBootstrap },
//       { name: "jQuery", icon: SiJquery },
//       { name: "Material UI", icon: SiMui },
//     ],
//   },
//   {
//     title: "Backend",
//     items: [
//       { name: "Node.js", icon: SiNodedotjs },
//       { name: "Express.js", icon: SiExpress },
//     ],
//   },
//   {
//     title: "Payments",
//     items: [
//       { name: "Razorpay", icon: Globe },
//       { name: "Payment Gateway Integration", icon: Globe },
//     ],
//   },
//   {
//     title: "Databases",
//     items: [
//       { name: "MySQL", icon: SiMysql },
//       { name: "PostgreSQL", icon: SiPostgresql },
//       { name: "MongoDB", icon: SiMongodb },
//     ],
//   },
//   {
//     title: "Tools",
//     items: [
//       { name: "Git", icon: SiGit },
//       { name: "GitHub", icon: SiGithub },
//       { name: "Postman", icon: SiPostman },
//       { name: "cPanel", icon: Server },
//     ],
//   },
//   {
//     title: "AI Tools",
//     items: [
//       { name: "ChatGPT", icon: Bot },
//       { name: "GitHub Copilot", icon: Bot },
//       { name: "Claude", icon: Sparkles },
//       { name: "Cursor AI", icon: SiCursor },
//       { name: "OpenAI Codex", icon: Bot },
//     ],
//   },
//   {
//   title: "Other",
//   items: [
//     { name: "Socket.IO", icon: SiSocketdotio },
//     { name: "REST APIs", icon: Globe },
//     { name: "Razorpay Integration", icon: Globe },
//   ],
// },
// ];

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      { name: "Material UI", icon: SiMui },
      { name: "Shadcn UI", icon: Component },
      { name: "Fabric.js", icon: Layers },
    ],
  },

  {
    title: "State & Application",
    items: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "REST APIs", icon: Globe },
      { name: "WebSockets", icon: SiSocketdotio },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Recharts", icon: BarChart3 },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful API Development", icon: Globe },
    ],
  },

  {
    title: "Authentication & Security",
    items: [
      { name: "JWT Authentication", icon: ShieldCheck },
      { name: "Access & Refresh Tokens", icon: KeyRound },
      { name: "Cookie-Based Authentication", icon: Cookie },
      { name: "Role-Based Access Control", icon: ShieldCheck },
    ],
  },

  {
    title: "Databases & Storage",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },

  {
    title: "Payments & Integrations",
    items: [
      { name: "Razorpay", icon: CreditCard },
      { name: "Shiprocket", icon: Truck },
      { name: "Payment Integration", icon: CreditCard },
      { name: "Delivery API Integration", icon: Truck },
    ],
  },

  {
    title: "Performance & Utilities",
    items: [
      { name: "Pako Compression", icon: PackageOpen },
      { name: "API Performance Optimization", icon: Zap },
      { name: "Reusable Components", icon: Component },
      { name: "SEO Optimization", icon: Search },
    ],
  },

  {
    title: "DevOps & Deployment",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "cPanel", icon: Server },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },

  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", icon: Bot },
      { name: "GitHub Copilot", icon: Bot },
      { name: "Claude", icon: Sparkles },
      { name: "DeepSeek", icon: Bot },
    ],
  },
];

// export const projects = [
//   {
//     title: "Shiv Hari Hospitality",
//     urlLabel: "shivharihospitality.com",
//     description:
//       "A fully dynamic tourism management platform for domestic and international travel packages, with an admin panel to manage tours and website content in real time.",
//     techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
//     link: "https://shivharihospitality.com/",
//   },
//   {
//     title: "Parking Valets System",
//     urlLabel: "localhost:3000/valet-system",
//     description:
//       "A real-time parking and vehicle tracking system for valet operations, with live communication between staff, security and admins, plus role-based access for entry, allocation and exit workflows.",
//     techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.IO"],
//     link: null,
//   },
//   {
//     title: "Shoes E-Commerce Website",
//     urlLabel: "localhost:3000/shoe-store",
//     description:
//       "A full-featured footwear e-commerce platform with Redux-powered product listing, filtering and cart management, Razorpay checkout, and an admin dashboard for products, inventory and orders.",
//     techStack: [
//       "React.js",
//       "Redux",
//       "Node.js",
//       "Express.js",
//       "MySQL",
//       "Razorpay",
//     ],
//     link: null,
//   },
//   {
//     title: "Attendance Management Software",
//     urlLabel: "localhost:3000/attendance",
//     description:
//       "An automated attendance system built on company Wi-Fi login tracking, calculating productive working hours automatically and giving admins real-time attendance records and reports.",
//     techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
//     link: null,
//   },
// ];

export const projects = [
  {
    title: "Impact Graphics – Custom Printing & Design Platform",
    urlLabel: "Custom Printing & Design Platform",
    description:
      "A Canva-style custom printing and e-commerce platform where users can customize admin-created templates with text, fonts, backgrounds, and design elements. Implemented the complete shopping workflow with Redux Toolkit, cart management, checkout, address selection, Razorpay payments, delivery integration, JWT access and refresh token authentication, Redis-based session management, and an admin panel for categories, subcategories, templates, SKUs, and customer management. Optimized large design payloads using Pako compression and built reusable email templates for promotional campaigns.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Fabric.js",
      "Redux Toolkit",
      "Pako",
      "Redis",
      "JWT",
      "Razorpay",
      "Shiprocket",
    ],
    link: null,
  },

  {
    title: "NI Events & Holidays",
    urlLabel: "Hospitality & Travel Platform",
    description:
      "A fully dynamic hospitality and travel platform supporting hotel bookings, domestic and international travel packages, and booking services. Developed an admin panel for managing packages, hotels, services, and website content with RESTful API integration. Built responsive reusable components and implemented SEO optimization to improve search visibility and user discoverability.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "SEO",
    ],
    link: null,
  },

  {
    title: "Parking Valets System",
    urlLabel: "Real-Time Parking & Valet Management",
    description:
      "A real-time parking and valet management system for vehicle entry, allocation, tracking, and exit operations. Implemented Socket.IO for live synchronization between valet staff, security, and administrators. Developed optimized RESTful APIs for efficient vehicle data retrieval, unique vehicle tracking, hour-based parking fee calculation, and exit verification with MySQL-based data management.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Socket.IO",
    ],
    link: null,
  },

  {
    title: "Resort CRM – Resort Management System",
    urlLabel: "Resort Management CRM",
    description:
      "A resort management CRM designed to manage inquiries, room bookings, restaurant sales and expenses, employee activities, and daily cash operations. Implemented JWT authentication and scalable RESTful APIs with optimized database queries. Built automated inquiry and booking workflows with an admin dashboard featuring graphical analytics for daily, weekly, monthly, and yearly reports, along with automated daily report generation and email delivery to management.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Recharts",
      "JWT",
    ],
    link: null,
  },

  {
    title: "Shoes E-Commerce",
    urlLabel: "Footwear E-Commerce Platform",
    description:
      "A full-featured footwear e-commerce platform with product listing, filtering, Redux-based cart management, secure Razorpay payments, automatic Order ID generation, payment confirmation, and a secure checkout workflow. Developed an admin dashboard for product, inventory, and customer order management while optimizing APIs for performance and scalability.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redux Toolkit",
      "JWT",
      "Razorpay",
      "Shiprocket",
    ],
    link: null,
  },

  {
    title: "Office Management & CRM Platform",
    urlLabel: "Office Management & CRM",
    description:
      "A full-stack office management and CRM platform covering sales, BDE operations, customer management, employee management, HR workflows, attendance, task tracking, inquiries, and quotation management. Built responsive Admin and User interfaces, secure RESTful APIs, structured MySQL data management, JWT authentication, and role-based access control for secure user and administrative operations.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
      "JWT",
    ],
    link: null,
  },
];

export const experience = [
  {
    role: "FullStack Developer",
    company: "Uniscope Global",
    period: "Apr 2025 — Present",
    bullets: [
      "Build scalable, high-performance web apps with React.js, Node.js, Express.js and MySQL,PostgreSql and MongoDB",
      "Develop responsive, reusable UI components and RESTful APIs with clean, maintainable code.",
      "Collaborate with cross-functional teams to improve usability and optimize performance.",
    ],
  },
  {
    role: "Customer Support Executive",
    company: "Tech Mahindra BPO — Amazon process",
    period: "Aug 2024 — Mar 2025",
    bullets: [
      "Resolved product and technical queries for Amazon customers across chat and call channels.",
      "Documented and escalated system issues, maintaining high satisfaction under strict SLAs.",
      "Built strong communication and problem-solving habits that carried directly into engineering work.",
    ],
  },
];
