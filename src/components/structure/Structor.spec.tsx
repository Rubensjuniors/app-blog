import { render, screen } from '@testing-library/react'

import * as useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import Structor from './Structor.component'

const useWindowSizeSpy = jest.spyOn(useWindowSize, 'default')

const setup = async () =>
  await render(
    <Structor>
      <span>Hello world</span>
    </Structor>
  )
describe('<Structor/>', () => {
  it('should render componente structure', async () => {
    await setup()
    const structorElemtn = screen.getByTestId('structor')
    expect(structorElemtn).toBeInTheDocument()
  })
  it('should render header in componente structure', async () => {
    await setup()
    const structorElemtn = screen.getByTestId('header')
    expect(structorElemtn).toBeVisible()
  })

  it('should have sidemenu rendering with width 1000px', async () => {
    useWindowSizeSpy.mockReturnValue({ width: 1000, height: 1000 })
    await setup()

    const sidemenuElement = screen.getByTestId('sidemenu')
    expect(sidemenuElement).toBeVisible()
  })
  it('should have sidemenu-mobile rendering with width 500px', async () => {
    useWindowSizeSpy.mockReturnValue({ width: 500, height: 500 })
    await setup()

    const sidemenuMobileElement = screen.getByTestId('sidemenu-mobile')
    expect(sidemenuMobileElement).toBeVisible()
  })
})
