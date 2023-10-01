'use client'
import { Locale, i18n } from '@/config/i18n/i18n.config'

import { defaultLanguages } from '../default-languages'

const getLanguagesClient = (locale: Locale) => {
  return (
    defaultLanguages[locale] ?? defaultLanguages[i18n.defaultLocale as Locale]
  )
}

export default getLanguagesClient
