import { createFileRoute } from "@tanstack/react-router";
import { t } from "../lib/translations";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Renders the localized privacy policy page, displaying data protection information and a link to return to the home page.
 */
function PrivacyPage() {
  const { currentLang } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-4 py-16 pt-24">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-8 border border-gray-100">
        <h1 className="text-2xl text-[#1F2A44] font-bold mb-4">
          {t("privacy.title", currentLang)}
        </h1>
        <div className="text-gray-700 text-sm mb-8 whitespace-pre-line">
          {t("privacy.content", currentLang)}
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/datenschutz")({
  component: PrivacyPage,
});
