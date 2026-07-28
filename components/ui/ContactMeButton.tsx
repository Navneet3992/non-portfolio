import Image from "next/image";
import { CONTACT_ME_HREF } from "@/lib/contact";

export default function ContactMeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CONTACT_ME_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-[12px] transition-opacity hover:opacity-90 ${className}`}
    >
      <Image
        src="/images/contact-me-button-bg.svg"
        alt=""
        aria-hidden
        width={237}
        height={90}
        className="h-[60px] w-auto"
      />
      <span
        aria-hidden
        className="animate-swoosh pointer-events-none absolute h-10 w-10 rounded-full bg-white opacity-[0.32] blur-[16px] mix-blend-overlay"
      />
      <span className="absolute inset-0 flex items-center justify-center font-body text-[18px] font-bold text-black">
        Contact Me
      </span>
    </a>
  );
}
