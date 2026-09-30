// import { useEffect, useRef, useState } from "react";
// import { useInView } from "framer-motion";
// import { personalInfo, aboutFacts, aboutStats } from "../data/portfolioData";
// import Avatar from "./ui/Avatar";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";
// import aboutimg from "../assets/images/aboutimg.png";

// function Counter({ value, suffix = "" }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     const duration = 900;
//     const startTime = performance.now();
//     let raf;
//     const tick = (now) => {
//       const progress = Math.min((now - startTime) / duration, 1);
//       setCount(Math.floor(progress * value));
//       if (progress < 1) raf = requestAnimationFrame(tick);
//       else setCount(value);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [inView, value]);

//   return (
//     <span ref={ref} className="font-mono text-3xl font-bold text-paper">
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="relative py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab
//           tab="about.js"
//           comment="// getting to know the developer"
//           title="About Me"
//         />

//         <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
//           <Reveal>
//             <div>
//               <div className="mx-auto   overflow-hidden rounded-2xl border border-white/10 shadow-glow">
//                 <img src={aboutimg} alt="IMG" className="h-100" />
//               </div>
//               <div className="mx-auto mt-8 grid max-w-xs grid-cols-3 gap-4 text-center">
//                 {aboutStats.map((s) => (
//                   <div
//                     key={s.label}
//                     className="rounded-lg border border-white/10 bg-white/[0.03] py-4"
//                   >
//                     <Counter value={s.value} suffix={s.suffix} />
//                     <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">
//                       {s.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.15}>
//             <div>
//               <p className="text-base leading-relaxed text-white/70">
//                 {personalInfo.aboutParagraph1}
//               </p>
//               <p className="mt-4 text-base leading-relaxed text-white/70">
//                 {personalInfo.aboutParagraph2}
//               </p>

//               <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
//                 <div className="border-b border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-muted">
//                   profile.json
//                 </div>
//                 <div className="divide-y divide-white/5">
//                   {aboutFacts.map((fact) => (
//                     <div
//                       key={fact.key}
//                       className="flex items-start gap-2 px-4 py-2.5 font-mono text-xs sm:text-sm"
//                     >
//                       <span className="text-blue-400">{fact.key}:</span>
//                       <span className="text-white/70">"{fact.value}",</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useInView,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import {
//   personalInfo,
//   aboutFacts,
//   aboutStats,
// } from "../data/portfolioData";

// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";
// import aboutimg from "../assets/images/aboutimg.png";

// /* ============================================================
//    COUNTER
// ============================================================ */

// function Counter({ value, suffix = "" }) {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-80px",
//   });

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;

//     const duration = 1100;
//     const startTime = performance.now();

//     let animationFrame;

//     const updateCounter = (currentTime) => {
//       const progress = Math.min(
//         (currentTime - startTime) / duration,
//         1
//       );

//       // Smooth easing
//       const easedProgress =
//         1 - Math.pow(1 - progress, 3);

//       const currentValue = Math.floor(
//         easedProgress * value
//       );

//       setCount(currentValue);

//       if (progress < 1) {
//         animationFrame =
//           requestAnimationFrame(updateCounter);
//       } else {
//         setCount(value);
//       }
//     };

//     animationFrame =
//       requestAnimationFrame(updateCounter);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//     };
//   }, [inView, value]);

//   return (
//     <span
//       ref={ref}
//       className="font-mono text-2xl font-bold tracking-tight text-paper sm:text-3xl"
//     >
//       {count}
//       {suffix}
//     </span>
//   );
// }

// /* ============================================================
//    ABOUT IMAGE
// ============================================================ */

// function AboutImage() {
//   const imageRef = useRef(null);

//   const pointerX = useMotionValue(0);
//   const pointerY = useMotionValue(0);

//   const smoothX = useSpring(pointerX, {
//     stiffness: 70,
//     damping: 22,
//     mass: 0.7,
//   });

//   const smoothY = useSpring(pointerY, {
//     stiffness: 70,
//     damping: 22,
//     mass: 0.7,
//   });

//   /* Image movement */
//   const imageX = useTransform(
//     smoothX,
//     [-0.5, 0.5],
//     [-12, 12]
//   );

//   const imageY = useTransform(
//     smoothY,
//     [-0.5, 0.5],
//     [-10, 10]
//   );

//   /* Slight frame movement */
//   const frameX = useTransform(
//     smoothX,
//     [-0.5, 0.5],
//     [-2, 2]
//   );

//   const frameY = useTransform(
//     smoothY,
//     [-0.5, 0.5],
//     [-2, 2]
//   );

//   /* Spotlight */
//   const glowX = useTransform(
//     smoothX,
//     [-0.5, 0.5],
//     [15, 85]
//   );

//   const glowY = useTransform(
//     smoothY,
//     [-0.5, 0.5],
//     [15, 85]
//   );

//   const spotlight = useMotionTemplate`
//     radial-gradient(
//       circle at ${glowX}% ${glowY}%,
//       rgba(59, 130, 246, 0.20),
//       rgba(59, 130, 246, 0.06) 28%,
//       transparent 58%
//     )
//   `;

