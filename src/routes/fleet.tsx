import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero, SectionHead } from "@/components/site/SectionHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-fleet.jpg";
import trucksImg from "@/assets/project-trucks.jpg";
import videoAsset from "@/assets/fleet-video.asset.json";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "أسطول المعدات | شركة الأسطول الآلي — 229 آلية" },
      {
        name: "description",
        content:
          "أسطول من 229 آلية ثقيلة: حفارات CAT و XCMG و Volvo، قلابات هاردوكس، بلدوزرات D9R، شيولات، كسارات متحركة وثابتة، كرينات ومعدات تخصصية.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FleetPage,
});

type Item = { type: string; model: string; year: number; qty: number };
type Group = { title: string; en: string; items: Item[] };

const GROUPS: Group[] = [
  {
    title: "الحفارات",
    en: "Excavators",
    items: [
      { type: "بوكلين", model: "CAT 345D", year: 2008, qty: 1 },
      { type: "بوكلين", model: "CAT 336D", year: 2011, qty: 2 },
      { type: "بوكلين", model: "Hitachi ZAXIS 470H-3F", year: 2015, qty: 2 },
      { type: "بوكلين", model: "Hitachi ZX65", year: 2015, qty: 2 },
      { type: "بوكلين", model: "Doosan DX63.3", year: 2015, qty: 1 },
      { type: "بوكلين", model: "Hitachi ZX220LC-GI", year: 2015, qty: 34 },
      { type: "بوكلين", model: "CAT 349D", year: 2013, qty: 6 },
      { type: "بوكلين", model: "CAT 349-07C", year: 2021, qty: 18 },
      { type: "بوكلين", model: "Volvo EC480DL", year: 2021, qty: 17 },
      { type: "بوكلين", model: "Volvo EC750DL", year: 2021, qty: 1 },
      { type: "بوكلين", model: "CAT 395-07A", year: 2021, qty: 1 },
      { type: "بوكلين", model: "XCMG XE490D", year: 2022, qty: 2 },
    ],
  },
  {
    title: "البلدوزرات والجريدرات والشيولات",
    en: "Dozers · Graders · Loaders",
    items: [
      { type: "بلدوزر", model: "CAT D9R", year: 2012, qty: 9 },
      { type: "جريدر", model: "CAT 160M", year: 2010, qty: 6 },
      { type: "شيول", model: "CAT 980H", year: 2009, qty: 2 },
      { type: "شيول", model: "CAT 966H", year: 2013, qty: 12 },
      { type: "شيول", model: "Hitachi ZW310", year: 2012, qty: 1 },
      { type: "شيول", model: "Volvo BL61B", year: 2015, qty: 2 },
      { type: "شيول", model: "Kawasaki 90Z5", year: 2012, qty: 2 },
      { type: "بوبكات", model: "Bobcat S130", year: 1994, qty: 1 },
      { type: "بوبكات", model: "CAT 246C", year: 2008, qty: 1 },
      { type: "بوبكات", model: "Bobcat 155T3", year: 2021, qty: 1 },
    ],
  },
  {
    title: "القلابات والنقليات",
    en: "Dump Trucks · Transport",
    items: [
      { type: "قلاب", model: "Scania P420", year: 2009, qty: 12 },
      { type: "قلاب", model: "Scania P420", year: 2012, qty: 15 },
      { type: "قلاب", model: "Sinotruk K440P Hardox 6x4", year: 2020, qty: 20 },
      { type: "قلاب", model: "Sinotruk K440P Hardox 8x4", year: 2021, qty: 14 },
      { type: "دمبر", model: "Volvo B40D", year: 2010, qty: 1 },
      { type: "دمبر", model: "CAT 740B", year: 2012, qty: 1 },
      { type: "وايت ديزل", model: "Toyota Dyna", year: 2003, qty: 3 },
      { type: "وايت مياه", model: "Scania P420", year: 2009, qty: 4 },
      { type: "وايت مياه", model: "Scania G420", year: 2012, qty: 5 },
      { type: "باص نقل", model: "حافلة كبيرة", year: 2016, qty: 6 },
    ],
  },
  {
    title: "الكسارات ومعدات الإنتاج",
    en: "Crushers · Production",
    items: [
      { type: "غربال", model: "Sandvik QA450", year: 2011, qty: 2 },
      { type: "كسارة متحركة", model: "Sandvik QI430", year: 2011, qty: 4 },
      { type: "كسارة متحركة", model: "RM 120X", year: 2020, qty: 1 },
      { type: "كسارة متحركة", model: "TRAKPACTOR 550", year: 2018, qty: 3 },
      { type: "كسارة متحركة", model: "JAW Crusher", year: 2021, qty: 2 },
      { type: "كسارة ثابتة", model: "US310", year: 2012, qty: 2 },
      { type: "كسارة ثابتة", model: "PE750x1060 JAW", year: 2021, qty: 2 },
      { type: "سير نقل مواد", model: "8036R", year: 2011, qty: 2 },
    ],
  },
  {
    title: "معدات الضغط والرفع والمساندة",
    en: "Compaction · Lifting · Support",
    items: [
      { type: "رصاصة", model: "CAT CS533E", year: 2010, qty: 1 },
      { type: "رصاصة", model: "Volvo VM115D", year: 2010, qty: 2 },
      { type: "كرين سطحة", model: "Mercedes ACTROS", year: 2007, qty: 1 },
      { type: "رافعة شوكية", model: "CS533E Forklift", year: 2015, qty: 1 },
      { type: "راس لوبد", model: "Volvo FH 440", year: 2012, qty: 1 },
    ],
  },
];

