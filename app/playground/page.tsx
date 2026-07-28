import PlaygroundCard from "@/components/PlaygroundCard";
import SectionLabel from "@/components/ui/SectionLabel";
import GhostHeading from "@/components/ui/GhostHeading";

const experiments = [
  "Junglee Rummy Splash",
  "Juglee Rummy Mission Feature Explainer Video",
  "Rummy Rewards",
  "HOWZAT Jackpot Explainer BottomSheet",
  "Juglee Rummy NAV elements with Click States",
  "Illustrations",
  "Illustrations",
  "Illustrations",
  "Illustrations",
];

export default function PlaygroundPage() {
  return (
    <main>
      <section className="mx-auto max-w-content px-6 pb-16 pt-16">
        <SectionLabel>Engagement Experiments</SectionLabel>
        <h1 className="font-display text-display max-w-2xl">
          Motion That Drives Engagement — Turning Interactions into Retention
        </h1>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((label, i) => (
            <PlaygroundCard key={`${label}-${i}`} label={label} slot={i + 1} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-content overflow-hidden px-6 py-24">
        <GhostHeading className="text-[6rem] uppercase leading-none sm:text-[9rem]">
          NOT THE END..
        </GhostHeading>
      </section>
    </main>
  );
}