//   const handleMouseMove = (event) => {
//     if (!imageRef.current) return;

//     const rect =
//       imageRef.current.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width - 0.5;

//     const y =
//       (event.clientY - rect.top) / rect.height - 0.5;

//     pointerX.set(x);
//     pointerY.set(y);
//   };

//   const resetPointer = () => {
//     pointerX.set(0);
//     pointerY.set(0);
//   };

//   return (
//     <div
//       ref={imageRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetPointer}
//       className="relative mx-auto w-full max-w-[430px]"
//     >
//       {/* Ambient glow */}
//       <motion.div
//         className="pointer-events-none absolute -inset-8 rounded-[32px] blur-3xl"
//         style={{
//           background: spotlight,
//         }}
//       />

//       {/* Decorative top line */}
//       <div className="absolute -top-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

//       {/* Image frame */}
//       <motion.div
//         style={{
//           x: frameX,
//           y: frameY,
//         }}
//         className="relative"
//       >
//         {/* Outer border */}
//         <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-400/40 via-transparent to-blue-600/20 opacity-70" />

//         <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow">
//           {/* Image */}
//           <motion.img
//             src={aboutimg}
//             alt={`${personalInfo.name} profile`}
//             draggable="false"
//             style={{
//               x: imageX,
//               y: imageY,
//               scale: 1.05,
//             }}
//             className="h-full w-full object-cover will-change-transform"
//           />

//           {/* Dark image overlay */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />

//           {/* Cursor spotlight */}
//           {/* <motion.div
//             className="pointer-events-none absolute inset-0"
//             style={{
//               background: spotlight,
//             }}
//           /> */}

//           {/* Inner frame */}
//           <div className="pointer-events-none absolute inset-2 rounded-[14px] border border-white/5" />

//           {/* Corner indicators */}
//           <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-blue-400/40" />
//           <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-blue-400/40" />
//           <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-blue-400/40" />
//           <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-blue-400/40" />

//           {/* Image label */}
//           <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//             <span className="rounded-md border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-white/55 backdrop-blur-md">
//               about/profile.png
//             </span>

//             <span className="flex items-center gap-1.5 rounded-md border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-blue-300 backdrop-blur-md">
//               <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
//               online
//             </span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Floating decorative code block */}
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 12,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.4,
//         }}
//         transition={{
//           duration: 0.7,
//           delay: 0.3,
//         }}
//         className="absolute -bottom-5 -right-3 hidden rounded-lg border border-white/10 bg-ink-800/90 px-3 py-2 font-mono text-[10px] text-white/45 shadow-xl backdrop-blur-md sm:block"
//       >
//         <span className="text-blue-400">const</span>{" "}
//         developer ={" "}
//         <span className="text-white/70">
//           {"{"}
//         </span>
//         <br />
//         <span className="pl-3 text-white/40">
//           focused:{" "}
//           <span className="text-blue-300">
//             true
//           </span>
//         </span>
//         <br />
//         <span className="text-white/70">
//           {"}"}
//         </span>
//       </motion.div>
//     </div>
//   );
// }

// /* ============================================================
//    STAT CARD
// ============================================================ */

// function StatCard({ stat, index }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.5,
//       }}
//       transition={{
//         duration: 0.55,
//         delay: index * 0.08,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{
//         y: -3,
//       }}
//       className="group rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 text-center transition-colors duration-300 hover:border-blue-400/25 hover:bg-blue-500/[0.03]"
//     >
//       <Counter
//         value={stat.value}
//         suffix={stat.suffix}
//       />

//       <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted sm:text-[10px]">
//         {stat.label}
//       </p>

//       <div className="mx-auto mt-3 h-px w-7 bg-blue-400/30 transition-all duration-300 group-hover:w-10 group-hover:bg-blue-400/60" />
//     </motion.div>
//   );
// }

// /* ============================================================
//    ABOUT COMPONENT
// ============================================================ */

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-x-hidden py-28"
//     >
//       <div className="mx-auto max-w-6xl px-6">
//         {/* ======================================================
//             SECTION HEADER
//         ====================================================== */}

//         <SectionTab
//           tab="about.js"
//           comment="// getting to know the developer"
//           title="About Me"
//         />

//         {/* ======================================================
//             MAIN CONTENT
//         ====================================================== */}

//         <div className="mt-12 grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
//           {/* ====================================================
//               LEFT
//           ==================================================== */}

//           <Reveal>
//             <div className="relative">
//               <AboutImage />

//               {/* ==================================================
//                   STATS
//               ================================================== */}

//               <div className="mx-auto mt-10 grid max-w-[430px] grid-cols-3 gap-3">
//                 {aboutStats.map((stat, index) => (
//                   <StatCard
//                     key={stat.label}
//                     stat={stat}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           {/* ====================================================
//               RIGHT
//           ==================================================== */}

