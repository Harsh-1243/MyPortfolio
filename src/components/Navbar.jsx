import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <button onClick={() => scrollTo("hero")} className="flex items-center font-mono text-sm font-semibold text-paper">
            ~/harsh-panchal
            <span className="ml-1 inline-block h-[1em] w-[2px] animate-blink bg-blue-400 align-middle" />
          </button>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`group flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                active === link.id
                  ? "border-blue-500/40 bg-blue-500/10 text-blue-300"
                  : "border-transparent text-muted hover:text-paper"
              }`}
            >
              {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300 sm:flex"
          >
            <Download size={13} /> resume
          </a>
          <button className="text-paper lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink-950 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`rounded-md px-3 py-2 text-left font-mono text-sm ${
                    active === link.id ? "bg-blue-500/10 text-blue-300" : "text-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}