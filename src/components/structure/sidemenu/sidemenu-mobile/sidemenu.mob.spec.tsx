import { render } from '@testing-library/react'

import SidemenuMobile from './sidemenu.component.mob'

const MockItemsMenu = [
  {
    id: 'sobre_icon-phosphor',
    title: 'Sobre mim',
    path: '/'
  },
  {
    id: 'artigos_icon-phosphor',
    title: 'Artigos',
    path: '/artigos'
  },
  {
    id: 'pings_icon-phosphor',
    title: 'Pings',
    path: '/pings'
  }
]
describe('<SidemenuMobile /', () => {
  it('should render items sidemenu', async () => {
    const { container } = render(
      <SidemenuMobile sidemenuItems={MockItemsMenu} />
    )

    const icons = container.querySelectorAll('.icon-sidemenu')

    expect(icons.length).toBe(MockItemsMenu.length)
  })
})
