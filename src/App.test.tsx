import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    const { getByText } = render(<App />)
    expect(getByText('Vite')).toBeInTheDocument()
     // prints out the jsx in the App component unto the command line
  })
})