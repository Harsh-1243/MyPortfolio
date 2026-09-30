// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { experience } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";

// export default function Experience() {
//   const trackRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: trackRef,
//     offset: ["start 80%", "end 60%"],
//   });
//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       id="experience"
//       className="relative border-y border-white/5 bg-white/[0.015] py-28"
//     >
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab
//           tab="experience.log"
//           comment="// where I've worked"
//           title="Experience"
//         />

//         <div ref={trackRef} className="relative pl-8">
//           <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" />
//           <motion.div
//             style={{ scaleY, originY: 0 }}
//             className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-blue-400 to-blue-600"
//           />

//           <div className="space-y-12">
//             {experience.map((job, i) => (
//               <Reveal key={job.company} delay={i * 0.1}>
//                 <div className="relative">
//                   <span className="absolute -left-[30px] top-1 h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-ink-950 shadow-glow" />
//                   <span className="mb-2 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-blue-300">
//                     {job.period}
//                   </span>
//                   <h3 className="text-lg font-semibold text-paper">
//                     {job.role}
//                   </h3>
//                   <p className="font-mono text-sm text-muted">{job.company}</p>
//                   <ul className="mt-3 space-y-1.5">
//                     {job.bullets.map((b, bi) => (
//                       <li
//                         key={bi}
//                         className="flex gap-2 text-sm leading-relaxed text-white/65"
//                       >
//                         <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/70" />
//                         {b}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   BriefcaseBusiness,
//   ChevronRight,
//   Cpu,
//   GitBranch,
//   Network,
// } from "lucide-react";

// import { experience } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";

// /* ============================================================
//    EXPERIENCE ITEM
// ============================================================ */

// function ExperienceItem({ job, index, total }) {
//   const isLast = index === total - 1;

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 24,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.18,
//       }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.08,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6"
//     >
//       {/* ======================================================
//           TIMELINE RAIL

//           IMPORTANT:
//           The connector belongs to THIS item.
//           Therefore it always matches the item's height.
//       ====================================================== */}

//       <div className="relative flex justify-center">
//         {/* Connector to next item */}
//         {!isLast && (
//           <motion.div
//             initial={{
//               scaleY: 0,
//             }}
//             whileInView={{
//               scaleY: 1,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.45,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15 + index * 0.08,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="absolute left-1/2 top-7 bottom-[-34px] w-px origin-top -translate-x-1/2 bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent"
//           />
//         )}

//         {/* Node */}
//         <motion.div
//           initial={{
//             scale: 0.7,
//             opacity: 0,
//           }}
//           whileInView={{
//             scale: 1,
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.35,
//           }}
//           transition={{
//             duration: 0.45,
//             delay: 0.1 + index * 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative z-10 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/50 bg-[#0a0f14] shadow-[0_0_0_4px_rgba(59,130,246,0.04)]"
//         >
//           <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
//         </motion.div>
//       </div>

//       {/* ======================================================
//           CONTENT
//       ====================================================== */}

//       <div className="min-w-0 pb-8">
//         {/* ====================================================
//             META ROW
//         ==================================================== */}

//         <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
//           <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-400/70">
//             node_{String(index + 1).padStart(2, "0")}
//           </span>

//           <span className="h-px w-6 bg-white/10" />

//           <span className="font-mono text-[10px] text-white/30">
//             {job.period}
//           </span>
//         </div>

//         {/* ====================================================
//             MAIN CARD
//         ==================================================== */}

//         <motion.div
//           whileHover={{
//             y: -2,
//           }}
//           transition={{
//             duration: 0.25,
//           }}
//           className="group relative mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]/85 transition-colors duration-300 hover:border-blue-400/25"
//         >
//           {/* top signal line */}
//           <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-blue-400/50 via-blue-400/10 to-transparent" />

//           <div className="p-5 sm:p-6">
//             {/* ==================================================
//                 HEADER
//             ================================================== */}

//             <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//               <div className="min-w-0">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseBusiness
//                     size={14}
//                     className="shrink-0 text-blue-400/65"
//                   />

