import Image from "next/image";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import ImpactStatsGrid from "@/components/ImpactStatsGrid";
import GhostHeading from "@/components/ui/GhostHeading";
import NextProjectButton from "@/components/ui/NextProjectButton";
import { getCaseStudy, getNextCaseStudy } from "@/lib/data/caseStudies";
import { notFound } from "next/navigation";

const slug = "jr-player-search";

export default function JrPlayerSearchPage() {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const next = getNextCaseStudy(slug);

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseStudySection heading="The Problem">
        <p>
          The current Game Table start experience on Practice and Cash tables lacked engaging
          feedbacks and contextual cues during the waiting period after a player clicked “PLAY
          NOW”. The experience felt static, impersonal, and at times confusing — particularly
          for new users unfamiliar with the platform’s mechanics.
        </p>
        <p className="mt-4">
          This resulted in reduced trust in the platform, lower engagement during critical early
          moments, and a drop in session continuation for new and casual users.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Design Goals">
        <p>
          Build a game experience that instils confidence that every table consists of real
          human opponents. Every interaction—from matchmaking and player presence to gameplay
          feedback—should reinforce authenticity, reduce suspicion of bots, and strengthen
          users’ trust in Junglee Rummy as a fair, competitive platform.
        </p>
      </CaseStudySection>

      <section className="w-full overflow-hidden pt-8 md:pt-12">
        <GhostHeading
          className="block w-full text-center text-[8vw] leading-none"
          style={{
            backgroundImage: "linear-gradient(to bottom, #3d3d3d, #141414)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "var(--font-body)",
          }}
        >
          Current Game Table Start
        </GhostHeading>
      </section>

      <section className="relative mx-auto max-w-content px-6 pb-16">
        <div className="relative mx-auto flex justify-center">
          <div
            aria-hidden
            data-bg-panel
            className="absolute inset-x-0 top-0 bottom-1/2 z-0 translate-y-8 rounded-[20px] md:rounded-[40px]"
            style={{
              background: "linear-gradient(to bottom, #141414, #242424)",
            }}
          />
          <div
            data-phone="center"
            className="relative z-10 mx-auto aspect-[1920/886] w-full max-w-2xl overflow-hidden rounded-[20px] md:rounded-[40px]"
            style={{
              boxShadow: "0 0 0 12px #3d3d3d, 0 12px 64px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/images/game-start-older-version.gif"
              alt="Current Game Table start experience before the redesign"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CaseStudySection heading="Discovery and Hypothesis">
        <p>
          Post conducting competitor’s analysis and reviewing other rummy platforms, we came to
          a conclusion of
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Enhancing user’s trust and perceived legitimacy by showcasing real-player presence
            and system transparency through trust markers and animations.
          </li>
          <li>
            Improve contextual communication by tailoring state-wise and cohort-specific
            messaging, delivering more relevant, human, and regional cues to different user
            segments.
          </li>
          <li>
            Streamline the flow by removing unnecessary friction (like the confirmation pop-up
            when redirecting to another table), making the experience faster and more intuitive
            without sacrificing clarity.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Approach to Solution">
        <p>
          We introduced multiple Player Search animation to build trust among our players that
          they are playing with other real verified players
        </p>
      </CaseStudySection>

      <section className="mx-auto -mt-6 max-w-content px-6 pb-16">
        <div className="grid grid-cols-6 gap-11">
          {[
            { n: 1, colStart: 1, rowStart: 1 },
            { n: 2, colStart: 3, rowStart: 1 },
            { n: 3, colStart: 5, rowStart: 1 },
            { n: 4, colStart: 2, rowStart: 2 },
            { n: 5, colStart: 4, rowStart: 2 },
          ].map(({ n, colStart, rowStart }) => (
            <div
              key={n}
              data-gif-slot={`cs-body-${slug}-${n}`}
              className="relative col-span-2 aspect-[740/360] overflow-hidden rounded-[32px]"
              style={{
                gridColumnStart: colStart,
                gridRowStart: rowStart,
                boxShadow: "0 0 0 8px #3d3d3d",
              }}
            >
              <Image
                src={`/images/approach-variant-${n}.gif`}
                alt={`Player search animation option ${n}`}
                fill
                unoptimized
                className="object-cover object-right"
              />
            </div>
          ))}
        </div>
        <p className="mt-5 text-center font-body text-body text-text-muted">
          Animation options presented to our Stakeholders
        </p>
      </section>

      <p className="mx-auto max-w-content px-6 pb-6 pt-16 text-center font-body text-body text-text-muted">
        With multiple approaches presented and examined, our Stake holders expected the player
        search via a Scanner style option which included a
      </p>

      <section
        className="w-full pb-16"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(36,36,36,0) 12%, rgba(36,36,36,1) 48%, rgba(36,36,36,0) 87%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-content flex-nowrap items-center justify-between gap-8 overflow-x-auto px-6">
          {[
            { src: "/images/icon-scanner.svg", w: 208, h: 209, label: "SCANNER", size: "h-32" },
            {
              src: "/images/icon-avatar-frame.svg",
              w: 208,
              h: 208,
              label: "AVATAR FRAME",
              size: "h-32",
            },
            {
              src: "/images/icon-verification-bar.svg",
              w: 208,
              h: 208,
              label: "BAR TO SHOW VERIFICATION",
              size: "h-32",
            },
            {
              src: "/images/icon-progress-bar.svg",
              w: 422,
              h: 208,
              label: "PROGRESS BAR",
              size: "h-32",
            },
            {
              src: "/images/icon-junglee-avatars.png",
              w: 309,
              h: 286,
              label: "JUNGLEE AVATARS",
              size: "h-48",
            },
          ].map((item) => (
            <div key={item.label} className="flex shrink-0 flex-col items-center gap-3">
              <div className="flex h-48 items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={item.w}
                  height={item.h}
                  unoptimized
                  className={`w-auto ${item.size}`}
                />
              </div>
              <p className="whitespace-nowrap text-center font-body text-label uppercase tracking-widest text-text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full overflow-hidden pt-8 md:pt-12">
        <GhostHeading
          className="block w-full text-center text-[8vw] leading-none"
          style={{
            backgroundImage: "linear-gradient(to bottom, #3d3d3d, #141414)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "var(--font-body)",
          }}
        >
          Variation Approved
        </GhostHeading>
      </section>

      <section className="relative mx-auto max-w-content px-6 pb-16">
        <div className="relative mx-auto flex justify-center">
          <div
            aria-hidden
            data-bg-panel
            className="absolute inset-x-0 top-0 bottom-1/2 z-0 translate-y-8 rounded-[20px] md:rounded-[40px]"
            style={{
              background: "linear-gradient(to bottom, #141414, #242424)",
            }}
          />
          <div
            data-phone="variation-approved"
            className="relative z-10 mx-auto aspect-[736/360] w-full max-w-[840px] overflow-hidden rounded-[20px] md:rounded-[40px]"
            style={{
              boxShadow: "0 0 0 12px #3d3d3d, 0 12px 64px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/images/consolidated-feedback.gif"
              alt="Consolidated feedback on the approved player search variation"
              fill
              unoptimized
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>

      <CaseStudySection heading="Experiment Roll Out Duration">
        <p>Nov 15 - Dec 11, 2024(~4 Weeks)</p>
        <p className="mt-4">
          This period covers the start of rollout at VIP-0 through scaled testing across VIP
          tiers and final full rollout confirmation on Dec 11,2024.
        </p>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">
            Impact Analysis &amp; Business KPIs to Highlight
          </h2>
          <p className="font-body text-body text-text-muted">
            Better experience, better business — higher conversions, deeper engagement, and
            measurable deposit growth across user tiers
          </p>
        </div>
        <ImpactStatsGrid
          stats={[
            {
              value: "~2 - 6% Conversion",
              label:
                "improved consistently across VIPs showing better player retention through the table entry funnel",
            },
            {
              value: ">34% decrease",
              label:
                "in leave table clicks across most VIP segments, signaling improved trust and willingness to wait",
            },
            {
              value: "Avg. Game per User increase",
              label:
                "+5.2% for VIP 1, +7% for VIP 4, +2.05% for VIP showing overall net-positive across segments",
            },
            {
              value: "Deposit Growth in key Cohorts",
              label:
                "+7% for VIP 1, +6.39% for VIP 4, +5.53% for VIP 5, proving the impact extended to new / low-tier users",
            },
          ]}
        />
      </section>

      <CaseStudySection heading="Team Credits">
        <p>
          This case study is a testament to tight cross-functional collaboration and iterative
          refinement. From design to execution, the collective effort across functions made this
          rollout a success.
        </p>
        <p className="mt-4">
          KUDOS to our Unity Developers, Engineers, Data Analysts, Product Managers specially
          Sneha Majumdar, and QA who powered this experiment across weeks of tuning and analysis.
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
