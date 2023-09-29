'use client'
import Image from 'next/image'
import { useState } from 'react'

import { useTranslationClient } from '@/hooks/useTransletions/client'

import { Icon, Card } from '@/components/basic'

import bannerProfile from '../../../../../public/assets/img/photos/banner.jpeg'
import photoProfile from '../../../../../public/assets/img/photos/Photo_three.jpg'

const About = () => {
  const t = useTranslationClient()
  const [showMore, setShowMore] = useState<boolean>(false)

  const textAboutMe = [
    t.blog.about.about.text.p1,
    t.blog.about.about.text.p2,
    t.blog.about.about.text.p3,
    t.blog.about.about.text.p4,
    t.blog.about.about.text.p5,
    t.blog.about.about.text.p6
  ]

  return (
    <>
      <section className="-mt-5 flex flex-col items-center gap-4 sm:mt-3 sm:px-4">
        <Card>
          <div className="relative flex w-full justify-start">
            <Image
              className="h-32 w-[948px] object-cover sm:h-36 sm:rounded-t-lg"
              src={bannerProfile}
              alt="banner"
            />
            <div className="absolute top-16 ml-3 h-28 w-28 sm:top-14 sm:ml-6 sm:h-40 sm:w-40">
              <Image
                className="h-full w-full rounded-full object-cover shadow-md"
                src={photoProfile}
                alt={'my photo of profile'}
              />
            </div>
          </div>
          <nav className="flex items-center justify-end px-4 pb-1 pt-4">
            <ul className="flex items-center gap-3 sm:mr-6 sm:gap-4">
              <li>
                <a href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}>
                  <Icon id="instagram_icon-phosphor" iconSize={36} />
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_LINK_GITHUB}>
                  <Icon id="github_icon-phosphor" iconSize={36} />
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_LINK_LINKEDIN}>
                  <Icon id="linkedin_icon-phosphor" iconSize={36} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-1 px-4 pb-4 sm:px-4 sm:pt-6">
            <h1 className="text-2xl font-bold sm:text-4xl">
              {t.blog.about.name}
            </h1>
            <span className="text-sm sm:text-lg">{t.blog.about.bio}</span>
          </div>
        </Card>

        <Card
          title={t.blog.about.about.title}
          classNames="p-4 flex flex-col items-start gap-2"
        >
          {textAboutMe.map((text, index) => {
            const showMoreText = (index < 1 && !showMore) || showMore
            return (
              showMoreText && (
                <p
                  key={text}
                  className="text-lg-xl mb-2 text-justify text-lg font-light"
                >
                  {text}
                </p>
              )
            )
          })}
          <button
            className="cursor-pointer underline md:hover:text-red-300"
            onClick={() => setShowMore(!showMore)}
          >
            <span className="flex items-center gap-2">
              {showMore ? (
                <>
                  {t.blog.about.about.showsLess}
                  <Icon id="caretUp-phosphor" iconSize={18} />
                </>
              ) : (
                <>
                  {t.blog.about.about.showMore}
                  <Icon id="caretDown-phosphor" iconSize={18} />
                </>
              )}
            </span>
          </button>
        </Card>
      </section>
    </>
  )
}

export default About
