import Image from "next/image";
import type { CaseStudy } from "@/lib/data/caseStudies";

export default function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  const meta = [
    { label: "MY ROLE", lines: caseStudy.role },
    { label: "DELIVERABLES", lines: caseStudy.deliverables },
    { label: "TEAM", lines: caseStudy.team },
    { label: "YEAR", lines: [caseStudy.year] },
  ];

  return (
    <section className="mx-auto max-w-content px-6 pt-16">
      <span className="w-fit rounded-badge bg-surface-2 px-3 py-1 text-label uppercase tracking-widest text-text-muted">
        {caseStudy.tag}
      </span>
      <h1 className="mt-6 w-full font-body font-bold text-display">{caseStudy.title}</h1>

      {caseStudy.heroImage ? (
        <div className="relative mt-12 h-72 w-full overflow-hidden rounded-[20px] md:h-[28rem] md:rounded-[40px]">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            sizes="(min-width: 768px) 1200px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div
          data-gif-slot={`cs-hero-${caseStudy.slug}`}
          className="mt-12 flex h-72 w-full items-center justify-center rounded-[20px] bg-surface text-label uppercase tracking-widest text-text-dim md:h-[28rem] md:rounded-[40px]"
        >
          Hero visual placeholder
        </div>
      )}

      <div className="mt-[40px] grid grid-cols-2 gap-8 lg:flex lg:justify-center lg:gap-[120px]">
        {meta.map((item) => (
          <div key={item.label}>
            <p className="font-body text-[18px] uppercase tracking-widest text-text-primary">
              {item.label}
            </p>
            {item.lines.map((line) => (
              <p key={line} className="mt-1 font-body text-body text-text-muted">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
