import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PARTICLES = [
  "{ }",
  "</>",
  ";",
  "=>",
  "( )",
  "npm i",
  "git push",
  "const",
  "#!/bin",
];

export default function BackgroundFX() {
  const spotlightRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
      spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(62,123,250,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(62,123,250,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* <motion.div
        style={{ y: blobY1 }}
        className="absolute -left-32 top-10 h-[420px] w-[420px] animate-blob rounded-full bg-blue-600/20 blur-[110px]"
      /> */}
      {/* <motion.div
        style={{ y: blobY2, animationDelay: "4s" }}
        className="absolute right-[-160px] top-[40%] h-[480px] w-[480px] animate-blob rounded-full bg-blue-500/15 blur-[130px]"
      /> */}
      {/* <div className="absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] animate-blob rounded-full bg-blue-700/10 blur-[120px]" /> */}

      {/* <div
        ref={spotlightRef}
        className="absolute inset-0 hidden opacity-100 md:block"
        style={{
          background: "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(62,123,250,0.08), transparent 70%)",
        }}
      /> */}
      {/* <div
        ref={spotlightRef}
        className="absolute inset-0 hidden opacity-100 md:block"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.10) 25%, rgba(59,130,246,0.04) 50%, transparent 75%)",
        }}
      /> */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 hidden opacity-100 md:block"
        style={{
          background:
            "radial-gradient(180px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.12) 30%, rgba(59,130,246,0.05) 55%, transparent 80%)",
        }}
      />

      {PARTICLES.map((symbol, i) => (
        <span
          key={i}
          className="absolute animate-drift select-none font-mono text-sm text-blue-400/20"
          style={{
            left: `${(i * 11 + 6) % 100}%`,
            animationDelay: `${i * 1.6}s`,
            animationDuration: `${14 + (i % 5)}s`,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
