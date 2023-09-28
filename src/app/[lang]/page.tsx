'use client'
import Image from 'next/image'

import { useTranslationClient } from '@/hooks/useTransletions/client'

import Photo from '../../../public/assets/img/photos/Photo_two.jpg'

const Home = () => {
  const t = useTranslationClient()
  return (
    <div className="flex w-full flex-col gap-4 p-5">
      <div className="h-16 w-16">
        <Image src={Photo} alt="" className="w-full rounded-full shadow-sm" />
      </div>

      <div>
        <h1 className="text-5xl font-bold">{t.blog.home.title}</h1>
        <p className="text-justifys mt-2 font-light">
          {t.blog.home.descriptions}
        </p>
      </div>
    </div>
  )
}

export default Home
