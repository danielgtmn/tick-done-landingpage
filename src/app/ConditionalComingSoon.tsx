import ComingSoonPage from "./coming-soon";
import { getServerLanguage } from "../lib/translations";

export default function ConditionalComingSoon({ children }: { children: React.ReactNode }) {
  // Check for process.env.NEXT_PUBLIC_COMING_SOON (must be set to 'true')
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true';
  if (isComingSoon) {
    return <ComingSoonPage />;
  }
  return <>{children}</>;
}
