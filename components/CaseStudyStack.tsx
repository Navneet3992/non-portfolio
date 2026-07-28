"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { CaseStudy } from "@/lib/data/caseStudies";

// Scroll distance (in vh) spent actually transitioning between two cards,
// vs. sitting idle afterward before the next transition begins. The idle
// gap is what gives the user a clear, unambiguous moment to tap the
// newly-arrived card instead of two transitions running back-to-back.
const TRANSITION_VH = 100;
const GAP_VH = 30;

// A vanishing card stays tappable only until it's shrunk to 80% of its
// resting scale (1 → 0.5 over the segment, so 80% is 40% of the way
// through) — past that point it's too diminished to safely tap.
const TAP_CUTOFF_FRACTION = 0.4;

// How far below its resting position an incoming card starts, as a
// percentage of its own height — it slides up into place from there.
const ENTER_OFFSET_PERCENT = 120;

type Range = { start: number; end: number } | null;

// `whenNoRange` lets each call site decide what "this phase doesn't apply
// to me" means: a card with no entrance should read as already-arrived
// (1), while a card with no vanish should read as not-yet-vanishing (0).
function clampedProgress(v: number, range: Range, whenNoRange: number) {
  if (!range) return whenNoRange;
  const { start, end } = range;
  if (end === start) return v >= end ? 1 : 0;
  const t = (v - start) / (end - start);
  return Math.min(1, Math.max(0, t));
}

function StackCard({
  project,
  index,
  enterRange,
  vanishRange,
  scrollYProgress,
}: {
  project: CaseStudy;
  index: number;
  enterRange: Range;
  vanishRange: Range;
  scrollYProgress: MotionValue<number>;
}) {
  // A card that isn't the first slides up from below as the card before it
  // vanishes, and ends up on top of it (fixed z-index, ascending by arrival
  // order — later cards are always above earlier ones, so a card can never
  // end up covering one that arrived after it).
  //
  // Computed manually (function form) rather than the array-range overload
  // of useTransform — adjacent/chained array-range calls on the same
  // source value were not clamping correctly in this Framer Motion version.
  const y = useTransform(scrollYProgress, (v) => {
    const t = clampedProgress(v, enterRange, 1);
    return `${(1 - t) * ENTER_OFFSET_PERCENT}%`;
  });

  const scale = useTransform(scrollYProgress, (v) => 1 - clampedProgress(v, vanishRange, 0) * 0.5);
  const rotate = useTransform(scrollYProgress, (v) => -45 * clampedProgress(v, vanishRange, 0));

  // Opacity combines both phases: invisible before its own entrance starts
  // (not just positioned off-place — a short/narrow card wouldn't reliably
  // clip out of view by position alone, so this is the real guarantee),
  // fading in as it slides up, then fading out during its own later vanish.
  const opacity = useTransform(scrollYProgress, (v) => {
    const enterT = clampedProgress(v, enterRange, 1);
    const vanishT = clampedProgress(v, vanishRange, 0);
    return enterT * (1 - vanishT);
  });

  // Tappable as soon as it starts arriving (giving the user the flexibility
  // to tap whichever card they actually want, even mid-transition), through
  // resting, and into the first part of its own later vanish — until it's
  // shrunk past 80% of its resting size.
  const pointerEvents = useTransform(scrollYProgress, (v) => {
    if (enterRange && v < enterRange.start) return "none";
    if (vanishRange) {
      const t = clampedProgress(v, vanishRange, 0);
      return t <= TAP_CUTOFF_FRACTION ? "auto" : "none";
    }
    return "auto";
  });

  const zIndex = index + 1;

  return (
    <motion.div
      style={{ zIndex, y, scale, rotate, opacity, pointerEvents }}
      className="absolute inset-0"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

export default function CaseStudyStack({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const transitions = caseStudies.length - 1;
  const unitVh = TRANSITION_VH + GAP_VH;
  const totalVh = transitions * unitVh;

  // Transition k (1-indexed: 1..transitions) is when card k enters on top
  // of card k-1, which vanishes at the same time.
  const transitionRange = (k: number): Range => {
    const segStartVh = (k - 1) * unitVh;
    return {
      start: segStartVh / totalVh,
      end: (segStartVh + TRANSITION_VH) / totalVh,
    };
  };

  return (
    <div ref={containerRef} className="relative" style={{ height: `${totalVh}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className="relative mx-auto w-full max-w-content px-6"
          style={{ aspectRatio: "3136 / 1816" }}
        >
          {caseStudies.map((project, i) => {
            const isFirst = i === 0;
            const isLast = i === caseStudies.length - 1;
            return (
              <StackCard
                key={project.slug}
                project={project}
                index={i}
                enterRange={isFirst ? null : transitionRange(i)}
                vanishRange={isLast ? null : transitionRange(i + 1)}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
