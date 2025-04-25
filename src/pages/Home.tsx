import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';

interface Category {
  name: string;
  description: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface HomeProps {
  categories: Category[];
  latestPost: Post;
}

const Home: React.FC<HomeProps> = ({ categories, latestPost }) => {
  return (
    <>
      <Helmet>
        <title>Predictions Blog - Home</title>
        <meta
          name="description"
          content="Latest predictions and forecasts across technology, science, and business."
        />
      </Helmet>

      <div className="space-y-8">
        <section>
          <h1 className="mb-4 text-4xl font-bold">Welcome to Predictions</h1>
          <p className="text-lg text-muted-foreground">
            Exploring the future through data-driven predictions and analysis.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Latest Post</h2>
          <article className="rounded-lg border p-6 transition-shadow hover:shadow-lg">
            <Link to={`/post/${latestPost.slug}`}>
              <h3 className="mb-2 text-xl font-semibold hover:text-primary">{latestPost.title}</h3>
            </Link>
            <p className="mb-4 text-muted-foreground">{latestPost.excerpt}</p>
            <div className="flex items-center justify-between text-sm">
              <Link
                to={`/category/${latestPost.category}`}
                className="text-primary hover:underline"
              >
                {latestPost.category}
              </Link>
              <time dateTime={latestPost.date}>
                {new Date(latestPost.date).toLocaleDateString()}
              </time>
            </div>
          </article>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Categories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name}`}
                className="rounded-lg border p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold capitalize hover:text-primary">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
