import Image from "next/image";

export default function PlaygroundCard({
  label,
  slot,
  gif,
  video,
  illustration,
  frameAspect = "9 / 20",
  fit = "height",
  padding = "1.5rem",
  frameBorder = true,
}: {
  label: string;
  slot: number;
  gif?: string;
  video?: string;
  illustration?: string;
  frameAspect?: string;
  fit?: "height" | "width";
  padding?: string;
  frameBorder?: boolean;
}) {
  return (
    <div
      className="relative aspect-square rounded-[12px] md:rounded-[16px]"
      style={{
        background: "linear-gradient(to bottom right, #242424, #141414)",
      }}
    >
      <div
        data-gif-slot={`playground-gif-${slot}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding }}
      >
        {illustration ? (
          <div className="relative h-full w-full">
            <Image
              src={illustration}
              alt={label}
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        ) : (
          <div
            className={`relative flex items-center justify-center overflow-hidden rounded-[24px] ${
              fit === "width" ? "w-full" : "h-[90%]"
            }`}
            style={{
              boxShadow: frameBorder ? "0 0 0 8px #3d3d3d" : undefined,
              aspectRatio: frameAspect,
            }}
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : gif ? (
              <Image src={gif} alt={label} fill unoptimized className="object-cover" />
            ) : (
              <span className="font-body text-label uppercase tracking-widest text-text-dim">
                GIF placeholder
              </span>
            )}
          </div>
        )}
      </div>
      <span
        className="absolute left-8 top-0 inline-flex -translate-y-1/2 items-center rounded-[60px] px-[6px] py-[2px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[80px]"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <span className="font-body text-[12px] font-medium md:text-[14px]">{label}</span>
      </span>
    </div>
  );
}
