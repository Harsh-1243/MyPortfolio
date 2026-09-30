// import { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowDown, Mail, Phone, Send } from "lucide-react";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// // import { ArrowDown, Mail, Phone, Linkedin, GitHub, Send } from "lucide-react";
// import { personalInfo, socialLinks, heroBadges } from "../data/portfolioData";
// import { useTypewriter } from "../hooks/useTypewriter";
// import Avatar from "./ui/Avatar";
// import Reveal from "./ui/Reveal";
// import HeroImg from "../assets/images/heroimage.png";

// const ICONS = {
//   mail: Mail,
//   phone: Phone,
//     linkedin: FaLinkedinIn,
//     github: FaGithub,
// };
// export default function Hero() {
//   const typed = useTypewriter(personalInfo.rolesTyped, { pause: 1600 });
//   const cardRef = useRef(null);
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
//     stiffness: 150,
//     damping: 18,
//   });
//   const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
//     stiffness: 150,
//     damping: 18,
//   });

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     mx.set((e.clientX - rect.left) / rect.width - 0.5);
//     my.set((e.clientY - rect.top) / rect.height - 0.5);
//   };
//   const resetTilt = () => {
//     mx.set(0);
//     my.set(0);
//   };

//   const goTo = (id) => (e) => {
//     e.preventDefault();
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative flex  items-center pb-16 pt-24"
//     >
//       <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
//         <div>
//           <Reveal>
//             <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-blue-300">
//               <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
//               $ whoami — available for hire
//             </span>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <h1 className="font-mono text-4xl font-bold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 {personalInfo.name}
//               </span>
//             </h1>
//           </Reveal>

//           <Reveal delay={0.18}>
//             <p className="mt-4 font-mono text-lg text-blue-300 sm:text-xl">
//               &gt; {typed}
//               <span className="ml-1 inline-block h-[1.1em] w-[3px] translate-y-[3px] animate-blink bg-blue-400" />
//             </p>
//           </Reveal>

//           <Reveal delay={0.26}>
//             <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
//               {personalInfo.summary}
//             </p>
//           </Reveal>

//           <Reveal delay={0.34}>
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <a
//                 href="#projects"
//                 onClick={goTo("projects")}
//                 className="rounded-md bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-blue-400"
//               >
//                 view_projects()
//               </a>
//               <a
//                 href="#contact"
//                 onClick={goTo("contact")}
//                 className="rounded-md border border-white/15 px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300"
//               >
//                 <Send size={14} className="mr-2 -mt-0.5 inline" /> say_hello()
//               </a>
//             </div>
//           </Reveal>

//           <Reveal delay={0.42}>
//             <div className="mt-8 flex items-center gap-3">
//               {/* {socialLinks.map((s) => {
//                 const Icon = ICONS[s.icon];
//                 return (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label={s.label}
//                     className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-blue-400/50 hover:text-blue-300"
//                   >
//                     <Icon size={16} />
//                   </a>
//                 );
//               })} */}
//               {socialLinks.map((s) => {
//                 const Icon = ICONS[s.icon];

//                 return (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10"
//                   >
//                     {Icon ? <Icon size={16} /> : s.label}
//                   </a>
//                 );
//               })}
//             </div>
//           </Reveal>
//         </div>

// <Reveal delay={0.2} className="relative mx-auto w-full ">
//   <div
//     ref={cardRef}
//     onMouseMove={handleMouseMove}
//     onMouseLeave={resetTilt}
//     className="relative [perspective:1000px]"
//   >
//     <motion.div
//       style={{ rotateX, rotateY }}
//       className="relative aspect-[5/5] overflow-hidden w-full rounded-2xl border border-white/10  shadow-glow"
//     >
//       <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-400/40 via-transparent to-blue-600/30 opacity-40" />
//       <div className="absolute inset-[3px] rounded-[15px]">
//         {/* <Avatar src={personalInfo.avatarSrc} /> */}
//         <img src={HeroImg} alt="HeroImg" className="" />
//       </div>
//     </motion.div>

//             {heroBadges.map((badge, i) => (
//               <motion.div
//                 key={badge}
//                 className="absolute animate-float rounded-lg border border-white/10 bg-ink-800/90 px-3 py-1.5 font-mono text-xs text-blue-300 shadow-lg backdrop-blur-sm"
//                 style={{
//                   top: `${[8, 42, 78][i % 3]}%`,
//                   left: i % 2 === 0 ? "-8%" : "auto",
//                   right: i % 2 !== 0 ? "-8%" : "auto",
//                   animationDelay: `${i * 0.7}s`,
//                 }}
//               >
//                 {badge}
//               </motion.div>
//             ))}
//           </div>
//         </Reveal>
//       </div>

//       <a
//         href="#about"
//         onClick={goTo("about")}
//         className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-white/40 sm:flex"
//       >
//         scroll
//         <ArrowDown size={14} className="animate-bounce" />
//       </a>
//     </section>
//   );
// }

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ArrowDown, Mail, Phone, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { personalInfo, socialLinks, heroBadges } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useTypewriter";
import Reveal from "./ui/Reveal";
import HeroImg from "../assets/images/heroimage.png";

