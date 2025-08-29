import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Renders the encryption feature page with detailed security information.
 */
function EncryptionPage() {
  const { currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {currentLang === "de"
              ? "Sicherheit & Verschlüsselung"
              : "Security & Encryption"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {currentLang === "de"
              ? "Deine Daten sind bei uns sicher. Wir verwenden modernste Verschlüsselung und speichern niemals deine Passwörter oder Inhalte im Klartext."
              : "Your data is safe with us. We use state-of-the-art encryption and never store your passwords or content in plain text."}
          </p>
        </div>
      </section>

      {/* Main Security Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {currentLang === "de"
                  ? "End-to-End Verschlüsselung"
                  : "End-to-End Encryption"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang === "de"
                  ? "Alle deine Daten werden bereits auf deinem Gerät verschlüsselt, bevor sie übertragen werden. Nur du hast Zugriff auf deine Inhalte."
                  : "All your data is encrypted on your device before transmission. Only you have access to your content."}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {currentLang === "de"
                  ? "Zero-Knowledge Architektur"
                  : "Zero-Knowledge Architecture"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang === "de"
                  ? "Wir können deine Daten nicht lesen, selbst wenn wir wollten. Deine Privatsphäre ist garantiert."
                  : "We cannot read your data, even if we wanted to. Your privacy is guaranteed."}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {currentLang === "de" ? "DSGVO-konform" : "GDPR Compliant"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang === "de"
                  ? "Wir halten uns strikt an die europäischen Datenschutzbestimmungen. Server stehen in Deutschland."
                  : "We strictly comply with European data protection regulations. Servers are located in Germany."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {currentLang === "de"
                ? "Wie funktioniert die Verschlüsselung?"
                : "How does encryption work?"}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLang === "de"
                ? "Ein einfacher Überblick über unsere Sicherheitsmaßnahmen"
                : "A simple overview of our security measures"}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === "de"
                    ? "Verschlüsselung auf deinem Gerät"
                    : "Encryption on your device"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentLang === "de"
                    ? "Bevor deine Daten das Gerät verlassen, werden sie mit einem starken Verschlüsselungsalgorithmus geschützt. Dein Passwort wird niemals übertragen."
                    : "Before your data leaves your device, it is protected with strong encryption algorithms. Your password is never transmitted."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === "de"
                    ? "Sichere Übertragung"
                    : "Secure transmission"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentLang === "de"
                    ? "Die verschlüsselten Daten werden über sichere HTTPS-Verbindungen übertragen. Zusätzliche Transportverschlüsselung schützt vor Abhörversuchen."
                    : "Encrypted data is transmitted over secure HTTPS connections. Additional transport encryption protects against eavesdropping attempts."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === "de"
                    ? "Sichere Speicherung"
                    : "Secure storage"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentLang === "de"
                    ? "Auf unseren Servern werden nur die verschlüsselten Daten gespeichert. Ohne deinen privaten Schlüssel sind sie für niemanden lesbar."
                    : "Only encrypted data is stored on our servers. Without your private key, they are unreadable to anyone."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {currentLang === "de"
                ? "Technische Standards"
                : "Technical Standards"}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLang === "de"
                ? "Wir verwenden bewährte und sichere Verschlüsselungsstandards"
                : "We use proven and secure encryption standards"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                {currentLang === "de"
                  ? "Bankstandard-Verschlüsselung"
                  : "Bank-grade encryption"}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLang === "de"
                  ? "Dieselben Sicherheitsstandards wie bei Online-Banking"
                  : "Same security standards as online banking"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                {currentLang === "de" ? "Sichere Schlüssel" : "Secure keys"}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLang === "de"
                  ? "Starke Schlüsselgenerierung und -verwaltung"
                  : "Strong key generation and management"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                {currentLang === "de" ? "Regelmäßige Audits" : "Regular audits"}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLang === "de"
                  ? "Kontinuierliche Sicherheitsüberprüfungen"
                  : "Continuous security reviews"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {currentLang === "de"
                ? "Häufige Fragen zur Sicherheit"
                : "Security FAQ"}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {currentLang === "de"
                  ? "Kann Tick-Done meine Daten lesen?"
                  : "Can Tick-Done read my data?"}
              </h3>
              <p className="text-gray-700">
                {currentLang === "de"
                  ? "Nein, das ist technisch unmöglich. Durch unsere Zero-Knowledge-Architektur werden alle Daten bereits auf deinem Gerät verschlüsselt. Wir haben keinen Zugriff auf deine unverschlüsselten Inhalte."
                  : "No, this is technically impossible. Through our zero-knowledge architecture, all data is encrypted on your device. We have no access to your unencrypted content."}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {currentLang === "de"
                  ? "Was passiert, wenn ich mein Passwort vergesse?"
                  : "What happens if I forget my password?"}
              </h3>
              <p className="text-gray-700">
                {currentLang === "de"
                  ? "Da wir dein Passwort nicht kennen, können wir es nicht zurücksetzen. Deshalb ist es wichtig, dein Passwort sicher aufzubewahren. Wir arbeiten an sicheren Wiederherstellungsoptionen."
                  : "Since we don't know your password, we cannot reset it. That's why it's important to keep your password safe. We are working on secure recovery options."}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {currentLang === "de"
                  ? "Wo werden meine Daten gespeichert?"
                  : "Where is my data stored?"}
              </h3>
              <p className="text-gray-700">
                {currentLang === "de"
                  ? "Alle Daten werden verschlüsselt auf Servern in Deutschland gespeichert. Wir halten uns strikt an die DSGVO und deutsche Datenschutzgesetze."
                  : "All data is stored encrypted on servers in Germany. We strictly comply with GDPR and German data protection laws."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FF5C2A] to-[#E5471A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {currentLang === "de"
              ? "Sicherheit ohne Kompromisse"
              : "Security without compromise"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {currentLang === "de"
              ? "Erlebe Task-Management mit höchsten Sicherheitsstandards. Deine Daten bleiben privat."
              : "Experience task management with the highest security standards. Your data stays private."}
          </p>
          <a
            href="https://tick-done.app"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF5C2A] font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {currentLang === "de"
              ? "Jetzt kostenlos testen"
              : "Try for free now"}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/encryption")({
  component: EncryptionPage,
});
