import TestimonialCard from "@/components/TestimonialCard";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee gap-5">
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
