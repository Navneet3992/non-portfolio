import Image from "next/image";
import type { ReactNode } from "react";
import type { JobEntry } from "@/lib/data/workExperience";

function GridConnector({
  col,
  muted,
  stop,
}: {
  col: number;
  muted?: boolean;
  stop?: boolean;
}) {
  const src = stop
    ? "/images/icon-stop.svg"
    : muted
      ? "/images/icon-chevrons-right.svg"
      : "/images/icon-double-chevron.svg";
  const rotate = !stop && !muted ? "rotate-[-180deg]" : "";
  return (
    <div
      style={{ gridColumn: col, gridRow: 2 }}
      className="flex -translate-y-1/2 items-center justify-center"
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        width={24}
        height={24}
        className={`h-6 w-6 shrink-0 ${rotate}`}
      />
    </div>
  );
}

function JobCells({
  entry,
  col,
  muted,
}: {
  entry: JobEntry;
  col: number;
  muted?: boolean;
}) {
  const color = muted ? "text-text-muted" : "text-text-primary";
  return (
    <>
      <div style={{ gridColumn: col, gridRow: 1 }} className="flex items-end justify-center">
        <Image
          src={entry.logo}
          alt={entry.company}
          width={260}
          height={74}
          className="h-auto w-full max-w-[160px] object-contain"
        />
      </div>
      <div style={{ gridColumn: col, gridRow: 2 }} className="flex items-center">
        <div className={`h-0.5 w-full ${muted ? "bg-surface-2" : "bg-white"}`} />
      </div>
      <p
        style={{ gridColumn: col, gridRow: 3 }}
        className={`-mt-[26px] text-center text-label uppercase tracking-widest ${color}`}
      >
        {entry.duration} / {entry.dateRange}
      </p>
    </>
  );
}

function JobGridRow({
  jobs,
  muted,
  leadingStop,
}: {
  jobs: JobEntry[];
  muted: boolean;
  leadingStop?: boolean;
}) {
  const columns: string[] = [];
  const children: ReactNode[] = [];
  let col = 1;

  if (leadingStop) {
    columns.push("auto");
    children.push(<GridConnector key="stop" col={col} stop />);
    col++;
  }

  jobs.forEach((job, i) => {
    columns.push("minmax(0,1fr)");
    children.push(<JobCells key={job.company + i} entry={job} col={col} muted={muted} />);
    col++;
    if (i < jobs.length - 1) {
      columns.push("auto");
      children.push(<GridConnector key={`chevron-${i}`} col={col} muted={muted} />);
      col++;
    }
  });

  return (
    <div
      className="grid items-start gap-x-2 gap-y-2"
      style={{ gridTemplateColumns: columns.join(" "), gridTemplateRows: "auto auto auto" }}
    >
      {children}
    </div>
  );
}

export default function WorkExTimeline({
  productDesignJobs,
  graphicDesignerNote,
  graphicDesignJobs,
}: {
  productDesignJobs: JobEntry[];
  graphicDesignerNote: string;
  graphicDesignJobs: JobEntry[];
}) {
  return (
    <div className="mx-auto max-w-content px-6">
      <JobGridRow jobs={productDesignJobs} muted={false} />

      <p className="mt-12 text-center text-[16px] font-semibold text-text-muted">
        {graphicDesignerNote}
      </p>

      <div className="mt-12">
        <JobGridRow jobs={[...graphicDesignJobs].reverse()} muted leadingStop />
      </div>
    </div>
  );
}
