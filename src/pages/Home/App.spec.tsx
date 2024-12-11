import { render, screen } from '@testing-library/react'

import Home from '.'
describe('App', () => {
  it('renders a greeting message', () => {
    render(<Home />)
    const linkElement = screen.getByText(/Home/i)

    expect(linkElement).toBeInTheDocument()
  })
})
