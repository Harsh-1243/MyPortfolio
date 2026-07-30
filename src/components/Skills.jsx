import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-white/5 bg-white/[0.015] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTab tab="skills.json" comment="// tools & technologies I work with" title="Skills & Stack" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.08}>
              <div className="h-full rounded-xl border border-white/10 bg-ink-800/60 p-6 transition-colors hover:border-blue-400/30">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-paper">{cat.title}</h3>
                  {/* <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-muted">
                    {String(cat.items.length).padStart(2, "0")}
                  </span> */}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/70 transition-colors hover:border-blue-400/40 hover:text-blue-300"
                      >
                        <Icon size={14} className="text-blue-400" />
                        {item.name}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}