import { createFileRoute } from "@tanstack/react-router";
import { t, type Language } from "../lib/translations";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Renders the Tick-Done landing page with full internationalization support.
 */
function IndexPage() {
  const { currentLang } = useLanguage();

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#FF5C2A]/5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="relative px-4 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-5xl mx-auto">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm text-gray-600 mb-8 animate-fade-in">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {currentLang === "de"
                    ? "🚀 Jetzt in der Beta-Phase"
                    : "🚀 Now in Beta Phase"}
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {t("hero.claim", currentLang)}
                  </span>
                </h1>

                <p
                  className="text-xl lg:text-3xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t("hero.subline", currentLang)}
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <a
                    href="https://tick-done.app"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-[#FF5C2A] text-white font-semibold text-lg rounded-2xl hover:bg-[#E5471A] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF5C2A]/25 transform hover:-translate-y-1 hover:scale-105"
                  >
                    {t("hero.cta", currentLang)}
                    <svg
                      className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                  <a
                    href="#features"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-white text-gray-700 font-semibold text-lg rounded-2xl border-2 border-gray-200 hover:border-[#FF5C2A] hover:text-[#FF5C2A] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <svg
                      className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {currentLang === "de"
                      ? "Features ansehen"
                      : "View Features"}
                  </a>
                </div>

                {/* Enhanced Trust Indicators */}
                <div
                  className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mb-20 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {currentLang === "de"
                        ? "Kostenlos starten"
                        : "Free to start"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {currentLang === "de"
                        ? "DSGVO-konform"
                        : "GDPR compliant"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span className="text-sm font-semibold text-gray-700">
                      {currentLang === "de"
                        ? "End-to-End verschlüsselt"
                        : "End-to-end encrypted"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {currentLang === "de"
                        ? "Keine Kreditkarte"
                        : "No credit card"}
                    </span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5C2A] to-blue-500 rounded-3xl blur-lg opacity-20"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                    <img
                      src="/TickDoneDemo.gif"
                      alt={t("hero.screenshotAlt", currentLang)}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {currentLang === "de"
                  ? "Entwickelt für moderne Teams"
                  : "Built for modern teams"}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FF5C2A]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#FF5C2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {currentLang === "de" ? "Blitzschnell" : "Lightning Fast"}
                </div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FF5C2A]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#FF5C2A]"
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
                <div className="text-sm text-gray-600 font-medium">
                  {currentLang === "de" ? "Sicher" : "Secure"}
                </div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FF5C2A]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#FF5C2A]"
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
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {currentLang === "de" ? "Kollaborativ" : "Collaborative"}
                </div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FF5C2A]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#FF5C2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {currentLang === "de" ? "Intuitiv" : "Intuitive"}
                </div>
              </div>
            </div>

            {/* Beta Testimonials - commented out for now */}
            {/*
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-700 mb-4 italic">
                  {currentLang === 'de'
                    ? '"Ich teste Tick-Done seit der Beta und bin begeistert von der einfachen Bedienung."'
                    : '"I\'ve been testing Tick-Done since beta and love how easy it is to use."'}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#FF5C2A] rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                  <div>
                    <div className="font-semibold text-gray-900">Alex M.</div>
                    <div className="text-sm text-gray-500">{currentLang === 'de' ? 'Beta-Tester' : 'Beta Tester'}</div>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </section>

        {/* Problem–Solution Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("problem.title", currentLang)}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
              {t("problem.description", currentLang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF5C2A] rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("problem.benefit1", currentLang)}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF5C2A] rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("problem.benefit2", currentLang)}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#FF5C2A] rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("problem.benefit3", currentLang)}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 px-4 bg-white" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t("features.title", currentLang)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentLang === "de"
                  ? "Alles was du für professionelles Aufgaben-Management brauchst – in einer einzigen Plattform."
                  : "Everything you need for professional task management – in one platform."}
              </p>
            </div>

            {/* Main Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <MainFeatureCard
                icon="📝"
                title={t("features.checklists", currentLang)}
                description={
                  currentLang === "de"
                    ? "Erstelle strukturierte Checklisten und behalte den Überblick über alle Aufgaben."
                    : "Create structured checklists and keep track of all your tasks."
                }
              />
              <MainFeatureCard
                icon="📋"
                title={t("features.kanban", currentLang)}
                description={
                  currentLang === "de"
                    ? "Visualisiere deinen Workflow mit professionellen Kanban-Boards."
                    : "Visualize your workflow with professional Kanban boards."
                }
              />
              <MainFeatureCard
                icon="👥"
                title={t("features.teams", currentLang)}
                description={
                  currentLang === "de"
                    ? "Arbeite nahtlos mit deinem Team zusammen und teile Projekte."
                    : "Collaborate seamlessly with your team and share projects."
                }
              />
            </div>

            {/* Additional Features */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {currentLang === "de"
                    ? "Und noch viel mehr..."
                    : "And much more..."}
                </h3>
              </div>

              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 hyphens-auto"
                lang={currentLang}
              >
                <CompactFeatureCard
                  icon="🔗"
                  label={t("features.sharing", currentLang)}
                />
                <CompactFeatureCard
                  icon="📄"
                  label={t("features.pdfExport", currentLang)}
                />
                <CompactFeatureCard
                  icon="⭐"
                  label={t("features.favorites", currentLang)}
                />
                <CompactFeatureCard
                  icon="🎯"
                  label={t("features.dragDrop", currentLang)}
                />
                <CompactFeatureCard
                  icon="⚡"
                  label={t("features.realtime", currentLang)}
                />
                <CompactFeatureCard
                  icon="🌐"
                  label={t("features.multilingual", currentLang)}
                />
                <CompactFeatureCard
                  icon="🔒"
                  label={
                    currentLang === "de"
                      ? "Sicher verschlüsselt"
                      : "Securely encrypted"
                  }
                />
                <CompactFeatureCard
                  icon="📱"
                  label={currentLang === "de" ? "Mobile App" : "Mobile App"}
                />
                <CompactFeatureCard
                  icon="🌙"
                  label={currentLang === "de" ? "Dark Mode" : "Dark Mode"}
                />
                <CompactFeatureCard
                  icon="📊"
                  label={
                    currentLang === "de"
                      ? "Fortschritts-Tracking"
                      : "Progress tracking"
                  }
                />
                <CompactFeatureCard
                  icon="🔔"
                  label={
                    currentLang === "de"
                      ? "Benachrichtigungen"
                      : "Notifications"
                  }
                />
                <CompactFeatureCard
                  icon="💾"
                  label={currentLang === "de" ? "Auto-Speichern" : "Auto-save"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kanban Showcase Section */}
        <section
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50 hyphens-auto"
          lang={currentLang}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {currentLang === "de"
                    ? "Professionelle Kanban-Boards"
                    : "Professional Kanban Boards"}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentLang === "de"
                    ? "Visualisiere deinen Workflow mit intuitiven Kanban-Boards. Ziehe Aufgaben per Drag & Drop zwischen den Spalten und behalte den Überblick über den Fortschritt deines Teams."
                    : "Visualize your workflow with intuitive Kanban boards. Drag and drop tasks between columns and keep track of your team's progress in real-time."}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">
                      {currentLang === "de"
                        ? "Drag & Drop zwischen To-Do, In Progress, Review und Done"
                        : "Drag & Drop between To-Do, In Progress, Review, and Done"}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">
                      {currentLang === "de"
                        ? "Anpassbare Spaltenfarben und Ansichten"
                        : "Customizable column colors and views"}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#FF5C2A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">
                      {currentLang === "de"
                        ? "Echtzeit-Updates für das gesamte Team"
                        : "Real-time updates for the entire team"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5C2A] to-blue-500 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-6">
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-sm font-semibold text-gray-600 text-center">
                      To-Do
                    </div>
                    <div className="text-sm font-semibold text-gray-600 text-center">
                      In Progress
                    </div>
                    <div className="text-sm font-semibold text-gray-600 text-center">
                      Review
                    </div>
                    <div className="text-sm font-semibold text-gray-600 text-center">
                      Done
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div className="text-sm font-medium text-gray-900">
                          New Feature
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Design mockups
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div className="text-sm font-medium text-gray-900">
                          Bug Fix
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Login issue
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <div className="text-sm font-medium text-gray-900">
                          Development
                        </div>
                        <div className="text-xs text-blue-600 mt-1 font-medium">
                          In Progress
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                        <div className="text-sm font-medium text-gray-900">
                          Testing
                        </div>
                        <div className="text-xs text-yellow-600 mt-1 font-medium">
                          QA Review
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="text-sm font-medium text-gray-900">
                          Deployment
                        </div>
                        <div className="text-xs text-green-600 mt-1 font-medium">
                          ✓ Completed
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="text-sm font-medium text-gray-900">
                          Documentation
                        </div>
                        <div className="text-xs text-green-600 mt-1 font-medium">
                          ✓ Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {currentLang === "de"
                  ? "Sicherheit & Datenschutz"
                  : "Security & Privacy"}
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {currentLang === "de"
                  ? "Deine Daten sind bei uns sicher. Wir verwenden modernste Verschlüsselung und speichern niemals deine Passwörter oder Inhalte im Klartext."
                  : "Your data is safe with us. We use state-of-the-art encryption and never store your passwords or content in plain text."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
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
                <h3 className="text-xl font-bold mb-4">
                  {currentLang === "de"
                    ? "End-to-End verschlüsselt"
                    : "End-to-end encrypted"}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentLang === "de"
                    ? "Alle deine Daten werden bereits auf deinem Gerät verschlüsselt, bevor sie übertragen werden."
                    : "All your data is encrypted on your device before transmission."}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
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
                <h3 className="text-xl font-bold mb-4">
                  {currentLang === "de" ? "Zero-Knowledge" : "Zero-Knowledge"}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentLang === "de"
                    ? "Wir können deine Daten nicht lesen, selbst wenn wir wollten. Deine Privatsphäre ist garantiert."
                    : "We cannot read your data, even if we wanted to. Your privacy is guaranteed."}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
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
                <h3 className="text-xl font-bold mb-4">
                  {currentLang === "de" ? "DSGVO-konform" : "GDPR compliant"}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentLang === "de"
                    ? "Server in Deutschland, strenge Einhaltung der europäischen Datenschutzbestimmungen."
                    : "German servers, strict compliance with European data protection regulations."}
                </p>
              </div>
            </div>

            {/* CTA to detailed encryption page */}
            <div className="text-center">
              <a
                href="/encryption"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 hover:shadow-lg"
              >
                {currentLang === "de"
                  ? "Mehr über unsere Sicherheit erfahren"
                  : "Learn more about our security"}
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
          </div>
        </section>

        {/* Demo Video / Screenshot Carousel */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("demo.title", currentLang)}
            </h2>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5C2A] to-blue-500 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <img
                  src="/TickDoneDemo.gif"
                  alt={t("hero.screenshotAlt", currentLang)}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("trust.title", currentLang)}
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              {t("trust.subtitle", currentLang)}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <TrustCard label={t("trust.gdpr", currentLang)} />
              <TrustCard label={t("trust.noAds", currentLang)} />
              <TrustCard label={t("trust.privacy", currentLang)} />
              <TrustCard label={t("trust.support", currentLang)} />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white" id="pricing">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t("pricing.title", currentLang)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("pricing.subtitle", currentLang)}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard plan="free" lang={currentLang} />
              <PricingCard plan="pro" lang={currentLang} />
            </div>

            <div className="mt-16">
              <ComparisonTable lang={currentLang} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FF5C2A] to-[#E5471A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLang === "de"
                ? "Bereit loszulegen?"
                : "Ready to get started?"}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {currentLang === "de"
                ? "Sei einer der ersten, die Tick-Done ausprobieren und von Anfang an dabei sind."
                : "Be one of the first to try Tick-Done and be part of the journey from the beginning."}
            </p>
            <a
              href="https://tick-done.app"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF5C2A] font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t("hero.cta", currentLang)}
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
    </>
  );
}

function MainFeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 group relative overflow-hidden">
      {/* Gradient background effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C2A]/5 to-[#E5471A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-[#FF5C2A] to-[#E5471A] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[#FF5C2A]/25">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF5C2A] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function CompactFeatureCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group hover:border-[#FF5C2A]/20">
      <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-sm font-semibold text-gray-700 group-hover:text-[#FF5C2A] transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

function PricingCard({ plan, lang }: { plan: "free" | "pro"; lang: Language }) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 ${
        plan === "pro"
          ? "bg-gradient-to-br from-[#FF5C2A] to-[#E5471A] text-white border-2 border-[#FF5C2A] relative"
          : "bg-white border-2 border-gray-200"
      }`}
    >
      {plan === "pro" && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#FF5C2A] px-4 py-2 rounded-full text-sm font-semibold">
          {lang === "de" ? "Beliebt" : "Popular"}
        </div>
      )}

      <div className="text-center">
        <h3
          className={`text-2xl font-bold mb-2 ${plan === "pro" ? "text-white" : "text-gray-900"}`}
        >
          {plan === "free" ? t("pricing.free", lang) : t("pricing.pro", lang)}
        </h3>
        <div
          className={`text-4xl font-extrabold mb-6 ${plan === "pro" ? "text-white" : "text-gray-900"}`}
        >
          {plan === "free"
            ? t("pricing.freePrice", lang)
            : t("pricing.proPrice", lang)}
        </div>

        <ul
          className={`space-y-3 mb-8 text-left ${plan === "pro" ? "text-white/90" : "text-gray-700"}`}
        >
          <li className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan === "pro" ? "text-white" : "text-green-500"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {plan === "free"
              ? t("pricing.freeFeature1", lang)
              : t("pricing.proFeature1", lang)}
          </li>
          <li className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan === "pro" ? "text-white" : "text-green-500"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {plan === "free"
              ? t("pricing.freeFeature2", lang)
              : t("pricing.proFeature2", lang)}
          </li>
          <li className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan === "pro" ? "text-white" : "text-green-500"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {plan === "free"
              ? t("pricing.freeFeature3", lang)
              : t("pricing.proFeature3", lang)}
          </li>
          <li className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan === "pro" ? "text-white" : "text-green-500"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {plan === "free"
              ? t("pricing.freeFeature4", lang)
              : t("pricing.proFeature4", lang)}
          </li>
        </ul>

        <a
          href="https://tick-done.app"
          className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
            plan === "pro"
              ? "bg-white text-[#FF5C2A] hover:bg-gray-50"
              : "bg-[#FF5C2A] text-white hover:bg-[#E5471A]"
          }`}
        >
          {t("pricing.cta", lang)}
        </a>
      </div>
    </div>
  );
}

function ComparisonTable({ lang }: { lang: Language }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-2xl overflow-hidden bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-6 font-semibold text-gray-900">
              {t("pricing.feature", lang)}
            </th>
            <th className="text-center p-6 font-semibold text-gray-900">
              {t("pricing.free", lang)}
            </th>
            <th className="text-center p-6 font-semibold text-gray-900">
              {t("pricing.pro", lang)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-100">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison1", lang)}
            </td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
          <tr className="border-t border-gray-100 bg-gray-25">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison2", lang)}
            </td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison3", lang)}
            </td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
          <tr className="border-t border-gray-100 bg-gray-25">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison4", lang)}
            </td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison5", lang)}
            </td>
            <td className="p-6 text-center text-gray-300 text-xl">✗</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
          <tr className="border-t border-gray-100 bg-gray-25">
            <td className="p-6 text-gray-700">
              {t("pricing.comparison6", lang)}
            </td>
            <td className="p-6 text-center text-gray-300 text-xl">✗</td>
            <td className="p-6 text-center text-green-500 text-xl">✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TrustCard({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
      <div className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="font-semibold text-gray-900">{label}</span>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: IndexPage,
});
