import { render, screen } from '@testing-library/react'

import Header from './index'

describe('<Header />', () => {
  it('should render the header', async () => {
    await render(<Header />)

    const headerElement = screen.getByTestId('header')

    expect(headerElement).toBeVisible()
  })

  it('should render the header with a title', async () => {
    await render(<Header />)

    const headerElement = screen.getByText('Sobre mim')

    expect(headerElement).toBeVisible()
  })
})
