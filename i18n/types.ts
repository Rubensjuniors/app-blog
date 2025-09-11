import { Pathnames } from 'next-intl/routing'

export interface I18nConfig {
  defaultLocale: string
  locales: string[]
  customRoutes: Pathnames<string[]>
  isoCodes: Record<string, string>
  i18nNames: Record<string, string>
}

export interface Messages {
  common: Record<string, string>
}
