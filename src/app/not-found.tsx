"use client";

import Link from "next/link";
import { t } from "@/lib/translations";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [lang, setLang] = useState<'en' | 'de'>('en');

  useEffect(() => {
    // Client-side language detection
    const cookieMatch = document.cookie.match(/lang=(de|en)/);
    if (cookieMatch) {
      setLang(cookieMatch[1] as 'de' | 'en');
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "de") {
        setLang("de");
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {t('notFound.title', lang)}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('notFound.description', lang)}
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {t('notFound.backHome', lang)}
        </Link>
      </div>
    </div>
  );
} 