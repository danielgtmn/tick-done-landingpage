// Minimal i18n translation utility for the landing page
// Extend this with more keys and languages as needed

type Language = keyof typeof translations;

const translations = {
  en: {
    support: {
      title: "Support",
    },
    hero: {
      claim: "Your tasks. Ticked. Done.",
      subline:
        "Powerful task management with Kanban boards, team collaboration, and real-time sync. Perfect for teams, freelancers, and agencies.",
      cta: "Start now for free",
      screenshotAlt: "Tick-Done App Screenshot",
    },
    problem: {
      title: "Tired of task management chaos?",
      description:
        "No more spreadsheet mess or lost progress. Tick-Done offers professional Kanban boards, team collaboration, and seamless workflow management.",
      benefit1: "Visual Kanban boards with drag & drop",
      benefit2: "Real-time team collaboration & sharing",
      benefit3: "Professional PDF exports & data backup",
    },
    features: {
      title: "Features",
      checklists: "Interactive Checklists",
      kanban: "Kanban Boards",
      teams: "Team Collaboration",
      sharing: "Public & Private Sharing",
      pdfExport: "PDF Export",
      favorites: "Favorites System",
      dragDrop: "Drag & Drop",
      realtime: "Real-time Updates",
      multilingual: "Multi-language Support",
      progress: "Advanced Progress Tracking",
      customizable: "Customizable Views",
      emailInvites: "Email Invitations",
      dataExport: "Data Export & Backup",
      encryption: "End-to-End Encryption",
      zeroKnowledge: "Zero-Knowledge Architecture",
      clientSideEncryption: "Client-Side Encryption",
      aes256: "AES-256 Encryption",
      rsaKeyPairs: "RSA Key Pairs",
      pbkdf2: "PBKDF2 Key Derivation",
      secureSharing: "Secure Team Sharing",
    },
    demo: {
      title: "See Tick-Done in Action",
      placeholder: "[Demo video or carousel here]",
    },
    trust: {
      title: "Trusted by teams worldwide",
      subtitle: "Security and privacy are at the core of everything we do.",
      gdpr: "GDPR Compliant",
      noAds: "No Ads",
      privacy: "Privacy First",
      support: "24/7 Support",
    },
    encryption: {
      title: "Bank-Level Security & Privacy",
      subtitle:
        "Your data is encrypted end-to-end with zero-knowledge architecture. Even we cannot access your sensitive information.",
      endToEnd: "End-to-End Encryption",
      endToEndDesc:
        "All your tasks and checklists are encrypted on your device using AES-256 encryption before being sent to our servers.",
      zeroKnowledge: "Zero-Knowledge Architecture",
      zeroKnowledgeDesc:
        "We cannot decrypt your data - only you have the keys to your information. Your privacy is guaranteed.",
      clientSide: "Client-Side Encryption",
      clientSideDesc:
        "Encryption happens in your browser using industry-standard AES-256 encryption with PBKDF2 key derivation.",
      teamSharing: "Secure Team Sharing",
      teamSharingDesc:
        "Share encrypted data with your team using RSA-2048 key pairs for maximum security and seamless collaboration.",
      technicalSpecs: "Technical Specifications",
      aes256Title: "AES-256-GCM Encryption",
      aes256Desc:
        "Military-grade symmetric encryption with authenticated encryption mode for data integrity.",
      rsaTitle: "RSA-2048 Key Pairs",
      rsaDesc:
        "Asymmetric encryption for secure key exchange and team collaboration.",
      pbkdf2Title: "PBKDF2 Key Derivation",
      pbkdf2Desc:
        "100,000+ iterations with SHA-256 for password-based key derivation.",
      webCryptoTitle: "Web Crypto API",
      webCryptoDesc:
        "Native browser cryptography for maximum security and performance.",
    },
    security: {
      madeInEU: "Made in EU",
      dsgvo: "GDPR Compliant",
    },
    faq: {
      title: "Frequently Asked Questions",
      question1: "Is Tick-Done free to use?",
      answer1:
        "Yes! Tick-Done offers a comprehensive free plan with unlimited checklists, Kanban boards, team collaboration, and all core features. No credit card required.",
      question2: "How does team collaboration work?",
      answer2:
        "Teams can share checklists, work together in real-time, assign tasks, and track progress. You can invite team members via email and manage permissions easily.",
      question3: "Can I export my data?",
      answer3:
        "Absolutely! You can export your checklists as PDF files, and we're working on additional export formats. Your data is always yours to keep.",
      question4: "How secure is my data with end-to-end encryption?",
      answer4:
        "Your data is encrypted on your device using AES-256-GCM encryption before being sent to our servers. We use a zero-knowledge architecture, meaning we cannot decrypt your data - only you have the keys. This ensures maximum privacy and security.",
      question5: "Can my team access encrypted data?",
      answer5:
        "Yes! You can securely share encrypted data with your team using RSA-2048 key pairs. When you share a checklist, the encryption keys are securely exchanged between team members, maintaining end-to-end encryption throughout the collaboration.",
      question6: "What encryption algorithms do you use?",
      answer6:
        "We use industry-standard encryption: AES-256-GCM for symmetric encryption, RSA-2048 for asymmetric key exchange, and PBKDF2 with 100,000+ iterations for password-based key derivation. All encryption happens client-side using the Web Crypto API.",
      question7: "How does password-based encryption work?",
      answer7:
        "Your encryption password is used to derive a cryptographic key using PBKDF2 with SHA-256 and 100,000+ iterations. This key encrypts your data locally before it leaves your device. We never see your password or encryption keys.",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose the plan that works best for you and your team.",
      free: "Free",
      pro: "Pro",
      freePrice: "$0/mo",
      proPrice: "$9/mo",
      freeFeature1: "Unlimited checklists",
      freeFeature2: "Basic sharing & team collaboration",
      freeFeature3: "Kanban boards & drag-and-drop",
      freeFeature4: "PDF export & favorites",
      proFeature1: "AI agent & templates",
      proFeature2: "Advanced analytics & reporting",
      proFeature3: "Priority support",
      proFeature4: "Custom integrations",
      cta: "Choose plan",
      feature: "Feature",
      comparison1: "Unlimited checklists",
      comparison2: "Team collaboration",
      comparison3: "Kanban boards",
      comparison4: "PDF export",
      comparison5: "Public sharing",
      comparison6: "AI agent & templates",
      comparison7: "Advanced analytics",
      comingSoon: "Coming soon",
    },
    footer: {
      impressum: "Imprint",
      datenschutz: "Privacy Policy",
      agb: "Terms & Conditions",
      rights: "All rights reserved.",
    },
    impressum: {
      title: "Imprint",
      content:
        "Company: Gietmanic Daniel Gietmann\nAddress: Siegburger Straße 129 B, 53229 Bonn, Germany\nEmail: info@tick-done.com",
      back: "Back to homepage",
      metaDescription:
        "Legal information and company details for Tick-Done (Imprint).",
    },
    privacy: {
      title: "Privacy Policy",
      content: `
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
      metaDescription:
        "How Tick-Done protects your privacy and handles your data (GDPR compliant).",
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
      metaDescription:
        "Terms and conditions for using Tick-Done. Please read before using our service.",
    },
    landing: {
      title: "Tick-Done – Professional Task Management with Kanban Boards",
      metaDescription:
        "Professional task management with Kanban boards, team collaboration, PDF export, and real-time sync. Perfect for teams, freelancers, and agencies. GDPR compliant.",
    },
    cookieBar: {
      text: "We use a cookie only to remember your language preference.",
      textConsent:
        "We use a cookie only to remember your language preference. By clicking OK, you consent to this cookie.",
      accept: "OK, understood",
    },
    notFound: {
      title: "Page not found",
      description: "Sorry, we couldn't find the page you're looking for.",
      backHome: "Back to homepage",
    },
  },
  de: {
    support: {
      title: "Support",
    },
    hero: {
      claim: "Deine Aufgaben. Abgehakt. Erledigt.",
      subline:
        "Leistungsstarkes Aufgaben-Management mit Kanban-Boards, Team-Zusammenarbeit und Echtzeit-Sync. Perfekt für Teams, Freelancer und Agenturen.",
      cta: "Jetzt kostenlos starten",
      screenshotAlt: "Tick-Done App Screenshot",
    },
    problem: {
      title: "Genug vom Aufgaben-Management-Chaos?",
      description:
        "Nie wieder Excel-Wirrwarr oder verlorener Fortschritt. Tick-Done bietet professionelle Kanban-Boards, Team-Zusammenarbeit und nahtloses Workflow-Management.",
      benefit1: "Visuelle Kanban-Boards mit Drag & Drop",
      benefit2: "Echtzeit Team-Zusammenarbeit & Teilen",
      benefit3: "Professionelle PDF-Exports & Daten-Backup",
    },
    features: {
      title: "Funktionen",
      checklists: "Interaktive Checklisten",
      kanban: "Kanban-Boards",
      teams: "Team-Zusammenarbeit",
      sharing: "Öffentliches & Privates Teilen",
      pdfExport: "PDF-Export",
      favorites: "Favoriten-System",
      dragDrop: "Drag & Drop",
      realtime: "Echtzeit-Updates",
      multilingual: "Mehrsprachige Unterstützung",
      progress: "Erweiterte Fortschrittsanzeige",
      customizable: "Anpassbare Ansichten",
      emailInvites: "E-Mail-Einladungen",
      dataExport: "Datenexport & Backup",
      encryption: "End-to-End-Verschlüsselung",
      zeroKnowledge: "Zero-Knowledge-Architektur",
      clientSideEncryption: "Client-seitige Verschlüsselung",
      aes256: "AES-256-Verschlüsselung",
      rsaKeyPairs: "RSA-Schlüsselpaare",
      pbkdf2: "PBKDF2-Schlüsselableitung",
      secureSharing: "Sicheres Team-Teilen",
    },
    demo: {
      title: "Tick-Done in Aktion",
      placeholder: "[Demo-Video oder Karussell hier]",
    },
    trust: {
      title: "Vertraut von Teams weltweit",
      subtitle:
        "Sicherheit und Privatsphäre stehen im Mittelpunkt von allem was wir tun.",
      gdpr: "DSGVO-konform",
      noAds: "Keine Werbung",
      privacy: "Datenschutz First",
      support: "24/7 Support",
    },
    encryption: {
      title: "Bank-Level Sicherheit & Privatsphäre",
      subtitle:
        "Ihre Daten werden End-to-End verschlüsselt mit Zero-Knowledge-Architektur. Selbst wir können nicht auf Ihre sensiblen Informationen zugreifen.",
      endToEnd: "End-to-End-Verschlüsselung",
      endToEndDesc:
        "Alle Ihre Aufgaben und Checklisten werden auf Ihrem Gerät mit AES-256-Verschlüsselung verschlüsselt, bevor sie an unsere Server gesendet werden.",
      zeroKnowledge: "Zero-Knowledge-Architektur",
      zeroKnowledgeDesc:
        "Wir können Ihre Daten nicht entschlüsseln - nur Sie haben die Schlüssel zu Ihren Informationen. Ihre Privatsphäre ist garantiert.",
      clientSide: "Client-seitige Verschlüsselung",
      clientSideDesc:
        "Die Verschlüsselung erfolgt in Ihrem Browser mit branchenüblicher AES-256-Verschlüsselung und PBKDF2-Schlüsselableitung.",
      teamSharing: "Sicheres Team-Teilen",
      teamSharingDesc:
        "Teilen Sie verschlüsselte Daten mit Ihrem Team über RSA-2048-Schlüsselpaare für maximale Sicherheit und nahtlose Zusammenarbeit.",
      technicalSpecs: "Technische Spezifikationen",
      aes256Title: "AES-256-GCM-Verschlüsselung",
      aes256Desc:
        "Militärische symmetrische Verschlüsselung mit authentifiziertem Verschlüsselungsmodus für Datenintegrität.",
      rsaTitle: "RSA-2048-Schlüsselpaare",
      rsaDesc:
        "Asymmetrische Verschlüsselung für sicheren Schlüsselaustausch und Team-Zusammenarbeit.",
      pbkdf2Title: "PBKDF2-Schlüsselableitung",
      pbkdf2Desc:
        "100.000+ Iterationen mit SHA-256 für passwort-basierte Schlüsselableitung.",
      webCryptoTitle: "Web Crypto API",
      webCryptoDesc:
        "Native Browser-Kryptographie für maximale Sicherheit und Performance.",
    },
    security: {
      madeInEU: "Made in EU",
      dsgvo: "DSGVO-konform",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      question1: "Ist Tick-Done kostenlos nutzbar?",
      answer1:
        "Ja! Tick-Done bietet einen umfassenden kostenlosen Plan mit unbegrenzten Checklisten, Kanban-Boards, Team-Zusammenarbeit und allen Kernfunktionen. Keine Kreditkarte erforderlich.",
      question2: "Wie funktioniert die Team-Zusammenarbeit?",
      answer2:
        "Teams können Checklisten teilen, in Echtzeit zusammenarbeiten, Aufgaben zuweisen und Fortschritte verfolgen. Du kannst Teammitglieder per E-Mail einladen und Berechtigungen einfach verwalten.",
      question3: "Kann ich meine Daten exportieren?",
      answer3:
        "Absolut! Du kannst deine Checklisten als PDF-Dateien exportieren, und wir arbeiten an zusätzlichen Exportformaten. Deine Daten gehören immer dir.",
      question4: "Wie sicher sind meine Daten mit End-to-End-Verschlüsselung?",
      answer4:
        "Ihre Daten werden auf Ihrem Gerät mit AES-256-GCM-Verschlüsselung verschlüsselt, bevor sie an unsere Server gesendet werden. Wir verwenden eine Zero-Knowledge-Architektur, das bedeutet, wir können Ihre Daten nicht entschlüsseln - nur Sie haben die Schlüssel. Dies gewährleistet maximale Privatsphäre und Sicherheit.",
      question5: "Kann mein Team auf verschlüsselte Daten zugreifen?",
      answer5:
        "Ja! Sie können verschlüsselte Daten sicher mit Ihrem Team über RSA-2048-Schlüsselpaare teilen. Wenn Sie eine Checkliste teilen, werden die Verschlüsselungsschlüssel sicher zwischen den Teammitgliedern ausgetauscht, wodurch die End-to-End-Verschlüsselung während der gesamten Zusammenarbeit aufrechterhalten wird.",
      question6: "Welche Verschlüsselungsalgorithmen verwenden Sie?",
      answer6:
        "Wir verwenden branchenübliche Verschlüsselung: AES-256-GCM für symmetrische Verschlüsselung, RSA-2048 für asymmetrischen Schlüsselaustausch und PBKDF2 mit 100.000+ Iterationen für passwort-basierte Schlüsselableitung. Die gesamte Verschlüsselung erfolgt client-seitig über die Web Crypto API.",
      question7: "Wie funktioniert die passwort-basierte Verschlüsselung?",
      answer7:
        "Ihr Verschlüsselungspasswort wird verwendet, um einen kryptographischen Schlüssel mit PBKDF2, SHA-256 und 100.000+ Iterationen abzuleiten. Dieser Schlüssel verschlüsselt Ihre Daten lokal, bevor sie Ihr Gerät verlassen. Wir sehen niemals Ihr Passwort oder Ihre Verschlüsselungsschlüssel.",
    },
    pricing: {
      title: "Preise",
      subtitle:
        "Wähle den Plan, der am besten für dich und dein Team funktioniert.",
      free: "Kostenlos",
      pro: "Pro",
      freePrice: "0 €/Monat",
      proPrice: "9 €/Monat",
      freeFeature1: "Unbegrenzte Checklisten",
      freeFeature2: "Basis-Teilen & Team-Zusammenarbeit",
      freeFeature3: "Kanban-Boards & Drag-and-Drop",
      freeFeature4: "PDF-Export & Favoriten",
      proFeature1: "KI-Agent & Vorlagen",
      proFeature2: "Erweiterte Analysen & Berichte",
      proFeature3: "Prioritäts-Support",
      proFeature4: "Custom Integrationen",
      cta: "Plan wählen",
      feature: "Funktion",
      comparison1: "Unbegrenzte Checklisten",
      comparison2: "Team-Zusammenarbeit",
      comparison3: "Kanban-Boards",
      comparison4: "PDF-Export",
      comparison5: "Öffentliches Teilen",
      comparison6: "KI-Agent & Vorlagen",
      comparison7: "Erweiterte Analysen",
      comingSoon: "Demnächst",
    },
    footer: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      agb: "AGB",
      rights: "Alle Rechte vorbehalten.",
    },
    impressum: {
      title: "Impressum",
      content:
        "Unternehmen: Gietmanic Daniel Gietmann\nAdresse: Siegburger Straße 129 B, 53229 Bonn, Deutschland\nE-Mail: info@tick-done.com",
      back: "Zurück zur Startseite",
      metaDescription:
        "Rechtliche Informationen und Firmenangaben zu Tick-Done (Impressum).",
    },
    privacy: {
      title: "Datenschutzerklärung",
      content: `
1. Verantwortlicher
Gietmanic Daniel Gietmann
Siegburger Straße 129 B
53229 Bonn, Deutschland
E-Mail: info@tick-done.com

2. Datenverarbeitung
Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Ihre Daten werden ausschließlich nach den gesetzlichen Bestimmungen (DSGVO) verarbeitet.

3. Cookies
Wir verwenden nur ein Cookie, um Ihre Sprachpräferenz zu speichern. Dieses Cookie enthält keine persönlichen Daten.

4. Authentifizierung
Wir nutzen den Dienstleister Clerk (https://clerk.com) für die Benutzerauthentifizierung. Bei der Registrierung oder Anmeldung werden Ihre Daten von Clerk gemäß deren Datenschutzerklärung verarbeitet: https://clerk.com/privacy. Wir geben Ihre Daten nicht zu Authentifizierungszwecken an andere Dritte weiter.

5. Kontakt
Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

6. Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.

7. Kontakt für Datenschutz
Für Fragen zum Datenschutz wenden Sie sich bitte an info@tick-done.com.

Letzte Aktualisierung: Juni 2025`,
      back: "Zurück zur Startseite",
      metaDescription:
        "Wie Tick-Done Ihre Privatsphäre schützt und Ihre Daten behandelt (DSGVO-konform).",
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      content: `Allgemeine Geschäftsbedingungen

1. Geltungsbereich
Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung des Online-Dienstes Tick-Done, bereitgestellt von Gietmanic Daniel Gietmann, Siegburger Straße 129 B, 53229 Bonn, Deutschland (nachfolgend "Anbieter").

2. Vertragsgegenstand
Der Anbieter stellt eine Plattform zur Verwaltung von Checklisten und Aufgaben zur Verfügung. Der Service ist sowohl in einer kostenlosen als auch in einer kostenpflichtigen Version verfügbar.

3. Registrierung und Vertragsschluss
Die Nutzung der Plattform erfordert eine Registrierung. Mit Abschluss der Registrierung kommt ein Nutzungsvertrag zwischen dem Nutzer und dem Anbieter zustande.

4. Leistungen
Der Leistungsumfang bestimmt sich nach der aktuellen Leistungsbeschreibung auf der Website. Der Anbieter kann kostenlose Services jederzeit ändern oder einstellen.

5. Nutzerpflichten
Der Nutzer verpflichtet sich, keine rechtswidrigen Inhalte zu veröffentlichen und die Plattform nicht missbräuchlich zu nutzen.

6. Haftung
Der Anbieter haftet nur für Schäden, die aus vorsätzlichen oder grob fahrlässigen Pflichtverletzungen resultieren. Für Datenverlust haftet der Anbieter nur, wenn der Nutzer regelmäßige Datensicherungen durchgeführt hat.

7. Datenschutz
Es gilt die Datenschutzerklärung des Anbieters.

8. Laufzeit und Kündigung
Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien jederzeit ohne Angabe von Gründen gekündigt werden.

9. Änderungen der AGB
Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Nutzer werden über Änderungen rechtzeitig informiert.

10. Schlussbestimmungen
Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.

Stand: Juni 2025`,
      back: "Zurück zur Startseite",
      metaDescription:
        "Allgemeine Geschäftsbedingungen für die Nutzung von Tick-Done. Bitte lesen Sie diese vor der Nutzung.",
    },
    landing: {
      title:
        "Tick-Done – Professionelles Aufgaben-Management mit Kanban-Boards",
      metaDescription:
        "Professionelles Aufgaben-Management mit Kanban-Boards, Team-Zusammenarbeit, PDF-Export und Echtzeit-Sync. Perfekt für Teams, Freelancer und Agenturen. DSGVO-konform.",
    },
    cookieBar: {
      text: "Wir verwenden ein Cookie nur, um Ihre Sprachpräferenz zu speichern.",
      textConsent:
        "Wir verwenden ein Cookie nur, um Ihre Sprachpräferenz zu speichern. Durch Klicken auf OK stimmen Sie diesem Cookie zu.",
      accept: "OK, verstanden",
    },
    notFound: {
      title: "Seite nicht gefunden",
      description:
        "Entschuldigung, wir konnten die gesuchte Seite nicht finden.",
      backHome: "Zurück zur Startseite",
    },
  },
} as const;

/**
 * Gets the language from browser storage or falls back to default
 */
export function getClientLanguage(): Language {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("lang");
    if (stored === "de" || stored === "en") {
      return stored;
    }
    // Try to detect from browser
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === "de" ? "de" : "en";
  }
  return "en";
}

/**
 * Sets the language preference in browser storage
 */
export function setClientLanguage(lang: Language): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
  }
}

/**
 * Translation function that returns the translated text for a given key
 */
export function t(key: string, langOverride?: Language): string {
  const lang = langOverride || getClientLanguage();
  const keys = key.split(".");
  let current: any = translations[lang];

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      // Fallback to English if key not found
      current = translations.en;
      for (const fallbackKey of keys) {
        if (current && typeof current === "object" && fallbackKey in current) {
          current = current[fallbackKey];
        } else {
          return `Missing translation: ${key}`;
        }
      }
      break;
    }
  }

  return typeof current === "string" ? current : `Missing translation: ${key}`;
}

export type { Language };
