import { useState, useEffect } from "react";
import { t, getClientLanguage } from "../lib/translations";

/**
 * Cookie consent bar component that informs users about language preference cookie usage.
 *
 * Shows a cookie consent message that can be dismissed by the user.
 * Only appears once per user session and respects their consent choice.
 */
export default function CookieBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState(getClientLanguage());

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
    setCurrentLang(getClientLanguage());
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          {t("cookieBar.textConsent", currentLang)}
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-2 bg-[#FF5C2A] text-white rounded-full font-semibold hover:bg-[#e04e1e] transition text-sm whitespace-nowrap"
        >
          {t("cookieBar.accept", currentLang)}
        </button>
      </div>
    </div>
  );
}
