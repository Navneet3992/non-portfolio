import Image from "next/image";
import ContactMeButton from "@/components/ui/ContactMeButton";

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="flex items-center gap-4">
          <Image
            src="/images/footer-chat.gif"
            alt=""
            aria-hidden
            width={200}
            height={200}
            unoptimized
            className="h-[57.6px] w-[57.6px] shrink-0"
          />
          <p className="font-body font-bold text-display">Let&apos;s design something</p>
        </div>
        <p
          className="font-body font-bold text-display"
          style={{
            background: "linear-gradient(to right, #FFB86A, #FF6900)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          that moves users
        </p>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-body text-[18px] font-semibold uppercase tracking-widest text-[#ffffff]">
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

          <p className="max-w-[560px] text-[18px] font-medium text-[#ffffff]">
            Shall we create some delightful design experiences together? I’m always excited to
            discuss new ideas and opportunities :)
          </p>

          <ContactMeButton />
        </div>

        <div className="mt-8 flex justify-end">
          <Image
            src="/images/arrow.svg"
            alt=""
            aria-hidden
            width={140}
            height={140}
            className="h-[140px] w-[140px] -translate-x-[150px] -translate-y-[32px] rotate-[-180deg] -scale-y-100"
          />
        </div>
      </div>
    </footer>
  );
}
