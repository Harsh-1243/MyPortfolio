// import { ExternalLink, Lock } from "lucide-react";
// import { projects } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab
//           tab="projects/"
//           comment="// a few things I've built"
//           title="Featured Projects"
//         />

//         <div className="grid grid-cols-1 gap-8  ">
//           {projects.map((project, i) => (
//             <Reveal key={project.title} delay={i * 0.1}>
//               <div className="group h-full overflow-hidden rounded-xl border border-white/10 bg-ink-800/60 transition-all hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-glow">
//                 <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
//                   <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
//                   <span className="ml-3 truncate font-mono text-[11px] text-muted">
//                     {project.urlLabel}
//                   </span>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-paper">
//                     {project.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-justify leading-relaxed text-white/65">
//                     {project.description}
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.techStack.map((t) => (
//                       <span
//                         key={t}
//                         className="rounded-md border border-blue-400/20 bg-blue-500/5 px-2 py-1 font-mono text-[11px] text-blue-300"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex items-center gap-2">
//                     {project.link ? (
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300"
//                       >
//                         <ExternalLink size={13} /> live_demo
//                       </a>
//                     ) : (
//                       <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 font-mono text-xs text-muted">
//                         <Lock size={13} /> private_build
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { ExternalLink, Lock } from "lucide-react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";

// import { projects } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";

// function StackedProjectCard({ project, index, total, scrollYProgress }) {
//   const progressPerCard = 1 / total;

//   // When this card starts coming into focus
//   const enterStart = Math.max(
//     0,
//     index * progressPerCard - progressPerCard * 0.35
//   );

//   const enterEnd =
//     index * progressPerCard + progressPerCard * 0.1;

//   // When this card starts going backwards
//   const exitStart =
//     index * progressPerCard + progressPerCard * 0.6;

//   const exitEnd = (index + 1) * progressPerCard;

//   /*
//    * CARD Y POSITION
//    *
//    * Before active  -> slightly down
//    * Active          -> normal position
//    * Leaving         -> slightly up/back
//    */
//   const rawY = useTransform(
//     scrollYProgress,
//     [enterStart, enterEnd, exitStart, exitEnd],
//     [45, 0, 0, -20]
//   );

//   /*
//    * CARD X POSITION
//    *
//    * Active          -> 0
//    * Leaving         -> move left/back
//    */
//   const rawX = useTransform(
//     scrollYProgress,
//     [enterStart, enterEnd, exitStart, exitEnd],
//     [0, 0, 0, -70]
//   );

//   /*
//    * SCALE
//    *
//    * Cards behind become slightly smaller.
//    */
//   const rawScale = useTransform(
//     scrollYProgress,
//     [enterStart, enterEnd, exitStart, exitEnd],
//     [0.94, 1, 1, 0.92]
//   );

//   /*
//    * ROTATION
//    */
//   const rawRotate = useTransform(
//     scrollYProgress,
//     [enterStart, enterEnd, exitStart, exitEnd],
//     [1.5, 0, 0, -2]
//   );

//   /*
//    * OPACITY
//    */
//   const rawOpacity = useTransform(
//     scrollYProgress,
//     [enterStart, enterEnd, exitStart, exitEnd],
//     [0.55, 1, 1, 0.45]
//   );

//   /*
//    * Smooth spring motion
//    */
//   const y = useSpring(rawY, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.7,
//   });

//   const x = useSpring(rawX, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.7,
//   });

//   const scale = useSpring(rawScale, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.7,
//   });

//   const rotate = useSpring(rawRotate, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.7,
//   });

//   const opacity = useSpring(rawOpacity, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.7,
//   });

//   return (
//     <div className="relative h-[72vh] min-h-[520px]">
//       <motion.div
//         style={{
//           x,
//           y,
//           scale,
//           rotate,
//           opacity,
//           zIndex: index + 1,
//         }}
//         className="sticky top-24 mx-auto w-full max-w-5xl origin-center will-change-transform"
//       >
//         <div className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/90 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30">

//           {/* Browser Header */}
//           <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
//             <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
//             <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
//             <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

//             <span className="ml-3 truncate font-mono text-[11px] text-muted">
//               {project.urlLabel}
//             </span>

//             <span className="ml-auto font-mono text-[10px] text-white/25">
//               {String(index + 1).padStart(2, "0")} /{" "}
//               {String(total).padStart(2, "0")}
//             </span>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <h3 className="text-xl font-semibold tracking-tight text-paper md:text-2xl">
//               {project.title}
//             </h3>

//             <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65 md:text-[15px]">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="mt-6 flex flex-wrap gap-2">
//               {project.techStack.map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-md border border-blue-400/20 bg-blue-500/5 px-2.5 py-1.5 font-mono text-[11px] text-blue-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="mt-7 flex items-center justify-between">
//               {project.link ? (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 font-mono text-xs text-paper transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/5 hover:text-blue-300"
//                 >
//                   <ExternalLink size={13} />
//                   live_demo
//                 </a>
//               ) : (
//                 <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3.5 py-2 font-mono text-xs text-muted">
//                   <Lock size={13} />
//                   private_build
//                 </span>
//               )}

//               <span className="hidden font-mono text-[10px] text-white/25 md:block">
//                 scroll_to_explore
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Projects() {
//   const stackRef = useRef(null);

//   /*
//    * Track only the project-stack area,
//    * not the whole section.
//    */
//   const { scrollYProgress } = useScroll({
//     target: stackRef,
//     offset: ["start 20%", "end 75%"],
//   });

//   return (
//     <section id="projects" className="relative py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab
//           tab="projects/"
//           comment="// a few things I've built"
//           title="Featured Projects"
//         />

//         {/* Stacked Project Area */}
//         <div ref={stackRef} className="mt-10">
//           {projects.map((project, index) => (
//             <StackedProjectCard
//               key={project.title}
//               project={project}
//               index={index}
//               total={projects.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  ExternalLink,
  FileCode2,
  GitBranch,
  GitCommitHorizontal,
  Lock,
  Package,
  Search,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

/* ============================================================
   PROJECT HELPERS
============================================================ */

function repositoryName(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function projectSlug(project, index) {
  return `${repositoryName(project.title)}-${index + 1}`;
}

/* ============================================================
   REPOSITORY LIST ITEM
============================================================ */

function RepositoryItem({ project, index, active, onClick }) {
  const isActive = active === index;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={`group w-full text-left transition-colors duration-200 ${
        isActive ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"
      }`}
    >
      <div className="flex items-start gap-3 px-3 py-3">
        {/* Status dot */}
        <div className="pt-1">
          <motion.span
            animate={{
              scale: isActive ? 1.08 : 1,
            }}
            className={`block h-2.5 w-2.5 rounded-full border ${
              isActive
                ? "border-blue-400 bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.45)]"
                : "border-white/20 bg-white/[0.04]"
            }`}
          />
        </div>

        {/* Repository */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p
              className={`truncate font-mono text-[11px] ${
                isActive ? "text-blue-300" : "text-white/55"
              }`}
            >
              {repositoryName(project.title)}
            </p>

            {isActive && (
              <span className="rounded border border-blue-400/15 bg-blue-500/[0.05] px-1.5 py-0.5 font-mono text-[8px] text-blue-300/65">
                HEAD
              </span>
            )}
          </div>

          <div className="mt-1 flex items-center gap-2">
            <GitBranch size={10} className="text-white/60" />

            <span className="font-mono text-[9px] text-white/60">main</span>

            <span className="text-white/10">•</span>

            <span className="font-mono text-[9px] text-white/60">
              {project.techStack.length} deps
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ============================================================
   FILE TREE
============================================================ */

function FileTree({ project }) {
  return (
    <div className="space-y-1 font-mono text-[10px]">
      <div className="flex items-center gap-2 py-1 text-white/35">
        <ChevronRight size={11} />
        <span>src</span>
      </div>

      <div className="ml-3 space-y-1 border-l border-white/5 pl-3">
        <div className="flex items-center gap-2 py-1 text-white/25">
          <ChevronRight size={11} />
          <span>components</span>
        </div>

        <div className="flex items-center gap-2 py-1 text-white/25">
          <ChevronRight size={11} />
          <span>pages</span>
        </div>

        <div className="flex items-center gap-2 py-1 text-white/25">
          <ChevronRight size={11} />
          <span>services</span>
        </div>

        <div className="flex items-center gap-2 py-1 text-white/25">
          <ChevronRight size={11} />
          <span>utils</span>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded bg-white/[0.025] px-2 py-1.5 text-white/60">
        <FileCode2 size={11} className="text-blue-400/55" />
        <span>README.md</span>
      </div>

      <div className="flex items-center gap-2 py-1 text-white/25">
        <FileCode2 size={11} className="text-yellow-300/45" />
        <span>package.json</span>
      </div>

      <div className="flex items-center gap-2 py-1 text-white/25">
        <FileCode2 size={11} className="text-green-300/45" />
        <span>index.js</span>
      </div>

      <div className="mt-3 border-t border-white/5 pt-3">
        <div className="flex items-center gap-2 text-white/60">
          <span>repository</span>
        </div>

        <div className="mt-1 truncate pl-3 text-white/60">{project.title}</div>
      </div>
    </div>
  );
}

/* ============================================================
   TECH BADGE
============================================================ */

function TechBadge({ name, index }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
        delay: index * 0.025,
      }}
      className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md  bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-white/60"
    >
      {/* <Package size={10} className="text-white-400/45" /> */}

      {name}
    </motion.span>
  );
}

/* ============================================================
   PROJECT README
============================================================ */

function ProjectReadme({ project, index }) {
  return (
    <motion.div
      key={project.title}
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="min-w-0"
    >
      {/* README header */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <BookOpen size={13} className="text-white/30" />

          <span className="font-mono text-[10px] text-white/35">README.md</span>
        </div>

        <span className="font-mono text-[9px] text-white/60">main</span>
      </div>

      <div className="p-5 sm:p-7">
        {/* ======================================================
            PROJECT TITLE
        ====================================================== */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-blue-400/55">
                repository
              </span>

              <span className="text-white/10">/</span>

              <span className="truncate font-mono text-[9px] text-white/60">
                {repositoryName(project.title)}
              </span>
            </div>

            <h3 className="break-words text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              {project.title}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] text-white/60">
              <span className="flex items-center gap-1.5">
                <CircleDot size={9} className="text-green-400/50" />
                active
              </span>

              <span>•</span>

              <span>project_{String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Repository action */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-white/45 transition-all duration-300 hover:border-blue-400/30 hover:text-blue-300"
            >
              <ExternalLink size={11} />
              live
            </a>
          ) : (
            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md  bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-white/60">
              <Lock size={11} />
              private
            </span>
          )}
        </div>

        {/* ======================================================
            DESCRIPTION
        ====================================================== */}

        <div className="mt-7">
          <p className="max-w-3xl text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-7">
            {project.description}
          </p>
        </div>

        {/* ======================================================
            TECH STACK
        ====================================================== */}

        <div className="mt-7">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
              stack
            </span>

            <span className="h-px flex-1 bg-white/5" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <TechBadge key={tech} name={tech} index={techIndex} />
            ))}
          </div>
        </div>

        {/* ======================================================
            PROJECT METADATA
        ====================================================== */}

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 sm:grid-cols-4">
          <div className="bg-[#0c1117] px-3 py-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-white/60">
              branch
            </p>

            <div className="mt-1 flex items-center gap-1.5 font-mono text-[9px] text-white/40">
              <GitBranch size={10} />
              main
            </div>
          </div>

          <div className="bg-[#0c1117] px-3 py-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-white/60">
              dependencies
            </p>

            <p className="mt-1 font-mono text-[9px] text-white/40">
              {project.techStack.length}
            </p>
          </div>

          <div className="bg-[#0c1117] px-3 py-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-white/60">
              build
            </p>

            <p className="mt-1 font-mono text-[9px] text-green-400/45">
              stable
            </p>
          </div>

          <div className="bg-[#0c1117] px-3 py-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-white/60">
              source
            </p>

            <p className="mt-1 font-mono text-[9px] text-white/40">
              full-stack
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   PROJECTS
============================================================ */

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projectRefs = useRef([]);

  /* ==========================================================
     SCROLL → ACTIVE REPOSITORY
  ========================================================== */

  useEffect(() => {
    const elements = projectRefs.current.filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.38) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.38),
          );

        if (!visible.length) return;

        const index = elements.indexOf(visible[0].target);

        if (index >= 0) {
          setActiveProject(index);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-white/5 bg-[#090d12] py-28"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.014]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ====================================================
            HEADER
        ==================================================== */}

        <SectionTab
          tab="projects/"
          comment="// systems I've built"
          title="Featured Projects"
        />

        <Reveal>
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm leading-7 text-white/40">
              <span className="text-blue-400/60">{"//"}</span> Explore the
              repositories, technologies and systems behind the projects I've
              built.
            </p>
          </div>
        </Reveal>

        {/* ====================================================
            GITHUB REPOSITORY SHELL
        ==================================================== */}

        <Reveal delay={0.12}>
          <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
            {/* =================================================
                REPOSITORY HEADER
            ================================================= */}

            <div className="border-b border-white/10">
              {/* Top */}
              <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <FaGithub size={21} className="shrink-0 text-white/65" />

                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="font-mono text-xs text-white/65">
                        Harsh-1243
                      </span>

                      <span className="text-white/10">/</span>

                      <span className="truncate font-mono text-xs text-blue-300/75">
                        projects
                      </span>
                    </div>

                    <p className="mt-0.5 font-mono text-[9px] text-white/60">
                      portfolio repository collection
                    </p>
                  </div>
                </div>

                {/* Repo status */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-md   px-2.5 py-1.5 font-mono text-[9px] text-white/60 ">
                    <GitBranch size={10} className="text-green-400/45" />
                    main
                  </div>

                  <div className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-[9px] text-white/60">
                    {projects.length} repositories
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex h-10 items-center gap-5 px-4 sm:px-5">
                <div className="flex h-full items-center gap-2 border-b border-blue-400/60 font-mono text-[9px] text-white/60">
                  <Code2 size={11} />
                  Code
                </div>

                <div className="flex h-full items-center gap-2 font-mono text-[9px] text-white/60">
                  <GitCommitHorizontal size={11} />
                  Commits
                </div>

                <div className="hidden h-full items-center gap-2 font-mono text-[9px] text-white/60 sm:flex">
                  <BookOpen size={11} />
                  README
                </div>
              </div>
            </div>

            {/* =================================================
                MAIN
            ================================================= */}

            <div className="grid min-h-[590px] grid-cols-1 lg:grid-cols-[245px_1fr]">
              {/* =================================================
                  REPOSITORIES SIDEBAR
              ================================================= */}

              <aside className="border-b border-white/10 bg-[#0b0f14] lg:border-b-0 lg:border-r">
                {/* Search */}
                <div className="border-b border-white/5 p-3">
                  <div className="flex items-center gap-2 rounded-md border border-white/40 bg-[#090d12] px-2.5 py-2">
                    <Search size={12} className="text-white/60" />

                    <span className="font-mono text-[9px] text-white/60">
                      find repository...
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
                    repositories
                  </span>

                  <span className="font-mono text-[9px] text-white/60">
                    {projects.length}
                  </span>
                </div>

                {/* List */}
                <div className="border-t border-white/5">
                  {projects.map((projectItem, index) => (
                    <RepositoryItem
                      key={projectItem.title}
                      project={projectItem}
                      index={index}
                      active={activeProject}
                      onClick={setActiveProject}
                    />
                  ))}
                </div>

                {/* Contribution */}
                <div className="mt-4 border-t border-white/5 px-4 py-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
                    activity
                  </p>

                  <div className="mt-3 flex gap-1 flex-wrap">
                    {[
                      0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1,
                      1, 0, 0, 0, 1, 2, 1,
                    ].map((level, index) => (
                      <span
                        key={index}
                        className={`h-3 w-3 rounded-[2px] ${
                          level ? "bg-green-400 " : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-2 font-mono text-[9px] text-white/60">
                    active development
                  </p>
                </div>
              </aside>

              {/* =================================================
                  README / PROJECT
              ================================================= */}

              <main className="min-w-0">
                {/* Breadcrumb */}
                <div className="flex h-11 items-center justify-between border-b border-white/5 bg-[#0f141a] px-4 sm:px-5">
                  <div className="flex min-w-0 items-center gap-2 font-mono text-[9px]">
                    <span className="text-white/60">projects</span>

                    <ChevronRight size={10} className="text-white/10" />

                    <span className="truncate text-blue-300/55">
                      {repositoryName(project.title)}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-white/60">
                    main
                  </span>
                </div>

                {/* File tree + README */}
                <div className="grid lg:grid-cols-[180px_1fr]">
                  {/* desktop file tree */}
                  <aside className="hidden border-r border-white/5 bg-[#0b0f14] p-3 lg:block">
                    <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
                      files
                    </div>

                    <FileTree project={project} />
                  </aside>

                  {/* README */}
                  <div className="min-w-0">
                    <ProjectReadme project={project} index={activeProject} />

                    {/* =================================================
                        GIT STATUS
                    ================================================= */}

                    <div className="border-t border-white/5 bg-[#0b0f14]">
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3 font-mono text-[9px] text-white/60 sm:px-7">
                        <span className="flex items-center gap-1.5">
                          <GitBranch size={9} />
                          branch: main
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Check size={9} className="text-green-400/45" />
                          working tree clean
                        </span>

                        <span className="ml-auto">
                          commit #{String(activeProject + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="flex items-center justify-between border-t border-white/10 bg-[#0a0f14] px-4 py-2.5 font-mono text-[9px] text-white/60 sm:px-5">
              <span>github / projects</span>

              <span>public portfolio</span>
            </div>
          </div>
        </Reveal>

        {/* ====================================================
            MOBILE PROJECT SELECTOR
        ==================================================== */}

        <div className="mt-4 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((projectItem, index) => {
              const active = activeProject === index;

              return (
                <button
                  key={projectItem.title}
                  onClick={() => setActiveProject(index)}
                  className={`shrink-0 rounded-md border px-3 py-2 font-mono text-[9px] ${
                    active
                      ? "border-blue-400/25 bg-blue-500/[0.06] text-blue-300"
                      : "border-white/8 bg-white/[0.02] text-white/25"
                  }`}
                >
                  {repositoryName(projectItem.title)}
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            FOOTER INFO
        ==================================================== */}

        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-col gap-2 border-t border-white/5 pt-5 font-mono text-[9px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <span>repository collection loaded</span>

            <span>branch: main · status: clean</span>
          </div>
        </Reveal>
      </div>

      {/* ========================================================
          BACKGROUND GIT TEXT
      ======================================================== */}

      <div className="pointer-events-none absolute left-4 top-[35%] hidden font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        $ git status
        <br />
        On branch main
        <br />
        working tree clean
        <br />
        $ git log --projects
        <br />
        repositories loaded
      </div>

      <div className="pointer-events-none absolute bottom-24 right-5 hidden text-right font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        origin/main
        <br />
        ├── frontend
        <br />
        ├── backend
        <br />
        ├── database
        <br />
        └── production
      </div>
    </section>
  );
}
