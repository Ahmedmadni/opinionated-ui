import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Download, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/SectionHead";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fleet.jpg";
import { PROJECTS, CATS, type Cat } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "المشاريع | شركة الأسطول الآلي" },
      {
        name: "description",
        content:
          "قائمة بأهم مشاريع شركة الأسطول الآلي: بوابة الدرعية، حديقة الملك سلمان، مترو الرياض، جامعة الأميرة نورة، مخططات سكنية وأكثر.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [cat, setCat] = useState<Cat>("الكل");
  const list = useMemo(
    () => (cat === "الكل" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)),
    [cat],
  );

  const totalValue = useMemo(
    () =>
      PROJECTS.reduce((sum, p) => {
        const n = parseInt(p.value.replace(/[^\d]/g, ""), 10);
        return sum + (Number.isFinite(n) ? n : 0);
      }, 0),
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="المشاريع"
        title="سجل تنفيذي بأكثر من مليار ريال."
        intro={`${PROJECTS.length}+ مشروعاً منفّذاً لجهات حكومية وتطويرية كبرى — بوابة الدرعية، مترو الرياض، جامعة الأميرة نورة، حديقة الملك سلمان وغيرها.`}
      />

      <section className="bg-charcoal text-white py-10 border-b border-white/10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="إجمالي قيمة المشاريع" value={`${(totalValue / 1_000_000_000).toFixed(2)} مليار ر.س`} />
          <Stat label="عدد المشاريع" value={`${PROJECTS.length}+`} />
          <Stat label="أكبر عقد" value="504 مليون ر.س" />
          <Stat label="حفر بوابة الدرعية" value="690,000 م³" />
        </div>
      </section>

      <section className="bg-background py-12 border-b border-border">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`h-10 px-4 rounded-md text-sm font-bold transition-colors ${
                  cat === c
                    ? "bg-charcoal text-gold"
                    : "bg-sand text-charcoal hover:bg-gold/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <a
            href="https://alostool.com.sa/assest/Al_Ostool_Company_Profile.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-11 items-center gap-2 px-5 rounded-md border border-charcoal text-charcoal font-bold hover:bg-charcoal hover:text-gold transition-colors"
          >
            <Download className="size-4" />
            الملف التعريفي PDF
          </a>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="bg-background overflow-hidden flex flex-col group focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-deep-gray">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-charcoal text-gold text-[10px] num tracking-widest uppercase px-2 py-1">
                  {p.cat}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[10px] tracking-[0.3em] text-gold-muted uppercase num">
                  Project / {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-xl font-bold text-charcoal group-hover:text-gold-muted transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed line-clamp-3">{p.scope}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">{p.city ?? "—"}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-charcoal group-hover:text-gold-muted">
                    تفاصيل المشروع
                    <ArrowLeft className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="container-x mt-16 text-center">
          <p className="text-muted-foreground">لم تجد ما يشبه مشروعك؟</p>
          <Button asChild variant="hero" size="lg" className="mt-4">
            <a href="/contact">ناقش معنا فكرتك</a>
          </Button>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] text-gold uppercase">{label}</div>
      <div className="mt-2 text-2xl md:text-3xl font-bold num text-white">{value}</div>
    </div>
  );
}
