export default function SectionTab({ tab, comment, title }) {
  return (
    <div className="mb-14">
      <div className="mb-4 inline-flex items-center gap-2 rounded-t-md border border-b-0 border-white/10 bg-ink-800 px-4 py-2 font-mono text-xs text-blue-400">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        {tab}
      </div>
      <div className="border-t border-white/10 pt-6">
        <p className="mb-2 font-mono text-sm text-muted">{comment}</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">{title}</h2>
      </div>
    </div>
  );
}