import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const mockCategories = [
  {
    name: 'technology',
    description: 'Latest predictions in tech and innovation',
  },
  {
    name: 'science',
    description: 'Scientific discoveries and forecasts',
  },
];

const mockLatestPost = {
  slug: 'test-post',
  title: 'Test Post',
  excerpt: 'This is a test post',
  category: 'technology',
  date: '2024-03-15',
};

describe('Home', () => {
  it('renders the welcome message', () => {
    render(
      <BrowserRouter>
        <Home categories={mockCategories} latestPost={mockLatestPost} />
      </BrowserRouter>
    );
    expect(screen.getByText('Welcome to Predictions')).toBeInTheDocument();
  });

  it('renders latest post', () => {
    render(
      <BrowserRouter>
        <Home categories={mockCategories} latestPost={mockLatestPost} />
      </BrowserRouter>
    );
    expect(screen.getByText('Latest Post')).toBeInTheDocument();
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });
});
