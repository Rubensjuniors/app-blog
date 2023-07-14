import { render } from '@testing-library/react'
import App from './App'
describe('sum', () => {
  it('test', () => {
    const { getByText } = render(<App />)
    expect(getByText('new portifolio')).toBeTruthy()
  })
})
