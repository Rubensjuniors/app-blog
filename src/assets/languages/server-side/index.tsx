import { useLocale } from 'next-intl'

import { Locale } from '@/config/i18n/i18n.config'
import getLanguagesServerSide from './languages-server-side'

export const useTranslationServeSide = () => {
  const locale = useLocale()

  return getLanguagesServerSide(locale as Locale)
}