//           <Reveal delay={0.15}>
//             <div className="min-w-0">
//               {/* Intro line */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: -15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.5,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                 }}
//                 className="mb-6 flex items-center gap-3"
//               >
//                 <span className="h-px w-8 bg-blue-400/50" />

//                 <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">
//                   profile_overview
//                 </span>
//               </motion.div>

//               {/* Paragraph 1 */}
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.5,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                 }}
//                 className="text-base leading-8 text-white/70"
//               >
//                 {personalInfo.aboutParagraph1}
//               </motion.p>

//               {/* Paragraph 2 */}
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.5,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.08,
//                 }}
//                 className="mt-4 text-base leading-8 text-white/70"
//               >
//                 {personalInfo.aboutParagraph2}
//               </motion.p>

//               {/* =================================================
//                   PROFILE JSON
//               ================================================= */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.15,
//                 }}
//                 className="mt-9 overflow-hidden rounded-xl border border-white/10 bg-ink-800/40 shadow-xl backdrop-blur-sm"
//               >
//                 {/* Header */}
//                 <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
//                   <span className="h-2 w-2 rounded-full bg-red-400/60" />
//                   <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
//                   <span className="h-2 w-2 rounded-full bg-green-400/60" />

//                   <span className="ml-2 font-mono text-[11px] text-muted">
//                     profile.json
//                   </span>

//                   <span className="ml-auto font-mono text-[10px] text-white/20">
//                     /about
//                   </span>
//                 </div>

//                 {/* JSON content */}
//                 <div className="divide-y divide-white/5">
//                   {aboutFacts.map((fact, index) => (
//                     <motion.div
//                       key={fact.key}
//                       initial={{
//                         opacity: 0,
//                         x: -10,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                         amount: 0.4,
//                       }}
//                       transition={{
//                         duration: 0.45,
//                         delay: 0.18 + index * 0.06,
//                       }}
//                       className="group flex items-start gap-2 px-4 py-3 font-mono text-xs transition-colors duration-300 hover:bg-blue-500/[0.025] sm:text-sm"
//                     >
//                       <span className="shrink-0 text-white/20">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="text-blue-400">
//                         {fact.key}:
//                       </span>

//                       <span className="min-w-0 break-words text-white/65">
//                         "{fact.value}",
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </Reveal>
//         </div>
//       </div>

//       {/* ========================================================
//           AMBIENT BACKGROUND DETAILS
//       ======================================================== */}

//       <div className="pointer-events-none absolute left-0 top-1/2 h-px w-24 bg-gradient-to-r from-transparent to-blue-400/20" />

//       <div className="pointer-events-none absolute right-0 top-[65%] h-px w-24 bg-gradient-to-l from-transparent to-blue-400/20" />
//     </section>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import {
//   personalInfo,
//   aboutFacts,
//   aboutStats,
// } from "../data/portfolioData";

// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";
// import aboutimg from "../assets/images/aboutimg.png";

// import {
//   ChevronDown,
//   ChevronRight,
//   FileCode2,
//   Folder,
//   Image as ImageIcon,
//   Terminal,
//   UserRound,
// } from "lucide-react";

// /* ============================================================
//    COUNTER
// ============================================================ */

// function Counter({ value, suffix = "" }) {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-60px",
//   });

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;

//     const duration = 1000;
//     const startTime = performance.now();

//     let frame;

//     const update = (now) => {
//       const progress = Math.min(
//         (now - startTime) / duration,
//         1
//       );

//       const eased =
//         1 - Math.pow(1 - progress, 3);

//       setCount(Math.floor(eased * value));

//       if (progress < 1) {
//         frame = requestAnimationFrame(update);
//       } else {
//         setCount(value);
//       }
//     };

//     frame = requestAnimationFrame(update);

//     return () => cancelAnimationFrame(frame);
//   }, [inView, value]);

//   return (
//     <span
//       ref={ref}
//       className="font-mono text-xl font-semibold text-paper sm:text-2xl"
//     >
//       {count}
//       {suffix}
//     </span>
//   );
// }

// /* ============================================================
//    IMAGE PREVIEW
// ============================================================ */

// function ProfilePreview() {
//   const imageRef = useRef(null);

//   const pointerX = useMotionValue(0);
//   const pointerY = useMotionValue(0);

//   const smoothX = useSpring(pointerX, {
//     stiffness: 65,
//     damping: 22,
//     mass: 0.7,
//   });

//   const smoothY = useSpring(pointerY, {
//     stiffness: 65,
//     damping: 22,
//     mass: 0.7,
//   });

//   const imageX = useTransform(
//     smoothX,
//     [-0.5, 0.5],
//     [-10, 10]
//   );

//   const imageY = useTransform(
//     smoothY,
//     [-0.5, 0.5],
//     [-8, 8]
//   );

//   const glowX = useTransform(
//     smoothX,
//     [-0.5, 0.5],
//     [20, 80]
//   );

//   const glowY = useTransform(
//     smoothY,
//     [-0.5, 0.5],
//     [20, 80]
//   );

