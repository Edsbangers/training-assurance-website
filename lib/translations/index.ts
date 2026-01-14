import en from './en.json';
import nl from './nl.json';
import no from './no.json';
import it from './it.json';

export type TranslationKey = keyof typeof en;
export type Translations = typeof en;

const translations: Record<string, Translations> = {
  en,
  nl,
  no,
  it,
};

export function getTranslations(languageCode: string): Translations {
  return translations[languageCode] || translations.en;
}

export function t(translations: Translations, path: string): string {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return path if translation not found
    }
  }

  return typeof result === 'string' ? result : path;
}

export { en, nl, no, it };
