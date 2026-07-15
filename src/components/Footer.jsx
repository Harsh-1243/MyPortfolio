// import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";
import { ArrowUp, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

// const ICONS = { mail: Mail, linkedin: Linkedin, github: Github };
const ICONS = { mail: Mail};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {personalInfo.name} — built with React &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-3">
          {socialLinks
            .filter((s) => ICONS[s.icon])
            .map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-white/40 transition-colors hover:text-blue-300">
                  <Icon size={14} />
                </a>
              );
            })}
          <button
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-1 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/50 transition-colors hover:border-blue-400/50 hover:text-blue-300"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}