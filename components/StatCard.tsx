export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-card border border-surface-2 bg-surface p-6">
      <p className="font-display text-stat text-accent">{value}</p>
      <p className="text-body text-text-muted">{label}</p>
    </div>
  );
}