//                   <h3 className="truncate text-lg font-semibold text-paper sm:text-xl">
//                     {job.role}
//                   </h3>
//                 </div>

//                 <div className="mt-2 flex items-center gap-2 font-mono text-xs text-white/60 sm:text-sm">
//                   <ChevronRight
//                     size={13}
//                     className="text-blue-400/40"
//                   />

//                   <span className="text-blue-300/70">
//                     {job.company}
//                   </span>
//                 </div>
//               </div>

//               {/* Period */}
//               <div className="flex w-fit shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-white/40">
//                 <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />

//                 {job.period}
//               </div>
//             </div>

//             {/* ==================================================
//                 SYSTEM DESCRIPTION
//             ================================================== */}

//             <div className="mt-5 flex items-center gap-3 border-y border-white/5 py-3">
//               <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/20">
//                 <Cpu
//                   size={11}
//                   className="text-blue-400/45"
//                 />

//                 role.system
//               </div>

//               <div className="h-px flex-1 bg-white/5" />

//               <span className="font-mono text-[9px] text-white/15">
//                 {String(job.bullets.length).padStart(2, "0")} outputs
//               </span>
//             </div>

//             {/* ==================================================
//                 CONTRIBUTIONS
//             ================================================== */}

//             <div className="mt-5 space-y-3">
//               {job.bullets.map((bullet, bulletIndex) => (
//                 <motion.div
//                   key={`${job.company}-${bulletIndex}`}
//                   initial={{
//                     opacity: 0,
//                     x: 10,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.3,
//                   }}
//                   transition={{
//                     duration: 0.4,
//                     delay:
//                       0.15 +
//                       index * 0.08 +
//                       bulletIndex * 0.05,
//                   }}
//                   className="group/item flex items-start gap-3"
//                 >
//                   {/* Output marker */}
//                   <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-white/5 bg-white/[0.025] font-mono text-[8px] text-blue-400/55 transition-colors duration-200 group-hover/item:border-blue-400/20 group-hover/item:text-blue-300">
//                     {String(bulletIndex + 1).padStart(2, "0")}
//                   </span>

//                   {/* Content */}
//                   <p className="min-w-0 pt-0.5 text-sm leading-7 text-white/60 transition-colors duration-200 group-hover/item:text-white/75">
//                     {bullet}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* ==================================================
//                 FOOTER
//             ================================================== */}

//             <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
//               <div className="flex items-center gap-2 font-mono text-[9px] text-white/20">
//                 <Network
//                   size={11}
//                   className="text-blue-400/40"
//                 />

//                 <span>
//                   professional_node
//                 </span>
//               </div>

