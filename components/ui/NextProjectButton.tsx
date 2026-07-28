import Link from "next/link";

export default function NextProjectButton({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`Next project: ${title}`}
      className="inline-flex items-center rounded-[12px] px-[20px] py-[10px] shadow-[0_0_0_4px_rgba(255,255,255,0.16)] md:rounded-[24px] md:px-[40px] md:py-[20px] md:shadow-[0_0_0_8px_rgba(255,255,255,0.16)]"
      style={{
        background: "rgba(255,255,255,0.12)",
      }}
    >
      <span className="font-body text-[20px] font-bold underline md:text-[40px]">
        Next Project
      </span>
    </Link>
  );
}
