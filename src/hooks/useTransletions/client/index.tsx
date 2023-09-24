import { useLocale } from 'next-intl'

import getlangsUseClient from '@/assets/languages/langs-use-client'
import { Locale } from '@/config/i18n/i18m.config'

export const useTranslationClient = () => {
  const locale = useLocale()

  return getlangsUseClient(locale as Locale)
}
