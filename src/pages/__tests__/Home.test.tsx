import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

describe('Home', () => {
  it('renders the welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Welcome to Predictions')).toBeInTheDocument()
  })

  it('renders recent posts', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getByText('The Future of Artificial Intelligence')).toBeInTheDocument()
  })
}) 