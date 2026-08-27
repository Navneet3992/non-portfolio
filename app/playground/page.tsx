import Image from "next/image";
import PlaygroundCard from "@/components/PlaygroundCard";
import SectionLabel from "@/components/ui/SectionLabel";

const experiments: {
  label: string;
  gif: string | null;
  video: string | null;
  illustration?: string;
  frameAspect?: string;
  fit?: "height" | "width";
  padding?: string;
  frameBorder?: boolean;
}[] = [
  { label: "Junglee Rummy Splash", gif: "/images/splash-loader.gif", video: null },
  {
    label: "Juglee Rummy Mission Feature Explainer Video",
    gif: null,
    video: "/images/missions-new.mp4",
  },
  { label: "Rummy Rewards", gif: null, video: "/images/rewards-updated.mp4" },
  {
    label: "HOWZAT Jackpot Explainer BottomSheet",
    gif: "/images/jackpot-updated-3.gif",
    video: null,
    frameAspect: "656 / 896",
  },
  {
    label: "Juglee Rummy NAV elements with Click States",
    gif: "/images/navigation-bar.gif",
    video: null,
    frameAspect: "3013 / 676",
    fit: "width",
    padding: "0 2rem",
    frameBorder: false,
  },
  {
    label: "Illustrations",
    gif: null,
    video: null,
    illustration: "/images/illustration-1.png",
    padding: "2rem",
  },
  {
    label: "Illustrations",
    gif: null,
    video: null,
    illustration: "/images/illustration-2.png",
    padding: "2rem",
  },
  {
    label: "Illustrations",
    gif: null,
    video: null,
    illustration: "/images/illustration-4.png",
    padding: "2rem",
  },
  {
    label: "Illustrations",
    gif: null,
    video: null,
    illustration: "/images/illustration-3.png",
    padding: "2rem",
  },
];

export default function PlaygroundPage() {
  return (
    <main>
      <section className="mx-auto max-w-content px-6 pb-16 pt-16">
        <SectionLabel>Engagement Experiments</SectionLabel>
        <h1 className="w-full text-justify font-display text-display [text-justify:inter-word]">
          Motion That Drives Engagement —<br />
          Turning Interactions into Retention
        </h1>
      </section>

      <section className="w-full px-4 pb-16 pt-16">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
          {experiments.map(
            ({ label, gif, video, illustration, frameAspect, fit, padding, frameBorder }, i) => (
              <PlaygroundCard
                key={`${label}-${i}`}
                label={label}
                slot={i + 1}
                gif={gif ?? undefined}
                video={video ?? undefined}
                illustration={illustration}
                frameAspect={frameAspect}
                fit={fit}
                padding={padding}
                frameBorder={frameBorder}
              />
            )
          )}
        </div>
      </section>

      <section className="relative mx-auto max-w-content overflow-hidden px-6 py-16">
        <div className="relative -mx-6 h-40 sm:h-48 md:h-56">
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.25,
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <Image
              src="/images/tv-noise-2.gif"
              alt="Not the end"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
