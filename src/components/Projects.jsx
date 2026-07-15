import { ExternalLink, Lock } from "lucide-react";
import { projects } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTab tab="projects/" comment="// a few things I've built" title="Featured Projects" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-xl border border-white/10 bg-ink-800/60 transition-all hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-glow">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-3 truncate font-mono text-[11px] text-muted">{project.urlLabel}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-paper">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span key={t} className="rounded-md border border-blue-400/20 bg-blue-500/5 px-2 py-1 font-mono text-[11px] text-blue-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300"
                      >
                        <ExternalLink size={13} /> live_demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 font-mono text-xs text-muted">
                        <Lock size={13} /> private_build
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}