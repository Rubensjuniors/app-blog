import { useTranslations } from 'next-intl'

import { Button } from '@/shared/components/Atoms/Button'

export default function Home() {
  const t = useTranslations('common')
  return (
    <>
      <Button>{t('button')}</Button>
    </>
  )
}
