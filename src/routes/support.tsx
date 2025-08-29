import { createFileRoute, Link } from "@tanstack/react-router";
import { t, type Language } from "../lib/translations";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Renders the support page with FAQ and help information.
 */
function SupportPage() {
  const { currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 px-4 bg-white border-b border-gray-200 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {currentLang === "de" ? "Hilfe & Support" : "Help & Support"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentLang === "de"
              ? "Hier findest du Antworten auf häufig gestellte Fragen und Hilfe bei der Nutzung von Tick-Done."
              : "Find answers to frequently asked questions and get help using Tick-Done."}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {currentLang === "de"
                ? "Häufig gestellte Fragen"
                : "Frequently Asked Questions"}
            </h2>
          </div>
          <FAQList lang={currentLang} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {currentLang === "de"
              ? "Weitere Hilfe benötigt?"
              : "Need more help?"}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {currentLang === "de"
              ? "Unser Support-Team hilft dir gerne weiter. Schreibe uns einfach eine E-Mail."
              : "Our support team is happy to help. Just send us an email."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:support@tick-done.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5C2A] text-white font-semibold text-lg rounded-xl hover:bg-[#E5471A] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {currentLang === "de" ? "E-Mail senden" : "Send Email"}
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold text-lg rounded-xl border-2 border-gray-200 hover:border-[#FF5C2A] hover:text-[#FF5C2A] transition-all duration-200 hover:shadow-lg"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {currentLang === "de" ? "Zurück zur Startseite" : "Back to Home"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQList({ lang }: { lang: Language }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">
          {t("faq.question1", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer1", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">
          {t("faq.question2", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer2", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">
          {t("faq.question3", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer3", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          {t("faq.question4", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer4", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {t("faq.question5", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer5", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          {t("faq.question6", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer6", lang)}</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-indigo-500">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-indigo-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
          {t("faq.question7", lang)}
        </h3>
        <p className="text-gray-700">{t("faq.answer7", lang)}</p>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/support")({
  component: SupportPage,
});
