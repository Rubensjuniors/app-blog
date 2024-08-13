import { usePathname } from 'next/navigation'

import { render, screen } from '@/configs/tests/custom-render'
import userEvent from '@testing-library/user-event'

import Header from '.'

const mockUsePathname = usePathname as jest.Mock

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(() => '/')
}))

const setup = () => render(<Header />)

describe('<Header>', () => {
  afterEach(() => {
    jest.clearAllTimers()
  })
  it('Should render corectly Header with all items', () => {
    setup()

    const component = screen.getByTestId('header-component')
    const logo = screen.getByTestId('logo-component')
    const items = screen.getAllByTestId('items-header')

    expect(component).toBeVisible()
    expect(logo).toBeVisible()
    items.forEach((item) => {
      expect(item).toBeVisible()
    })
    expect(items.length).toBe(3)
  })
  it('Should be active if the route is home', async () => {
    setup()

    const home = screen.getByText('Início')

    userEvent.click(home)

    expect(home).toHaveClass('text-red-300')
  })
  it('Should be active if the route is about', async () => {
    mockUsePathname.mockReturnValue('/sobre-mim')
    setup()

    const about = screen.getByText('Sobre mim')

    userEvent.click(about)

    expect(about).toHaveClass('text-red-300')
  })
  it('Should be active if the route is articles', async () => {
    mockUsePathname.mockReturnValue('/artigos')
    setup()

    const aritcles = screen.getByText('Artigos')

    userEvent.click(aritcles)

    expect(aritcles).toHaveClass('text-red-300')
  })
})
