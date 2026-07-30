import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail, Phone, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// import { ArrowDown, Mail, Phone, Linkedin, GitHub, Send } from "lucide-react";
import { personalInfo, socialLinks, heroBadges } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useTypewriter";
import Avatar from "./ui/Avatar";
import Reveal from "./ui/Reveal";
import HeroImg from "../assets/images/heroimage.png";

const ICONS = {
  mail: Mail,
  phone: Phone,
    linkedin: FaLinkedinIn,
    github: FaGithub,
};
export default function Hero() {
  const typed = useTypewriter(personalInfo.rolesTyped, { pause: 1600 });
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex  items-center pb-16 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-blue-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              $ whoami — available for hire
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-mono text-4xl font-bold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-4 font-mono text-lg text-blue-300 sm:text-xl">
              &gt; {typed}
              <span className="ml-1 inline-block h-[1.1em] w-[3px] translate-y-[3px] animate-blink bg-blue-400" />
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              {personalInfo.summary}
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={goTo("projects")}
                className="rounded-md bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-blue-400"
              >
                view_projects()
              </a>
              <a
                href="#contact"
                onClick={goTo("contact")}
                className="rounded-md border border-white/15 px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300"
              >
                <Send size={14} className="mr-2 -mt-0.5 inline" /> say_hello()
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-8 flex items-center gap-3">
              {/* {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-blue-400/50 hover:text-blue-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })} */}
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10"
                  >
                    {Icon ? <Icon size={16} /> : s.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full ">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative [perspective:1000px]"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative aspect-[5/5] overflow-hidden w-full rounded-2xl border border-white/10  shadow-glow"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-400/40 via-transparent to-blue-600/30 opacity-40" />
              <div className="absolute inset-[3px] rounded-[15px]">
                {/* <Avatar src={personalInfo.avatarSrc} /> */}
                <img src={HeroImg} alt="HeroImg" className="" />
              </div>
            </motion.div>

            {heroBadges.map((badge, i) => (
              <motion.div
                key={badge}
                className="absolute animate-float rounded-lg border border-white/10 bg-ink-800/90 px-3 py-1.5 font-mono text-xs text-blue-300 shadow-lg backdrop-blur-sm"
                style={{
                  top: `${[8, 42, 78][i % 3]}%`,
                  left: i % 2 === 0 ? "-8%" : "auto",
                  right: i % 2 !== 0 ? "-8%" : "auto",
                  animationDelay: `${i * 0.7}s`,
                }}
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        onClick={goTo("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-white/40 sm:flex"
      >
        scroll
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
