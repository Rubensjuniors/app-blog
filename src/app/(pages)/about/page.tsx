import Image from 'next/image'

import { Icon, Card } from '@/components/basic'

import ShowMoreList from './ShowMoreList'
import { getCopies } from '@/ultils/constants'
import bannerProfile from '../../../../public/assets/img/photos/banner.jpeg'
import photoProfile from '../../../../public/assets/img/photos/Photo_three.jpg'

const About = () => {
  const t = getCopies()
  const textAboutMe = [
    t.about.about.text.p1,
    t.about.about.text.p2,
    t.about.about.text.p3,
    t.about.about.text.p4,
    t.about.about.text.p5,
    t.about.about.text.p6
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
                <a href="#">
                  <Icon id="instagram_icon-phosphor" iconSize={36} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon id="github_icon-phosphor" iconSize={36} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon id="linkedin_icon-phosphor" iconSize={36} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-1 px-4 pb-4 sm:px-4 sm:pt-6">
            <h1 className="text-2xl font-bold sm:text-4xl">{t.about.name}</h1>
            <span className="text-sm sm:text-lg">{t.about.bio}</span>
          </div>
        </Card>

        <Card title={t.about.about.title} classNames="p-4 flex flex-col items-start gap-2">
          <ShowMoreList
            list={textAboutMe}
            showIndice={1}
            textbutton={{
              more: t.about.about.showMore,
              less: t.about.about.showsLess
            }}
          />
        </Card>
      </section>
    </>
  )
}

export default About
