import { render, screen } from '@testing-library/react'

import Card from './index'

const setup = async () =>
  await render(
    <Card title="teste">
      <span>hello world</span>
    </Card>
  )

describe('<Card />', () => {
  it('should render the card', async () => {
    await setup()

    const cardElement = screen.getByText('hello world')

    expect(cardElement).toBeVisible()
  })

  it('should render the card with a title', async () => {
    await setup()

    const cardElementWithTitle = screen.getByRole('heading', { level: 1 })

    expect(cardElementWithTitle).toBeVisible()
  })
})
