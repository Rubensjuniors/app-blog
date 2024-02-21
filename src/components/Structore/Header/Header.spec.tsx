import { usePathname } from 'next/navigation'

import { render, screen } from '@testing-library/react'

import Header from '.'

const setup = () => {
  return render(<Header />)
}

const mockUsePathname = usePathname as jest.Mock

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(() => '/'),
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
    mockUsePathname.mockReturnValue('/about')

    setup()

    screen.debug

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

    screen.debug

    const headerComponent = screen.queryByTestId('header')

    expect(headerComponent).not.toBeInTheDocument()
  })
})