import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Index'

describe('Header component', () => {
  test('renders title correctly', () => {
    const title = 'Test Title'
    render(<Header title={title} />)

    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })
})
