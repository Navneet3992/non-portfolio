import Image from "next/image";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import ImpactStatsGrid from "@/components/ImpactStatsGrid";
import NextProjectButton from "@/components/ui/NextProjectButton";
import { getCaseStudy, getNextCaseStudy } from "@/lib/data/caseStudies";
import { notFound } from "next/navigation";

const slug = "free-cash-table";

export default function FreeCashTablePage() {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const next = getNextCaseStudy(slug);

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseStudySection heading="The Problem">
        <p>
          Meet Kabir, a new rummy player who loves practice tables but freezes at the “Add
          Cash” button. He enjoys the game — not the risk.
        </p>
        <p className="mt-4">
          He’s not alone. 60% of new users play only free tables, while just 10% add money.
          Most leave without ever feeling what it’s like to win real cash.
        </p>
        <p className="mt-4">
          The challenge was simple: how might we let users experience real winnings without
          risking their own money?
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Approach and Hypothesis">
        <p>“What if hesitation wasn’t about money, but about trust?”</p>
        <p className="mt-4">
          Players weren’t unwilling to play — they were unsure of what to expect. They needed
          to experience real cash gameplay and feel the thrill of winning before believing it
          was worth investing in.
        </p>
        <p className="mt-4">
          Our hypothesis was straightforward: If new users could play real-money games with no
          entry fee, they’d build trust, gain confidence, and be more likely to deposit.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Solution — Designing Confidence Before Conversion">
        <p>
          Instead of asking users to trust the platform, we decided to let the experience earn
          that trust.
          <br />
          Free Cash Tables became that safe on-ramp — offering the real experience without the
          risk. The goal wasn’t just conversion. It was confidence. It was to experience the
          thrill of real stakes without the fear of loss.
        </p>
      </CaseStudySection>

      <section
        className="w-full py-16"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(36,36,36,0) 12%, rgba(36,36,36,1) 48%, rgba(36,36,36,0) 87%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-content px-6 text-center">
          <h3 className="font-body font-bold text-h3">
            To keep expectations clear and anxiety low
          </h3>
          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center gap-2 font-body text-body text-text-muted">
            <p>1. Eligibility was limited to new users to maintain perceived value</p>
            <p className="lg:whitespace-nowrap">
              2. The gameplay, rules and UI mirrored regular cash tables, ensuring the
              experience felt authentic
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <h2 className="text-center font-body font-bold text-h3">
          Identifier options presented for Free Cash Table
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-[80px]">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-card bg-surface"
            >
              <Image
                src={`/images/opt-${n}.gif`}
                alt={`Identifier option ${n}`}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-content px-6 py-16">
        <div
          aria-hidden
          data-bg-panel
          className="absolute inset-x-6 top-[187px] bottom-[187px] z-0 rounded-[20px] md:rounded-[40px]"
          style={{
            background: "linear-gradient(to right, #141414, #242424)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-[80px]">
          <div>
            <h2 className="font-body font-bold text-h2">
              Execution — Where and How Users Discover It
            </h2>
            <p className="mt-6 font-body text-body text-text-muted">
              Timing mattered more than persuasion.
            </p>
            <p className="mt-4 font-body text-body text-text-muted">
              A new user would by default land on the “Free Game Table” in the Cash Lobby for
              the first 3 to 5 times as the business wants.
            </p>
          </div>
          <div
            data-phone="top-right"
            className="relative mx-auto aspect-[1/2] w-full max-w-xs rotate-[3deg] overflow-hidden rounded-[20px] md:rounded-[40px]"
            style={{
              border: "12px solid #3d3d3d",
              boxShadow: "0 12px 64px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/images/execution-free-cash-table.gif"
              alt="New user landing on Free Cash Table by default"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-[80px]">
          <div
            data-phone="bottom-left"
            className="relative mx-auto aspect-[1/2] w-full max-w-xs -rotate-[3deg] overflow-hidden rounded-[20px] md:rounded-[40px]"
            style={{
              border: "12px solid #3d3d3d",
              boxShadow: "0 12px 64px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/images/practice-lobby-identifier.gif"
              alt="Identifier on the Cash tab after closing the Practice Lobby bottom sheet"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <p className="text-center font-body text-body text-text-muted md:text-left">
            A bottom sheet triggers on the Practice Lobby as a new user lands on it. Post
            closing the bottom sheet, an identifier on the Cash tab help user discover the
            feature.
          </p>
        </div>
      </section>

      <p className="mx-auto max-w-content px-6 py-16 text-center font-body text-body text-text-muted">
        Experiment Roll Out Duration: 9th Aug - 22nd Aug 2025 (~ Two Weeks)
      </p>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">
            Impact &amp; Results
            <br />
            (2 Weeks Post Launch)
          </h2>
          <p className="font-body text-body text-text-muted">
            Within two weeks of launching Free Cash Tables for new users, we began seeing
            strong behavioral shifts — especially among users who previously stayed confined to
            practice play.
          </p>
        </div>
        <ImpactStatsGrid
          stats={caseStudy.stats.map((stat) => ({
            ...stat,
            nowrap: stat.value === "~5% to 10% increase in Deposit",
          }))}
        />

        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">Why These Numbers Matter</h2>
          <p className="font-body text-body text-text-muted">
            These weren’t explosive, overnight gains — and that’s exactly why they mattered.
            They showed intent, trust, and momentum — the right signals for a feature designed
            to educate through experience, not force conversion.
          </p>
        </div>

        <div
          className="relative mt-32 h-[414.28px] overflow-hidden rounded-[20px] md:rounded-[40px]"
          style={{
            background: "linear-gradient(to bottom, #141414, #242424)",
          }}
        >
          <div
            className="absolute -bottom-[200px] left-1/2 z-0 w-[645.12px] -translate-x-1/2 overflow-hidden rounded-[24px] md:rounded-[48px]"
            style={{
              background: "linear-gradient(to bottom, rgba(20,20,20,0), #242424)",
            }}
          >
            <Image
              src="/images/bottomsheet-new.gif"
              alt=""
              aria-hidden
              width={1080}
              height={993}
              unoptimized
              className="h-auto w-full opacity-50"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(20,20,20,0) 0%, rgba(36,36,36,1) 100%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 bottom-0 z-[1] h-full w-full overflow-hidden rounded-[24px] md:rounded-[48px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(20,20,20,0), #242424 calc(100% - 16px))",
            }}
          />
          <div className="absolute -bottom-[16px] left-1/2 z-[2] w-[368px] -translate-x-1/2 overflow-hidden rounded-t-[32px]">
            <Image
              src="/images/bottomsheet-new.gif"
              alt="Bottom sheet UI on the Practice Lobby"
              width={1080}
              height={993}
              unoptimized
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-[24px] left-1/2 z-[3] w-[331.2px] -translate-x-1/2">
            <Image
              src="/images/point-game-card.svg"
              alt="Point game card"
              width={410}
              height={207}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">Safeguards &amp; Risk Controls</h2>
          <div>
            <p className="font-body text-body text-text-muted">
              To protect both users and the business, Free Cash Tables were designed with clear
              boundaries. These safeguards ensured the feature built trust without creating
              misuse or long-term dependency.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-body text-text-muted">
              <li>Limited eligibility to new users only, preventing exploitation</li>
              <li>Capped winnings to control promotional spend</li>
              <li>Maximum 2 - 3 tables access to avoid farming behavior</li>
            </ul>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">Key Product &amp; UX Learnings</h2>
          <ul className="list-disc space-y-2 pl-5 font-body text-body text-text-muted">
            <li>
              Experience builds trust faster than messaging — letting users win was more
              powerful than any explanation
            </li>
            <li>
              Timing beats persuasion — surfacing the feature after confident moments drove
              higher adoption
            </li>
            <li>
              Familiarity reduces fear — mirroring real cash table UI helped users transition
              naturally
            </li>
            <li>
              Small wins matter — even low-value cash rewards created strong emotional
              validation
            </li>
          </ul>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">Conclusion</h2>
          <div>
            <p className="font-body text-body text-text-muted">
              Free Cash Tables didn’t just improve conversion metrics — they changed user
              mindset. By removing risk at the right moment, we replaced hesitation with belief.
            </p>
            <p className="mt-4 font-body text-body text-text-muted">
              This design decision bridged the gap between free play and real money, driving
              higher engagement, stronger trust signals, and a meaningful uplift in first-time
              deposits.
            </p>
            <p className="mt-4 font-body text-body text-text-muted">
              When users were allowed to experience value before paying for it, both confidence
              and business impact followed.
            </p>
          </div>
        </div>
      </section>

      <CaseStudySection heading="Team Credits">
        <p>
          This case study reflects strong cross-functional collaboration and continuous
          iteration. From concept to rollout, close partnership across teams shaped the
          outcome. Kudos to our Engineers, Data Analysts, Product Manager — especially Saiyam
          Surana — and QA for driving this experiment through weeks of refinement, testing, and
          analysis.
        </p>
        <p className="mt-4">
          🙌 Here’s to creating smoother, more trustworthy gaming experiences for our users!
        </p>
      </CaseStudySection>

      <div className="mx-auto flex max-w-content justify-center px-6 pt-16 pb-16">
        <NextProjectButton href={`/work/${next.slug}`} title={next.title} />
      </div>
    </main>
  );
}
