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
  SiGit,
  SiGithub,
  SiPostman,
//   SiOpenai,
  SiSocketdotio,
} from "react-icons/si";
import { Server, Bot, Sparkles, Globe } from "lucide-react";

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
  resumeUrl: "harsh_panchal_FullStack_CV.pdf",

  // TODO: drop your avatar images inside /public and point these to the
  // file names, e.g. avatarSrc: "/avatar-hero.png". Leave as null to use
  // the generated "HP" fallback avatar.
  avatarSrc: null,
  avatarAltSrc: null,

  summary:
    "I build scalable, high-performance web applications with React.js, Node.js, Express.js and MySQL — from admin dashboards to real-time systems. I care about clean architecture, responsive UI, and shipping things that actually work in production.",

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

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "cPanel", icon: Server },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", icon: Bot },
      { name: "GitHub Copilot", icon: Bot },
      { name: "Claude", icon: Sparkles },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "REST APIs", icon: Globe },
    ],
  },
];

export const projects = [
  {
    title: "Shiv Hari Hospitality",
    urlLabel: "shivharihospitality.com",
    description:
      "A fully dynamic tourism management platform for domestic and international travel packages, with an admin panel to manage tours and website content in real time.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    link: "https://shivharihospitality.com/",
  },
  {
    title: "Parking Valets System",
    urlLabel: "localhost:3000/valet-system",
    description:
      "A real-time parking and vehicle tracking system for valet operations, with live communication between staff, security and admins, plus role-based access for entry, allocation and exit workflows.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.IO"],
    link: null,
  },
  {
    title: "Shoes E-Commerce Website",
    urlLabel: "localhost:3000/shoe-store",
    description:
      "A full-featured footwear e-commerce platform with Redux-powered product listing, filtering and cart management, Razorpay checkout, and an admin dashboard for products, inventory and orders.",
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Razorpay",
    ],
    link: null,
  },
  {
    title: "Attendance Management Software",
    urlLabel: "localhost:3000/attendance",
    description:
      "An automated attendance system built on company Wi-Fi login tracking, calculating productive working hours automatically and giving admins real-time attendance records and reports.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    link: null,
  },
];

export const experience = [
  {
    role: "FullStack Developer",
    company: "NovaHex Solution",
    period: "Apr 2025 — Present",
    bullets: [
      "Build scalable, high-performance web apps with React.js, Node.js, Express.js and MySQL.",
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
