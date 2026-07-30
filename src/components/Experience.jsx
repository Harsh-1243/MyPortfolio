import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative border-y border-white/5 bg-white/[0.015] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTab
          tab="experience.log"
          comment="// where I've worked"
          title="Experience"
        />

        <div ref={trackRef} className="relative pl-8">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-blue-400 to-blue-600"
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-ink-950 shadow-glow" />
                  <span className="mb-2 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-blue-300">
                    {job.period}
                  </span>
                  <h3 className="text-lg font-semibold text-paper">
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm text-muted">{job.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-2 text-sm leading-relaxed text-white/65"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
