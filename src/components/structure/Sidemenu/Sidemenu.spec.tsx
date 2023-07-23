import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import Sidemenu from './index'

const mockSidemenuItems = [
  {
    id: '1',
    path: '/page1',
    title: 'Page 1'
  },
  {
    id: '2',
    path: '/page2',
    title: 'Page 2'
  },
  {
    id: '3',
    path: '/page3',
    title: 'Page 3'
  }
]

const renderWithRouter = (component: React.ReactNode) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('Sidemenu component', () => {
  test('renders logo and sidemenu items correctly', () => {
    renderWithRouter(<Sidemenu sidemenuItems={mockSidemenuItems} />)

    const logoIcon = screen.getByTestId('logo_desktop')
    expect(logoIcon).toBeInTheDocument()

    for (const item of mockSidemenuItems) {
      const link = screen.getByText(item.title)
      expect(link).toBeInTheDocument()
    }
  })
})
