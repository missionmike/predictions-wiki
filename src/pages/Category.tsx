import { Link, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import React from 'react';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

interface CategoryPosts {
  [key: string]: Post[];
}

// This would typically come from an API or static files
const categoryPosts: CategoryPosts = {
  technology: [
    {
      slug: 'future-of-ai',
      title: 'The Future of Artificial Intelligence',
      excerpt: 'Exploring the potential impact of AI on our society and daily lives.',
      date: '2024-03-15',
    },
    {
      slug: 'quantum-computing',
      title: 'Quantum Computing Breakthroughs',
      excerpt: 'Recent developments in quantum computing and their implications.',
      date: '2024-03-01',
    },
  ],
  science: [
    {
      slug: 'climate-change-2024',
      title: 'Climate Change Predictions for 2024',
      excerpt: 'Analyzing current trends and making predictions about climate change.',
      date: '2024-03-10',
    },
    {
      slug: 'space-exploration',
      title: 'The Future of Space Exploration',
      excerpt: 'Predictions about upcoming space missions and discoveries.',
      date: '2024-02-28',
    },
  ],
  business: [
    {
      slug: 'market-trends',
      title: 'Market Trends and Economic Forecasts',
      excerpt: 'Understanding current market trends and making economic predictions.',
      date: '2024-03-05',
    },
    {
      slug: 'startup-predictions',
      title: 'Startup Trends for 2024',
      excerpt: 'Predicting the next big trends in the startup ecosystem.',
      date: '2024-02-20',
    },
  ],
};

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const posts = category ? categoryPosts[category] || [] : [];

  return (
    <>
      <Helmet>
        <title>{`${category?.charAt(0).toUpperCase()}${category?.slice(1)} - Predictions Blog`}</title>
        <meta name="description" content={`Latest predictions and forecasts in ${category}`} />
      </Helmet>

      <div className="space-y-8">
        <section>
          <h1 className="mb-4 text-4xl font-bold capitalize">{category}</h1>
          <p className="text-lg text-muted-foreground">
            Latest predictions and analysis in {category}
          </p>
        </section>

        <section>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border p-6 transition-shadow hover:shadow-lg"
              >
                <Link to={`/post/${post.slug}`}>
                  <h2 className="mb-2 text-xl font-semibold hover:text-primary">{post.title}</h2>
                </Link>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <time dateTime={post.date} className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Category;
