import Image from "next/image";
import CaseStudyStack from "@/components/CaseStudyStack";
import ToolBadge from "@/components/ToolBadge";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import WorkExTimeline from "@/components/WorkExTimeline";
import GhostHeading from "@/components/ui/GhostHeading";
import ContactMeButton from "@/components/ui/ContactMeButton";
import { caseStudies } from "@/lib/data/caseStudies";
import { tools } from "@/lib/data/tools";
import { testimonials } from "@/lib/data/testimonials";
import {
  productDesignJobs,
  graphicDesignerNote,
  graphicDesignJobs,
} from "@/lib/data/workExperience";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative mx-auto flex max-w-content flex-col gap-8 px-6 pb-24 pt-16 md:pt-28">
        <div
          data-gif-slot="hero-visual"
          className="absolute inset-x-0 top-0 -z-10 h-[32rem] w-full bg-gradient-to-b from-surface/40 to-transparent"
          aria-hidden
        />
        <div>
          <h1 className="font-display text-hero uppercase">
            PRODUCT <span className="font-playfair font-normal italic">&amp;</span>
          </h1>
          <div className="flex items-center gap-6">
            <Image
              src="/images/hero-clock.gif"
              alt=""
              aria-hidden
              width={108}
              height={108}
              unoptimized
              className="hidden h-[108px] w-[108px] shrink-0 lg:block"
            />
            <h1 className="font-display text-hero uppercase md:whitespace-nowrap">MOTION DESIGNER</h1>
            <Image
              src="/images/profile.jpg"
              alt="Navneet Mandal"
              width={90}
              height={120}
              className="hidden h-[120px] w-[90px] shrink-0 rounded-[75px] object-cover lg:block"
            />
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="mx-auto flex max-w-content flex-col gap-8 px-6 pb-24 pt-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="font-body text-[18px] font-semibold uppercase tracking-widest text-text-primary">
            SAY HELLO
          </span>
          <div className="flex gap-4">
            <a
              href="mailto:mailme.navneetmandal@gmail.com"
              aria-label="Email"
              className="transition-opacity hover:opacity-80"
            >
              <Image src="/images/icon-mail.svg" alt="" aria-hidden width={32} height={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-80"
            >
              <Image src="/images/icon-instagram.svg" alt="" aria-hidden width={32} height={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-80"
            >
              <Image src="/images/icon-linkedin.svg" alt="" aria-hidden width={32} height={32} />
            </a>
          </div>
        </div>

        <p className="max-w-xl font-body font-semibold text-[18px] leading-[1.4] text-text-primary">
          Hello there, I’m Navneet - a product designer specialising in creating high-impact
          products using psychology, motion & business thinking -currently based in Bangalore,
          India.
        </p>

        <ContactMeButton />
      </section>

      {/* Recent Works */}
      <section id="work" className="relative mx-auto max-w-content px-6 pb-24 pt-[51px]">
        <GhostHeading
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(3rem,13.5vw,8rem)] leading-none"
          style={{
            backgroundImage: "linear-gradient(to bottom, #3d3d3d, #141414)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "var(--font-body)",
          }}
        >
          Recent Works
        </GhostHeading>
        <CaseStudyStack caseStudies={caseStudies} />
      </section>

      {/* UX Process */}
      <section className="relative mx-auto max-w-content px-6 py-24">
        <div className="md:flex md:items-start">
          <div className="relative md:flex md:h-[444px] md:flex-1 md:flex-col">
            <h2 className="font-body font-extrabold text-h2">UX Process</h2>

            <div
              className="relative z-20 mt-6 rounded-[24px] p-6 text-[24px] text-text-muted md:mr-[-32px]"
              style={{ backgroundImage: "linear-gradient(135deg, #242424, #141414)" }}
            >
              <p className="font-semibold text-text-primary">
                At the heart of my UX process is identifying the right problem to solve.
              </p>
              <p className="mt-4">
                I approach design with a deeply user-centric mindset, using rapid iteration and
                sprint-based experimentation to shape intuitive, scalable systems.
              </p>
              <p className="mt-4">
                By innovating within real-world constraints — user needs, business goals, and
                technical realities — I craft UX flows that preserve usability, build trust, and
                drive measurable outcomes.
              </p>
            </div>

            <Image
              src="/images/arrow.svg"
              alt=""
              aria-hidden
              width={140}
              height={140}
              className="absolute -bottom-[12px] right-[96px] z-30 hidden rotate-[12deg] md:block"
            />
          </div>

          <div
            data-gif-slot="ux-process-portrait"
            className="relative mt-8 h-[261px] w-[196px] shrink-0 bg-surface [clip-path:inset(0_round_20px)] md:mt-0 md:h-[444px] md:w-[352px] md:[clip-path:inset(0_round_32px)]"
          >
            <Image
              src="/images/image-glitch.gif"
              alt="Navneet Mandal"
              fill
              unoptimized
              className="scale-110 object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-content px-6 py-24">
        <h2 className="font-body text-[24px] font-semibold text-text-primary">
          These are the tools behind my creative flow — and I’m always leveling up with new ways
          of working
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, i) => (
            <ToolBadge key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-content px-6">
          <h2 className="font-body font-bold text-h2">Testimonials</h2>
          <p className="mt-2 text-[18px] text-text-muted">
            Proof I&apos;m not hard to work with — straight from real teammates
          </p>
        </div>
        <div className="mt-8">
          <TestimonialMarquee testimonials={testimonials} />
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-24">
        <div className="mx-auto max-w-content px-6">
          <h2 className="font-body font-bold text-h2">Work Ex.</h2>
          <p className="mt-2 text-[18px] text-text-muted">as a Product Designer with…</p>
        </div>
        <div className="mt-8">
          <WorkExTimeline
            productDesignJobs={productDesignJobs}
            graphicDesignerNote={graphicDesignerNote}
            graphicDesignJobs={graphicDesignJobs}
          />
        </div>
      </section>
    </main>
  );
}
