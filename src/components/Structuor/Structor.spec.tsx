import { render, screen } from '@/configs/tests/custom-render'

import Structor from '.'

const setup = () =>
  render(
    <Structor>
      <span>teste</span>
    </Structor>
  )

describe('<Structor>', () => {
  it('Should render component structor', () => {
    setup()

    const structorComponent = screen.getByTestId('structor')
    const headerComponent = screen.getByTestId('header')
    const sidemenuComponent = screen.getByTestId('sidemenu')
    const footerComponent = screen.getByTestId('footer-componente')
    const children = screen.getByText('teste')

    expect(structorComponent).toBeInTheDocument()
    expect(headerComponent).toBeInTheDocument()
    expect(sidemenuComponent).toBeInTheDocument()
    expect(footerComponent).toBeInTheDocument()
    expect(children).toBeInTheDocument()

  })
})
