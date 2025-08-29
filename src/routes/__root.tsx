import { createRootRoute, Outlet } from "@tanstack/react-router";
import { t } from "../lib/translations";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import CookieBar from "../components/CookieBar";
import "../app.css";
import { useState } from "react";

/**
 * Renders the main site header with navigation, logo, language switcher, and call-to-action button.
 */
function Header() {
  const { currentLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center gap-3">
              <div className="bg-[#FF5C2A] rounded-lg p-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden
                >
                  <rect width="40" height="40" rx="8" fill="#FF5C2A" />
                  <path
                    d="M12 21l6 6 10-12"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Tick-Done
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors"
            >
              {t("features.title", currentLang)}
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors"
            >
              {t("pricing.title", currentLang)}
            </a>
            <a
              href="/support"
              className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors"
            >
              {t("support.title", currentLang)}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://tick-done.app"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#FF5C2A] text-white font-semibold rounded-lg hover:bg-[#E5471A] transition-colors"
            >
              {currentLang === "de" ? "Anmelden" : "Sign In"}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#FF5C2A] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200/60">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === "de" ? "Features" : "Features"}
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === "de" ? "Preise" : "Pricing"}
              </a>
              <a
                href="/support"
                className="text-gray-600 hover:text-[#FF5C2A] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === "de" ? "Support" : "Support"}
              </a>
              <a
                href="https://tick-done.app"
                className="inline-flex items-center justify-center px-4 py-3 bg-[#FF5C2A] text-white font-semibold rounded-lg hover:bg-[#E5471A] transition-colors mt-2"
              >
                {currentLang === "de" ? "Anmelden" : "Sign In"}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const { currentLang } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FF5C2A] rounded-lg p-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden
                >
                  <rect width="40" height="40" rx="8" fill="#FF5C2A" />
                  <path
                    d="M12 21l6 6 10-12"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Tick-Done</span>
            </div>
            <p className="text-gray-400">
              {currentLang === "de"
                ? "Professionelles Aufgaben-Management für moderne Teams."
                : "Professional task management for modern teams."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {currentLang === "de" ? "Rechtliches" : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Impressum" : "Imprint"}
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Datenschutz" : "Privacy"}
                </a>
              </li>
              <li>
                <a
                  href="/agb"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "AGB" : "Terms"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {currentLang === "de" ? "Produkt" : "Product"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Features" : "Features"}
                </a>
              </li>
              <li>
                <a
                  href="/encryption"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Sicherheit" : "Security"}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Preise" : "Pricing"}
                </a>
              </li>
              <li>
                <a
                  href="https://tick-done.app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Anmelden" : "Sign In"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {currentLang === "de" ? "Hilfe" : "Help"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {currentLang === "de" ? "Support & FAQ" : "Support & FAQ"}
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="mailto:support@tick-done.app"
                  className="hover:text-white transition-colors"
                >
                  support@tick-done.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024{" "}
            <a
              href="https://tick-done.com"
              className="hover:text-white transition-colors"
            >
              Tick-Done
            </a>
            .{" "}
            {currentLang === "de"
              ? "Alle Rechte vorbehalten."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}

export const Route = createRootRoute({
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>Tick-Done</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <Outlet />
          <CookieBar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  ),
  errorComponent: ({ error }) => {
    const message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (import.meta.env.DEV && error && error instanceof Error) {
      details = error.message;
      stack = error.stack;
    }

    return (
      <main className="pt-16 p-4 container mx-auto">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    );
  },
});
