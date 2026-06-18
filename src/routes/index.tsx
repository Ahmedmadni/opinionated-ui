import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Hammer,
  Truck,
  Mountain,
  Route as RouteIcon,
  Construction,
  HardHat,
  ShieldCheck,
  Wrench,
  Award,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/CountUp";
import { SectionHead } from "@/components/site/SectionHead";
import heroAsset from "@/assets/hero-fleet.jpg";

import videoAsset from "@/assets/fleet-video.asset.json";
import logoAsset from "@/assets/logo.asset.json";
import projDiriyah from "@/assets/project-diriyah.jpg";
import projCrusher from "@/assets/project-crusher.jpg";
import projRoads from "@/assets/project-roads.jpg";
import projDemolition from "@/assets/project-demolition.jpg";
import projUtilities from "@/assets/project-utilities.jpg";
import projTrucks from "@/assets/project-trucks.jpg";
import svcDemolition from "@/assets/service-demolition.jpg";
import svcExcavation from "@/assets/service-excavation.jpg";
import svcInfrastructure from "@/assets/service-infrastructure.jpg";
import svcRoads from "@/assets/service-roads.jpg";
import svcFleet from "@/assets/service-fleet.jpg";
import svcConsulting from "@/assets/service-consulting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "شركة الأسطول الآلي | مقاولات بنية تحتية، هدم وحفر — السعودية",
      },
      {
        name: "description",
        content:
          "17 عاماً من الريادة. 193+ مشروع منجز. أسطول كامل من المعدات الثقيلة. شريك مشاريع رؤية المملكة 2030.",
      },
      { property: "og:image", content: heroAsset },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: 17, suffix: "+", label: "عاماً من الخبرة" },
  { value: 193, suffix: "+", label: "مشروع مكتمل" },
  { value: 23, suffix: "+", label: "مشروع ضخم" },
  { value: 5, suffix: "", label: "شركاء استراتيجيون" },
];

const SERVICES = [
  {
    icon: Hammer,
    title: "الهدم المستدام",
    desc: "هدم آمن بأحدث التقنيات مع الالتزام بمعايير السلامة وإعادة تدوير المواد.",
    image: svcDemolition,
  },
  {
    icon: Mountain,
    title: "الحفر والردم",
    desc: "أسطول حفارات حديث لكافة الأعماق والأحجام — سكني، تجاري، بنية تحتية.",
    image: svcExcavation,
  },
  {
    icon: Construction,
    title: "البنية التحتية",
    desc: "شبكات مياه وصرف وكهرباء واتصالات، وأعمال التمهيد الإنشائي للمشاريع الكبرى.",
    image: svcInfrastructure,
  },
  {
    icon: RouteIcon,
    title: "أعمال الطرق",
    desc: "تنفيذ هندسي دقيق للطرق والمسالك الداخلية في المشاريع الحضرية والصناعية.",
    image: svcRoads,
  },
  {
    icon: Truck,
    title: "النقليات والمعدات",
    desc: "حفارات، قلابات، كرينات، ومعدات تخصصية للتنفيذ المباشر أو التأجير.",
    image: svcFleet,
  },
  {
    icon: HardHat,
    title: "الاستشارات الهندسية",
    desc: "فريق مهندسين متخصص يقدم استشارات شاملة في التخطيط والتصميم والتنفيذ.",
    image: svcConsulting,
  },
];

const WHY = [
  { icon: Award, label: "17 عاماً من الخبرة الميدانية" },
  { icon: Wrench, label: "أسطول متكامل من المعدات الحديثة" },
  { icon: ShieldCheck, label: "شهادات جودة معتمدة من الجهات الرسمية" },
  { icon: Users, label: "فريق هندسي متخصص ومدرّب" },
];

const PARTNERS = [
  "شركة الدرعية",
  "الهيئة العامة لعقارات الدولة",
  "أمانة الرياض",
  "جامعة الأميرة نورة",
  "قطار الرياض",
];

