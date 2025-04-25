import { Route, Routes } from 'react-router-dom';

import Category from './pages/Category';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Layout from './components/Layout';
import Post from './pages/Post';

// This would typically come from an API or CMS
const categories = [
  {
    name: 'technology',
    description: 'Latest predictions in tech and innovation',
  },
  {
    name: 'science',
    description: 'Scientific discoveries and forecasts',
  },
  {
    name: 'business',
    description: 'Market trends and business insights',
  },
];

const latestPost = {
  slug: 'future-of-ai',
  title: 'The Future of Artificial Intelligence',
  excerpt: 'Exploring the potential impact of AI on our society and daily lives.',
  date: '2024-03-15',
  category: 'technology',
};

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Predictions Blog</title>
        <meta name="description" content="A blog about predictions and forecasting" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home categories={categories} latestPost={latestPost} />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="post/:slug" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