const totalQty = GROUPS.reduce((s, g) => s + g.items.reduce((a, b) => a + b.qty, 0), 0);

const rentSchema = z.object({
  equipment: z.string().trim().min(2, "حدّد المعدة المطلوبة").max(100),
  duration: z.string().trim().min(1, "حدّد المدة").max(60),
  name: z.string().trim().min(2, "الاسم مطلوب").max(80),
  phone: z.string().trim().min(8, "رقم الجوال مطلوب").max(20),
});

function FleetPage() {
  const [submitting, setSubmitting] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string>(GROUPS[0].title);
  const current = useMemo(
    () => GROUPS.find((g) => g.title === activeGroup) ?? GROUPS[0],
    [activeGroup],
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = rentSchema.safeParse(data);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("تم استلام طلبك. سنتواصل معك خلال 24 ساعة.");
    }, 600);
  }

  return (
    <>
      <Toaster richColors position="top-center" dir="rtl" />
      <PageHero
        eyebrow={`أسطول المعدات · ${totalQty} آلية`}
        title="أكبر أسطول معدات ثقيلة في خدمتك — جاهز للتنفيذ أو التأجير."
        intro="حفارات Caterpillar و XCMG و Volvo و Hitachi، قلابات هاردوكس، بلدوزرات D9R، كسارات متحركة وثابتة، كرينات، وكل ما يحتاجه مشروعك تحت إشراف فني مدرّب."
      />

      {/* Hero image strip */}
      <section className="bg-charcoal">
        <div className="container-x py-10">
          <div className="aspect-[16/6] overflow-hidden bg-deep-gray border border-white/10 relative">
            <img
              src={trucksImg}
              alt="أسطول قلابات وحفارات شركة الأسطول الآلي"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <Stat label="إجمالي المعدات" value={`${totalQty}`} />
            <Stat label="حفارات" value="87" />
            <Stat label="قلابات وشاحنات" value="80" />
            <Stat label="كسارات" value="16" />
          </div>
        </div>
      </section>

      {/* Group tabs */}
      <section className="bg-background py-12 border-b border-border sticky top-16 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="container-x flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button
              key={g.title}
              onClick={() => setActiveGroup(g.title)}
              className={`h-11 px-4 rounded-md text-sm font-bold transition-colors ${
                activeGroup === g.title
                  ? "bg-charcoal text-gold"
                  : "bg-sand text-charcoal hover:bg-gold/20"
              }`}
            >
              {g.title}
              <span className="ms-2 num text-xs opacity-70">
                {g.items.reduce((s, i) => s + i.qty, 0)}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Equipment table */}
      <section className="bg-background py-16">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4 border-b border-charcoal pb-4 mb-6">
            <div>
              <div className="text-[10px] tracking-[0.3em] text-gold-muted uppercase num">
                Category
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-charcoal">
                {current.title}
              </h2>
            </div>
            <span className="num text-xl md:text-2xl text-charcoal/30 tracking-widest uppercase">
              {current.en}
            </span>
          </div>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-right">
              <thead className="bg-sand text-charcoal">
                <tr className="text-[10px] tracking-[0.25em] uppercase">
                  <th className="p-4 font-bold">#</th>
                  <th className="p-4 font-bold">النوع</th>
                  <th className="p-4 font-bold">الموديل</th>
                  <th className="p-4 font-bold">السنة</th>
                  <th className="p-4 font-bold text-left">العدد</th>
                </tr>
              </thead>
              <tbody>
                {current.items.map((it, i) => (
                  <tr
                    key={`${it.model}-${i}`}
                    className="border-t border-border hover:bg-sand/60 transition-colors"
                  >
                    <td className="p-4 num text-gold-muted">{String(i + 1).padStart(2, "0")}</td>
                    <td className="p-4 font-bold text-charcoal">{it.type}</td>
                    <td className="p-4 text-muted-foreground num">{it.model}</td>
                    <td className="p-4 text-muted-foreground num">{it.year}</td>
                    <td className="p-4 text-left">
                      <span className="num font-bold text-charcoal bg-gold/15 px-3 py-1 rounded">
                        {it.qty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Video strip */}
      <section className="bg-charcoal">
        <div className="container-x py-12">
          <div className="aspect-[16/7] overflow-hidden bg-deep-gray border border-white/10">
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
      </section>

      {/* Rent form */}
      <section className="bg-charcoal text-white py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="طلب تأجير"
              title="اطلب معدّتك في دقيقتين."
              intro="املأ النموذج وسيتواصل معك فريقنا الفني لاعتماد المواعيد والتسعير."
              invert
            />
          </div>
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4 bg-deep-gray p-8 border border-white/10"
          >
            <Field label="المعدة المطلوبة" name="equipment" placeholder="مثلاً: CAT 349-07C" />
            <Field label="المدة" name="duration" placeholder="يومي / شهري" />
            <Field label="الاسم الكامل" name="name" placeholder="اسمك الكامل" />
            <Field label="رقم الجوال" name="phone" type="tel" placeholder="05XXXXXXXX" dir="ltr" />
            <div className="sm:col-span-2">
              <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
                {submitting ? "جارٍ الإرسال..." : "إرسال طلب التأجير"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] text-gold uppercase">{label}</div>
      <div className="mt-2 text-2xl md:text-3xl font-bold num">{value}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  dir,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs tracking-widest uppercase text-white/60">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        dir={dir}
        required
        className="mt-2 h-12 bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-gold"
      />
    </div>
  );
}
