// import Image from 'next/image'

import { Icon, Card } from '@/components/basic'

import ShowMoreList from './ShowMoreList'

const About = () => {
  const textAboutMe = ['']

  return (
    <>
      <section className="-mt-5 flex flex-col items-center gap-4 sm:mt-3 sm:px-4">
        <Card>
          <div className="relative flex w-full justify-start">
            {/* <Image
              className="h-32 w-[948px] object-cover sm:h-36 sm:rounded-t-lg"
              src={bannerProfile}
              alt="banner"
            /> */}
            <div className="absolute top-16 ml-3 h-28 w-28 sm:top-14 sm:ml-6 sm:h-40 sm:w-40">
              {/* <Image
                className="h-full w-full rounded-full object-cover shadow-md"
                src={photoProfile}
                alt={'my photo of profile'}
              /> */}
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
            <h1 className="text-2xl font-bold sm:text-4xl">name</h1>
            <span className="text-sm sm:text-lg">bio</span>
          </div>
        </Card>

        <Card title={'title'} classNames="p-4 flex flex-col items-start gap-2">
          <ShowMoreList
            list={textAboutMe}
            showIndice={1}
            textbutton={{
              more: 'mais',
              less: 'menos'
            }}
          />
        </Card>
      </section>
    </>
  )
}

export default About
