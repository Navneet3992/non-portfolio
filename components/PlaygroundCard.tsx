export default function PlaygroundCard({ label, slot }: { label: string; slot: number }) {
  return (
    <div
      data-gif-slot={`playground-gif-${slot}`}
      className="flex aspect-square flex-col justify-between rounded-card border border-surface-2 bg-surface p-6"
    >
      <span className="text-label uppercase tracking-widest text-text-muted">{label}</span>
      <div className="flex flex-1 items-center justify-center text-label uppercase tracking-widest text-text-dim">
        GIF placeholder
      </div>
    </div>
  );
}
