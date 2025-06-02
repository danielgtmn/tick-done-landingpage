import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import LanguageSwitcher from "@/components/language-switcher";
import { cookies } from "next/headers";
import { t } from "../lib/translations";
import ConditionalComingSoon from "./ConditionalComingSoon";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header({ lang }: { lang: 'en' | 'de' }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <div className="bg-[#FF5C2A] rounded-lg p-1.5">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden><rect width="40" height="40" rx="8" fill="#FF5C2A"/><path d="M12 21l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Tick-Done</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><a href="#features" className="hover:text-[#FF5C2A] transition">{t('features.title', lang)}</a></li>
          <li><a href="#pricing" className="hover:text-[#FF5C2A] transition">{t('pricing.title', lang)}</a></li>
          <li><a href="#faq" className="hover:text-[#FF5C2A] transition">{t('faq.title', lang)}</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href="https://app.tick-done.com" className="ml-2 px-5 py-2 bg-[#FF5C2A] text-white rounded-full font-semibold shadow hover:bg-[#e04e1e] transition text-sm">{t('hero.cta', lang)}</a>
        </div>
      </nav>
    </header>
  );
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
  
    const lang = cookieStore.get('lang')?.value === 'de' ? 'de' : 'en';

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalComingSoon>
          <Header lang={lang} />
          <Analytics />
          {children}
        </ConditionalComingSoon>
      </body>
    </html>
  );
}
