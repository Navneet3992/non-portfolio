import Image from "next/image";
import type { Tool } from "@/lib/data/tools";

export default function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <div
      className="flex items-center gap-4 rounded-card border border-surface-2 p-4"
      style={{ backgroundImage: "linear-gradient(135deg, #242424, #141414)" }}
    >
      <Image
        src={tool.icon}
        alt=""
        aria-hidden
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <div>
        <p className="font-body text-[18px] font-semibold text-text-primary">{tool.name}</p>
        <p className="text-label uppercase tracking-widest text-text-muted">{tool.category}</p>
      </div>
    </div>
  );
}
