const defaultLang = 'en'
const langs = [defaultLang, 'pt-BR'] as const

const locales = langs as unknown as string[]

export const i18n = { defaultLang, locales, localeDetection: true }

export type Locale = (typeof langs)[number]
