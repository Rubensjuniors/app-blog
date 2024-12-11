// sticky left-0 top-0 hidden max-h-screen w-[73px] flex-col
//items-center
// justify-start gap-4 overflow-hidden p-3 pt-5 duration-500
// ease-in-out
//lg:flex lg:items-start lg:p-1 lg:pt-5 lg:hover:w-56

import { Flex } from '@radix-ui/themes'
import { Link, NavLink } from 'react-router'

import { Icon } from '@/components/Basic'

const itemsMenu = [
  {
    id: 'home_icon-phosphor',
    title: 'Início',
    route: '/'
  },
  {
    id: 'about_icon-phosphor',
    title: 'Sobre mim',
    route: '/about'
  },
  {
    id: 'articles_icon-phosphor',
    title: 'Artigos',
    route: '/articles'
  }
]

export const Sidemenu = () => (
  <Flex
    justify="start"
    align="center"
    direction="column"
    position="sticky"
    left="0"
    top="0"
    display="none"
    gap="4"
    p="3"
    pt="5"
    width="73px"
    maxHeight="100vh"
    overflow="hidden"
    className="lg:flex lg:items-start lg:p-1 lg:pt-5 lg:hover:w-56 duration-500 ease-in-out"
  >
    <Link to="/" className="w-14 lg:pl-1">
      <Icon id="icon_logo" iconSize={44} />
    </Link>

    <div>
      {itemsMenu.map(
        (item) =>(
          <NavLink to={item.route} key={item.id} className="flex w-full items-center gap-7
              p-4 transition-all sm:hover:text-red-300
              sm:hover:brightness-90 whitespace-nowrap"
          >
            <Flex align="center" gap="6" className="font-bold" >
              <Icon id={item.id} iconSize={26} />
              {item.title}
            </Flex>
          </NavLink>
        )
      )}
    </div>
  </Flex>
)