import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { personalInfo, aboutFacts, aboutStats } from "../data/portfolioData";
import Avatar from "./ui/Avatar";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const startTime = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-paper">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTab tab="about.js" comment="// getting to know the developer" title="About Me" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 shadow-glow">
                <Avatar src={personalInfo.avatarAltSrc || personalInfo.avatarSrc} />
              </div>
              <div className="mx-auto mt-8 grid max-w-xs grid-cols-3 gap-4 text-center">
                {aboutStats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.03] py-4">
                    <Counter value={s.value} suffix={s.suffix} />
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="text-base leading-relaxed text-white/70">{personalInfo.aboutParagraph1}</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">{personalInfo.aboutParagraph2}</p>

              <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
                <div className="border-b border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-muted">profile.json</div>
                <div className="divide-y divide-white/5">
                  {aboutFacts.map((fact) => (
                    <div key={fact.key} className="flex items-start gap-2 px-4 py-2.5 font-mono text-xs sm:text-sm">
                      <span className="text-blue-400">{fact.key}:</span>
                      <span className="text-white/70">"{fact.value}",</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}