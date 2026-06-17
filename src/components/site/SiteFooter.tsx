import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="hairline" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="text-base font-bold text-white">الأسطول الآلي</div>
              <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Alostool Alaali</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            17 عاماً من الريادة في مقاولات البنية التحتية، الهدم المستدام، والحفر بالمملكة العربية
            السعودية.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href="https://x.com/alostoolalaali" label="X / تويتر">
              <Twitter className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/alostoolalaali/" label="انستقرام">
              <Instagram className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://sa.linkedin.com/company/alostool-alaali" label="لينكدإن">
              <Linkedin className="size-4" />
            </SocialIcon>
          </div>
        </div>

        <FooterCol title="روابط سريعة">
          <FooterLink to="/">الرئيسية</FooterLink>
          <FooterLink to="/about">من نحن</FooterLink>
          <FooterLink to="/services">الخدمات</FooterLink>
          <FooterLink to="/projects">المشاريع</FooterLink>
          <FooterLink to="/fleet">أسطول المعدات</FooterLink>
          <FooterLink to="/contact">تواصل معنا</FooterLink>
        </FooterCol>

        <FooterCol title="خدماتنا">
          <FooterLink to="/services">الهدم المستدام</FooterLink>
          <FooterLink to="/services">الحفر والردم</FooterLink>
          <FooterLink to="/services">البنية التحتية</FooterLink>
          <FooterLink to="/services">أعمال الطرق</FooterLink>
          <FooterLink to="/services">النقليات والمعدات</FooterLink>
        </FooterCol>

        <FooterCol title="تواصل معنا">
          <a href="tel:+966508331111" className="flex items-center gap-2 hover:text-gold" dir="ltr">
            <Phone className="size-4 text-gold" />
            <span className="num">+966 50 833 1111</span>
          </a>
          <a href="tel:920026556" className="flex items-center gap-2 hover:text-gold" dir="ltr">
            <Phone className="size-4 text-gold" />
            <span className="num">920 026 556</span>
          </a>
          <a href="mailto:info@alostool.com.sa" className="flex items-center gap-2 hover:text-gold">
            <Mail className="size-4 text-gold" />
            info@alostool.com.sa
          </a>
        </FooterCol>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-xs text-white/40">
          <p>© 2025 شركة الأسطول الآلي. جميع الحقوق محفوظة.</p>
          <p className="num tracking-widest uppercase">Riyadh · Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h4>
      <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="hover:text-gold transition-colors">
      {children}
    </Link>
  );
}

function SocialIcon({
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 hover:border-gold hover:text-gold transition-colors"
    >
      {children}
    </a>
  );
}
