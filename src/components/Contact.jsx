// import { useState } from "react";
// import { Mail, Phone, MapPin,  Send, Loader2, CheckCircle2 } from "lucide-react";
// // import { Mail, Phone, MapPin, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
// import { personalInfo } from "../data/portfolioData";
// import SectionTab from "./ui/SectionTab";
// import Reveal from "./ui/Reveal";

// const contactRows = [
//   { icon: Mail, label: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
//   { icon: Phone, label: "phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
//   { icon: MapPin, label: "location", value: personalInfo.location, href: null },
// //   { icon: Linkedin, label: "linkedin", value: "ha    rsh-panchal", href: personalInfo.linkedin },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [status, setStatus] = useState("idle"); // idle | sending | sent

//   const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) return;
//     setStatus("sending");

//     // TODO: wire this to your Express backend, e.g.
//     // await axios.post(`${BE_URL}/contact`, form);
//     await new Promise((res) => setTimeout(res, 1200));

//     setStatus("sent");
//     setForm({ name: "", email: "", phone: "", message: "" });
//     setTimeout(() => setStatus("idle"), 3500);
//   };

//   return (
//     <section id="contact" className="relative py-28">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionTab tab="contact.send()" comment="// let's build something together" title="Get In Touch" />

//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
//           <Reveal>
//             <div>
//               <p className="text-base leading-relaxed text-white/70">
//                 I'm currently open to new full-stack opportunities and freelance projects. Drop a message and I'll get back to you
//                 as soon as possible.
//               </p>
//               <div className="mt-8 space-y-3">
//                 {contactRows.map((row) => {
//                   const Icon = row.icon;
//                   const content = (
//                     <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-blue-400/40">
//                       <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-blue-400">
//                         <Icon size={16} />
//                       </span>
//                       <div>
//                         <p className="font-mono text-[11px] text-muted">$ open {row.label}</p>
//                         <p className="text-sm text-paper">{row.value}</p>
//                       </div>
//                     </div>
//                   );
//                   return row.href ? (
//                     <a key={row.label} href={row.href} target="_blank" rel="noreferrer">
//                       {content}
//                     </a>
//                   ) : (
//                     <div key={row.label}>{content}</div>
//                   );
//                 })}
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.15}>
//             <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-ink-800/60 p-6 sm:p-8">
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block font-mono text-xs text-muted">// name</label>
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your name"
//                     className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block font-mono text-xs text-muted">// email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="you@example.com"
//                     className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
//                   />
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="mb-1.5 block font-mono text-xs text-muted">// phone (optional)</label>
//                   <input
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="+91 00000 00000"
//                     className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
//                   />
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="mb-1.5 block font-mono text-xs text-muted">// message</label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     placeholder="Tell me about your project..."
//                     className="w-full resize-none rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={status !== "idle"}
//                 className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-colors hover:bg-blue-400 disabled:opacity-70 sm:w-auto"
//               >
//                 {status === "idle" && (
//                   <>
//                     <Send size={15} /> send_message()
//                   </>
//                 )}
//                 {status === "sending" && (
//                   <>
//                     <Loader2 size={15} className="animate-spin" /> sending...
//                   </>
//                 )}
//                 {status === "sent" && (
//                   <>
//                     <CheckCircle2 size={15} /> message_sent
//                   </>
//                 )}
//               </button>
//             </form>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Globe2,
  Loader2,
  Mail,
  MapPin,
  Network,
  Phone,
  Send,
  Server,
  Terminal,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

import SectionTab from "./ui/SectionTab";
import Reveal from "./ui/Reveal";

/* ============================================================
   CONTACT ROW
============================================================ */

const contactRows = [
  {
    icon: Mail,
    label: "email",
    key: "EMAIL",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "phone",
    key: "PHONE",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "location",
    key: "LOCATION",
    value: personalInfo.location,
    href: null,
  },
];

/* ============================================================
   CONTACT ENDPOINT
============================================================ */