//               <ArrowRight
//                 size={12}
//                 className="text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400/60"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// /* ============================================================
//    EXPERIENCE SECTION
// ============================================================ */

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden border-y border-white/5 bg-[#0a0f14] py-28"
//     >
//       <div className="mx-auto max-w-6xl px-6">
//         {/* ======================================================
//             HEADER
//         ====================================================== */}

//         <SectionTab
//           tab="experience.graph"
//           comment="// professional progression"
//           title="Experience"
//         />

//         {/* ======================================================
//             DESCRIPTION
//         ====================================================== */}

//         <Reveal>
//           <div className="mt-8 max-w-2xl">
//             <p className="font-mono text-sm leading-7 text-white/40">
//               <span className="text-blue-400/65">
//                 {"//"}
//               </span>{" "}
//               A progression of roles, systems, responsibilities
//               and engineering experience.
//             </p>
//           </div>
//         </Reveal>

//         {/* ======================================================
//             SYSTEM HEADER
//         ====================================================== */}

//         <Reveal delay={0.08}>
//           <div className="mt-12 flex flex-col gap-4 rounded-xl border border-white/10 bg-[#0d1117]/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
//             <div className="flex items-center gap-3">
//               <div className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-400/15 bg-blue-500/[0.04]">
//                 <GitBranch
//                   size={14}
//                   className="text-blue-400/65"
//                 />
//               </div>

//               <div>
//                 <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/20">
//                   career_path
//                 </p>

//                 <p className="mt-0.5 font-mono text-xs text-white/55">
//                   professional.progression
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 font-mono text-[9px] text-white/20">
//               <span className="flex items-center gap-1.5">
//                 <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
//                 active
//               </span>

//               <span className="text-white/10">
//                 /
//               </span>

//               <span>
//                 {experience.length} nodes
//               </span>
//             </div>
//           </div>
//         </Reveal>

//         {/* ======================================================
//             TIMELINE
//         ====================================================== */}

//         <div className="mt-10">
//           {experience.map((job, index) => (
//             <ExperienceItem
//               key={`${job.company}-${job.period}`}
//               job={job}
//               index={index}
//               total={experience.length}
//             />
//           ))}
//         </div>

//         {/* ======================================================
//             END NODE
//         ====================================================== */}

//         <Reveal delay={0.15}>
//           <div className="ml-[10px] flex items-center gap-3 sm:ml-[14px]">
//             <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#0a0f14]">
//               <Activity
//                 size={9}
//                 className="text-blue-400/40"
//               />
//             </div>

//             <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/15">
//               current state / continue building
//             </span>
//           </div>
//         </Reveal>
//       </div>

//       {/* ========================================================
//           AMBIENT BACKGROUND
//       ======================================================== */}

//       <div className="pointer-events-none absolute left-4 top-[40%] hidden font-mono text-[9px] leading-5 text-white/[0.02] xl:block">
//         system.trace()
//         <br />
//         career.initialize()
//         <br />
//         progression.track()
//         <br />
//         state = active
//       </div>

//       <div className="pointer-events-none absolute bottom-24 right-5 hidden text-right font-mono text-[9px] leading-5 text-white/[0.02] xl:block">
//         architecture
//         <br />
//         ├── experience
//         <br />
//         ├── engineering
//         <br />
//         └── growth
//       </div>
//     </section>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  CircleDot,
  ChevronRight,
  Check,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { experience, personalInfo } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

/* ============================================================
   EXPERIENCE NODE
============================================================ */

function ExperienceNode({ index, isActive, isPast, isLast }) {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12">
      {/* ======================================================
          CONNECTOR
      ====================================================== */}

      {!isLast && (
        <motion.div
          initial={false}
          animate={{
            backgroundColor:
              isPast || isActive
                ? "rgba(88,166,255,0.45)"
                : "rgba(255,255,255,0.08)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="absolute left-[18px] top-7 bottom-[-48px] w-px sm:left-[22px]"
        >
          {/* Active travelling light */}
          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scaleY: isActive ? 1 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-0 top-0 bottom-0 origin-top bg-blue-400 shadow-[0_0_10px_rgba(88,166,255,0.45)]"
          />
        </motion.div>
      )}

      {/* ======================================================
          NODE
      ====================================================== */}

      <div className="absolute left-[8px] top-0 sm:left-[12px]">
        {/* Outer reactive ring */}
        <motion.div
          initial={false}
          animate={{
            scale: isActive ? 1.35 : isPast ? 1.15 : 1,
            opacity: isActive ? 1 : isPast ? 0.65 : 0.4,
            borderColor: isActive
              ? "rgba(88,166,255,0.75)"
              : isPast
                ? "rgba(88,166,255,0.45)"
                : "rgba(255,255,255,0.12)",
            boxShadow: isActive
              ? "0 0 0 5px rgba(88,166,255,0.07), 0 0 20px rgba(88,166,255,0.28)"
              : "0 0 0 0 rgba(88,166,255,0)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="flex h-5 w-5 items-center justify-center rounded-full border bg-[#0d1117]"
        >
          {/* Inner dot */}
          <motion.span
            initial={false}
            animate={{
              scale: isActive ? 1 : isPast ? 0.9 : 0.65,
              backgroundColor:
                isActive || isPast
                  ? "rgb(88,166,255)"
                  : "rgba(255,255,255,0.25)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="h-2 w-2 rounded-full"
          />
        </motion.div>

        {/* HEAD indicator */}
        {/* <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            x: isActive ? 0 : -6,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute left-7 top-0 hidden whitespace-nowrap rounded-md border border-blue-400/20 bg-blue-500/[0.07] px-1.5 py-0.5 font-mono text-[8px] text-blue-300 sm:block"
        >
          HEAD
        </motion.div> */}
      </div>

      {/* Commit number */}
      {/* <span className="absolute left-0 top-7 hidden font-mono text-[8px] text-white/15 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span> */}
    </div>
  );
}

/* ============================================================
   EXPERIENCE COMMIT CARD
============================================================ */

function ExperienceCommit({
  job,
  index,
  total,
  isActive,
  isPast,
  registerRef,
}) {
  const isLast = index === total - 1;

  return (
    <motion.article
      ref={registerRef}
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pb-12 pl-10 sm:pl-12"
    >
      {/* ======================================================
          TIMELINE NODE
      ====================================================== */}

      <ExperienceNode
        index={index}
        isActive={isActive}
        isPast={isPast}
        isLast={isLast}
      />

      {/* ======================================================
          CARD
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          borderColor: isActive
            ? "rgba(88,166,255,0.28)"
            : "rgba(255,255,255,0.09)",
          backgroundColor: isActive
            ? "rgba(13,17,23,0.95)"
            : "rgba(13,17,23,0.78)",
        }}
        transition={{
          duration: 0.3,
        }}
        className="group relative overflow-hidden rounded-xl border shadow-sm backdrop-blur-sm"
      >
        {/* ====================================================
            TOP BAR
        ==================================================== */}

        <div className="flex flex-col gap-2 border-b border-white/5 bg-white/[0.015] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          {/* commit */}
          <div className="flex min-w-0 items-center gap-2">
            <GitCommitHorizontal
              size={13}
              className={`shrink-0 transition-colors duration-300 ${
                isActive ? "text-blue-400" : "text-white/25"
              }`}
            />

            <span className="font-mono text-[10px] text-green-500">commit</span>

            <span className="truncate font-mono text-[10px] text-white/60">
              career_{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* period */}
          <span className="w-fit font-mono text-[10px] text-green-400/55">
            {job.period}
          </span>
        </div>

        {/* ====================================================
            BODY
        ==================================================== */}

        <div className="p-5 sm:p-6">
          {/* Role */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-paper sm:text-xl">
                {job.role}
              </h3>

              <div className="mt-1 flex items-center gap-2 font-mono text-xs text-blue-300/70 sm:text-sm">
                <ChevronRight size={13} className="text-blue-400/40" />

                {job.company}
              </div>
            </div>

            {/* status */}
            <div className="flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 font-mono text-[9px] text-white/60">
              <Check size={10} className="text-green-400/50" />
              merged
            </div>
          </div>

          {/* ==================================================
              DIFF HEADER
          ================================================== */}

          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60">
              changes
            </span>

            <span className="h-px flex-1 bg-white/5" />

            <span className="font-mono text-[9px] text-white/60">
              {job.bullets.length} additions
            </span>
          </div>

          {/* ==================================================
              DIFF
          ================================================== */}

          <div className="mt-3 overflow-hidden rounded-lg border border-white/5 bg-[#080c10]">
            {job.bullets.map((bullet, bulletIndex) => (
              <motion.div
                key={`${job.company}-${bulletIndex}`}
                initial={{
                  opacity: 0,
                  x: 8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.1 + index * 0.05 + bulletIndex * 0.045,
                }}
                className="group/diff flex border-b border-white/[0.035] last:border-b-0"
              >
                {/* Line number */}
                <span className="w-8 shrink-0 select-none border-r border-white/5 py-2.5 text-right pr-2 font-mono text-[9px] text-white/60 sm:w-10">
                  {String(bulletIndex + 1).padStart(2, "0")}
                </span>

                {/* + */}
                <span className="w-7 shrink-0 select-none py-2.5 text-center font-mono text-xs text-green-400/60">
                  +
                </span>

                {/* Text */}
                <p className="min-w-0 flex-1 py-2.5 pr-3 text-xs leading-6 text-white/55 transition-colors duration-200 group-hover/diff:text-white/75 sm:pr-5 sm:text-sm">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ==================================================
              FOOTER
          ================================================== */}

          <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[9px] text-white/15">
            <span className="flex items-center gap-1.5">
              <GitBranch size={10} />
              main
            </span>

            <span>+{job.bullets.length} changes</span>

            <span className="hidden sm:inline">status: merged</span>

            <span className="ml-auto">
              {index + 1}/{total}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ============================================================
   EXPERIENCE
============================================================ */

export default function Experience() {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * IntersectionObserver gives us a real scroll-reactive
   * "current commit" instead of calculating the track from
   * total section height.
   */
  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean);

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

        if (index !== -1) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0, 0.2, 0.5, 0.8, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/5 bg-[#0a0d12] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <SectionTab
          tab="experience.graph"
          comment="// professional progression"
          title="Experience"
        />

        <Reveal>
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm leading-7 text-white/40">
              <span className="text-blue-400/65">{"//"}</span> A visual history
              of professional growth, represented through a Git-style
              development graph.
            </p>
          </div>
        </Reveal>

        {/* ======================================================
            REPOSITORY HEADER
        ====================================================== */}

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
            {/* top */}
            <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <FaGithub size={20} className="shrink-0 text-white/70" />

                <div className="min-w-0">
                  <p className="truncate font-mono text-xs text-white/60 sm:text-sm">
                    {personalInfo.name
                      ? `${personalInfo.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/career`
                      : "developer/career"}
                  </p>

                  <p className="mt-0.5 font-mono text-[9px] text-white/50">
                    professional-history
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Branch */}
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] text-white/60">
                  <GitBranch size={11} className="text-green-400/50" />
                  main
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] text-white/60">
                  <CircleDot size={11} className="text-blue-400/60" />
                  {experience.length} commits
                </div>
              </div>
            </div>

            {/* tabs */}
            <div className="flex h-10 items-center gap-5 border-b border-white/5 px-4 sm:px-5">
              <div className="flex h-full items-center border-b border-blue-400/60 font-mono text-[9px] text-white/60">
                Commits
              </div>

              <div className="font-mono text-[9px] text-white/60">
                Branch: main
              </div>

              <div className="hidden font-mono text-[9px] text-white/60 sm:block">
                History
              </div>
            </div>
          </div>
        </Reveal>

        {/* ======================================================
            GRAPH
        ====================================================== */}

        <div className="relative mt-8">
          {experience.map((job, index) => (
            <ExperienceCommit
              key={`${job.company}-${job.period}`}
              job={job}
              index={index}
              total={experience.length}
              isActive={activeIndex === index}
              isPast={index < activeIndex}
              registerRef={(element) => {
                itemRefs.current[index] = element;
              }}
            />
          ))}

          {/* Final branch node */}
          <div className="relative pl-10 sm:pl-12">
            <div className="absolute left-[8px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#0d1117] sm:left-[12px]">
              <GitMerge size={10} className="text-white/60" />
            </div>

            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60">
              current HEAD · continuing to build
            </div>
          </div>
        </div>

        {/* ======================================================
            STATUS FOOTER
        ====================================================== */}
      </div>

      {/* ========================================================
          BACKGROUND GIT GRAPH
      ======================================================== */}

      <div className="pointer-events-none absolute left-4 top-[38%] hidden font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        $ git log --career
        <br />
        $ git branch --show-current
        <br />
        main
        <br />
        $ git status
        <br />
        working tree clean
      </div>

      <div className="pointer-events-none absolute bottom-24 right-5 hidden text-right font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        origin/main
        <br />
        │
        <br />
        ├── experience
        <br />
        ├── growth
        <br />
        └── current
      </div>
    </section>
  );
}
