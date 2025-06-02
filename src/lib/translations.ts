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
      content: "Company: Gietmanic Daniel Gietmann\nAddress: Siegburger Straße 129 B, 53229 Bonn, Germany\nEmail: info@tick-done.com",
      back: "Back to homepage",
      metaDescription: "Legal information and company details for Tick-Done (Imprint).",
    },
    privacy: {
      title: "Privacy Policy",
      content: `Privacy Policy

1. Controller
Gietmanic Daniel Gietmann
Siegburger Straße 129 B
53229 Bonn, Germany
Email: info@tick-done.com

2. Data Processing
We take the protection of your personal data seriously. Your data is processed exclusively in accordance with legal requirements (GDPR).

3. Cookies
We use only one cookie to save your language preference. This cookie does not contain any personal data.

4. Authentication
We use the service provider Clerk (https://clerk.com) for user authentication. When you register or log in, your data is processed by Clerk according to their privacy policy: https://clerk.com/privacy. We do not share your data with other third parties for authentication purposes.

5. Contact
If you contact us by email, your details will be stored for the purpose of processing the request and in case of follow-up questions. We do not share this data without your consent.

6. Your Rights
You have the right to information, correction, deletion, restriction of processing, data portability, and objection. If you believe that the processing of your data violates data protection law, you can complain to the competent supervisory authority.

7. Contact for Data Protection
For questions about data protection, please contact info@tick-done.com.

Last update: June 2025`,
      back: "Back to homepage",
      metaDescription: "How Tick-Done protects your privacy and handles your data (GDPR compliant).",
    },
    terms: {
      title: "Terms & Conditions",
      content: `Terms & Conditions

1. Scope
These Terms & Conditions (T&C) apply to the use of the online service Tick-Done, provided by Gietmanic Daniel Gietmann, Siegburger Straße 129 B, 53229 Bonn, Germany (hereinafter "Provider").

2. Subject of the Contract
The Provider offers a platform for managing checklists and tasks. The service is available in both a free and a paid version.

3. Registration and Conclusion of Contract
Use of the platform requires registration. Upon completion of registration, a user agreement is concluded between the user and the Provider.

4. Services
The scope of services is determined by the current service description on the website. The Provider may change or discontinue free services at any time.

5. User Obligations
The user agrees not to post any illegal content and not to misuse the platform.

6. Liability
The Provider is only liable for damages resulting from intentional or grossly negligent breaches of duty. The Provider is only liable for data loss if the user has performed regular data backups.

7. Data Protection
The Provider's privacy policy applies.

8. Duration and Termination
The contract is for an indefinite period and may be terminated by either party at any time without giving reasons.

9. Changes to the T&C
The Provider reserves the right to change these T&C at any time. Users will be informed of changes in good time.

10. Final Provisions
German law applies. Should individual provisions of these T&C be invalid, the validity of the remaining provisions shall remain unaffected.

Status: June 2025`,
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
      content: "Firma: Gietmanic Daniel Gietmann\nAdresse: Siegburger Straße 129 B, 53229 Bonn, Deutschland\nE-Mail: info@tick-done.com",
      back: "Zurück zur Startseite",
      metaDescription: "Rechtliche Informationen und Unternehmensdetails für Tick-Done (Impressum).",
    },
    privacy: {
      title: "Datenschutzerklärung",
      content: `Verantwortlicher:
Gietmanic Daniel Gietmann
Siegburger Straße 129 B
53229 Bonn
E-Mail: info@tick-done.com

1. Allgemeines zur Datenverarbeitung
Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG) verarbeitet.

2. Cookies
Wir verwenden nur ein Cookie, um Ihre Spracheinstellung zu speichern. Dieses Cookie enthält keine personenbezogenen Daten.

3. Authentifizierung
Für die Authentifizierung nutzen wir den Dienstleister Clerk (https://clerk.com). Bei der Registrierung und Anmeldung werden Ihre Daten von Clerk verarbeitet. Es gilt die Datenschutzerklärung von Clerk: https://clerk.com/privacy. Eine Weitergabe Ihrer Daten an andere Dritte zu Authentifizierungszwecken erfolgt nicht.

4. Kontaktaufnahme
Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

5. Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.

6. Kontakt für Datenschutzanfragen
Für Fragen zum Datenschutz wenden Sie sich bitte an info@tick-done.com.

Letzte Aktualisierung: Juni 2025`,
      back: "Zurück zur Startseite",
      metaDescription: "Wie Tick-Done Ihre Privatsphäre schützt und mit Daten umgeht (DSGVO-konform).",
    },
    terms: {
      title: "AGB",
      content: `Allgemeine Geschäftsbedingungen (AGB)

1. Geltungsbereich
Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung des Online-Dienstes Tick-Done, bereitgestellt von Gietmanic Daniel Gietmann, Siegburger Straße 129 B, 53229 Bonn (im Folgenden "Anbieter").

2. Vertragsgegenstand
Der Anbieter stellt eine Plattform zur Verwaltung von Checklisten und Aufgaben zur Verfügung. Die Nutzung ist in einer kostenlosen und einer kostenpflichtigen Version möglich.

3. Registrierung und Vertragsschluss
Die Nutzung der Plattform setzt eine Registrierung voraus. Mit Abschluss der Registrierung kommt ein Nutzungsvertrag zwischen dem Nutzer und dem Anbieter zustande.

4. Leistungen
Der Umfang der Leistungen ergibt sich aus der jeweils aktuellen Leistungsbeschreibung auf der Website. Der Anbieter ist berechtigt, kostenlose Leistungen jederzeit zu ändern oder einzustellen.

5. Pflichten des Nutzers
Der Nutzer verpflichtet sich, keine rechtswidrigen Inhalte einzustellen und die Plattform nicht missbräuchlich zu nutzen.

6. Haftung
Der Anbieter haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Für Datenverluste haftet der Anbieter nur, wenn der Nutzer eine regelmäßige Datensicherung durchgeführt hat.

7. Datenschutz
Es gilt die Datenschutzerklärung des Anbieters.

8. Vertragsdauer und Kündigung
Der Vertrag läuft auf unbestimmte Zeit und kann von beiden Seiten jederzeit ohne Angabe von Gründen gekündigt werden.

9. Änderungen der AGB
Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Über Änderungen wird der Nutzer rechtzeitig informiert.

10. Schlussbestimmungen
Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.

Stand: Juni 2025`,
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