import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuBottom from './index'

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

describe('MenuBottom', () => {
  it('renders icons correctly', () => {
    render(
      <Router>
        <MenuBottom sidemenuItems={mockSidemenuItems} />
      </Router>
    )
    
    mockSidemenuItems.forEach((item) => {
      const iconElement = screen.queryByTestId(item.id)
      expect(iconElement).toBeInTheDocument() 
    })
  })
})
