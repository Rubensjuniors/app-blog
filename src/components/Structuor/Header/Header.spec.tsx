import { usePathname } from 'next/navigation'

import { render, screen } from '@/configs/tests/custom-render'

import Header from '.'

const setup = () => render(<Header />)

const mockUsePathname = usePathname as jest.Mock

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(() => '/')
}))

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllTimers()
  })

  it('should render Header component', () => {
    setup()
    const headerComponent = screen.getByTestId('header')

    expect(headerComponent).toBeInTheDocument()
  })
  it('should render Header component with title home', () => {
    setup()

    const title = screen.getByText('Início')

    expect(title).toBeInTheDocument()
  })
  it('should render Header component with title about', () => {
    mockUsePathname.mockReturnValue('/sobre')

    setup()

    const title = screen.getByText('Sobre mim')

    expect(title).toBeInTheDocument()
  })
  it('should render Header component with title articles', () => {
    mockUsePathname.mockReturnValue('/artigos')
    setup()

    const title = screen.getByText('Artigos')

    expect(title).toBeInTheDocument()
  })
  it('should render Header component with title articles in post desktop', () => {
    mockUsePathname.mockReturnValue('/artigos/teste')
    setup()

    const headerComponent = screen.queryByTestId('header')

    expect(headerComponent).not.toBeInTheDocument()
  })
})
