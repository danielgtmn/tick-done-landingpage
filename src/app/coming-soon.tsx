"use client";
import Link from "next/link";
import { t } from "../lib/translations";
import { useState } from "react";

const sliderImages = [
  "/slider/CleanShot 2025-06-02 at 21.09.47.png",
  "/slider/CleanShot 2025-06-02 at 21.10.08.png",
  "/slider/CleanShot 2025-06-02 at 21.10.17.png",
  "/slider/CleanShot 2025-06-02 at 21.10.33.png",
];

const coreFeatures = [
  t('features.checklists'),
  t('features.progress'),
  t('features.reminders'),
  t('features.collaboration'),
];

export default function ComingSoonPage() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % sliderImages.length);
  const prev = () => setCurrent((c) => (c - 1 + sliderImages.length) % sliderImages.length);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-4 py-16">
      <div className="flex justify-center mb-8">
        <a href="https://www.producthunt.com/products/tick-done-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-tick&#0045;done" target="_blank" rel="noopener noreferrer">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=973120&theme=light&t=1748891818071" alt="Tick&#0045;Done - Done&#0032;–&#0032;your&#0032;tasks&#0046;&#0032;ticked&#0046;&#0032;done&#0046; | Product Hunt" style={{ width: 250, height: 54 }} width={250} height={54} />
        </a>
      </div>
  
      <div className="max-w-xl w-full bg-white rounded-xl shadow p-8 border border-gray-100 text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">🚀 Launching Soon</h1>
        <p className="text-gray-700 text-base mb-8">We're working hard to bring you something awesome. Stay tuned!</p>
      </div>
         <div className="w-full flex flex-col items-center mb-8">
        <div className="relative w-[500px] h-[450px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden shadow">
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white z-10" aria-label="Previous">
            <span className="text-2xl">‹</span>
          </button>
          <img
            src={sliderImages[current]}
            alt={`Screenshot ${current + 1}`}
            className="object-contain w-full h-full transition-all duration-300"
            style={{ maxHeight: 300 }}
          />
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white z-10" aria-label="Next">
            <span className="text-2xl">›</span>
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full ${i === current ? 'bg-[#FF5C2A]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="max-w-xl w-full bg-white rounded-xl shadow p-8 border border-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-4">{t('features.title')}</h2>
        <ul className="flex flex-col gap-2 items-center">
          {coreFeatures.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-800 text-base">
              <span className="inline-block w-2 h-2 bg-[#FF5C2A] rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