//   const spotlight = useMotionTemplate`
//     radial-gradient(
//       circle at ${glowX}% ${glowY}%,
//       rgba(59,130,246,0.17),
//       transparent 50%
//     )
//   `;

//   const handleMouseMove = (event) => {
//     if (!imageRef.current) return;

//     const rect =
//       imageRef.current.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width - 0.5;

//     const y =
//       (event.clientY - rect.top) / rect.height - 0.5;

//     pointerX.set(x);
//     pointerY.set(y);
//   };

//   const resetMouse = () => {
//     pointerX.set(0);
//     pointerY.set(0);
//   };

//   return (
//     <div
//       ref={imageRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetMouse}
//       className="relative h-full min-h-[440px] overflow-hidden bg-[#0b0f14]"
//     >
//       {/* ======================================================
//           BACKGROUND GRID
//       ====================================================== */}

//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* Ambient glow */}
//       <motion.div
//         className="pointer-events-none absolute -inset-20 blur-3xl"
//         style={{
//           background: spotlight,
//         }}
//       />

//       {/* ======================================================
//           IMAGE
//       ====================================================== */}

//       <div className="absolute inset-6 overflow-hidden rounded-lg border border-white/10 bg-[#0d1117]">
//         {/* Image */}
//         <motion.img
//           src={aboutimg}
//           alt={`${personalInfo.name} profile`}
//           draggable="false"
//           style={{
//             x: imageX,
//             y: imageY,
//             scale: 1.06,
//           }}
//           className="h-full w-full object-cover will-change-transform"
//         />

//         {/* Dark overlay */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

//         {/* Cursor light */}
//         <motion.div
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background: spotlight,
//           }}
//         />

//         {/* Inner frame */}
//         <div className="pointer-events-none absolute inset-2 rounded-md border border-white/5" />

//         {/* Corner marks */}
//         <div className="absolute left-3 top-3 h-4 w-4 border-l border-t border-blue-400/40" />
//         <div className="absolute right-3 top-3 h-4 w-4 border-r border-t border-blue-400/40" />
//         <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-blue-400/40" />
//         <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-blue-400/40" />

//         {/* Image information */}
//         <div className="absolute bottom-3 left-3 right-3">
//           <div className="flex items-end justify-between gap-3">
//             <div>
//               <div className="font-mono text-[10px] text-white/40">
//                 assets/images/aboutimg.png
//               </div>

//               <div className="mt-1 font-mono text-[9px] text-white/20">
//                 image preview
//               </div>
//             </div>

//             <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2 py-1 backdrop-blur-md">
//               <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />

//               <span className="font-mono text-[9px] text-white/45">
//                 loaded
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ======================================================
//           FLOATING FILE INFO
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 8,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.4,
//         }}
//         transition={{
//           duration: 0.5,
//           delay: 0.25,
//         }}
//         className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-md border border-white/10 bg-[#11161d]/90 px-2.5 py-1.5 font-mono text-[9px] text-white/35 backdrop-blur-md"
//       >
//         <ImageIcon
//           size={11}
//           className="text-blue-400/60"
//         />

//         profile_preview
//       </motion.div>

//       {/* ======================================================
//           STATUS
//       ====================================================== */}

//       <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 font-mono text-[9px] text-white/20">
//         <span>PNG</span>
//         <span>•</span>
//         <span>preview</span>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    STAT TERMINAL
// ============================================================ */

// function StatsPanel() {
//   return (
//     <div className="grid grid-cols-3 border-t border-white/10 bg-[#0b0f14]">
//       {aboutStats.map((stat, index) => (
//         <motion.div
//           key={stat.label}
//           initial={{
//             opacity: 0,
//             y: 8,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.4,
//           }}
//           transition={{
//             duration: 0.45,
//             delay: index * 0.08,
//           }}
//           className="border-r border-white/5 px-2 py-4 text-center last:border-r-0"
//         >
//           <Counter
//             value={stat.value}
//             suffix={stat.suffix}
//           />

//           <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25 sm:text-[9px]">
//             {stat.label}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ============================================================
//    CODE VIEW
// ============================================================ */

// function ProfileCode() {
//   return (
//     <div className="relative h-full overflow-hidden bg-[#0d1117]">
//       {/* ======================================================
//           EDITOR TAB
//       ====================================================== */}

//       <div className="flex h-11 items-center border-b border-white/5 bg-[#0f141a]">
//         <div className="flex h-full items-center gap-2 border-r border-white/5 bg-[#0d1117] px-4">
//           <FileCode2
//             size={13}
//             className="text-blue-400"
//           />

//           <span className="font-mono text-[10px] text-white/50">
//             about.js
//           </span>

//           <span className="text-[10px] text-white/15">
//             ×
//           </span>
//         </div>

//         <div className="ml-auto flex items-center gap-2 px-4">
//           <span className="font-mono text-[9px] text-white/20">
//             read-only
//           </span>
//         </div>
//       </div>

//       {/* ======================================================
//           CODE HEADER
//       ====================================================== */}

