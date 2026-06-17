import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHead } from "@/components/site/SectionHead";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | شركة الأسطول الآلي" },
      {
        name: "description",
        content:
          "تأسست شركة الأسطول الآلي عام 2008 — 17 عاماً من الريادة في مقاولات البنية التحتية بالمملكة العربية السعودية.",
      },
      { property: "og:title", content: "من نحن — شركة الأسطول الآلي" },
      {
        property: "og:description",
        content: "قصة 17 عاماً من تنفيذ مشاريع نوعية تدعم رؤية المملكة 2030.",
      },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "2008", title: "تأسيس الشركة", text: "انطلاق الأسطول الآلي من الرياض بأسطول هدم وحفر محدود." },
  { year: "2013", title: "التوسع الإقليمي", text: "تنفيذ أول مشاريع بنية تحتية لجهات حكومية كبرى." },
  { year: "2018", title: "أسطول متكامل", text: "ضم حفارات XCMG و CAT الثقيلة إلى الأسطول التشغيلي." },
  { year: "2021", title: "مشاريع نوعية", text: "المشاركة في أعمال الحفر والمد لمشروع قطار الرياض." },
  { year: "2025", title: "رؤية 2030", text: "شراكات استراتيجية مع هيئة الدرعية وأمانة الرياض." },
];

const CERTS = [
  "شهادة تصنيف المقاولين — وزارة الشؤون البلدية",
  "اعتماد كمورد لدى أمانة الرياض",
  "اعتماد كمورد لدى الهيئة العامة لعقارات الدولة",
  "اشتراك فاعل في غرفة الرياض",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="17 عاماً نبني فيها على الأرض، لا على الورق."
        intro="شركة سعودية متخصصة في مقاولات البنية التحتية، الهدم المستدام، والحفر — بأسطول وفريق تحت إدارة مباشرة."
      />

      <section className="bg-background py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="القصة" title="من ورشة محلية إلى شريك حكومي." />
          </div>
          <div className="lg:col-span-7 text-lg text-foreground/80 leading-relaxed space-y-5">
            <p>
              تأسست شركة الأسطول الآلي عام 2008 في المملكة العربية السعودية، وانطلقت من رؤية واضحة:
              تقديم حلول متكاملة في مقاولات البنية التحتية تجمع بين الجودة، الابتكار، والاستدامة.
            </p>
            <p>
              على مدار 17 عاماً، ساهمت الشركة في تنفيذ مشاريع نوعية تدعم القطاعات الحيوية وتواكب
              رؤية المملكة 2030 — من الهدم المستدام في الدرعية، إلى أعمال الحفر والمد في قطار
              الرياض.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sand py-24">
        <div className="container-x">
          <SectionHead eyebrow="المحطات" title="من 2008 إلى اليوم." />
          <ol className="mt-14 relative border-r-2 border-gold/30 pr-8 md:pr-12 space-y-12">
            {TIMELINE.map((t, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -right-[42px] md:-right-[54px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-gold text-[10px] num font-bold ring-4 ring-sand"
                >
                  {i + 1}
                </span>
                <div className="num text-3xl md:text-4xl text-gold-muted font-black">{t.year}</div>
                <h3 className="mt-2 text-2xl font-bold text-charcoal">{t.title}</h3>
                <p className="mt-2 text-base text-muted-foreground max-w-2xl">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-charcoal text-white py-24">
        <div className="container-x grid md:grid-cols-2 gap-px border border-white/10 bg-white/10">
          <div className="bg-charcoal p-10 md:p-14">
            <span className="eyebrow">رؤيتنا</span>
            <p className="mt-6 text-2xl md:text-3xl font-bold leading-snug">
              أن نكون <span className="text-gold">الشريك الأول</span> في مقاولات البنية التحتية
              بالمملكة العربية السعودية.
            </p>
          </div>
          <div className="bg-charcoal p-10 md:p-14">
            <span className="eyebrow">رسالتنا</span>
            <p className="mt-6 text-2xl md:text-3xl font-bold leading-snug">
              تقديم حلول إنشائية متكاملة بأعلى معايير الجودة والسلامة، والمساهمة في تحقيق
              <span className="text-gold"> رؤية المملكة 2030</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHead eyebrow="الاعتمادات" title="شهادات تصنيف رسمية معتمدة." />
          <ul className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border">
            {CERTS.map((c, i) => (
              <li key={i} className="bg-background p-8 flex items-start gap-4">
                <CheckCircle2 className="size-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground num">
                    Cert / 0{i + 1}
                  </div>
                  <p className="mt-1 text-lg font-bold text-charcoal">{c}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats again */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {[
            { v: 17, s: "+", l: "عاماً" },
            { v: 193, s: "+", l: "مشروع" },
            { v: 23, s: "+", l: "مشروع ضخم" },
            { v: 50, s: "+", l: "آلية ثقيلة" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl text-gold">
                <CountUp to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
