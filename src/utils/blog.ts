import { getCollection } from 'astro:content';

export async function getSortedBlogPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLatestBlogPost() {
  const posts = await getSortedBlogPosts();
  return posts[0];
}
