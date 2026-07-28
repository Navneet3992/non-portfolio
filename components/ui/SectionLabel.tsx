export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-label uppercase tracking-widest text-text-muted">{children}</p>
  );
}
