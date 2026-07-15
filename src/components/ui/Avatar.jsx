export default function Avatar({ src, alt = "Harsh Panchal" }) {
  if (src) {
    return <img src={src} alt={alt} className="h-full w-full object-cover" />;
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 via-ink-900 to-black">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(62,123,250,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(62,123,250,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <span className="relative font-mono text-6xl font-bold text-blue-400/90">HP</span>
    </div>
  );
}