'use client';
import React, { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'de'>('en');

  useEffect(() => {
    // Nur im Browser ausführen
    const match = document.cookie.match(/lang=(de|en)/);
    if (match) setLang(match[1] as 'en' | 'de');
    else if (navigator.language.slice(0, 2) === 'de') setLang('de');
    else setLang('en');
  }, []);

  function changeLang(newLang: 'en' | 'de') {
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-1">
      <button
        className={`px-2 py-1 rounded text-xs font-semibold border ${lang === 'en' ? 'bg-[#FF5C2A] text-white border-[#FF5C2A]' : 'bg-white text-[#1F2A44] border-gray-200'} transition`}
        onClick={() => changeLang('en')}
        aria-label="Switch to English"
        disabled={lang === 'en'}
      >EN</button>
      <button
        className={`px-2 py-1 rounded text-xs font-semibold border ${lang === 'de' ? 'bg-[#FF5C2A] text-white border-[#FF5C2A]' : 'bg-white text-[#1F2A44] border-gray-200'} transition`}
        onClick={() => changeLang('de')}
        aria-label="Auf Deutsch umschalten"
        disabled={lang === 'de'}
      >DE</button>
    </div>
  );
}