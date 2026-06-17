export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "start",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "max-w-2xl mx-auto text-center"
          : "max-w-2xl"
      }
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl md:text-5xl font-bold ${invert ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative bg-charcoal text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-50" aria-hidden />
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(240,165,0,0.25), transparent 70%)" }}
        aria-hidden
      />
      <div className="container-x relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
