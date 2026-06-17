import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, MapPin, Building2, Calendar, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    if (!p) {
      return { meta: [{ title: "المشروع غير موجود | شركة الأسطول الآلي" }] };
    }
    return {
      meta: [
        { title: `${p.name} | مشاريع شركة الأسطول الآلي` },
        { name: "description", content: p.description.slice(0, 160) },
        { property: "og:title", content: `${p.name} — شركة الأسطول الآلي` },
        { property: "og:description", content: p.description.slice(0, 160) },
        { property: "og:image", content: p.img },
      ],
    };
  },
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-bold text-charcoal">المشروع غير موجود</h1>
      <p className="mt-3 text-muted-foreground">
        ربما تم نقل المشروع أو تغيير رابطه.
      </p>
      <Button asChild variant="hero" className="mt-6">
        <Link to="/projects">العودة إلى المشاريع</Link>
      </Button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const [active, setActive] = useState(0);
  const related = PROJECTS.filter(
    (x) => x.slug !== p.slug && x.cat === p.cat,
  ).slice(0, 3);

  const meta = [
    p.client && { icon: Building2, label: "الجهة", value: p.client },
    p.city && { icon: MapPin, label: "الموقع", value: p.city },
    p.year && { icon: Calendar, label: "فترة التنفيذ", value: p.year },
    p.role && { icon: Briefcase, label: "الدور", value: p.role },
  ].filter(Boolean) as { icon: typeof Building2; label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-30" aria-hidden />
        <div className="container-x relative py-16 md:py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors"
          >
            <ArrowRight className="size-4" />
            كل المشاريع
          </Link>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow text-gold">
                {p.cat} {p.sector ? `· ${p.sector}` : ""}
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                {p.name}
              </h1>
              <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              {meta.map((m) => (
                <div key={m.label} className="bg-charcoal p-5">
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-gold uppercase">
                    <m.icon className="size-3.5" />
                    {m.label}
                  </div>
                  <div className="mt-2 text-base font-bold text-white">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-16">
        <div className="container-x">
          <div className="relative aspect-[16/9] overflow-hidden bg-deep-gray border border-border">
            <img
              src={p.gallery[active]}
              alt={`${p.name} — صورة ${active + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-charcoal/90 text-gold px-3 py-1.5 text-[10px] tracking-widest uppercase num">
              {String(active + 1).padStart(2, "0")} / {String(p.gallery.length).padStart(2, "0")}
            </span>
          </div>
          {p.gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {p.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                    active === i
                      ? "border-gold"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scope */}
      <section className="bg-sand py-20 border-y border-border">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">نطاق العمل</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal">
              تفاصيل التنفيذ
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              نُفّذ المشروع وفق معايير صارمة للجودة والسلامة، باستخدام أسطول
              الشركة من المعدات الثقيلة وفرق متخصصة.
            </p>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {p.scopeItems.map((item) => (
              <li
                key={item}
                className="bg-background p-6 flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-charcoal font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="eyebrow text-gold justify-center">مشروع مشابه؟</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            دعنا ننفّذ مشروعك القادم.
          </h2>
          <p className="mt-4 text-white/70">
            تواصل مع فريقنا الهندسي لمناقشة النطاق والجدول الزمني والتسعير.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">طلب عرض سعر</Link>
            </Button>
            <Button asChild variant="ghostGold" size="lg">
              <Link to="/fleet">استعراض المعدات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-background py-20 border-t border-border">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4 border-b border-charcoal pb-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                مشاريع مشابهة
              </h2>
              <Link
                to="/projects"
                className="text-sm font-bold text-charcoal hover:text-gold-muted inline-flex items-center gap-1"
              >
                كل المشاريع <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/projects/$slug"
                  params={{ slug: r.slug }}
                  className="bg-background group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-deep-gray">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] tracking-[0.3em] text-gold-muted uppercase num">
                      {r.cat}
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-charcoal group-hover:text-gold-muted">
                      {r.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
