export default function GhostHeading({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none select-none whitespace-nowrap font-display font-bold text-white/5 ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
