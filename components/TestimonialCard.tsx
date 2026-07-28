import Image from "next/image";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="flex min-h-[260px] w-[400px] shrink-0 flex-col gap-6 rounded-card p-6"
      style={{ backgroundImage: "linear-gradient(135deg, #242424, #141414)" }}
    >
      <Image src="/images/icon-quote.svg" alt="" aria-hidden width={32} height={32} />
      <p className="text-[18px] font-semibold text-text-primary">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt=""
          aria-hidden
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-body text-[16px] font-semibold text-text-primary">{testimonial.name}</p>
          <p className="text-label uppercase tracking-widest text-text-muted">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
