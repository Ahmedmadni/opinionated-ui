import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Mountain, Construction, Route as RouteIcon, Truck, HardHat } from "lucide-react";
import { PageHero } from "@/components/site/SectionHead";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/fleet-hero.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا | شركة الأسطول الآلي" },
      {
        name: "description",
        content:
          "ست خدمات إنشائية متكاملة: الهدم المستدام، الحفر والردم، البنية التحتية، الطرق، النقليات، والاستشارات الهندسية.",
      },
      { property: "og:title", content: "خدماتنا — شركة الأسطول الآلي" },
      {
        property: "og:description",
        content: "خدمات إنشائية متكاملة تحت سقف واحد، بأسطول وفريق هندسي متخصص.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Hammer,
    title: "الهدم المستدام",
    desc: "ننفّذ مشاريع الهدم بأحدث التقنيات والأجهزة المتخصصة، مع الالتزام الكامل بمعايير السلامة البيئية وإعادة تدوير مواد الهدم. نضمن تنفيذاً آمناً وسريعاً يحافظ على البنى المجاورة.",
    bullets: ["كسارات هيدروليكية متخصصة", "إعادة تدوير المخلفات", "الحفاظ على المنشآت المجاورة"],
  },
  {
    icon: Mountain,
    title: "الحفر والردم",
    desc: "نمتلك أسطولاً متكاملاً من الحفارات الحديثة لتنفيذ أعمال الحفر والردم بمختلف الأعماق والأحجام، سواء في المشاريع السكنية أو التجارية أو البنية التحتية الكبرى.",
    bullets: ["حفر سطحي وعميق", "ردم ودك بمواصفات هندسية", "تنسيق مع التصاميم المعتمدة"],
  },
  {
    icon: Construction,
    title: "أعمال البنية التحتية",
    desc: "تشمل خدماتنا الشبكات الأرضية الكاملة: المياه والصرف الصحي والكهرباء والاتصالات، إضافةً إلى أعمال التمهيد الإنشائي للمشاريع الكبرى.",
    bullets: ["شبكات مياه وصرف", "شبكات كهرباء واتصالات", "تمهيد إنشائي للمشاريع الضخمة"],
  },
  {
    icon: RouteIcon,
    title: "أعمال الطرق",
    desc: "ننفّذ مشاريع الطرق والمسالك الداخلية بأسلوب هندسي دقيق يراعي المتطلبات الفنية للمشاريع الحضرية والصناعية.",
    bullets: ["طرق داخلية ومسالك", "طبقات قاعدية وأسفلت", "تسوية وتمهيد دقيق"],
  },
  {
    icon: Truck,
    title: "النقليات والمعدات",
    desc: "أسطول متكامل من الحفارات، القلابات، الكرينات، والمعدات التخصصية — متاح للتنفيذ المباشر أو التأجير تحت إشراف فني مباشر.",
    bullets: ["تأجير يومي وشهري", "إشراف فني مرافق", "صيانة دورية مضمونة"],
  },
  {
    icon: HardHat,
    title: "الاستشارات الهندسية",
    desc: "فريق من المهندسين المتخصصين يقدم استشارات تقنية شاملة في مراحل التخطيط والتصميم والتنفيذ لضمان نجاح مشاريعكم.",
    bullets: ["دراسات جدوى فنية", "مراجعة تصاميم", "إشراف هندسي ميداني"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدماتنا"
        title="ست خدمات أساسية. سقف واحد. دون مقاولين من الباطن."
        intro="كل خدمة ننفّذها بفريقنا الميداني ومعداتنا الخاصة — انضباط في الجودة والمواعيد."
      />

      <div className="bg-background">
        {SERVICES.map((s, i) => {
          const dark = i % 2 === 1;
          return (
            <section
              key={i}
              className={dark ? "bg-charcoal text-white" : "bg-background text-charcoal"}
            >
              <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-deep-gray">
                    <img
                      src={heroAsset.url}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ filter: dark ? "none" : "grayscale(20%)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
                      }}
                    />
                    <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase text-gold num">
                      Service / 0{i + 1}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className={`num text-5xl font-black ${dark ? "text-gold" : "text-gold-muted"}`}>
                      0{i + 1}
                    </span>
                    <s.icon className={`size-10 ${dark ? "text-white" : "text-charcoal"}`} strokeWidth={1.5} />
                  </div>
                  <h2 className={`mt-6 text-3xl md:text-5xl font-bold ${dark ? "text-white" : "text-charcoal"}`}>
                    {s.title}
                  </h2>
                  <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
                    {s.desc}
                  </p>
                  <ul className="mt-8 grid sm:grid-cols-3 gap-px border" style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "var(--color-border)" }}>
                    {s.bullets.map((b, j) => (
                      <li
                        key={j}
                        className={`p-4 text-sm font-medium ${dark ? "bg-charcoal text-white/80 border-white/10" : "bg-background text-charcoal border-border"}`}
                        style={{ outline: "1px solid transparent" }}
                      >
                        <span className="block text-[10px] num text-gold tracking-widest">/ 0{j + 1}</span>
                        <span className="mt-1 block">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section style={{ background: "var(--gradient-gold)" }} className="py-20 text-charcoal">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h3 className="text-3xl md:text-4xl font-black max-w-xl">
            احتجت تقدير سعر لمشروع؟ فريقنا يستجيب خلال 24 ساعة.
          </h3>
          <Button asChild variant="dark" size="xl">
            <Link to="/contact">اطلب عرض سعر</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
