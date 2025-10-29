
import Link from 'next/link';
import { getTopics } from '@/lib/lessons';
import { LandingPageClient } from '@/components/landing-page-client';

export default function LandingPage() {
  const topics = getTopics();

  return (
    <LandingPageClient topics={topics} />
  );
}