const FAQS = [
  {
    q: "ما هي خبرة شركة الأسطول الآلي؟",
    a: "تمتلك الشركة خبرة تزيد عن 17 عاماً في تنفيذ مشاريع المقاولات، الهدم المستدام، والبنية التحتية في مختلف مدن المملكة، وقد نفّذت 193+ مشروعاً منها 23 مشروعاً ضخماً.",
  },
  {
    q: "كيف تضمن الشركة جودة المشاريع؟",
    a: "نلتزم بأعلى معايير الجودة عبر فرق عمل مدربة، معدات حديثة، شهادات تصنيف رسمية، وإشراف هندسي مستمر يضمن مطابقة المخرجات للمواصفات الفنية المعتمدة.",
  },
  {
    q: "ما الذي يميز شركة الأسطول الآلي؟",
    a: "المرونة العالية في تنفيذ مشاريع بمختلف الأحجام، اعتمادنا على تقنيات حديثة في الهدم والحفر، وأسطول معدات يُمكّننا من التحرك السريع دون انتظار موارد خارجية.",
  },
  {
    q: "ما هي خدمات شركة الأسطول الآلي؟",
    a: "خدمات متكاملة تشمل: الهدم المستدام، الحفر والردم، البنية التحتية، أعمال الطرق، تأجير المعدات الثقيلة، والاستشارات الهندسية.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Stats />
      <Services />
      <WhySection />
      <ProjectsPreview />
      <PartnersBlock />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section
      dir="rtl"
      className="relative min-h-[85vh] md:min-h-[100vh] flex items-end bg-[#111111] text-white overflow-hidden"
    >
      <video
        src="/hero-7fps.mp4"
        poster={heroAsset}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="أسطول حفارات شركة الأسطول الآلي"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 45%, rgba(17,17,17,0.92) 100%)",
        }}
        aria-hidden
      />
      {/* Side vignette to anchor the text */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden
      />

      <div className="container-x relative pt-28 pb-12 md:pt-32 md:pb-16 w-full">
        <div className="max-w-4xl mr-0 ml-auto text-right">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 reveal"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold font-semibold">
              Since 2008 · Riyadh, KSA
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mt-3 font-semibold text-white reveal
                       text-[44px] sm:text-6xl md:text-7xl lg:text-[84px]
                       leading-[1.15] md:leading-[1.1]"
            style={{
              animationDelay: "160ms",
              wordSpacing: "0.02em",
              letterSpacing: "0em",
              color: "#F7F7F7",
            }}
          >
            نبني <span className="text-gold">المستقبل</span>،
            <br />
            نحفر الطريق.
          </h1>

          {/* Subtitle */}
          <p
            className="mt-3 md:mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/75 reveal"
            style={{ animationDelay: "280ms", wordSpacing: "0.02em" }}
          >
            17 عاماً من الريادة في مقاولات البنية التحتية، الهدم المستدام، والحفر
            بالمملكة العربية السعودية.
          </p>

          {/* CTAs */}
          <div
            className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 reveal"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link to="/services">
                استعرض خدماتنا
                <ArrowLeft className="size-5 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild variant="ghostGold" size="xl" className="w-full sm:w-auto">
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className="mt-6 md:mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-4 reveal"
          style={{ animationDelay: "520ms" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={logoAsset.url}
              alt=""
              className="h-9 w-9 object-contain shrink-0"
            />
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/60 truncate">
              17+ عاماً · 193+ مشروع · 23+ مشروع ضخم
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.35em] text-white/40 uppercase">
            <span>Scroll</span>
            <span className="h-8 w-px bg-gold/70" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersMarquee() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bg-charcoal border-y border-white/5 overflow-hidden">
      <div className="py-6 overflow-hidden">
        <div className="marquee whitespace-nowrap text-white/40">
          {items.map((p, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-sm tracking-[0.25em] uppercase font-medium">{p}</span>
              <span className="text-gold/40">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative bg-charcoal text-white py-24">
      <div className="container-x">
        <div className="hairline mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((s, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 last:border-l-0">
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">
                0{i + 1}
              </div>
              <div className="mt-3 text-5xl md:text-6xl text-white">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            eyebrow="خدماتنا"
            title="حلول إنشائية متكاملة، من الفكرة إلى التسليم."
            intro="ست خدمات أساسية ننفّذها بأسطول وفريق هندسي تحت سقف واحد — دون اعتماد على مقاولين من الباطن."
          />
          <Button asChild variant="dark" size="lg">
            <Link to="/services">
              كل الخدمات
              <ArrowLeft className="size-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {SERVICES.map((s, i) => (
            <article
              key={i}
              className="group relative bg-background overflow-hidden transition-colors hover:bg-sand flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-gray">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center bg-charcoal/90 text-gold">
                  <s.icon className="size-5" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  <span className="num text-gold">0{i + 1}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>خدمة</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-charcoal group-hover:text-gold-muted"
                >
                  اقرأ أكثر
                  <ArrowLeft className="size-4 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="relative bg-sand py-24 overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="لماذا الأسطول الآلي"
            title="ثقل ميداني، انضباط هندسي."
            intro="نُسلّم المشاريع في موعدها لأن الموارد بين أيدينا — لا انتظار، لا حلقات وسيطة."
          />
          <div className="mt-8 aspect-video overflow-hidden border border-charcoal/10 shadow-[var(--shadow-card)] bg-charcoal">
            <video
              src={videoAsset.url}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-12">
          <ul className="grid gap-px bg-charcoal/10 border border-charcoal/10">
            {WHY.map((w, i) => (
              <li key={i} className="flex items-center gap-6 bg-sand p-6 md:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-charcoal text-gold">
                  <w.icon className="size-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.3em] text-gold-muted uppercase num">
                    0{i + 1} / 04
                  </div>
                  <p className="mt-1 text-lg font-bold text-charcoal">{w.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const PROJECT_IMAGES = [
  { title: "بوابة الدرعية — حفر وردم 690,000 م³", img: projDiriyah, tall: true },
  { title: "حديقة الملك سلمان — ترحيل مخلفات", img: projUtilities },
  { title: "إنتاج مواد الكسارات", img: projCrusher },
  { title: "مترو الرياض — بنية تحتية", img: projUtilities },
  { title: "أسطول النقليات — قلابات هاردوكس", img: projTrucks, tall: true },
  { title: "أعمال طرق وأرصفة", img: projRoads },
];

function ProjectsPreview() {
  return (
    <section className="bg-charcoal py-24 md:py-32 text-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            eyebrow="معرض المشاريع"
            title="مشاريع نوعية تخدم رؤية المملكة 2030."
            invert
          />
          <Button asChild variant="hero" size="lg">
            <Link to="/projects">
              كل المشاريع
              <ArrowLeft className="size-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PROJECT_IMAGES.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-deep-gray ${p.tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold num">
                  Project / {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-base md:text-lg font-bold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersBlock() {
  return (
    <section className="bg-charcoal py-20 border-t border-white/5">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow justify-center">شركاؤنا في النجاح</span>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            بثقة كبرى الجهات الحكومية والتطويرية بالمملكة.
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="bg-charcoal p-8 flex items-center justify-center text-center text-sm md:text-base font-bold text-white/60 hover:text-gold transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-background py-24">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHead
            eyebrow="أسئلة شائعة"
            title="إجابات على ما يهم عملاءنا."
            intro="لمزيد من التفاصيل تواصل مع فريقنا مباشرة."
          />
          <Button asChild variant="dark" size="lg" className="mt-8">
            <Link to="/contact">تواصل مباشر</Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-right text-lg font-bold text-charcoal hover:no-underline hover:text-gold-muted">
                  <span className="flex items-center gap-4">
                    <span className="num text-sm text-gold">0{i + 1}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
      <div className="absolute inset-0 industrial-grid opacity-20" aria-hidden />
      <div className="container-x relative py-20 md:py-28 text-charcoal flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase font-bold">جاهزون للبدء</span>
          <h3 className="mt-3 text-4xl md:text-6xl font-black max-w-2xl leading-tight">
            ابدأ مشروعك اليوم.
          </h3>
          <p className="mt-4 max-w-xl text-charcoal/80 text-lg">
            من الاستشارة الأولى حتى التسليم — فريق ومعدات بين أيديكم.
          </p>
        </div>
        <Button asChild variant="dark" size="xl" className="shrink-0">
          <Link to="/contact">
            تواصل معنا
            <ArrowLeft className="size-5 rtl:rotate-180" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
