import Link from "next/link";
import { t } from "../../lib/translations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: t('terms.title'),
  description: t('terms.metaDescription'),
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-4">{t('terms.title')}</h1>
        <div className="text-gray-700 text-sm mb-8 whitespace-pre-line">{t('terms.content')}</div>
        <Link href="/" className="text-[#FF5C2A] hover:underline font-medium">{t('terms.back')}</Link>
      </div>
    </main>
  );
}