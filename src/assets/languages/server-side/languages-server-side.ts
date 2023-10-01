import 'server-only'
import { Locale, i18n } from '@/config/i18n/i18n.config'

import { defaultLanguages } from '../default-languages'

const getLanguagesServerSide = (locale: Locale) => {
  return (
    defaultLanguages[locale] ?? defaultLanguages[i18n.defaultLocale as Locale]
  )
}

export default getLanguagesServerSide
