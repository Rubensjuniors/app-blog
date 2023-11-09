import Image from 'next/image'

import { Icon, Card } from '@/components/basic'
import { getPrismicClient } from '@/services/prismic'
import { RichText } from 'prismic-dom'

import { SOCIAIS } from '@/ultils/constants'

import './style.scss'

async function getAboutMeData() {
  const prismic = getPrismicClient()

  const responseAboutMe = await prismic?.getByType('about_me', {
    fetch: [
      'about_me.banner',
      'about_me.photo_profile',
      'about_me.name',
      'about_me.bio',
      'about_me.sociais',
      'about_me.content',
    ],
    pageSize: 100,
  })
  const { results } = responseAboutMe
  const aboutMe = {
    photoProfile:{
      url:  results[0].data.photo_profile.url,
      width:  results[0].data.photo_profile.dimensions.width,
      heigth:  results[0].data.photo_profile.dimensions.heigth
    },
    banner:{
      url:  results[0].data.banner.url,
      width:  results[0].data.banner.dimensions.width,
      heigth:  results[0].data.banner.dimensions.heigth
    },
    name: results[0].data.name,
    bio: results[0].data.bio,
    sociais: {
      instagram: results[0].data.sociais.instagram,
      github: results[0].data.sociais.github,
      linkedin: results[0].data.sociais.linkedin,
    },
    content: results[0].data.content.map((content:{ title: string; body: string[] }) => {
      return {
        title: content.title,
        body: [...content.body],
      }
    })

  }

  return aboutMe
}

const About = async () => {
  const data = await getAboutMeData()

  return (
    <section className="-mt-5 flex flex-col items-center gap-4 sm:mt-3 sm:px-4">
      <Card>
        <div className="relative flex w-full justify-start">
          <Image
            className="h-32 w-[948px] object-cover sm:h-36 sm:rounded-t-lg"
            src={data.banner.url}
            alt="banner"
            width={data.banner.width}
            height={data.banner.width}
          />
          <div
            className="
            absolute top-16 ml-3 h-28 w-28 sm:top-14 sm:ml-6 sm:h-40 sm:w-40">
            <Image
              className="h-full w-full rounded-full object-cover shadow-md"
              src={data.photoProfile.url}
              alt={'my photo of profile'}
              width={data.photoProfile.width}
              height={data.photoProfile.width}
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
          <h1 className="text-2xl font-bold sm:text-4xl">{data.name}</h1>
          <span className="text-sm sm:text-lg">{data.bio}</span>
        </div>
      </Card>

      {
        data.content.map((content: { title: string | undefined; body: any }) => {
          return (
            <Card
              key={data.name}
              title={content.title}
              classNames="p-4 flex flex-col items-start gap-2"
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
    </section>
  )
}

export default About