//       <div className="flex h-11 items-center border-b border-white/5 px-5 sm:px-7">
//         <span className="font-mono text-[10px] text-white/20">
//           src/about/about.js
//         </span>
//       </div>

//       {/* ======================================================
//           CODE
//       ====================================================== */}

//       <div className="absolute bottom-0 left-0 right-0 top-[88px] overflow-hidden px-1 py-5">
//         {/* Line 1 */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             01
//           </span>

//           <span className="text-white/45">
//             <span className="text-blue-300">const</span>{" "}
//             developer =
//           </span>
//         </div>

//         {/* Line 2 */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             02
//           </span>

//           <span className="text-white/35">
//             {"{"}
//           </span>
//         </div>

//         {/* Name */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             03
//           </span>

//           <span className="pl-4">
//             <span className="text-blue-300">
//               name
//             </span>

//             <span className="text-white/20">
//               :
//             </span>{" "}

//             <span className="text-green-300/90">
//               "{personalInfo.name}"
//             </span>
//             <span className="text-white/20">
//               ,
//             </span>
//           </span>
//         </div>

//         {/* Role */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             04
//           </span>

//           <span className="pl-4">
//             <span className="text-blue-300">
//               role
//             </span>

//             <span className="text-white/20">
//               :
//             </span>{" "}

//             <span className="text-green-300/90">
//               "Full Stack Developer"
//             </span>
//             <span className="text-white/20">
//               ,
//             </span>
//           </span>
//         </div>

//         {/* Status */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             05
//           </span>

//           <span className="pl-4">
//             <span className="text-blue-300">
//               status
//             </span>

//             <span className="text-white/20">
//               :
//             </span>{" "}

//             <span className="text-green-300/90">
//               "available"
//             </span>
//             <span className="text-white/20">
//               ,
//             </span>
//           </span>
//         </div>

//         {/* Skills comment */}
//         <div className="mt-3 flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             06
//           </span>

//           <span className="text-white/20">
//             {"// "}
//             building scalable applications
//           </span>
//         </div>

//         {/* Opening about array */}
//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             07
//           </span>

//           <span className="pl-4">
//             <span className="text-blue-300">
//               about
//             </span>

//             <span className="text-white/20">
//               :
//             </span>{" "}

//             <span className="text-white/35">
//               [
//             </span>
//           </span>
//         </div>

//         {/* Paragraph 1 */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 8,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//           className="flex"
//         >
//           <span className="w-10 shrink-0 pr-3 text-right font-mono text-[11px] text-white/15 sm:w-12 sm:text-xs">
//             08
//           </span>

//           <div className="min-w-0 flex-1 pl-4 font-mono text-[10px] leading-5 text-white/40 sm:text-[11px]">
//             <span className="text-green-300/65">
//               "
//             </span>

//             {personalInfo.aboutParagraph1}

//             <span className="text-green-300/65">
//               "
//             </span>

//             <span className="text-white/20">
//               ,
//             </span>
//           </div>
//         </motion.div>

//         {/* Paragraph 2 */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 8,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.08,
//           }}
//           className="flex"
//         >
//           <span className="w-10 shrink-0 pr-3 text-right font-mono text-[11px] text-white/15 sm:w-12 sm:text-xs">
//             09
//           </span>

//           <div className="min-w-0 flex-1 pl-4 font-mono text-[10px] leading-5 text-white/40 sm:text-[11px]">
//             <span className="text-green-300/65">
//               "
//             </span>

//             {personalInfo.aboutParagraph2}

//             <span className="text-green-300/65">
//               "
//             </span>
//           </div>
//         </motion.div>

//         {/* Close */}
//         <div className="mt-3 flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             10
//           </span>

//           <span className="pl-4 text-white/35">
//             ]
//             <span className="text-white/20">,</span>
//           </span>
//         </div>

//         <div className="flex min-h-[29px] font-mono text-[11px] sm:text-xs">
//           <span className="w-10 shrink-0 pr-3 text-right text-white/15 sm:w-12">
//             11
//           </span>

//           <span className="text-white/35">
//             {"}"}
//           </span>
//         </div>
//       </div>

//       {/* ======================================================
//           STATUS BAR
//       ====================================================== */}

//       <div className="absolute bottom-0 left-0 right-0 flex h-7 items-center justify-between border-t border-white/5 bg-[#111820] px-3 font-mono text-[9px] text-white/20 sm:px-4">
//         <div className="flex items-center gap-4">
//           <span className="text-blue-300/45">
//             about.js
//           </span>

//           <span className="hidden sm:inline">
//             UTF-8
//           </span>

//           <span className="hidden sm:inline">
//             JavaScript
//           </span>
//         </div>

//         <span>Ln 01, Col 01</span>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    ABOUT COMPONENT
// ============================================================ */

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden border-y border-white/5 bg-white/[0.012] py-28"
//     >
//       <div className="mx-auto max-w-6xl px-6">
//         {/* ======================================================
//             SECTION HEADER
//         ====================================================== */}

//         <SectionTab
//           tab="about.js"
//           comment="// getting to know the developer"
//           title="About Me"
//         />

