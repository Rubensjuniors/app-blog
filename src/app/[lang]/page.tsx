// import Image from 'next/image'

import { useTranslationServeSide } from "@/assets/languages/server-side"


export default function Home() {
  const t = useTranslationServeSide()

  return (
    <div className="flex w-full flex-col gap-4 p-5">
      <div className="h-16 w-16">
        {/* <Image src={Photo} alt="" className="w-full rounded-full shadow-sm" /> */}
      </div>

      <div>
        <h1 className="mb-3 text-4xl font-bold">{t.blog.home.title}</h1>
        <p className="text-md text-justifys mt-2 font-light">{t.blog.home.descriptions}</p>
      </div>
    </div>
  )
}
