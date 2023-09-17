import Image from 'next/image'

import Card from '@/components/basic/Cards/profile'
import Icon from '@/components/basic/Icons'

import bannerProfile from '../../public/assets/img/photos/banner.jpeg'
import photoProfile from '../../public/assets/img/photos/Photo_three.jpg'

const About = () => (
  <>
    <section className="-mt-5 flex flex-col items-center gap-4 sm:mt-3 sm:px-4">
      <Card>
        <div className="relative flex w-full justify-start">
          <Image
            className="h-32 w-[748px] object-cover sm:h-36 sm:rounded-t-lg"
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
        <nav className="flex items-center justify-between px-4 pb-1 pt-4">
          <div></div>
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
          <h1 className="text-2xl font-bold sm:text-4xl">Rubens junio</h1>
          <span className="text-sm sm:text-lg">
            Front End @Hotmart - HTML | CSS E SASS | JAVASCRIPT | TYPESCRIPT |
            REACT
          </span>
        </div>
      </Card>

      <Card title="Sobre" classNames="p-4 flex flex-col items-start gap-2">
        <p className="leading-5 sm:text-lg">
          Olá, meu nome é Rubens e sou um jovem apaixonado por tecnologia e
          programação. Tenho 19 anos e recentemente decidi me dedicar ao estudo
          de programação com o objetivo de me tornar um desenvolvedor front-end.
          Eu acredito que essa área combina perfeitamente com meus interesses e
          talentos, e estou animado para aprender e crescer nessa area. Embora
          ainda esteja no começo de minha jornada como programador, já tenho
          conseguido realizar algumas coisas com o pouco conhecimento que tenho
          adquirido. Acredito que, com muito esforço e dedicação, vou evoluir a
          cada dia e alcançar meus objetivos como desenvolvedor front-end.
        </p>
      </Card>
    </section>
  </>
)

export default About
