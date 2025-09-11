import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from '../i18n/config'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

const localeMapping: Record<string, string> = {
  pt: 'pt-br',
}

const browserLocaleMapping: Record<string, string> = {
  pt: 'pt-br',
  'pt-br': 'pt-br',
  pt_br: 'pt-br',
  'pt-BR': 'pt-br',
  en: 'en',
  'en-us': 'en',
  en_us: 'en',
  'en-US': 'en',
  es: 'es',
  'es-es': 'es',
  es_es: 'es',
  'es-ES': 'es',
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameSegments = pathname.split('/').filter(Boolean)
  const firstSegment = pathnameSegments[0]

  if (locales.includes(firstSegment)) {
    return intlMiddleware(request)
  }

  if (localeMapping[firstSegment]) {
    const newPathname = pathname.replace(
      `/${firstSegment}`,
      `/${localeMapping[firstSegment]}`
    )

    return NextResponse.redirect(new URL(newPathname, request.url))
  }

  const localePattern = /^\/([a-z]{2}(?:-[a-z]{2})?)$/
  const match = pathname.match(localePattern)

  if (match && !locales.includes(match[1])) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
  }

  if (!locales.includes(firstSegment) && pathnameSegments.length > 1) {
    const remainingPath = pathnameSegments.slice(1).join('/')

    return NextResponse.redirect(
      new URL(`/${defaultLocale}/${remainingPath}`, request.url)
    )
  }

  if (!pathname || pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language')
    let determinedLocale = defaultLocale

    if (acceptLanguage) {
      const browserLocale = acceptLanguage.split(',')[0].trim().toLowerCase()

      if (browserLocaleMapping[browserLocale]) {
        determinedLocale = browserLocaleMapping[browserLocale]
      } else {
        const localeKey = Object.keys(browserLocaleMapping).find((key) =>
          browserLocale.startsWith(key)
        )
        if (localeKey) {
          determinedLocale = browserLocaleMapping[localeKey]
        }
      }
    }

    return NextResponse.redirect(
      new URL(`/${determinedLocale}${pathname}`, request.url)
    )
  }

  const savedLocale = request.cookies.get('NEXT_LOCALE')
  const fallbackLocale =
    savedLocale && locales.includes(savedLocale.value)
      ? savedLocale.value
      : defaultLocale

  return NextResponse.redirect(
    new URL(`/${fallbackLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
