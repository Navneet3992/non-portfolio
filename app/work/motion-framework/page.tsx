import Image from "next/image";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import ImpactStatsGrid from "@/components/ImpactStatsGrid";
import NextProjectButton from "@/components/ui/NextProjectButton";
import { getCaseStudy, getNextCaseStudy } from "@/lib/data/caseStudies";
import { notFound } from "next/navigation";

const slug = "motion-framework";

export default function MotionFrameworkPage() {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const next = getNextCaseStudy(slug);

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} heroTopFade />

      <CaseStudySection heading="The Problem">
        <p>
          The Junglee Rummy app, though feature-rich and popular, lacked a cohesive motion
          system to deliver a modern, fluid, and intuitive experience. Interactions felt static,
          abrupt, and inconsistent across screens, reducing the sense of polish and delight
          expected from a leading gaming product
        </p>
        <p className="mt-4">
          Without a structured motion framework, animations remained purely functional—failing
          to guide attention, communicate hierarchy, or express brand personality. The challenge
          was to create a scalable motion design system that balanced usability with visual
          delight, making the app feel fresh, engaging, and emotionally resonant.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Goals & Objectives">
        <p>
          The primary goal was to design a unified motion framework that elevated Junglee
          Rummy’s overall experience while staying true to its brand identity
        </p>
        <h3 className="mt-8 font-body font-bold text-h3">Key Objectives</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-text-primary">Modernise the Look &amp; Feel:</span>{" "}
            Smooth, consistent animations that make the app feel lively and contemporary.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Enhance Usability:</span> Motion as
            a tool to guide focus, indicate hierarchy, and improve navigation.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Delight &amp; Engage:</span>{" "}
            Micro-interactions to provide delight and deepen the emotional connection with users.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Scalability:</span> A flexible
            system adaptable across screens, states, and future features.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Performance:</span> Ensure
            animations remain lightweight without impacting app responsiveness.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Design Process">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-text-primary">Audit &amp; Analysis:</span>{" "}
            Reviewed existing flows and identified gaps where motion could add clarity or
            delight.
          </li>
        </ul>
      </CaseStudySection>

      <section
        className="w-full py-16"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(36,36,36,0) 12%, rgba(36,36,36,1) 48%, rgba(36,36,36,0) 87%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-content flex-wrap justify-center gap-x-11 gap-y-6 px-6 md:gap-y-11">
          {[
            "Popups",
            "Navigation Bar Icons",
            "Tab Transitions",
            "Buttons",
            "Skeletons",
            "Toast Messages",
            "Bottom Sheets",
            "Navigation Page Transition",
            "Tooltip Popups",
            "Tapping on a Card",
            "Forward and Backward",
            "Floating Action Button",
            "Pressing a Card",
            "Applying Filters",
            "Miscellaneous",
          ].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-[80px] px-[20px] py-[10px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:px-[40px] md:py-[20px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
              style={{
                background: "rgba(255,255,255,0.12)",
              }}
            >
              <span className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold">
                {chip}
              </span>
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[80px]">
          <div className="flex justify-end">
            <Image
              src="/images/icon-tools.svg"
              alt=""
              aria-hidden
              width={119}
              height={355}
              className="h-auto w-[119px]"
            />
          </div>
          <div className="font-body text-body text-text-muted">
            <h3 className="font-body font-bold text-h3">Defining Motion Principles</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-text-primary">Informative:</span> Motion
                shall help ease our user throughout an experience. It shall highlight the
                relationship between elements, action availability and outcome.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Intuitive:</span> Motion shall
                feel familiar and expected. It shall mirror traits from the real world like
                acceleration, gravity to achieve a natural feel.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Intentional:</span> All
                animation shall help user reach their goals by establishing connection between
                elements, drawing attention to important details or providing feedback.
              </li>
            </ul>

            <h3 className="mt-8 font-body font-bold text-h3">Setting up Durations</h3>
            <p className="mt-4 text-body text-text-muted">
              Timing scales that allows design-based decisions to happen quicker and more
              consistently
            </p>
          </div>
        </div>

        {(() => {
          const groups = [
            { count: 1, overlap: 0 },
            { count: 7, overlap: 0.35 },
            { count: 7, overlap: 0.22 },
            { count: 7, overlap: 0.1 },
            { count: 7, overlap: 0 },
          ];
          const units = groups.reduce((sum, g) => sum + g.count * (1 - g.overlap), 0);
          const circlePercent = 100 / units;

          let n = 0;
          let cumulativeUnits = 0;
          const circles: {
            n: number;
            overlap: number;
            leftPercent: number;
            centerPercent: number;
          }[] = [];
          groups.forEach((g) => {
            for (let i = 0; i < g.count; i++) {
              n += 1;
              const overlap = n === 1 ? 0 : g.overlap;
              const leftPercent = cumulativeUnits * circlePercent;
              cumulativeUnits += 1 - overlap;
              circles.push({
                n,
                overlap,
                leftPercent,
                centerPercent: leftPercent + circlePercent / 2,
              });
            }
          });

          const anchors = [1, 8, 15, 22, 29];
          const labels = ["100ms", "200ms", "300ms", "400ms", "500ms"];
          const centerOf = (num: number) => circles.find((c) => c.n === num)!.centerPercent;

          const strokes = [
            { start: 0, end: centerOf(8) },
            { start: centerOf(8), end: centerOf(29) },
          ];

          return (
            <div className="mt-8 w-full">
              <div className="relative h-6 w-full">
                {anchors.map((num, i) => (
                  <span
                    key={num}
                    className="absolute -translate-x-1/2 whitespace-nowrap font-body text-body"
                    style={{ left: `${centerOf(num)}%`, color: "#ffffff" }}
                  >
                    {labels[i]}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex w-full items-center">
                {circles.map(({ n, overlap }) => {
                  const isAnchor = anchors.includes(n);
                  return (
                    <div
                      key={n}
                      className="aspect-square shrink-0 rounded-full"
                      style={{
                        width: `${circlePercent}%`,
                        marginLeft: n === 1 ? 0 : `-${overlap * circlePercent}%`,
                        background: isAnchor ? "#F87171" : "#242424",
                        border: isAnchor ? "none" : "1px solid #F87171",
                      }}
                    />
                  );
                })}
              </div>

              {[
                {
                  ...strokes[0],
                  title: "“Productive”",
                  body: "Happening within 200ms. Functional & Quick",
                  extras: ["Radio Button", "Input Field", "Exiting the Screen"],
                },
                {
                  ...strokes[1],
                  title: "“Expressive”",
                  body: "Happening within 300ms to 500ms. Delightful, emotion driven movements",
                  extras: ["Entering the Screen", "Looping animations"],
                },
              ].map((s, i) => (
                <div key={i} className={i === 0 ? "mt-6" : "mt-10"}>
                  <div className="relative h-3 w-full">
                    <div
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{ left: `${s.start}%`, width: `${s.end - s.start}%` }}
                    >
                      <div className="relative h-px w-full bg-white">
                        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                        <svg
                          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M2 1 L8 5 L2 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-4 h-auto w-full">
                    <div
                      className="max-w-[280px]"
                      style={{ marginLeft: `${s.start}%` }}
                    >
                      <h3 className="font-body font-bold text-h3">{s.title}</h3>
                      <p className="mt-2 text-body text-text-muted">{s.body}</p>
                      <div className="mt-3">
                        {s.extras.map((extra) => (
                          <p key={extra} className="text-body text-text-muted">
                            {extra}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[80px]">
          <div />
          <div>
            <h3 className="font-body font-bold text-h3">Prototyping</h3>
            <p className="mt-4 font-body text-body text-text-muted">
              Built motion prototypes in Figma/After Effects (easing curves and reusable
              components) to validate usability and aesthetics.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="flex justify-start">
              <div
                className="flex flex-col items-center gap-4 rounded-[16px] px-[20px] py-[20px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[32px] md:px-[40px] md:py-[32px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold">
                  SCALE
                </span>
                <Image
                  src="/images/scale.gif"
                  alt="Scale motion reference"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-auto w-[160px]"
                />
              </div>
            </div>

            <div className="mt-8 font-body text-body text-text-muted">
              <h3 className="font-body font-bold text-h3">Duration</h3>
              <p className="mt-4">While expanding: 333 ms</p>
              <p className="mt-2">While collapsing: 167 ms</p>

              <h3 className="mt-8 font-body font-bold text-h3">Easing properties</h3>
              <div className="mt-4 flex flex-wrap gap-x-16 gap-y-6">
                <div>
                  <p>While expanding: Easing Out</p>
                  <Image
                    src="/images/scale-ease-out.svg"
                    alt="Scale ease-out curve"
                    width={244}
                    height={236}
                    className="mt-4 h-auto w-[240px]"
                  />
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Coming to a stop while expanding
                  </p>
                </div>
                <div>
                  <p>While collapsing: Easing in</p>
                  <Image
                    src="/images/scale-ease-in.svg"
                    alt="Scale ease-in curve"
                    width={244}
                    height={237}
                    className="mt-4 h-auto w-[240px]"
                  />
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Accelerating while collapsing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-start">
              <div
                className="flex flex-col items-center gap-4 rounded-[16px] px-[20px] py-[20px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[32px] md:px-[40px] md:py-[32px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold">
                  POSITION
                </span>
                <Image
                  src="/images/position.gif"
                  alt="Position motion reference"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-auto w-[160px]"
                />
              </div>
            </div>

            <div className="mt-8 font-body text-body text-text-muted">
              <h3 className="font-body font-bold text-h3">Duration</h3>
              <p className="mt-4">While expanding: 333 ms</p>
              <p className="mt-2">While collapsing: 167 ms</p>

              <h3 className="mt-8 font-body font-bold text-h3">Easing properties</h3>
              <div className="mt-4 flex flex-wrap gap-x-16 gap-y-6">
                <div>
                  <p>While expanding: Easing Out</p>
                  <Image
                    src="/images/scale-ease-out.svg"
                    alt="Scale ease-out curve"
                    width={244}
                    height={236}
                    className="mt-4 h-auto w-[240px]"
                  />
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Coming to a stop while expanding
                  </p>
                </div>
                <div>
                  <p>While collapsing: Easing in</p>
                  <Image
                    src="/images/scale-ease-in.svg"
                    alt="Scale ease-in curve"
                    width={244}
                    height={237}
                    className="mt-4 h-auto w-[240px]"
                  />
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Accelerating while collapsing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="flex justify-start">
              <div
                className="flex flex-col items-center gap-4 rounded-[16px] px-[20px] py-[20px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[32px] md:px-[40px] md:py-[32px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold">
                  ROTATION
                </span>
                <Image
                  src="/images/rotation.gif"
                  alt="Rotation motion reference"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-auto w-[160px]"
                />
              </div>
            </div>

            <div className="mt-8 font-body text-body text-text-muted">
              <h3 className="font-body font-bold text-h3">Duration</h3>
              <p className="mt-4">Uniform Rotation: Linear</p>
              <p className="mt-2">Non uniform Rotation: 1333 ms</p>

              <h3 className="mt-8 font-body font-bold text-h3">Easing properties</h3>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-6">
                <div className="w-[240px]">
                  <p>Uniform Rotation: Linear</p>
                  <div className="mt-4 flex h-[234px] items-end">
                    <Image
                      src="/images/rotation-ease-in.svg"
                      alt="Uniform rotation curve"
                      width={216}
                      height={217}
                      className="h-auto w-[212px]"
                    />
                  </div>
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Rotating at a constant speed
                  </p>
                </div>
                <div className="w-[320px]">
                  <p className="whitespace-nowrap">Non Uniform Rotation: Easing Out</p>
                  <div className="mt-4 flex h-[234px] items-end">
                    <Image
                      src="/images/rotation-ease-out.svg"
                      alt="Non uniform rotation curve"
                      width={249}
                      height={233}
                      className="h-auto w-[244px]"
                    />
                  </div>
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Rotation coming to a stop slowly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-start">
              <div
                className="flex flex-col items-center gap-4 rounded-[16px] px-[20px] py-[20px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[32px] md:px-[40px] md:py-[32px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold">
                  OPACITY
                </span>
                <Image
                  src="/images/opacity.gif"
                  alt="Opacity motion reference"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-auto w-[160px]"
                />
              </div>
            </div>

            <div className="mt-8 font-body text-body text-text-muted">
              <h3 className="font-body font-bold text-h3">Duration</h3>
              <p className="mt-4">While entering the screen: 167 ms</p>
              <p className="mt-2">While exiting the screen: 90 ms</p>

              <h3 className="mt-8 font-body font-bold text-h3">Easing properties</h3>
              <p className="mt-4">Linear for Opacity or Colour Change</p>
              <div className="mt-4 flex flex-wrap gap-x-16 gap-y-6">
                <div>
                  <div className="flex h-[234px] items-end">
                    <Image
                      src="/images/opacity-easing.svg"
                      alt="Opacity easing curve"
                      width={244}
                      height={236}
                      className="h-auto w-[240px]"
                    />
                  </div>
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Coming to a stop while expanding
                  </p>
                </div>
                <div>
                  <div className="flex h-[234px] items-end">
                    <Image
                      src="/images/opacity-easing-out.svg"
                      alt="Opacity ease-out curve"
                      width={244}
                      height={237}
                      className="h-auto w-[240px]"
                    />
                  </div>
                  <p className="mt-4 font-body text-label uppercase tracking-widest text-text-muted">
                    Accelerating while collapsing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[80px]">
          <div />
          <div>
            <h3 className="font-body font-bold text-h3">Systemisation</h3>
            <p className="mt-4 font-body text-body text-text-muted">
              Created reusable motion patterns for navigation, onboarding, user interactions,
              and feedback states.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <h2 className="text-center font-body font-bold text-h2">
          Component’s behaviour post applying Motion Design Framework
        </h2>
      </section>

      <section className="w-full px-4 pt-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { label: "Popup-Independent", gif: "/images/popup-independent.gif" },
            { label: "Popup - Directional", gif: "/images/popup-directional.gif" },
            { label: "BottomSheet", gif: "/images/bottomsheet.gif" },
          ].map(({ label, gif }, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[12px] md:rounded-[16px]"
              style={{
                background: "linear-gradient(to bottom right, #242424, #141414)",
              }}
            >
              {gif && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div
                    className="relative aspect-[751/1500] h-[90%] overflow-hidden rounded-[24px]"
                    style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
                  >
                    <Image
                      src={gif}
                      alt={label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <span
                className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[12px] font-medium md:text-[14px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Buttons",
              gif: null,
              quad: {
                left: "/images/button-B4.gif",
                right: "/images/button-B1.gif",
                top: "/images/button-B2.gif",
                bottom: "/images/button-B3.gif",
              },
            },
            { label: "Tapping on a Card", gif: "/images/tapping-on-card.gif", quad: null },
            { label: "Long Pressing a Card", gif: "/images/pressing-card.gif", quad: null },
          ].map(({ label, gif, quad }, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[12px] md:rounded-[16px]"
              style={{
                background: "linear-gradient(to bottom right, #242424, #141414)",
              }}
            >
              {gif && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[12px] p-6 md:rounded-[16px]">
                  <div
                    className="relative aspect-[751/1500] h-[90%] overflow-hidden rounded-[24px]"
                    style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
                  >
                    <Image
                      src={gif}
                      alt={label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {quad && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[12px] md:rounded-[16px]">
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {([quad.top, quad.right] as string[]).map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {[quad.bottom, quad.left].map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 3}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <span
                className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[12px] font-medium md:text-[14px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Skeleton Shimmer",
              gif: "/images/skeleton-shimmer.gif",
              quad: null,
            },
            {
              label: "Bottom Navigation",
              gif: "/images/bottom-navigation.gif",
              quad: null,
            },
            {
              label: "Forward & Backward",
              gif: "/images/forward-backward.gif",
              quad: null,
            },
          ].map(({ label, gif, quad }, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[12px] md:rounded-[16px]"
              style={{
                background: "linear-gradient(to bottom right, #242424, #141414)",
              }}
            >
              {gif && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[12px] p-6 md:rounded-[16px]">
                  <div
                    className="relative aspect-[751/1500] h-[90%] overflow-hidden rounded-[24px]"
                    style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
                  >
                    <Image
                      src={gif}
                      alt={label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {quad && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[12px] md:rounded-[16px]">
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    ([quad.top, quad.right] as string[]).map((src, qi) =>
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {[quad.bottom, quad.left].map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 3}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <span
                className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[12px] font-medium md:text-[14px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Applying Filters",
              gif: "/images/applying-filters.gif",
              quad: null,
            },
            {
              label: "Section Tab Transition",
              gif: "/images/tab-transition.gif",
              quad: null,
            },
            { label: "Toast Messages", gif: "/images/toast.gif", quad: null },
          ].map(({ label, gif, quad }, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[12px] md:rounded-[16px]"
              style={{
                background: "linear-gradient(to bottom right, #242424, #141414)",
              }}
            >
              {gif && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[12px] p-6 md:rounded-[16px]">
                  <div
                    className="relative aspect-[751/1500] h-[90%] overflow-hidden rounded-[24px]"
                    style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
                  >
                    <Image
                      src={gif}
                      alt={label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {quad && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[12px] md:rounded-[16px]">
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {([quad.top, quad.right] as string[]).map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {[quad.bottom, quad.left].map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 3}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <span
                className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[12px] font-medium md:text-[14px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pb-16 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Tool Tips",
              gif: "/images/tool-tip.gif",
              quad: null,
              navStack: null,
            },
            {
              label: "Floating Action Button",
              gif: "/images/fab.gif",
              quad: null,
              navStack: null,
            },
            {
              label: "NAV bar Elements & Loaders",
              gif: null,
              quad: null,
              navStack: {
                top: ["/images/nav-elements.gif"],
                middle: ["/images/loader-l1.gif", "/images/tag1.gif", "/images/tag2.gif"],
                bottom: ["/images/loader-l2.gif", "/images/loader-l3.gif"],
              },
            },
          ].map(({ label, gif, quad, navStack }, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[12px] md:rounded-[16px]"
              style={{
                background: "linear-gradient(to bottom right, #242424, #141414)",
              }}
            >
              {gif && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[12px] p-6 md:rounded-[16px]">
                  <div
                    className="relative aspect-[751/1500] h-[90%] overflow-hidden rounded-[24px]"
                    style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
                  >
                    <Image
                      src={gif}
                      alt={label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {quad && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[12px] md:rounded-[16px]">
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {([quad.top, quad.right] as string[]).map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-6 px-6">
                    {[quad.bottom, quad.left].map((src, qi) => (
                      <div
                        key={qi}
                        className="relative aspect-[2/1] flex-1 scale-150 overflow-hidden rounded-[12px]"
                      >
                        <Image
                          src={src}
                          alt={`${label} state ${qi + 3}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {navStack && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 overflow-hidden p-8 md:rounded-[16px]">
                  <div className="flex w-full items-center justify-center">
                    {navStack.top.map((src) => (
                      <div key={src} className="relative aspect-[3013/676] w-full">
                        <Image src={src} alt={label} fill unoptimized className="object-contain" />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-8">
                    {navStack.middle.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-square w-[calc((100%-64px)/3)] shrink-0"
                      >
                        <Image src={src} alt={label} fill unoptimized className="object-contain" />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-center gap-8">
                    {navStack.bottom.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-square w-[calc((100%-64px)/3)] shrink-0"
                      >
                        <Image src={src} alt={label} fill unoptimized className="object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <span
                className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span className="font-body text-[12px] font-medium md:text-[14px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection heading="Integration Outcomes">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-text-primary">Modernised User Experience:</span>{" "}
            App now feels more polished, engaging and aligned with modern design standards.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Improved Usability:</span> Motion
            reduced confusion, guiding players smoothly across complex game flows.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Increased Engagement:</span>{" "}
            Micro-interactions created delight, encouraging longer play sessions and higher user
            satisfaction.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Team Adoption:</span> The framework
            became a reference system for developers and designers, ensuring efficiency and
            consistency in future updates.
          </li>
        </ul>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
          <h2 className="font-body font-bold text-h2">
            Impact Analysis
            <br />
            Post Integration
          </h2>
          <p className="font-body text-body text-text-muted">
            From smoother moments to stronger metrics — motion design drove retention,
            efficiency, and customer love across the product
          </p>
        </div>
        <ImpactStatsGrid
          stats={[
            {
              value: "+18% increase in Sessions",
              label:
                "Users stayed longer within the app as the overall experience felt smoother and more immersive.",
            },
            {
              value: "+12% increase in day-7 retention",
              label:
                "Consistent and delightful interactions encouraged users to return more frequently.",
            },
            {
              value: "+9% up feature adoption rate",
              label:
                "Motion cues helped guide users to discover and engage with new features faster.",
            },
            {
              value: "23% reduced task completion time",
              label:
                "Motion transitions clarified navigation flows and reduced user hesitation between steps.",
            },
            {
              value: "17% drop in user misclicks",
              label: "Motion feedback made tap interactions more intuitive and clear.",
            },
            {
              value: "+15% boost in onboarding",
              label:
                "Animated guidance during onboarding helped new users understand flows quickly.",
            },
            {
              value: "21% Uplift in app’s perception",
              label:
                "Users rated the app as more fresh, fluid, and delightful after the update.",
            },
            {
              value: "+14% uplift in user satisfaction",
              label:
                "Visual delight created a more enjoyable experience, reflected in survey scores.",
            },
          ]}
        />
      </section>

      <CaseStudySection heading="Conclusion &amp; Learnings">
        <p>
          Redesigning Junglee Rummy’s motion experience wasn’t just about adding animations —
          it was about reimagining how the app communicates, guides, and delights its users.
          Through this project, I transformed motion from an ornamental layer into a functional
          design language that brings clarity, rhythm, and emotional connect to every
          interaction.
        </p>
        <p className="mt-4">
          This framework not only elevated the product’s visual appeal but also unlocked
          measurable business impact — boosting engagement, retention, and user satisfaction.
          What started as a design refresh became a catalyst for redefining the brand’s digital
          presence.
        </p>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[80px]">
          <div />
          <div>
            <h3 className="font-body font-bold text-h3">Key Learnings</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-body text-text-muted">
              <li>
                <span className="font-semibold text-text-primary">Motion is communication:</span>{" "}
                When used intentionally, it can reduce cognitive load, guide focus, and simplify
                complex flows.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Delight drives loyalty:</span>{" "}
                Subtle micro-interactions can create emotional resonance that keeps users coming
                back.
              </li>
              <li>
                <span className="font-semibold text-text-primary">
                  Systems &gt; single screens:
                </span>{" "}
                Designing a scalable framework ensures long-term consistency and speeds up
                future development.
              </li>
              <li>
                <span className="font-semibold text-text-primary">
                  Collaboration fuels adoption:
                </span>{" "}
                Early involvement of product and engineering teams ensured seamless integration
                and long-term ownership.
              </li>
            </ul>
          </div>
        </div>
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
