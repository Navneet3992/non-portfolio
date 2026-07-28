export default function CaseStudySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[80px]">
        <h2 className="font-body font-bold text-h2">{heading}</h2>
        <div className="font-body text-body text-text-muted">{children}</div>
      </div>
    </section>
  );
}
