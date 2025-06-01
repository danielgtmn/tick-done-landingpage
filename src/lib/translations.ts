// Minimal i18n translation utility for the landing page
// Extend this with more keys and languages as needed

type Language = keyof typeof translations;

const translations = {
  en: {
    hero: {
      claim: "Your tasks. Ticked. Done.",
      subline: "Modern checklists for teams, freelancers, and agencies. Organize, share, and complete tasks with ease.",
      cta: "Start now for free",
      screenshotPlaceholder: "[App screenshot here]",
    },
    problem: {
      title: "Tired of checklist chaos?",
      description: "No more spreadsheet mess or lost progress. Tick-Done helps you organize recurring workflows and collaborate efficiently.",
      benefit1: "Clear progress tracking",
      benefit2: "Share with your team or clients",
      benefit3: "AI-powered suggestions",
    },
    features: {
      title: "Features",
      checklists: "Interactive Checklists",
      progress: "Progress Tracking",
      reminders: "Reminders",
      collaboration: "Collaboration",
    },
    demo: {
      title: "See Tick-Done in Action",
      placeholder: "[Demo video or carousel here]",
    },
    pricing: {
      title: "Pricing",
      free: "Free",
      pro: "Pro",
      freePrice: "$0/mo",
      proPrice: "$9/mo",
      freeFeature1: "Unlimited checklists",
      freeFeature2: "Basic sharing",
      proFeature1: "AI agent & templates",
      proFeature2: "Advanced collaboration",
      cta: "Choose plan",
      feature: "Feature",
      comparison1: "Unlimited checklists",
      comparison2: "AI agent & templates",
      comingSoon: "Coming soon",
    },
    security: {
      title: "Security & Trust",
      dsgvo: "GDPR compliant",
      noDataSharing: "No data sharing",
      madeInEU: "Made in EU",
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Is Tick-Done really free?",
      a1: "Yes, you can use the basic features for free. Upgrade to Pro for advanced features.",
      q2: "Where is my data stored?",
      a2: "All data is stored securely on EU servers and is GDPR compliant.",
    },
    footer: {
      impressum: "Imprint",
      datenschutz: "Privacy Policy",
      agb: "Terms & Conditions",
      rights: "All rights reserved.",
    },
    impressum: {
      title: "Imprint",
      content: "This is a placeholder for the legal imprint (Impressum) required by law.\n\nCompany: Tick-Done\nAddress: Example Street 1, 12345 Berlin, Germany\nEmail: info@tick-done.com\n\nPlease replace this text with your actual legal information.",
      back: "Back to homepage",
      metaDescription: "Legal information and company details for Tick-Done (Imprint).",
    },
    privacy: {
      title: "Privacy Policy",
      content: "This is a placeholder for your privacy policy.\n\nWe take your privacy seriously. All data is stored securely and in compliance with GDPR.\n\nPlease replace this text with your actual privacy policy.",
      back: "Back to homepage",
      metaDescription: "How Tick-Done protects your privacy and handles your data (GDPR compliant).",
    },
    terms: {
      title: "Terms & Conditions",
      content: "This is a placeholder for your terms and conditions.\n\nBy using Tick-Done, you agree to our terms and conditions.\n\nPlease replace this text with your actual terms and conditions.",
      back: "Back to homepage",
      metaDescription: "Terms and conditions for using Tick-Done. Please read before using our service.",
    },
    landing: {
      title: "Tick-Done – Your tasks. Ticked. Done.",
      metaDescription: "Modern checklists for teams, freelancers, and agencies. Organize, share, and complete tasks with ease. GDPR compliant.",
    },
    cookieBar: {
      text: "We use a cookie only to remember your language preference.",
      textConsent: "We use a cookie only to remember your language preference. By clicking OK, you consent to this cookie.",
      accept: "OK, understood",
    },
    notFound: {
      title: "Page not found",
      description: "Sorry, we couldn't find the page you're looking for.",
      backHome: "Back to homepage",
    },
  },
  de: {
    hero: {
      claim: "Deine Aufgaben. Abgehakt. Erledigt.",
      subline: "Moderne Checklisten für Teams, Freelancer und Agenturen. Organisiere, teile und erledige Aufgaben einfach.",
      cta: "Jetzt kostenlos starten",
      screenshotPlaceholder: "[App-Screenshot hier]",
    },
    problem: {
      title: "Genug vom Checklisten-Chaos?",
      description: "Nie wieder Excel-Wirrwarr oder verlorener Fortschritt. Tick-Done hilft dir, wiederkehrende Abläufe zu organisieren und effizient zusammenzuarbeiten.",
      benefit1: "Klarer Fortschritts-Überblick",
      benefit2: "Teilen mit Team oder Kund:innen",
      benefit3: "KI-gestützte Vorschläge",
    },
    features: {
      title: "Funktionen",
      checklists: "Interaktive Checklisten",
      progress: "Fortschrittsanzeige",
      reminders: "Erinnerungen",
      collaboration: "Zusammenarbeit",
    },
    demo: {
      title: "Tick-Done in Aktion",
      placeholder: "[Demo-Video oder Karussell hier]",
    },
    pricing: {
      title: "Preise",
      free: "Kostenlos",
      pro: "Pro",
      freePrice: "0 €/Monat",
      proPrice: "9 €/Monat",
      freeFeature1: "Unbegrenzte Checklisten",
      freeFeature2: "Basis-Teilen",
      proFeature1: "KI-Agent & Vorlagen",
      proFeature2: "Erweiterte Zusammenarbeit",
      cta: "Plan wählen",
      feature: "Funktion",
      comparison1: "Unbegrenzte Checklisten",
      comparison2: "KI-Agent & Vorlagen",
      comingSoon: "Bald verfügbar",
    },
    security: {
      title: "Sicherheit & Vertrauen",
      dsgvo: "DSGVO-konform",
      noDataSharing: "Keine Datenweitergabe",
      madeInEU: "Made in EU",
    },
    faq: {
      title: "Häufige Fragen",
      q1: "Ist Tick-Done wirklich kostenlos?",
      a1: "Ja, die Basisfunktionen sind kostenlos. Für erweiterte Features kannst du auf Pro upgraden.",
      q2: "Wo werden meine Daten gespeichert?",
      a2: "Alle Daten werden sicher auf EU-Servern gespeichert und sind DSGVO-konform.",
    },
    footer: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      agb: "AGB",
      rights: "Alle Rechte vorbehalten.",
    },
    impressum: {
      title: "Impressum",
      content: "Dies ist ein Platzhalter für das gesetzlich vorgeschriebene Impressum.\n\nFirma: Tick-Done\nAdresse: Beispielstraße 1, 12345 Berlin, Deutschland\nE-Mail: info@tick-done.com\n\nBitte ersetzen Sie diesen Text durch Ihre tatsächlichen rechtlichen Angaben.",
      back: "Zurück zur Startseite",
      metaDescription: "Rechtliche Informationen und Unternehmensdetails für Tick-Done (Impressum).",
    },
    privacy: {
      title: "Datenschutzerklärung",
      content: "Dies ist ein Platzhalter für Ihre Datenschutzerklärung.\n\nWir nehmen den Datenschutz ernst. Alle Daten werden sicher und DSGVO-konform gespeichert.\n\nBitte ersetzen Sie diesen Text durch Ihre tatsächliche Datenschutzerklärung.",
      back: "Zurück zur Startseite",
      metaDescription: "Wie Tick-Done Ihre Privatsphäre schützt und mit Daten umgeht (DSGVO-konform).",
    },
    terms: {
      title: "AGB",
      content: "Dies ist ein Platzhalter für Ihre Allgemeinen Geschäftsbedingungen (AGB).\n\nMit der Nutzung von Tick-Done stimmen Sie unseren AGB zu.\n\nBitte ersetzen Sie diesen Text durch Ihre tatsächlichen AGB.",
      back: "Zurück zur Startseite",
      metaDescription: "Allgemeine Geschäftsbedingungen für die Nutzung von Tick-Done. Bitte vor Nutzung lesen.",
    },
    landing: {
      title: "Tick-Done – Deine Aufgaben. Abgehakt. Erledigt.",
      metaDescription: "Moderne Checklisten für Teams, Freelancer und Agenturen. Organisiere, teile und erledige Aufgaben einfach. DSGVO-konform.",
    },
    cookieBar: {
      text: "Wir verwenden nur ein Cookie, um deine Spracheinstellung zu speichern.",
      textConsent: "Wir verwenden nur ein Cookie, um deine Spracheinstellung zu speichern. Mit OK stimmst du diesem Cookie zu.",
      accept: "OK, verstanden",
    },
    notFound: {
      title: "Seite nicht gefunden",
      description: "Entschuldigung, die gesuchte Seite konnte nicht gefunden werden.",
      backHome: "Zurück zur Startseite",
    },
  },
};

// Default language for initial render
const DEFAULT_LANGUAGE: Language = "en";

// Server-side language detection (default: en)
export function getServerLanguage(): Language {
  return "en";
}

// Client-side language detection
export function getClientLanguage(): Language {
  if (typeof window === "undefined") return "en";
  
  const cookieMatch = document.cookie.match(/lang=(de|en)/);
  if (cookieMatch) return cookieMatch[1] as 'de' | 'en';
  
  const lang = navigator.language.slice(0, 2);
  if (lang === "de") return "de";
  
  return "en";
}

export function t(key: string, langOverride?: Language): string {
  const lang = langOverride || DEFAULT_LANGUAGE;
  const keys = key.split(".");
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (typeof value === 'object' && value !== null) {
      value = (value as Record<string, unknown>)[k];
    } else {
      value = undefined;
      break;
    }
  }
  return typeof value === "string" ? value : key;
} 