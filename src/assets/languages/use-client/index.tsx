import { useLocale } from 'next-intl'

import getLanguagesClient from '@/assets/languages/use-client/languages-client'
import { Locale } from '@/config/i18n/i18n.config'

export const useTranslationClient = () => {
  const locale = useLocale()

  return getLanguagesClient(locale as Locale)
}
