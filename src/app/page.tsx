import { t } from "../lib/translations";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import CookieBar from "../components/cookie-bar";
import Image from "next/image";
import projektImage from "../../public/programm.webp"
export const metadata: Metadata = {
  title: t('landing.title'),
  description: t('landing.metaDescription'),
  openGraph: {
    title: t('landing.title'),
    description: t('landing.metaDescription'),
    url: "https://tick-done.com/",
    siteName: "Tick-Done",
    images: [
      {
        url: "/logo-og.png", // Place a logo-og.png in public/ for best results
        width: 1200,
        height: 630,
        alt: "Tick-Done Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: t('landing.title'),
    description: t('landing.metaDescription'),
    images: ["/logo-og.png"],
    site: "@tickdoneapp",
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value === 'de' ? 'de' : 'en';

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F9FAFB] text-[#1F2A44] font-sans">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 px-4 bg-white border-b border-gray-100">
          <div className="flex flex-col items-center gap-4 max-w-2xl w-full">
            <div className="flex items-center gap-3">
              {/* Logo Placeholder */}
              <div className="bg-[#FF5C2A] rounded-lg p-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden><rect width="40" height="40" rx="8" fill="#FF5C2A"/><path d="M12 21l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">Tick-Done</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mt-2">{t('hero.claim', lang)}</h1>
            <p className="text-lg text-center text-gray-600 max-w-xl">{t('hero.subline', lang)}</p>
            <a href="https://app.tick-done.com" className="mt-6 px-8 py-3 bg-[#FF5C2A] text-white rounded-full font-semibold shadow hover:bg-[#e04e1e] transition">{t('hero.cta', lang)}</a>
            {/* Screenshot/Animation Placeholder */}
            <div className="mt-8 w-full flex justify-center">
              <Image
                src={projektImage}
                alt={t('hero.screenshotAlt', lang)}
                className="rounded-xl shadow-lg"
              />  
            </div>
          </div>
        </section>

        {/* Problem–Solution Section */}
        <section className="py-16 px-4 bg-[#F9FAFB] border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('problem.title', lang)}</h2>
            <p className="text-center text-gray-700">{t('problem.description', lang)}</p>
            <div className="flex flex-wrap gap-6 justify-center mt-4">
              {/* Vorteile mit Icons */}
              <div className="flex flex-col items-center gap-2 w-40">
                <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF5C2A"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                <span className="font-medium text-sm text-center">{t('problem.benefit1', lang)}</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-40">
                <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF5C2A"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                <span className="font-medium text-sm text-center">{t('problem.benefit2', lang)}</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-40">
                <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF5C2A"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                <span className="font-medium text-sm text-center">{t('problem.benefit3', lang)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 px-4 bg-white border-b border-gray-100" id="features">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('features.title', lang)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
              <FeatureCard icon="📝" label={t('features.checklists', lang)} />
              <FeatureCard icon="📈" label={t('features.progress', lang)} />
              <FeatureCard icon="⏰" label={t('features.reminders', lang)} />
              <FeatureCard icon="🤝" label={t('features.collaboration', lang)} />
            </div>
          </div>
        </section>

        {/* Demo Video / Screenshot Carousel */}
        <section className="py-16 px-4 bg-[#F9FAFB] border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('demo.title', lang)}</h2>
            <div className="w-full flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-[320px] h-[180px] flex items-center justify-center text-gray-400">{t('demo.placeholder', lang)}</div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white border-b border-gray-100" id="pricing">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('pricing.title', lang)}</h2>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center mt-6">
              <PricingCard plan={"free"} lang={lang} />
              <PricingCard plan={"pro"} lang={lang} />
            </div>
            <div className="mt-6 w-full max-w-2xl">
              <ComparisonTable lang={lang} />
            </div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-16 px-4 bg-[#F9FAFB] border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('security.title', lang)}</h2>
            <div className="flex flex-wrap gap-6 justify-center mt-4">
              <TrustCard label={t('security.dsgvo', lang)} />
              <TrustCard label={t('security.noDataSharing', lang)} />
              <TrustCard label={t('security.madeInEU', lang)} />
            </div>
          </div>
        </section>

        {/* FAQ + Footer */}
        <section className="py-16 px-4 bg-white border-t border-gray-100" id="faq"> 
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-bold text-center">{t('faq.title', lang)}</h2>
            <FAQList lang={lang} />
          </div>
        </section>
      </div>
      <Footer lang={lang} />
      <CookieBar />
    </>
  );
}

function FeatureCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-[#F9FAFB] rounded-lg shadow-sm border border-gray-100">
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-center text-sm">{label}</span>
    </div>
  );
}

function PricingCard({ plan, lang }: { plan: "free" | "pro"; lang: 'en' | 'de' }) {
  // Placeholder, will use translation keys
  const isPro = plan === "pro";
  return (
    <div className="flex-1 p-6 bg-[#F9FAFB] rounded-lg shadow border border-gray-200 flex flex-col items-center relative">
      <div className="text-xl font-bold mb-2 flex items-center gap-2">
        {isPro && (
          <span className="inline-block bg-yellow-400 text-xs text-white font-semibold px-2 py-0.5 rounded-full align-middle animate-pulse">
            {t('pricing.comingSoon', lang)}
          </span>
        )}
        {plan === "free" ? t('pricing.free', lang) : t('pricing.pro', lang)}
      </div>
      <div className="text-2xl font-extrabold mb-4">{plan === "free" ? t('pricing.freePrice', lang) : t('pricing.proPrice', lang)}</div>
      <ul className="text-sm text-gray-700 mb-6 list-disc list-inside">
        <li>{plan === "free" ? t('pricing.freeFeature1', lang) : t('pricing.proFeature1', lang)}</li>
        <li>{plan === "free" ? t('pricing.freeFeature2', lang) : t('pricing.proFeature2', lang)}</li>
      </ul>
      {isPro ? (
        <span
          className="mt-auto px-6 py-2 rounded-full font-semibold shadow transition bg-gray-300 text-gray-500 cursor-not-allowed select-none text-center"
          aria-disabled="true"
        >
          {t('pricing.cta', lang)}
        </span>
      ) : (
        <a
          href="https://app.tick-done.com/sign-in"
          className="mt-auto px-6 py-2 bg-[#FF5C2A] text-white rounded-full font-semibold shadow hover:bg-[#e04e1e] transition"
        >
          {t('pricing.cta', lang)}
        </a>
      )}
    </div>
  );
}

function ComparisonTable({ lang }: { lang: 'en' | 'de' }) {
  // Placeholder, will use translation keys
  return (
    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-[#F9FAFB]">
        <tr>
          <th className="p-2 text-left font-semibold">{t('pricing.feature', lang)}</th>
          <th className="p-2 font-semibold">{t('pricing.free', lang)}</th>
          <th className="p-2 font-semibold">{t('pricing.pro', lang)}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">{t('pricing.comparison1', lang)}</td>
          <td className="p-2 text-center">✔️</td>
          <td className="p-2 text-center">✔️</td>
        </tr>
        <tr>
          <td className="p-2">{t('pricing.comparison2', lang)}</td>
          <td className="p-2 text-center">–</td>
          <td className="p-2 text-center">✔️</td>
        </tr>
      </tbody>
    </table>
  );
}

function TrustCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[120px]">
      <span className="text-2xl text-[#FF5C2A]">✔️</span>
      <span className="font-medium text-center text-sm">{label}</span>
    </div>
  );
}

function FAQList({ lang }: { lang: 'en' | 'de' }) {
  // Placeholder, will use translation keys
  return (
    <ul className="w-full flex flex-col gap-4">
      <li>
        <details className="group">
          <summary className="cursor-pointer font-semibold text-[#1F2A44] group-open:text-[#FF5C2A] transition">{t('faq.q1', lang)}</summary>
          <div className="mt-2 text-gray-700 text-sm">{t('faq.a1', lang)}</div>
        </details>
      </li>
      <li>
        <details className="group">
          <summary className="cursor-pointer font-semibold text-[#1F2A44] group-open:text-[#FF5C2A] transition">{t('faq.q2', lang)}</summary>
          <div className="mt-2 text-gray-700 text-sm">{t('faq.a2', lang)}</div>
        </details>
      </li>
    </ul>
  );
}

function Footer({ lang }: { lang: 'en' | 'de' }) {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF5C2A] rounded-lg p-1.5">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden><rect width="40" height="40" rx="8" fill="#FF5C2A"/><path d="M12 21l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-lg font-bold tracking-tight">Tick-Done</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">{t('security.madeInEU', lang)} • {t('security.dsgvo', lang)}</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-[#FF5C2A] transition">{t('features.title', lang)}</a>
          <a href="#pricing" className="hover:text-[#FF5C2A] transition">{t('pricing.title', lang)}</a>
          <a href="#faq" className="hover:text-[#FF5C2A] transition">{t('faq.title', lang)}</a>
          <a href="/impressum" className="hover:text-[#FF5C2A] transition">{t('footer.impressum', lang)}</a>
          <a href="/datenschutz" className="hover:text-[#FF5C2A] transition">{t('footer.datenschutz', lang)}</a>
          <a href="/agb" className="hover:text-[#FF5C2A] transition">{t('footer.agb', lang)}</a>
        </nav>
      </div>
      <div className="border-t border-gray-100 text-xs text-gray-400 py-4 text-center">
        &copy; {new Date().getFullYear()} Tick-Done. {t('footer.rights', lang)}
      </div>
    </footer>
  );
}
