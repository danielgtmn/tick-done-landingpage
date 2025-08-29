import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getClientLanguage, type Language } from "../lib/translations";

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage or browser preference
    const savedLang = localStorage.getItem("tick-done-language") as Language;
    if (savedLang && (savedLang === "de" || savedLang === "en")) {
      setCurrentLang(savedLang);
    } else {
      const browserLang = getClientLanguage();
      setCurrentLang(browserLang);
      localStorage.setItem("tick-done-language", browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("tick-done-language", lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