function ContactEndpoint({ row, index }) {
  const Icon = row.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {row.href ? (
        <a href={row.href} className="group block">
          <div className="rounded-lg   bg-white/[0.02] p-4 transition-all duration-300   hover:bg-blue-500/[0.025]">
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md  bg-[#0b0f14] text-blue-400/70 transition-colors duration-300   group-hover:text-blue-300">
                <Icon size={15} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-[0.14em] ${index === 1 ? "text-yellow-500" : "text-red-500"}`}
                  >
                    {row.key}
                  </span>

                  <ChevronRight
                    size={12}
                    className="shrink-0 text-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400/50"
                  />
                </div>

                <p className="mt-1 truncate text-sm text-white/65 transition-colors group-hover:text-white/85">
                  {row.value}
                </p>

                <p className="mt-1 font-mono text-[9px] text-white/60">
                  $ open {row.label}
                </p>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className="rounded-lg bg-white/[0.02]  p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md   bg-[#0b0f14] text-blue-400/70">
              <Icon size={15} />
            </div>

            <div className="min-w-0 flex-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-green-500">
                {row.key}
              </span>

              <p className="mt-1 truncate text-sm text-white/65">{row.value}</p>

              <p className="mt-1 font-mono text-[9px] text-white/60">
                static endpoint
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  className = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-white/25"
      >
        <span className="text-blue-400/50">{label}</span>
      </label>

      <div className="group relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-white/15 transition-colors group-focus-within:text-blue-400/45">
          &gt;
        </span>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-md border border-white/10 bg-[#0a0f14] py-3 pl-8 pr-3 font-mono text-xs text-paper outline-none transition-all duration-300 placeholder:text-white/15 focus:border-blue-400/45 focus:bg-blue-500/[0.02] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.04)]"
        />
      </div>
    </div>
  );
}

/* ============================================================
   TEXTAREA
============================================================ */

function MessageField({ value, onChange }) {
  return (
    <div>
      <label
        htmlFor="message"
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-white/25"
      >
        <span className="text-blue-400/50">// message</span>
      </label>

      <div className="group relative">
        <span className="pointer-events-none absolute left-3 top-3 font-mono text-xs text-white/15 transition-colors group-focus-within:text-blue-400/45">
          &gt;
        </span>

        <textarea
          id="message"
          name="message"
          value={value}
          onChange={onChange}
          required
          rows={6}
          placeholder="Tell me what you are building..."
          className="w-full resize-none rounded-md border border-white/10 bg-[#0a0f14] px-8 py-3 font-mono text-xs leading-6 text-paper outline-none transition-all duration-300 placeholder:text-white/15 focus:border-blue-400/45 focus:bg-blue-500/[0.02] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.04)]"
        />
      </div>
    </div>
  );
}

/* ============================================================
   CONTACT
============================================================ */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setStatus("sending");

    // TODO:
    // Connect this to your backend:
    //
    // await axios.post(
    //   `${BE_URL}/contact`,
    //   form
    // );

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("sent");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#090d12] py-28"
    >
      {/* ======================================================
          BACKGROUND NETWORK GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ====================================================
            HEADER
        ==================================================== */}

        <SectionTab
          tab="contact.send()"
          comment="// let's build something together"
          title="Get In Touch"
        />

        <Reveal>
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm leading-7 text-white/40">
              <span className="text-blue-400/60">{"//"}</span> Open a
              connection. Describe the problem. Let's build the solution.
            </p>
          </div>
        </Reveal>

        {/* ====================================================
            MAIN CONNECTION PANEL
        ==================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* ==================================================
              LEFT / CONNECTIONS
          ================================================== */}

          <Reveal>
            <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
              {/* Header */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#11161d] px-4">
                <div className="flex items-center gap-2">
                  <Network size={13} className="text-blue-400/65" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
                    connections
                  </span>
                </div>

                <span className="font-mono text-[9px] text-green-500">
                  online
                </span>
              </div>

              {/* Connection status */}
              <div className="border-b border-white/5 px-4 py-4">
                <div className="flex items-center gap-2 font-mono text-[9px] text-white/60">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  connection.available
                </div>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  I'm currently open to new full-stack opportunities and
                  freelance projects. Drop a message and I'll get back to you as
                  soon as possible.
                </p>
              </div>

              {/* Endpoints */}
              <div className="space-y-3 p-4">
                {contactRows.map((row, index) => (
                  <ContactEndpoint key={row.label} row={row} index={index} />
                ))}
              </div>

              {/* Network footer */}
              <div className="mt-auto border-t border-white/5 px-4 py-4">
                <div className="flex items-center gap-2 font-mono text-[9px] text-white/60">
                  <Server size={11} className="text-blue-400/40" />

                  <span>endpoint status</span>

                  <span className="ml-auto text-green-500">reachable</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ==================================================
              RIGHT / REQUEST
          ================================================== */}

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]"
            >
              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div className="flex flex-col gap-3 border-b border-white/10 bg-[#11161d] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-blue-400/65" />

                  <span className="font-mono text-[10px] text-white/60">
                    POST /contact
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] text-white/60">
                  <CircleDot
                    size={11}
                    className={
                      status === "sending"
                        ? "animate-pulse text-yellow-400/60"
                        : status === "sent"
                          ? "text-green-400/60"
                          : "text-blue-400/60"
                    }
                  />

                  {status === "idle" && "ready"}

                  {status === "sending" && "processing"}

                  {status === "sent" && "accepted"}
                </div>
              </div>

              {/* =================================================
                  REQUEST BODY
              ================================================= */}

              <div className="p-5 sm:p-7">
                {/* Endpoint line */}
                <div className="mb-6 rounded-md border border-white/5 bg-[#0a0f14] px-3 py-2.5 font-mono text-[10px] text-white/25">
                  <span className="text-blue-400/60">endpoint</span>

                  <span className="mx-2 text-white/60">:</span>

                  <span className="text-green-300/60">/api/contact</span>

                  <span className="ml-3 text-white/60">→</span>

                  <span className="ml-2 text-white/60">application/json</span>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="// name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />

                  <Field
                    label="// email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />

                  <Field
                    label="// phone (optional)"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <MessageField
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* =================================================
                    SUBMIT AREA
                ================================================= */}

                <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-white/60">
                    <Globe2 size={11} className="text-blue-400/40" />
                    secure connection
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status !== "idle"}
                    whileHover={status === "idle" ? { y: -2 } : undefined}
                    whileTap={status === "idle" ? { scale: 0.98 } : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-mono text-xs font-semibold text-ink-950 shadow-glow transition-colors duration-300 hover:bg-blue-400 disabled:cursor-default disabled:opacity-70 sm:w-auto sm:text-sm"
                  >
                    {status === "idle" && (
                      <>
                        <Send size={14} />
                        send_request()
                      </>
                    )}

                    {status === "sending" && (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        sending...
                      </>
                    )}

                    {status === "sent" && (
                      <>
                        <CheckCircle2 size={14} />
                        request_accepted
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* =================================================
                  STATUS BAR
              ================================================= */}

              <div className="flex items-center justify-between border-t border-white/10 bg-[#0b0f14] px-4 py-2.5 font-mono text-[9px] text-white/60">
                <span>method: POST</span>

                <span>content-type: json</span>

                <span className="hidden sm:block">
                  status:{" "}
                  {status === "sent"
                    ? "200"
                    : status === "sending"
                      ? "..."
                      : "ready"}
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      {/* ======================================================
          BACKGROUND SYSTEM TEXT
      ====================================================== */}

      <div className="pointer-events-none absolute left-4 top-[42%] hidden font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        network.initialize()
        <br />
        endpoint.open()
        <br />
        request.listen()
        <br />
        awaiting.connection
      </div>

      <div className="pointer-events-none absolute bottom-24 right-5 hidden text-right font-mono text-[9px] leading-6 text-white/[0.02] xl:block">
        protocol: HTTPS
        <br />
        method: POST
        <br />
        payload: JSON
        <br />
        state: ready
      </div>
    </section>
  );
}
