import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import StatCard from "@/components/StatCard";
import NextProjectButton from "@/components/ui/NextProjectButton";
import { getCaseStudy, getNextCaseStudy } from "@/lib/data/caseStudies";
import { notFound } from "next/navigation";

const slug = "howzat-login";

export default function HowzatLoginPage() {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const next = getNextCaseStudy(slug);

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseStudySection heading="The Problem">
        <p>
          Placeholder copy — HOWZAT&apos;s splash and login flow felt unclear to new users.
          Replace with the real problem statement.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Design Goals">
        <p>Placeholder copy — outline the design goals for this case study here.</p>
      </CaseStudySection>

      <CaseStudySection heading="Approach to Solution">
        <p>
          Placeholder copy — describe the approach, including supporting mockups and
          before/after comparisons.
        </p>
        <div
          data-gif-slot={`cs-body-${slug}-1`}
          className="mt-6 flex h-64 items-center justify-center rounded-card bg-surface text-label uppercase tracking-widest text-text-dim"
        >
          Supporting visual placeholder
        </div>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 py-16">
        <h2 className="font-body font-bold text-h2">Impact &amp; Results</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudy.stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <CaseStudySection heading="Team Credits">
        <p>{caseStudy.team.join(", ")}</p>
      </CaseStudySection>

      <div className="mx-auto max-w-content px-6 pb-16">
        <NextProjectButton href={`/work/${next.slug}`} title={next.title} />
      </div>
    </main>
  );
}
