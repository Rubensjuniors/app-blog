import { Pathnames } from 'next-intl/routing'

import { I18nConfig } from './types'

export const defaultLocale: string = 'en'

export type Locales = 'pt-br' | 'en'

export const locales: Array<string> = ['pt-br', 'en']

export const customRoutes: Pathnames<string[]> = {
  index: {
    'pt-br': '/pt-br',
    en: '/en',
  },
}

export const isoCodes: Record<string, string> = {
  'pt-br': 'pt_BR',
  en: 'en_US',
}

export const i18nNames: Record<string, string> = {
  'pt-br': 'Português - Brasil',
  en: 'English',
}

export function getIsoCode(locale: string): string | undefined {
  return isoCodes[locale]
}

export const i18nConfig: I18nConfig = {
  defaultLocale,
  locales,
  customRoutes,
  isoCodes,
  i18nNames,
}
