import { useLocale } from 'next-intl'

import getlangsServer from '@/assets/languages/langs-server'
import { Locale } from '@/config/i18n/i18m.config'

export const useTranslationServe = () => {
  const locale = useLocale()

  return getlangsServer(locale as Locale)
}
