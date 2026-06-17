import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { PageHero } from "@/components/site/SectionHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | شركة الأسطول الآلي" },
      {
        name: "description",
        content:
          "للاستفسار وطلب عروض الأسعار: هاتف 920026556 — البريد info@alostool.com.sa — الرياض، المملكة العربية السعودية.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "الاسم مطلوب").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(8, "رقم الجوال مطلوب").max(20),
  email: z.string().trim().email("بريد إلكتروني غير صالح").max(255),
  service: z.string().min(1, "اختر الخدمة"),
  message: z.string().trim().min(10, "اكتب وصفاً للمشروع").max(1500),
});

const SERVICES = [
  "الهدم",
  "الحفر والردم",
  "البنية التحتية",
  "أعمال الطرق",
  "تأجير المعدات",
  "استشارات هندسية",
];

function ContactPage() {
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse({ ...fd, service });
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setService("");
      toast.success("تم إرسال الاستفسار. سنتواصل معك قريباً.");
    }, 700);
  }

  return (
    <>
      <Toaster richColors position="top-center" dir="rtl" />
      <PageHero
        eyebrow="تواصل"
        title="حدّثنا عن مشروعك."
        intro="فريقنا الفني يستجيب لطلبات العروض خلال 24 ساعة عمل."
      />

      <section className="bg-background py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Info */}
          <aside className="lg:col-span-4 space-y-6">
            <InfoCard
              icon={<Phone />}
              label="الهاتف المباشر"
              value="+966 50 833 1111"
              href="tel:+966508331111"
            />
            <InfoCard
              icon={<Phone />}
              label="الرقم الموحد"
              value="920 026 556"
              href="tel:920026556"
            />
            <InfoCard
              icon={<Mail />}
              label="البريد الإلكتروني"
              value="info@alostool.com.sa"
              href="mailto:info@alostool.com.sa"
            />
            <InfoCard icon={<MapPin />} label="الموقع" value="الرياض، المملكة العربية السعودية" />

            <div className="flex items-center gap-3 pt-4">
              <Social href="https://x.com/alostoolalaali" label="X">
                <Twitter className="size-4" />
              </Social>
              <Social href="https://www.instagram.com/alostoolalaali/" label="Instagram">
                <Instagram className="size-4" />
              </Social>
              <Social href="https://sa.linkedin.com/company/alostool-alaali" label="LinkedIn">
                <Linkedin className="size-4" />
              </Social>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 bg-charcoal text-white p-8 md:p-10 border border-charcoal"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold">نموذج الاستفسار</h2>
              <span className="num text-[10px] tracking-[0.3em] text-gold uppercase">FORM / 01</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <DarkField label="الاسم الكامل *" name="name" />
              <DarkField label="الشركة / الجهة" name="company" />
              <DarkField label="رقم الجوال *" name="phone" type="tel" dir="ltr" />
              <DarkField label="البريد الإلكتروني *" name="email" type="email" dir="ltr" />

              <div className="sm:col-span-2">
                <Label className="text-xs tracking-widest uppercase text-white/60">
                  نوع الخدمة *
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="mt-2 h-12 bg-charcoal border-white/15 text-white">
                    <SelectValue placeholder="اختر الخدمة" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-xs tracking-widest uppercase text-white/60">
                  وصف المشروع *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-gold"
                  placeholder="اكتب فكرة عن نوع المشروع، الموقع، المدة المتوقعة..."
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-xs text-white/40">
                  بإرسالك للنموذج فأنت توافق على تواصلنا معك بشأن استفسارك.
                </p>
                <Button type="submit" variant="hero" size="lg" disabled={submitting}>
                  {submitting ? "جارٍ الإرسال..." : "إرسال الاستفسار"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand pb-20">
        <div className="container-x">
          <div className="aspect-[21/9] overflow-hidden border border-charcoal/10">
            <iframe
              title="موقع شركة الأسطول الآلي"
              src="https://www.google.com/maps?q=Riyadh,Saudi+Arabia&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-start gap-4 p-6 bg-sand border border-charcoal/10 hover:border-gold transition-colors">
      <div className="flex h-12 w-12 items-center justify-center bg-charcoal text-gold shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground num">
          {label}
        </div>
        <div className="mt-1 text-lg font-bold text-charcoal" dir={href?.startsWith("tel") ? "ltr" : undefined}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {Body}
    </a>
  ) : (
    Body
  );
}

function DarkField({
  label,
  name,
  type = "text",
  dir,
}: {
  label: string;
  name: string;
  type?: string;
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
        dir={dir}
        className="mt-2 h-12 bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-gold"
      />
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-gold transition-colors"
    >
      {children}
    </a>
  );
}
