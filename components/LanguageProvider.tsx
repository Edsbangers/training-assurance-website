'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Translations, getTranslations, t } from '@/lib/translations';
import { Region, getDefaultRegion } from '@/lib/regions';

interface LanguageContextType {
  region: Region;
  translations: Translations;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
  region?: Region;
}

export function LanguageProvider({ children, region }: LanguageProviderProps) {
  const currentRegion = region || getDefaultRegion();
  const translations = getTranslations(currentRegion.languageCode);

  const translate = (path: string): string => {
    return t(translations, path);
  };

  return (
    <LanguageContext.Provider
      value={{
        region: currentRegion,
        translations,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values if not within provider
    const defaultRegion = getDefaultRegion();
    const translations = getTranslations(defaultRegion.languageCode);
    return {
      region: defaultRegion,
      translations,
      t: (path: string) => t(translations, path),
    };
  }
  return context;
}
