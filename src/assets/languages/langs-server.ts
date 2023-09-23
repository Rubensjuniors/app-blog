import 'server-only'
import { Locale, i18n } from '@/config/i18n/i18m.config'

import { defaultLanguages } from './default-langs'

const getlangsServer = (locale: Locale) => {
  return (
    defaultLanguages[locale] ?? defaultLanguages[i18n.defaultLocale as Locale]
  )
}

export default getlangsServer