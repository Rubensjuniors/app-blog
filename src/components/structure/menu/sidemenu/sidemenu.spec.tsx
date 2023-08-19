import { act, fireEvent, render, screen } from '@testing-library/react'

import Sidemenu from './sidemenu.component'

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

const setup = async () =>
  await render(<Sidemenu sidemenuItems={MockItemsMenu} />)

describe('<Sidemenu /', () => {
  it('should render items sidemenu', async () => {
    await setup()

    const item1 = screen.getByText(MockItemsMenu[0].title)
    const item2 = screen.getByText(MockItemsMenu[1].title)
    const item3 = screen.getByText(MockItemsMenu[2].title)

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
    expect(item3).toBeInTheDocument()
  })

  it('should have links items correctly', async () => {
    await setup()

    const item1 = screen.getByText(MockItemsMenu[0].title)

    act(async () => {
      await fireEvent.click(item1)
    })

    expect(window.location.pathname).toBe(MockItemsMenu[0].path)
  })
})
