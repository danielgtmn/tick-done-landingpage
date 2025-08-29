import { useLanguage } from "../contexts/LanguageContext";
import { setClientLanguage, type Language } from "../lib/translations";

/**
 * Language switcher component that allows users to toggle between English and German.
 *
 * Uses the LanguageContext to manage language state globally across the application.
 * The language preference is automatically persisted in localStorage.
 */
export default function LanguageSwitcher() {
  const { currentLang, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = currentLang === "en" ? "de" : "en";
    setClientLanguage(newLang);
    setLanguage(newLang);
    // Force page reload to update all translations
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium text-[#1F2A44] bg-[#F9FAFB] border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${currentLang === "en" ? "German" : "English"}`}
    >
      {currentLang === "en" ? "DE" : "EN"}
    </button>
  );
}