//         <Reveal>
//           <div className="mt-8 max-w-2xl">
//             <p className="font-mono text-sm leading-7 text-white/40">
//               <span className="text-blue-400/70">
//                 {"//"}
//               </span>{" "}
//               A little context about the developer,
//               experience, mindset and the person behind
//               the code.
//             </p>
//           </div>
//         </Reveal>

//         {/* ======================================================
//             MAIN WORKSPACE
//         ====================================================== */}

//         <Reveal delay={0.12}>
//           <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
//             {/* ==================================================
//                 TOP WINDOW BAR
//             ================================================== */}

//             <div className="flex h-11 items-center border-b border-white/10 bg-[#11161d] px-4">
//               <div className="flex items-center gap-1.5">
//                 <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
//               </div>

//               <div className="ml-5 flex items-center gap-2">
//                 <UserRound
//                   size={14}
//                   className="text-blue-400"
//                 />

//                 <span className="font-mono text-[11px] text-white/45">
//                   developer_profile
//                 </span>
//               </div>

//               <div className="ml-auto flex items-center gap-3 font-mono text-[10px] text-white/20">
//                 <span className="hidden sm:block">
//                   workspace
//                 </span>

//                 <span>read-only</span>
//               </div>
//             </div>

//             {/* ==================================================
//                 WORKSPACE
//             ================================================== */}

//             <div className="grid lg:grid-cols-[225px_1fr]">
//               {/* =================================================
//                   EXPLORER
//               ================================================= */}

//               <aside className="border-b border-white/10 bg-[#0b0f14] lg:border-b-0 lg:border-r">
//                 <div className="flex h-11 items-center border-b border-white/5 px-4">
//                   <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25">
//                     Explorer
//                   </span>
//                 </div>

//                 <div className="p-3">
//                   {/* SRC */}
//                   <div className="flex items-center gap-2 px-2 py-2 font-mono text-[11px] text-white/35">
//                     <ChevronDown size={13} />

//                     <Folder
//                       size={14}
//                       className="text-blue-400/60"
//                     />

//                     <span>src</span>
//                   </div>

//                   {/* ABOUT */}
//                   <div className="ml-3 flex items-center gap-2 px-2 py-2 font-mono text-[11px] text-white/35">
//                     <ChevronDown size={13} />

//                     <Folder
//                       size={14}
//                       className="text-blue-400/60"
//                     />

//                     <span>about</span>
//                   </div>

//                   {/* about.js */}
//                   <div className="ml-6 flex items-center gap-2 rounded-md bg-white/[0.03] px-2 py-2 font-mono text-[11px] text-white/60">
//                     <FileCode2
//                       size={14}
//                       className="text-blue-400"
//                     />

//                     about.js
//                   </div>

//                   {/* about image */}
//                   <div className="ml-6 mt-1 flex items-center gap-2 px-2 py-2 font-mono text-[11px] text-white/25">
//                     <ImageIcon
//                       size={13}
//                       className="text-green-400/40"
//                     />

//                     aboutimg.png
//                   </div>

//                   {/* divider */}
//                   <div className="my-5 h-px bg-white/5" />

//                   {/* profile info */}
//                   <div className="px-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
//                     workspace
//                   </div>

//                   <div className="mt-2 space-y-0.5">
//                     <div className="flex items-center gap-2 rounded-md px-2 py-2 font-mono text-[10px] text-white/30">
//                       <ChevronRight size={11} />
//                       profile.json
//                     </div>

//                     <div className="flex items-center gap-2 rounded-md px-2 py-2 font-mono text-[10px] text-white/30">
//                       <ChevronRight size={11} />
//                       skills.json
//                     </div>

//                     <div className="flex items-center gap-2 rounded-md px-2 py-2 font-mono text-[10px] text-white/30">
//                       <ChevronRight size={11} />
//                       projects.json
//                     </div>
//                   </div>
//                 </div>
//               </aside>

//               {/* =================================================
//                   MAIN EDITOR AREA
//               ================================================= */}

//               <main className="min-w-0">
//                 {/* tabs */}
//                 <div className="flex h-11 overflow-hidden border-b border-white/5 bg-[#0f141a]">
//                   <div className="flex h-full items-center gap-2 border-r border-white/5 bg-[#0d1117] px-4">
//                     <FileCode2
//                       size={13}
//                       className="text-blue-400"
//                     />

//                     <span className="font-mono text-[10px] text-white/50">
//                       about.js
//                     </span>

//                     <span className="text-[10px] text-white/15">
//                       ×
//                     </span>
//                   </div>
//                 </div>

//                 {/* content */}
//                 <div className="grid min-h-[560px] grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
//                   {/* =================================================
//                       IMAGE / PROFILE PANEL
//                   ================================================= */}

//                   <div className="border-b border-white/10 xl:border-b-0 xl:border-r">
//                     <div className="flex h-11 items-center border-b border-white/5 px-4">
//                       <span className="font-mono text-[10px] text-white/20">
//                         media / profile
//                       </span>
//                     </div>

