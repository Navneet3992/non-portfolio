export default function ImpactStatsGrid({
  stats,
}: {
  stats: { value: string; label: string; nowrap?: boolean }[];
}) {
  return (
    <div
      className="mt-6 grid grid-cols-1 gap-8 rounded-[20px] px-5 py-8 sm:grid-cols-2 md:rounded-[40px] md:px-8"
      style={{
        background: "linear-gradient(to bottom, rgba(20,20,20,0), #242424)",
      }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2">
          <p
            className={`font-display text-stat text-accent ${stat.nowrap ? "lg:whitespace-nowrap" : ""}`}
          >
            {stat.value}
          </p>
          <p className="text-body text-text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
