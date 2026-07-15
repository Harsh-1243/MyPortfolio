import { useState } from "react";
import { Mail, Phone, MapPin,  Send, Loader2, CheckCircle2 } from "lucide-react";
// import { Mail, Phone, MapPin, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

const contactRows = [
  { icon: Mail, label: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "location", value: personalInfo.location, href: null },
//   { icon: Linkedin, label: "linkedin", value: "ha    rsh-panchal", href: personalInfo.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // TODO: wire this to your Express backend, e.g.
    // await axios.post(`${BE_URL}/contact`, form);
    await new Promise((res) => setTimeout(res, 1200));

    setStatus("sent");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTab tab="contact.send()" comment="// let's build something together" title="Get In Touch" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-base leading-relaxed text-white/70">
                I'm currently open to new full-stack opportunities and freelance projects. Drop a message and I'll get back to you
                as soon as possible.
              </p>
              <div className="mt-8 space-y-3">
                {contactRows.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-blue-400/40">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-blue-400">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] text-muted">$ open {row.label}</p>
                        <p className="text-sm text-paper">{row.value}</p>
                      </div>
                    </div>
                  );
                  return row.href ? (
                    <a key={row.label} href={row.href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={row.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-ink-800/60 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-muted">// name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-muted">// email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block font-mono text-xs text-muted">// phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block font-mono text-xs text-muted">// message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-colors hover:bg-blue-400 disabled:opacity-70 sm:w-auto"
              >
                {status === "idle" && (
                  <>
                    <Send size={15} /> send_message()
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 size={15} className="animate-spin" /> sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={15} /> message_sent
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}