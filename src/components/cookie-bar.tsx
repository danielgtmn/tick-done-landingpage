'use client';
import React, { useEffect, useState } from 'react';
import { t } from '../lib/translations';

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.match(/lang_consent=true/);
    if (!consent) setVisible(true);
  }, []);

  function acceptCookie() {
    document.cookie = `lang_consent=true; path=/; max-age=31536000`;
    const browserLang = navigator.language.slice(0, 2) === 'de' ? 'de' : 'en';
    document.cookie = `lang=${browserLang}; path=/; max-age=31536000`;
    setVisible(false);
    window.location.reload();
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-2">
      <span className="text-sm text-gray-700">{t('cookieBar.textConsent')}</span>
      <button
        className="px-4 py-2 bg-[#FF5C2A] text-white rounded-full font-semibold shadow hover:bg-[#e04e1e] transition text-sm"
        onClick={acceptCookie}
      >
        {t('cookieBar.accept')}
      </button>
    </div>
  );
} 