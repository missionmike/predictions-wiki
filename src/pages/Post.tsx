import { Link, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Post {
  title: string;
  category: string;
  date: string;
  content: string;
}

interface Posts {
  [key: string]: Post;
}

// This would typically come from an API or static files
const posts: Posts = {
  'future-of-ai': {
    title: 'The Future of Artificial Intelligence',
    category: 'technology',
    date: '2024-03-15',
    content: `
# The Future of Artificial Intelligence

Artificial Intelligence (AI) is rapidly transforming our world. From self-driving cars to virtual assistants, AI technologies are becoming increasingly integrated into our daily lives.

## Current State of AI

The current state of AI is marked by significant advancements in machine learning, particularly in deep learning and neural networks. These technologies have enabled breakthroughs in:

- Natural Language Processing
- Computer Vision
- Robotics
- Healthcare Diagnostics

## Future Predictions

Looking ahead, we can expect several key developments:

1. More sophisticated AI systems that can understand and generate human-like text
2. Increased automation in various industries
3. Enhanced personalization in services and products
4. New ethical challenges and regulatory frameworks

## Conclusion

The future of AI holds immense potential, but it also requires careful consideration of ethical implications and societal impact.
    `,
  },
  // Add more posts here...
};

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} - Predictions Blog`}</title>
        <meta name="description" content={post.content.split('\n')[0]} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.split('\n')[0]} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
      </Helmet>

      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <Link to={`/category/${post.category}`} className="text-primary hover:underline">
            {post.category}
          </Link>
          <h1 className="mb-4 mt-2 text-4xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString()}
          </time>
        </header>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default Post;
