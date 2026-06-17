import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "../assets/logo.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-charcoal px-4 text-white">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center text-gold">404 — الصفحة غير موجودة</p>
        <h1 className="mt-4 text-6xl font-bold">طريق مسدود</h1>
        <p className="mt-3 text-sm text-white/60">
          الصفحة التي تبحث عنها انتقلت أو لم تعد متاحة.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-bold text-charcoal transition-colors hover:bg-gold-muted hover:text-white"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">حدث خطأ غير متوقع</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gold px-4 text-sm font-bold text-charcoal hover:bg-gold-muted hover:text-white"
          >
            إعادة المحاولة
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium text-foreground hover:bg-accent"
          >
            الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "شركة الأسطول الآلي | مقاولات البنية التحتية والهدم والحفر في السعودية" },
      {
        name: "description",
        content:
          "شركة الأسطول الآلي — 17 عاماً في مقاولات البنية التحتية، الهدم المستدام، الحفر، وأسطول معدات ثقيلة في المملكة العربية السعودية.",
      },
      { property: "og:title", content: "شركة الأسطول الآلي | مقاولات البنية التحتية والهدم والحفر في السعودية" },
      {
        property: "og:description",
        content:
          "17 عاماً، 193+ مشروع منجز، وأسطول كامل من المعدات الثقيلة في خدمة مشاريع رؤية المملكة 2030.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@alostoolalaali" },
      { name: "twitter:title", content: "شركة الأسطول الآلي | مقاولات البنية التحتية والهدم والحفر في السعودية" },
      { name: "description", content: "A web application that guides distinctive visual design for UIs, aiding aesthetic direction, typography, and unique choices." },
      { property: "og:description", content: "A web application that guides distinctive visual design for UIs, aiding aesthetic direction, typography, and unique choices." },
      { name: "twitter:description", content: "A web application that guides distinctive visual design for UIs, aiding aesthetic direction, typography, and unique choices." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/38e42e04-743a-4db5-afeb-8f2c5197fd6b/id-preview-ea0ca878--a96d4035-30e3-4ce5-89e8-054fdd34164f.lovable.app-1781693688451.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/38e42e04-743a-4db5-afeb-8f2c5197fd6b/id-preview-ea0ca878--a96d4035-30e3-4ce5-89e8-054fdd34164f.lovable.app-1781693688451.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset.url, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700&family=Barlow:wght@600;700;800&family=Barlow+Condensed:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-charcoal"
      >
        تخطّي إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
