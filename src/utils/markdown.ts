import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export function parseMarkdownFile(fileContent: string, slug: string): Post {
  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
    slug,
  } as Post;
}

export function getAllPosts(): Post[] {
  // In a real application, this would read from the filesystem
  // For now, we'll return the sample post
  return [
    {
      title: 'The Future of Artificial Intelligence',
      category: 'technology',
      date: '2024-03-15',
      author: 'John Doe',
      tags: ['AI', 'Machine Learning', 'Technology'],
      slug: 'future-of-ai',
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
  ];
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}
