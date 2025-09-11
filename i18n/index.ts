import { getRequestConfig } from 'next-intl/server'

import { defaultLocale,locales } from './config'

export default getRequestConfig(async (request) => {
  const requestLocale = (await request.requestLocale) as string | undefined
  const locale = requestLocale && locales.includes(requestLocale) ? requestLocale : defaultLocale

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
