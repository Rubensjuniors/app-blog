import Image from 'next/image'

import { Icon, Card } from '@/components/basic'
import { getAboutMeData } from '@/services/prismic'
import { RichText } from 'prismic-dom'

import { SOCIAIS } from '@/ultils/constants'

import Repositories from './repositories'

import './style.scss'

const About = async () => {
  const data = await getAboutMeData()

  return (
    <section className="-mt-5 flex flex-col items-center gap-4 sm:mt-3 sm:px-4">
      <Card classNames="card-spacing w-full">
        <div className="relative flex w-full justify-start">
          <Image
            className="h-32 w-[948px] object-cover sm:h-36 sm:rounded-t-lg"
            src={data?.banner?.url ?? ''}
            alt="banner"
            width={data?.banner.width}
            height={data?.banner.width}
          />
          <div
            className="
            absolute top-16 ml-3 h-28 w-28 sm:top-14 sm:ml-6 sm:h-40 sm:w-40">
            <Image
              className="h-full w-full rounded-full object-cover shadow-md"
              src={data?.photoProfile?.url ?? ''}
              alt={'my photo of profile'}
              width={data?.photoProfile.width}
              height={data?.photoProfile.width}
            />
          </div>
        </div>
        <nav className="flex items-center justify-end px-4 pb-1 pt-4">
          <ul className="flex items-center gap-3 sm:mr-6 sm:gap-4">
            {SOCIAIS.map((social) => {
              return (
                <li key={social.name}>
                  <a href={social.url}>
                    <Icon id={social.id} iconSize={36} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex flex-col gap-1 px-4 pb-4 sm:px-4 sm:pt-6">
          <h1 className="text-2xl font-bold sm:text-4xl">{data?.name}</h1>
          <span className="text-sm sm:text-lg">{data?.bio}</span>
        </div>
      </Card>

      {
        data?.content.map((content) => {
          return (
            <Card
              key={data?.name}
              title={content.title}
              classNames="w-full p-4 flex flex-col items-start gap-2"
            >
              <div
                className="content-about text-lg-xl text-lg font-light"
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </Card>
          )
        })
      }

      <Card
        title="Repositories"
        classNames="card-spacing w-full p-4 flex flex-col items-start gap-2"
      >
        <Repositories />
      </Card>
    </section>
  )
}

export default About