//                     <ProfilePreview />

//                     <StatsPanel />
//                   </div>

//                   {/* =================================================
//                       CODE PANEL
//                   ================================================= */}

//                   <ProfileCode />
//                 </div>
//               </main>
//             </div>

//             {/* ==================================================
//                 TERMINAL
//             ================================================== */}

//             <div className="flex h-10 items-center border-t border-white/10 bg-[#0b0f14] px-4">
//               <div className="flex items-center gap-2">
//                 <Terminal
//                   size={13}
//                   className="text-green-400/60"
//                 />

//                 <span className="font-mono text-[9px] text-white/25">
//                   terminal
//                 </span>
//               </div>

//               <span className="ml-4 font-mono text-[9px] text-white/15">
//                 ~ $ cat about.js
//               </span>

//               <span className="ml-auto hidden font-mono text-[9px] text-green-400/35 sm:block">
//                 process exited with code 0
//               </span>
//             </div>
//           </div>
//         </Reveal>

//         {/* ======================================================
//             FOOTER INFO
//         ====================================================== */}

//         <Reveal delay={0.25}>
//           <div className="mt-5 flex flex-col gap-2 font-mono text-[9px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
//             <span>
//               profile module loaded successfully
//             </span>

//             <span>
//               status: online / environment: production
//             </span>
//           </div>
//         </Reveal>
//       </div>

//       {/* ========================================================
//           AMBIENT CODE
//       ======================================================== */}

//       <div className="pointer-events-none absolute left-4 top-48 hidden font-mono text-[9px] leading-5 text-white/[0.025] xl:block">
//         import developer from "./profile";
//         <br />
//         <br />
//         developer.init();
//         <br />
//         developer.build();
//         <br />
//         developer.ship();
//       </div>

//       <div className="pointer-events-none absolute bottom-32 right-4 hidden text-right font-mono text-[9px] leading-5 text-white/[0.025] xl:block">
//         {"{"}
//         <br />
//         &nbsp;&nbsp;available: true,
//         <br />
//         &nbsp;&nbsp;learning: true,
//         <br />
//         &nbsp;&nbsp;building: true
//         <br />
//         {"}"}
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Activity,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react";

import { personalInfo, aboutFacts, aboutStats } from "../data/portfolioData";

import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";
import aboutimg from "../assets/images/aboutimg.png";

/* ============================================================
   COUNTER
============================================================ */

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1100;
    const startTime = performance.now();

    let frame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-mono text-2xl font-semibold tracking-tight text-paper sm:text-3xl"
    >
      {count}
      {suffix}
    </span>
  );
}

/* ============================================================
   PROFILE IMAGE
============================================================ */

