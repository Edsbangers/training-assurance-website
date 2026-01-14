export interface Region {
  code: string;
  name: string;
  nameLocal: string;
  language: string;
  languageCode: string;
  currency: string;
  currencySymbol: string;
  phonePrefix: string;
  flag: string;
  enabled: boolean;
}

export const regions: Region[] = [
  {
    code: 'uk',
    name: 'United Kingdom',
    nameLocal: 'United Kingdom',
    language: 'English',
    languageCode: 'en',
    currency: 'GBP',
    currencySymbol: '£',
    phonePrefix: '+44',
    flag: '🇬🇧',
    enabled: true,
  },
  {
    code: 'ie',
    name: 'Ireland',
    nameLocal: 'Éire',
    language: 'English',
    languageCode: 'en',
    currency: 'EUR',
    currencySymbol: '€',
    phonePrefix: '+353',
    flag: '🇮🇪',
    enabled: true,
  },
  {
    code: 'nl',
    name: 'Netherlands',
    nameLocal: 'Nederland',
    language: 'Dutch',
    languageCode: 'nl',
    currency: 'EUR',
    currencySymbol: '€',
    phonePrefix: '+31',
    flag: '🇳🇱',
    enabled: true,
  },
  {
    code: 'no',
    name: 'Norway',
    nameLocal: 'Norge',
    language: 'Norwegian',
    languageCode: 'no',
    currency: 'NOK',
    currencySymbol: 'kr',
    phonePrefix: '+47',
    flag: '🇳🇴',
    enabled: true,
  },
  {
    code: 'it',
    name: 'Italy',
    nameLocal: 'Italia',
    language: 'Italian',
    languageCode: 'it',
    currency: 'EUR',
    currencySymbol: '€',
    phonePrefix: '+39',
    flag: '🇮🇹',
    enabled: true,
  },
];

export function getRegionByCode(code: string): Region | undefined {
  return regions.find((r) => r.code === code);
}

export function getEnabledRegions(): Region[] {
  return regions.filter((r) => r.enabled);
}

export function getDefaultRegion(): Region {
  return regions[0]; // UK is default
}
