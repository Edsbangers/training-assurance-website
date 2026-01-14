import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRegionByCode, getEnabledRegions } from '@/lib/regions';
import { getTranslations } from '@/lib/translations';
import { LanguageProvider } from '@/components/LanguageProvider';
import Analytics from '@/components/Analytics';
import ChatWidget from '@/components/ChatWidget';
import VisitorTracker from '@/components/VisitorTracker';

interface Props {
  params: Promise<{ country: string }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  const regions = getEnabledRegions();
  return regions
    .filter((r) => r.code !== 'uk') // UK uses root route
    .map((region) => ({
      country: region.code,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const region = getRegionByCode(country);
  if (!region) return {};

  const t = getTranslations(region.languageCode);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `https://www.trainingassuranceconsultancy.com/regions/${country}`,
      languages: {
        'en-GB': 'https://www.trainingassuranceconsultancy.com',
        'en-IE': 'https://www.trainingassuranceconsultancy.com/regions/ie',
        'nl-NL': 'https://www.trainingassuranceconsultancy.com/regions/nl',
        'nb-NO': 'https://www.trainingassuranceconsultancy.com/regions/no',
        'it-IT': 'https://www.trainingassuranceconsultancy.com/regions/it',
      },
    },
    openGraph: {
      type: 'website',
      locale: region.languageCode === 'en' ? 'en_GB' : `${region.languageCode}_${region.code.toUpperCase()}`,
      url: `https://www.trainingassuranceconsultancy.com/regions/${country}`,
      siteName: 'Training Assurance Consultancy',
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default async function RegionLayout({ params, children }: Props) {
  const { country } = await params;
  const region = getRegionByCode(country);

  if (!region || !region.enabled) {
    notFound();
  }

  return (
    <LanguageProvider region={region}>
      <Analytics />
      <VisitorTracker />
      {children}
      <ChatWidget />
    </LanguageProvider>
  );
}