function ProfileImage() {
  const imageRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 22,
    mass: 0.7,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 22,
    mass: 0.7,
  });

  const imageX = useTransform(smoothX, [-0.5, 0, 0.5], [-12, 0, 12]);

  const imageY = useTransform(smoothY, [-0.5, 0, 0.5], [-10, 0, 10]);

  const glowX = useTransform(smoothX, [-0.5, 0.5], [18, 82]);

  const glowY = useTransform(smoothY, [-0.5, 0.5], [18, 82]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      circle at ${glowX}% ${glowY}%,
      rgba(59,130,246,0.18),
      rgba(59,130,246,0.04) 28%,
      transparent 58%
    )
  `;

  const handleMouseMove = (event) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative mx-auto w-full max-w-[470px]"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -inset-12 rounded-[40px] blur-3xl"
        style={{
          background: spotlight,
        }}
      />

      {/* Technical frame lines */}
      <div className="absolute -left-4 top-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent sm:block" />

      <div className="absolute -right-4 bottom-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent sm:block" />

      <div className="relative">
        {/* Image shell */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow">
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Image */}
          <motion.img
            src={aboutimg}
            alt={`${personalInfo.name} profile`}
            draggable="false"
            style={{
              x: imageX,
              y: imageY,
              scale: 1.055,
            }}
            className="aspect-[4/5] h-full w-full object-cover will-change-transform"
          />

          {/* Image overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink-950/70 via-transparent to-blue-950/5" />

          {/* Cursor light */}
          {/* <motion.div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: spotlight,
            }}
          /> */}

          {/* Inner border */}
          <div className="pointer-events-none absolute inset-2 z-30 rounded-[14px] border border-white/5" />

          {/* Corner markers */}
          <div className="absolute left-4 top-4 z-30 h-5 w-5 border-l border-t border-blue-400/45" />
          <div className="absolute right-4 top-4 z-30 h-5 w-5 border-r border-t border-blue-400/45" />
          <div className="absolute bottom-4 left-4 z-30 h-5 w-5 border-b border-l border-blue-400/45" />
          <div className="absolute bottom-4 right-4 z-30 h-5 w-5 border-b border-r border-blue-400/45" />

          {/* Top status */}
          <div className="absolute left-5 right-5 top-5 z-40 flex items-center justify-between">
            <span className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[9px] text-white/45 backdrop-blur-md">
              PROFILE / 01
            </span>

            <span className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[9px] text-blue-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              AVAILABLE
            </span>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-5 left-5 right-5 z-40 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] text-white/35">
                identity.asset
              </p>

              <p className="mt-1 font-mono text-xs text-white/70">
                {personalInfo.name}
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-md border border-white/10 bg-black/30 p-2 backdrop-blur-md"
            >
              <ArrowUpRight size={14} className="text-blue-300" />
            </motion.div>
          </div>
        </div>

        {/* Tiny coordinates / metadata */}
        <div className="mt-3 flex items-center justify-between px-1 font-mono text-[9px] text-white/60">
          <span>visual.profile</span>
          <span>status: stable</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STAT ITEM
============================================================ */

function StatItem({ stat, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border-r border-white/5 px-3 py-5 text-center last:border-r-0 sm:px-4"
    >
      <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-blue-400/60 transition-all duration-500 group-hover:w-8" />

      <Counter value={stat.value} suffix={stat.suffix} />

      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ============================================================
   FACT ROW
============================================================ */

function FactRow({ fact, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group grid grid-cols-[110px_1fr] gap-4 border-b border-white/5 py-3.5 last:border-b-0 sm:grid-cols-[130px_1fr]"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60 sm:text-[11px]">
        <span className="h-1 w-1 rounded-full bg-blue-400/50 transition-all duration-300 group-hover:w-2 group-hover:bg-blue-400" />

        {fact.key}
      </div>

      <div className="min-w-0 break-words font-mono text-xs text-white/65 sm:text-sm">
        {fact.value}
      </div>
    </motion.div>
  );
}

/* ============================================================
   ABOUT
============================================================ */

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <SectionTab
          tab="about.js"
          comment="// getting to know the developer"
          title="About Me"
        />

        <Reveal>
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm leading-7 text-white/40">
              <span className="text-blue-400/70">{"//"}</span> Beyond the code —
              background, mindset, experience and the person building the
              applications.
            </p>
          </div>
        </Reveal>

        {/* ======================================================
            MAIN
        ====================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          {/* ====================================================
              IMAGE SIDE
          ==================================================== */}

          <Reveal>
            <div className="relative">
              <ProfileImage />

              {/* Stats */}
              <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-ink-800/35">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                    system_metrics
                  </span>

                  <span className="flex items-center gap-1.5 font-mono text-[9px] text-green-400/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/50" />
                    active
                  </span>
                </div>

                <div className="grid grid-cols-3">
                  {aboutStats.map((stat, index) => (
                    <StatItem key={stat.label} stat={stat} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ====================================================
              CONTENT SIDE
          ==================================================== */}

          <Reveal delay={0.12}>
            <div>
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">
                  developer_profile
                </span>

                <span className="h-px w-12 bg-blue-400/30" />

                <span className="font-mono text-[9px] text-white/20">01</span>
              </div>

              {/* Title */}
              <h3 className="max-w-xl text-2xl font-semibold leading-tight text-paper sm:text-3xl">
                Building software with a focus on{" "}
                <span className="text-blue-300">
                  scalability, usability and clean architecture.
                </span>
              </h3>

              {/* Paragraphs */}
              <div className="mt-6 max-w-2xl">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
                >
                  {personalInfo.aboutParagraph1}
                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08,
                  }}
                  className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
                >
                  {personalInfo.aboutParagraph2}
                </motion.p>
              </div>

              {/* ==================================================
                  FACTS
              ================================================== */}

              <div className="mt-9 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-blue-400/70" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      developer_specs
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-white/60">
                    /profile
                  </span>
                </div>

                {/* Fact rows */}
                <div className="px-4">
                  {aboutFacts.map((fact, index) => (
                    <FactRow key={fact.key} fact={fact} index={index} />
                  ))}
                </div>
              </div>

              {/* ==================================================
                  SYSTEM TAGS
              ================================================== */}

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  {
                    label: "full-stack",
                    icon: Layers3,
                  },
                  {
                    label: "scalable",
                    icon: Server,
                  },
                  {
                    label: "api-first",
                    icon: Globe2,
                  },
                  {
                    label: "database-driven",
                    icon: Database,
                  },
                  {
                    label: "performance",
                    icon: Cpu,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-white/60 transition-colors duration-300 hover:border-blue-400/25 hover:text-blue-300"
                    >
                      <Icon size={12} className="text-blue-400/60" />

                      {item.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ========================================================
          AMBIENT DETAILS
      ======================================================== */}

      <div className="pointer-events-none absolute left-0 top-[28%] h-px w-28 bg-gradient-to-r from-transparent to-blue-400/15" />

      <div className="pointer-events-none absolute right-0 top-[72%] h-px w-28 bg-gradient-to-l from-transparent to-blue-400/15" />

      <div className="pointer-events-none absolute left-[8%] top-[23%] hidden sm:block">
        <Sparkles size={12} className="text-blue-400/10" />
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[10%] hidden sm:block">
        <Activity size={13} className="text-blue-400/10" />
      </div>
    </section>
  );
}
