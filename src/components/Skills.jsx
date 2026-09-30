// import { motion } from "framer-motion";
// import { skillCategories } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";

// export default function Skills() {
//   return (
//     <section id="skills" className="relative border-y border-white/5 bg-white/[0.015] py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab tab="skills.json" comment="// tools & technologies I work with" title="Skills & Stack" />

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {skillCategories.map((cat, ci) => (
//             <Reveal key={cat.title} delay={ci * 0.08}>
//               <div className="h-full rounded-xl border border-white/10 bg-ink-800/60 p-6 transition-colors hover:border-blue-400/30">
//                 <div className="mb-5 flex items-center justify-between">
//                   <h3 className="font-mono text-sm font-semibold text-paper">{cat.title}</h3>
//                   {/* <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-muted">
//                     {String(cat.items.length).padStart(2, "0")}
//                   </span> */}
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {cat.items.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <motion.div
//                         key={item.name}
//                         whileHover={{ y: -3 }}
//                         className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/70 transition-colors hover:border-blue-400/40 hover:text-blue-300"
//                       >
//                         <Icon size={14} className="text-blue-400" />
//                         {item.name}
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  FileCode2,
  Folder,
  Terminal,
  Braces,
} from "lucide-react";

import { skillCategories } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

function CodeLine({ number, children }) {
  return (
    <div className="flex min-h-[29px] items-start font-mono text-[11px] leading-6 sm:text-xs">
      <span className="w-10 shrink-0 select-none pr-3 text-right text-white/15 sm:w-12">
        {String(number).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1 pr-4">{children}</div>
    </div>
  );
}

function CategoryButton({ category, index, active, onClick }) {
  const isActive = active === index;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={`group flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left font-mono text-[11px] transition-all duration-200 ${
        isActive
          ? "bg-blue-500/[0.08] text-blue-300"
          : "text-white/60 hover:bg-white/[0.025] hover:text-white/65"
      }`}
    >
      <ChevronRight
        size={12}
        className={`shrink-0 transition-transform duration-200 ${
          isActive ? "translate-x-0.5 text-blue-400" : "text-white/15"
        }`}
      />

      <span className="min-w-0 flex-1 truncate">{category.title}</span>

      <span
        className={`text-[9px] transition-colors ${
          isActive ? "text-blue-400/60" : "text-white/15"
        }`}
      >
        {String(category.items.length).padStart(2, "0")}
      </span>
    </button>
  );
}

function CodePreview({ category }) {
  return (
    <div className="absolute inset-0">
      <motion.div
        key={category.title}
        initial={{
          opacity: 0,
          x: 12,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -8,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 px-1 py-5"
      >
        <CodeLine number={1}>
          <span className="text-white/40">{"{"}</span>
        </CodeLine>

        <CodeLine number={2}>
          <span className="text-blue-300">"category"</span>
          <span className="text-white/25">:</span>{" "}
          <span className="text-green-300/90">"{category.title}"</span>
          <span className="text-white/25">,</span>
        </CodeLine>

        <CodeLine number={3}>
          <span className="text-blue-300">"skills"</span>

          <span className="text-white/25">: [</span>
        </CodeLine>

        {category.items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === category.items.length - 1;

          return (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                x: 5,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.18,
                delay: index * 0.025,
              }}
            >
              <CodeLine number={index + 4}>
                <span className="mr-2 text-white/15">
                  {isLast ? "└─" : "├─"}
                </span>

                <span className="inline-flex items-center gap-2">
                  {Icon && (
                    <Icon size={13} className="shrink-0 text-blue-400/80" />
                  )}

                  <span className="text-yellow-200/85">"{item.name}"</span>

                  {!isLast && <span className="text-white/20">,</span>}
                </span>
              </CodeLine>
            </motion.div>
          );
        })}

        <CodeLine number={category.items.length + 4}>
          <span className="text-white/25">]</span>
        </CodeLine>

        <CodeLine number={category.items.length + 5}>
          <span className="text-white/40">{"}"}</span>
        </CodeLine>

        <div className="mt-5 px-4 font-mono text-[9px] text-white/15 sm:px-12">
          <span className="text-blue-400/30">{"// "}</span>
          {category.items.length} technologies loaded from this category
        </div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const active = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 bg-ink-950 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <SectionTab
          tab="skills.json"
          comment="// tools & technologies I work with"
          title="Skills & Stack"
        />

        <Reveal>
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm leading-7 text-white/40">
              <span className="text-blue-400/70">{"//"}</span> Technologies,
              frameworks, databases and tools used to build full-stack
              applications.
            </p>
          </div>
        </Reveal>

        {/* ======================================================
            EDITOR
        ====================================================== */}

        <Reveal delay={0.12}>
          <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
            {/* ==================================================
                WINDOW TOP
            ================================================== */}

            <div className="flex h-11 items-center border-b border-white/10 bg-[#11161d] px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <div className="ml-5 flex items-center gap-2">
                <FileCode2 size={14} className="text-blue-400" />

                <span className="font-mono text-[11px] text-white/50">
                  skills.json
                </span>
              </div>

              <div className="ml-auto flex items-center gap-3 font-mono text-[10px] text-white/60">
                <span className="hidden sm:block">read-only</span>

                <span>JSON</span>
              </div>
            </div>

            {/* ==================================================
                EDITOR BODY
                IMPORTANT:
                Fixed height prevents layout shifts / scrolling
            ================================================== */}

            <div className="grid h-[560px] grid-cols-1 lg:grid-cols-[225px_1fr]">
              {/* =================================================
                  SIDEBAR
              ================================================= */}

              <aside className="border-b border-white/10 bg-[#0b0f14] lg:border-b-0 lg:border-r">
                <div className="flex h-11 items-center border-b border-white/5 px-4">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Explorer
                  </span>
                </div>

                <div className="p-3">
                  {/* Root */}
                  <div className="flex items-center gap-2 px-2 py-2 font-mono text-[11px] text-white/60">
                    <ChevronDown size={13} />

                    <Folder size={14} className="text-blue-400/60" />

                    <span>src</span>
                  </div>

                  {/* Skills folder */}
                  <div className="ml-3 flex items-center gap-2 px-2 py-2 font-mono text-[11px] text-white/60">
                    <ChevronDown size={13} />

                    <Folder size={14} className="text-blue-400/60" />

                    <span>skills</span>
                  </div>

                  {/* Current file */}
                  <div className="ml-6 flex items-center gap-2 rounded-md bg-white/[0.03] px-2 py-2 font-mono text-[11px] text-white/55">
                    <FileCode2 size={14} className="text-yellow-300/70" />

                    <span>skills.json</span>
                  </div>

                  {/* Categories */}
                  <div className="mt-5 space-y-0.5">
                    {skillCategories.map((category, index) => (
                      <CategoryButton
                        key={category.title}
                        category={category}
                        index={index}
                        active={activeCategory}
                        onClick={setActiveCategory}
                      />
                    ))}
                  </div>
                </div>
              </aside>

              {/* =================================================
                  CODE PANEL
              ================================================= */}

              <main className="relative min-w-0 overflow-hidden bg-[#0d1117]">
                {/* Editor tabs */}
                <div className="flex h-11 items-center border-b border-white/5 bg-[#0f141a]">
                  <div className="flex h-full items-center gap-2 border-r border-white/5 bg-[#0d1117] px-4">
                    <FileCode2 size={13} className="text-yellow-300/75" />

                    <span className="font-mono text-[10px] text-white/60">
                      skills.json
                    </span>

                    <span className="text-[10px] text-white/60">×</span>
                  </div>

                  <div className="ml-auto flex items-center gap-2 px-4">
                    <Braces size={12} className="text-blue-500" />

                    <span className="font-mono text-[9px] text-white/60">
                      {active.title}
                    </span>
                  </div>
                </div>

                {/* Active file title */}
                <div className="flex h-12 items-center border-b border-white/5 px-5 sm:px-7">
                  <div className="font-mono text-[10px]">
                    <span className="text-white/60">skills.json</span>

                    <span className="mx-2 text-white/10">/</span>

                    <span className="text-blue-300/70">{active.title}</span>
                  </div>
                </div>

                {/* =================================================
                    FIXED CODE VIEWPORT
                    No internal scrollbar.
                    No page height change.
                ================================================= */}

                <div className="relative h-[454px] overflow-hidden">
                  <AnimatePresence mode="sync" initial={false}>
                    <CodePreview key={active.title} category={active} />
                  </AnimatePresence>

                  {/* subtle right fade */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0d1117] to-transparent" />
                </div>

                {/* =================================================
                    STATUS BAR
                ================================================= */}

                <div className="absolute bottom-0 left-0 right-0 flex h-7 items-center justify-between border-t border-white/5 bg-[#111820] px-3 font-mono text-[9px] text-white/60 sm:px-4">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-500">{active.title}</span>

                    <span className="hidden sm:inline">UTF-8</span>

                    <span className="hidden sm:inline">Spaces: 2</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span>Ln 01, Col 01</span>

                    <span className="hidden sm:inline">
                      {active.items.length} items
                    </span>
                  </div>
                </div>
              </main>
            </div>

            {/* ==================================================
                BOTTOM TERMINAL BAR
            ================================================== */}

            <div className="flex h-10 items-center border-t border-white/10 bg-[#0b0f14] px-4">
              <div className="flex items-center gap-2">
                <Terminal size={13} className="text-green-500" />

                <span className="font-mono text-[9px] text-white/60">
                  terminal
                </span>
              </div>

              <span className="ml-4 font-mono text-[9px] text-white/60">
                ~ $ portfolio --skills
              </span>

              <span className="ml-auto hidden font-mono text-[9px] text-green-500 sm:block">
                process exited with code 0
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ========================================================
          AMBIENT CODE
      ======================================================== */}

      <div className="pointer-events-none absolute left-4 top-40 hidden font-mono text-[9px] leading-5 text-white/[0.025] xl:block">
        npm run dev
        <br />
        loading skills...
        <br />
        modules resolved
        <br />
        build complete
      </div>

      <div className="pointer-events-none absolute right-4 bottom-32 hidden text-right font-mono text-[9px] leading-5 text-white/[0.025] xl:block">
        {"{"}
        <br />
        &nbsp;&nbsp;type: "full-stack",
        <br />
        &nbsp;&nbsp;status: "active"
        <br />
        {"}"}
      </div>
    </section>
  );
}
