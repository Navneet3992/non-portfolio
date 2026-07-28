import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data/caseStudies";

const cardBg: Record<CaseStudy["cardColor"], string> = {
  teal: "bg-card-teal",
  dark: "bg-card-dark",
  orange: "bg-card-orange",
  red: "bg-card-red",
};

export default function ProjectCard({ project }: { project: CaseStudy }) {
  if (project.cardImage) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group relative block h-full rounded-[24px] shadow-2xl shadow-black/60 transition-transform md:rounded-[80px]"
      >
        <div
          className={`relative isolate h-full w-full overflow-hidden rounded-[24px] md:rounded-[80px] ${cardBg[project.cardColor]}`}
        >
          <Image
            src={project.cardImage}
            alt={project.title}
            fill
            priority
            className="-z-10 object-cover"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative isolate block h-full rounded-[24px] shadow-2xl shadow-black/60 transition-transform md:rounded-[80px]"
    >
      <div
        className={`flex h-full w-full flex-col justify-center gap-8 overflow-hidden rounded-[24px] px-8 py-12 md:flex-row md:items-center md:justify-between md:rounded-[80px] md:py-16 ${cardBg[project.cardColor]}`}
      >
        <div className="flex flex-col gap-4 md:max-w-md">
          <span className="w-fit rounded-badge bg-black/20 px-3 py-1 text-label uppercase tracking-widest">
            {project.tag}
          </span>
          <h3 className="font-display text-h3 md:text-display">{project.title}</h3>
          <p className="text-label uppercase tracking-widest text-white/60">
            {project.year} · {project.type} · {project.deliverables.join(", ")}
          </p>
          <div aria-hidden className="flex gap-1 text-accent">
            {"★★★★★"}
          </div>
        </div>

        <div
          data-gif-slot={`card-gif-${project.slug}`}
          className="flex h-48 w-full items-center justify-center rounded-card bg-black/20 text-label uppercase tracking-widest text-white/40 md:h-56 md:w-64"
        >
          Phone mockup GIF
        </div>
      </div>
    </Link>
  );
}
