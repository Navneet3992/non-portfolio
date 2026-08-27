import Image from "next/image";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
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

      <section className="mx-auto max-w-content px-6 py-16">
        <h3 className="text-center font-body font-semibold text-h3">
          Existing Login Experience
        </h3>

        <div className="mt-8 flex flex-wrap justify-between gap-8">
          {[
            {
              src: "/images/howzat-login-screen-1.png",
              label: "Default Login upon app open",
            },
            {
              src: "/images/howzat-login-screen-2.png",
              label: "User enters mobile number",
            },
            {
              src: "/images/howzat-login-screen-3-new.png",
              label: "Lands on enter OTP screen",
            },
            { src: "/images/howzat-login-screen-4.png", label: "Enters OTP" },
            {
              src: "/images/howzat-login-screen-5.png",
              label: "In case of incorrect OTP",
            },
            {
              src: "/images/howzat-login-screen-6.png",
              label: "Lands on L0 screen",
            },
          ].map(({ src, label }) => (
            <div key={src} className="flex flex-1 flex-col items-center gap-4">
              <div
                className="relative aspect-[318/707] w-full overflow-hidden rounded-[16px] md:rounded-[24px]"
                style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
              >
                <Image src={src} alt={label} fill unoptimized className="object-cover" />
              </div>
              <p className="text-center font-body text-label uppercase tracking-widest text-text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection heading="The Problem">
        <p>
          The existing login experience of the Howzat app lacked focus and visual hierarchy,
          resulting in a cluttered and less engaging first impression. The login screen was
          heavily dominated by brand imagery and scattered promotional texts, drawing attention
          away from the core action - logging in or registering.
        </p>
        <p className="mt-4">
          Important interface elements like the input fields were visually underemphasised with
          primary CTA already active before entering the user info., making the process feel
          secondary &amp; confusing to surrounding offers and tertiary information. As a result,
          the overall experience failed to guide the user smoothly toward onboarding and created
          cognitive overload during one of the most crucial touch points in the user journey.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Objective">
        <p>
          The objective was to redesign the login experience along with introducing a relevant
          splash to make it more focused, intuitive, and aligned with Howzat’s brand
          personality. The goal was to create a clean, high-impact first impression that
          highlights the app’s core action - login or registration.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Design Goals">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-text-primary">
              Prioritise the Primary Action:
            </span>{" "}
            Bring clear focus to the login elements by optimising placement, contrast and visual
            weight.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Establish Visual Hierarchy:</span>{" "}
            Simplify the screen layout to reduce cognitive load and guide users effortlessly
            towards the next step.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Enhance Brand Recall:</span> Retain
            Howzat’s energetic and sporty vibe through balanced use of brand colours, imagery and
            motion - without overwhelming the core function.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Streamline Information:</span>{" "}
            Remove non-essential elements and present secondary offers in a contextual and
            unobtrusive manner.
          </li>
          <li>
            <span className="font-semibold text-text-primary">
              Ensure Consistency Across Screens:
            </span>{" "}
            Create a cohesive transition from the splash screen to the login experience, setting
            the right tone for the new and returning users.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Design Approach">
        <p>
          The redesign aimed to craft a focused, cohesive and engaging first-touch experience by
          removing unnecessary distractions and reimagining how Howzat introduces itself to
          users from splash to login.
        </p>
        <p className="mt-4">
          The earlier design leaned heavily on brand ambassador visuals and scattered
          promotional offers, which drew attention away from the primary action- logging in or
          registering. The new approach eliminated these elements to give the login process the
          clarity and prominence it deserved, while still maintaining the brand’s energetic and
          sporty personality through motion and colour.
        </p>
      </CaseStudySection>

      <section className="relative mx-auto max-w-content px-6 py-16">
        <div className="relative mx-auto flex justify-center pb-6">
          <div
            aria-hidden
            data-bg-panel
            className="absolute inset-x-0 bottom-0 top-[60%] z-0 rounded-[20px] md:rounded-[40px]"
            style={{
              background: "linear-gradient(to bottom, #141414, #242424)",
            }}
          />
          <div className="relative z-10 flex flex-wrap items-end justify-center gap-14">
            {[
              {
                src: "/images/howzat-existing-login-screen.png",
                label: "Earlier Default login Screen",
              },
              {
                src: "/images/howzat-new-login-screen-2.png",
                label: "Re-imagined",
              },
            ].map(({ src, label }) => (
              <div key={src} className="flex flex-col items-center gap-4">
                <div
                  className="relative aspect-[486/1080] h-[420px] overflow-hidden rounded-[16px] md:h-[520px] md:rounded-[32px]"
                  style={{
                    boxShadow: "0 0 0 8px #3d3d3d",
                  }}
                >
                  <Image src={src} alt={label} fill unoptimized className="object-fill" />
                </div>
                <p className="text-center font-body text-label uppercase tracking-widest text-text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full py-16"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(36,36,36,0) 12%, rgba(36,36,36,1) 48%, rgba(36,36,36,0) 87%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-content px-6 text-center font-body text-body text-text-muted">
          <p>
            The rationale behind removing the brand ambassador &amp; promotional element was not
            made for aesthetic minimalism, but to enhance functional clarity and user intent. At
            the login stage, users typically arrive with a clear purpose - to enter or access
            their account - and do not require brand persuasion or promotional context at this
            point.
          </p>
          <p className="mt-4">
            The earlier ambassador imagery and text- heavy offers created visual competition for
            attention and increased cognitive load. By removing the, the interface now allows
            users to focus entirely on the task at hand, reducing friction and improving task
            completion efficiency.
          </p>
          <p className="mt-4">
            These brand and promotional cues were strategically relocated to later, more
            contextually relevant surfaces - such as the offer section at home screen - where
            they can engage uer after login, without disrupting the entry flow. This ensures
            that brand visibility and marketing goals remain intact, while the login experience
            feels streamlined and user-first.
          </p>
        </div>
      </section>

      <CaseStudySection heading="Splash Screen Concept">
        <p>
          To maintain brand energy in a cleaner way, a motion-based splash screen was designed
          that visually connects Howzat’s essence - cricket and rewards. This dynamic motion
          tells a compact visual story about Howzat’s identity every time a user opens the app,
          while building anticipation for the next step in the user journey
        </p>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 py-16">
        <div
          className="relative rounded-[20px] p-8 md:rounded-[40px] md:p-16"
          style={{
            background: "linear-gradient(to bottom, #141414, #242424)",
          }}
        >
          <div className="flex items-end">
            <div className="flex w-1/2 flex-col items-start gap-12">
              <Image
                src="/images/howzat-logo.svg"
                alt="Howzat"
                width={96}
                height={96}
                className="h-16 w-16 md:h-24 md:w-24"
              />
              <h3 className="font-body font-bold text-h2">
                Splash
                <br />
                Components
              </h3>
              <div className="flex items-center gap-10">
                <Image
                  src="/images/ae-logo-with-text.svg"
                  alt="After Effects"
                  width={274}
                  height={68}
                  className="h-auto w-40"
                />
                <Image
                  src="/images/non-tag.svg"
                  alt="Non"
                  width={148}
                  height={86}
                  className="h-auto w-24"
                />
              </div>
            </div>

            <div className="flex w-1/2 flex-col items-start gap-6">
              <Image
                src="/images/red-box.svg"
                alt=""
                aria-hidden
                width={341}
                height={234}
                className="-mt-8 h-auto w-[45%] md:-mt-16"
              />

              <div className="flex w-full justify-between">
                <div
                  className="relative h-[134px] w-[134px] overflow-hidden rounded-[16px] md:h-[173px] md:w-[173px] md:rounded-[32px]"
                  style={{
                    background: "linear-gradient(to bottom right, #242424, #141414)",
                    border: "1px solid #333333",
                  }}
                >
                  <Image
                    src="/images/rotating-coin.gif"
                    alt="Coin rotation"
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>

                <div
                  className="relative h-[134px] w-[134px] overflow-visible rounded-[16px] md:h-[173px] md:w-[173px] md:rounded-[32px]"
                  style={{
                    background: "linear-gradient(to bottom right, #242424, #141414)",
                    border: "1px solid #333333",
                  }}
                >
                  <Image
                    src="/images/flying-confetti.gif"
                    alt="Confetti"
                    width={1000}
                    height={1000}
                    unoptimized
                    className="absolute bottom-[29.82%] left-1/2 w-[144%] max-w-none -translate-x-1/2 -rotate-45"
                  />
                </div>

                <div
                  className="relative h-[134px] w-[134px] overflow-visible rounded-[16px] md:h-[173px] md:w-[173px] md:rounded-[32px]"
                  style={{
                    background: "linear-gradient(to bottom right, #242424, #141414)",
                    border: "1px solid #333333",
                  }}
                >
                  <Image
                    src="/images/cricket-ball-2.gif"
                    alt="Cricket ball"
                    width={300}
                    height={1000}
                    unoptimized
                    className="absolute bottom-0 left-1/2 w-[56.1%] max-w-none -translate-x-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden px-5 py-16">
        <div className="relative mx-auto" style={{ height: "clamp(420px, 55vw, 640px)" }}>
          <Image
            src="/images/line-cricket.svg"
            alt=""
            aria-hidden
            width={1886}
            height={517}
            unoptimized
            className="absolute inset-x-0 bottom-12 h-auto w-full"
          />
          <div
            className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 overflow-hidden rounded-[20px] md:rounded-[40px]"
            style={{
              aspectRatio: "720 / 1600",
              boxShadow: "0 0 0 12px #3d3d3d",
            }}
          >
            <Image
              src="/images/howzat-splash-flow.gif"
              alt="Splash and login journey flow"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-center font-body text-label uppercase tracking-widest text-text-muted">
          Splash &amp; Start of the Login Journey
        </p>
      </section>

      <CaseStudySection heading="Before &amp; After">
        <p>
          The earlier screens were visually cluttered -- dominated by brand ambassador
          imagery, multiple offers, and scattered text that diluted focus from the main
          action. The new design replaced this with a clean, structured layout that
          prioritises the login flow and enhances user intent. Through motion storytelling on
          the splash screen and a minimal, centered login interface, the redesign shifts
          attention from distraction to purpose, creating a smoother, faster, and more
          engaging entry experience for users.
        </p>
      </CaseStudySection>

      <section className="mx-auto max-w-content px-6 pb-16">
        <div className="flex flex-wrap justify-between gap-8">
          {[
            "/images/howzat-older-login-screen.png",
            "/images/howzat-mobile-field-active.png",
            "/images/howzat-mobile-no-error.png",
            "/images/howzat-mobile-no-entered.png",
          ].map((src, i) => (
            <div key={src} className="flex shrink-0 flex-col items-center gap-4">
              <div
                className="relative aspect-[486/1080] w-[274px] overflow-hidden rounded-[20px] md:rounded-[40px]"
                style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
              >
                <Image
                  src={src}
                  alt={`Mobile number screen ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-label uppercase tracking-widest text-text-muted">
          User Enters Mobile number &amp; Mobile number Error Screen
        </p>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-[45.33px]">
          {[
            "/images/howzat-older-otp-screen.png",
            "/images/howzat-enter-otp.png",
            "/images/howzat-user-enters-otp.png",
          ].map((src, i) => (
            <div key={src} className="flex shrink-0 flex-col items-center gap-4">
              <div
                className="relative aspect-[486/1080] w-[274px] overflow-hidden rounded-[20px] md:rounded-[40px]"
                style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
              >
                <Image
                  src={src}
                  alt={`OTP screen ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-label uppercase tracking-widest text-text-muted">
          OTP Screen doesn’t requires a VERIFY button as they are auto-fetched now a days
        </p>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-[45.33px]">
          {[
            "/images/howzat-otp-error-old.png",
            "/images/howzat-otp-error-new.png",
          ].map((src, i) => (
            <div key={src} className="flex shrink-0 flex-col items-center gap-4">
              <div
                className="relative aspect-[486/1080] w-[274px] overflow-hidden rounded-[20px] md:rounded-[40px]"
                style={{ boxShadow: "0 0 0 8px #3d3d3d" }}
              >
                <Image
                  src={src}
                  alt={`OTP error screen ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-label uppercase tracking-widest text-text-muted">
          OTP Error case and an option to Resend in case
        </p>
      </section>

      <CaseStudySection heading="Impact &amp; Summary">
        <p>
          The redesign of Howzat’s splash and login experience was envisioned to deliver a
          cleaner, more purposeful first impression through focused interaction design and
          motion storytelling. Although the project was paused mid-way following the Indian
          government ban on real money gaming apps, it had the potential to be a transformative
          shift in Howzat’s onboarding flow -- driving better engagement, clarity and user
          trust.
        </p>
        <p className="mt-4">
          Despite its early halt, the process reflected a strong alignment between brand
          storytelling and usability, showcasing how thoughtful design decisions can reshape
          critical user journeys and set the tone for a product’s next evolution.
        </p>
        <p className="mt-4">
          🙌 This project taught me the value of designing with intent - where removing
          elements can often add more clarity and purpose to the experience.
        </p>
      </CaseStudySection>

      <div className="mx-auto flex max-w-content justify-center px-6 pb-16">
        <NextProjectButton href={`/work/${next.slug}`} title={next.title} />
      </div>
    </main>
  );
}