const ICONS = {
  mail: Mail,
  phone: Phone,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export default function Hero() {
  const typed = useTypewriter(personalInfo.rolesTyped, {
    pause: 1600,
  });

  const imageRef = useRef(null);

  /* ============================================================
     POINTER
  ============================================================ */

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  /* ============================================================
     SUBTLE IMAGE PARALLAX
  ============================================================ */

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const imageY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  /* ============================================================
     VERY SMALL CARD DEPTH
     No aggressive 3D rotation.
  ============================================================ */
  const cardX = useTransform(smoothX, [-0.5, 0.5], [-1, 1]);

  const cardY = useTransform(smoothY, [-0.5, 0.5], [-1, 1]);
  /* ============================================================
     MOVING BLUE LIGHT
  ============================================================ */

  const glowX = useTransform(smoothX, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [20, 80]);

  const dynamicGlow = useMotionTemplate`
    radial-gradient(
      circle at ${glowX}% ${glowY}%,
      rgba(59, 130, 246, 0.22),
      rgba(59, 130, 246, 0.06) 25%,
      transparent 55%
    )
  `;

  /* ============================================================
     BORDER LIGHT
  ============================================================ */

  const borderGlow = useMotionTemplate`
    radial-gradient(
      circle at ${glowX}% ${glowY}%,
      rgba(96, 165, 250, 0.40),
      transparent 32%
    )
  `;

  /* ============================================================
     POINTER HANDLERS
  ============================================================ */

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  /* ============================================================
     SMOOTH SECTION NAVIGATION
  ============================================================ */

  const goTo = (id) => (e) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" className="relative overflow-x-hidden pb-16 pt-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ======================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="min-w-0">
          {/* AVAILABLE */}
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-blue-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              $ whoami — available for hire
            </span>
          </Reveal>

          {/* NAME */}
          <Reveal delay={0.1}>
            <h1 className="font-mono text-4xl font-bold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </Reveal>

          {/* ROLE */}
          <Reveal delay={0.18}>
            <p className="mt-4 font-mono text-lg text-blue-300 sm:text-xl">
              &gt; {typed}
              <span className="ml-1 inline-block h-[1.1em] w-[3px] translate-y-[3px] animate-blink bg-blue-400" />
            </p>
          </Reveal>

          {/* SUMMARY */}
          <Reveal delay={0.26}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              {personalInfo.summary}
            </p>
          </Reveal>

          {/* BUTTONS */}
          <Reveal delay={0.34}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={goTo("projects")}
                className="rounded-md bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
              >
                view_projects()
              </a>

              <a
                href="#contact"
                onClick={goTo("contact")}
                className="rounded-md border border-white/15 px-6 py-3 font-mono text-sm text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:text-blue-300"
              >
                <Send size={14} className="mr-2 -mt-0.5 inline" />
                say_hello()
              </a>
            </div>
          </Reveal>

          {/* SOCIAL */}
          <Reveal delay={0.42}>
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];

                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300"
                  >
                    {Icon ? <Icon size={16} /> : s.label}
                  </motion.a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* ======================================================
            RIGHT IMAGE
        ====================================================== */}

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[520px]">
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPointer}
            className="relative w-full"
          >
            {/* ==================================================
                OUTER GLOW
            ================================================== */}

            <motion.div
              className="pointer-events-none absolute -inset-8 rounded-[32px] opacity-60 blur-3xl"
              style={{
                background: dynamicGlow,
              }}
            />

            {/* ==================================================
                CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                x: cardX,
                y: cardY,
              }}
              className="relative"
            >
              {/* ================================================
                  GLOWING BORDER
              ================================================= */}

              <div className="absolute -inset-[1px] overflow-hidden rounded-2xl">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: borderGlow,
                  }}
                />
              </div>

              {/* ================================================
                  MAIN FRAME
              ================================================= */}

              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow">
                {/* ==============================================
                    IMAGE
                ============================================== */}

                <motion.img
                  src={HeroImg}
                  alt={`${personalInfo.name} hero`}
                  draggable="false"
                  style={{
                    x: imageX,
                    y: imageY,
                    scale: 1.05,
                  }}
                  className="h-full w-full object-cover will-change-transform"
                />

                {/* ==============================================
                    DARK OVERLAY
                ============================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent" />

                {/* ==============================================
                    MOUSE LIGHT
                ============================================== */}

                {/* <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: dynamicGlow,
                  }}
                /> */}

                {/* ==============================================
                    INNER BORDER
                ============================================== */}

                <div className="pointer-events-none absolute inset-2 rounded-[14px] border border-white/5" />
              </div>
            </motion.div>

            {/* ==================================================
                FLOATING TECHNOLOGY BADGES

                IMPORTANT:
                They stay INSIDE the available width.
                No negative left/right positioning.
            ================================================== */}

            {heroBadges.map((badge, i) => {
              const positions = [
                {
                  top: "8%",
                  left: "3%",
                },
                {
                  top: "43%",
                  right: "3%",
                },
                {
                  bottom: "8%",
                  left: "4%",
                },
                {
                  bottom: "24%",
                  right: "4%",
                },
              ];

              const position = positions[i % positions.length];

              return (
                <motion.div
                  key={badge}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="pointer-events-none absolute z-30 max-w-[42%] rounded-lg border border-white/10 bg-ink-800/90 px-2.5 py-1.5 font-mono text-[10px] text-blue-300 shadow-lg backdrop-blur-md sm:max-w-none sm:px-3 sm:py-1.5 sm:text-xs"
                  style={position}
                >
                  {badge}
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* ========================================================
          SCROLL INDICATOR
      ======================================================== */}

      <a
        href="#about"
        onClick={goTo("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-white/40 sm:flex"
      >
        <span>scroll</span>

        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </a>
    </section>
  );
}
