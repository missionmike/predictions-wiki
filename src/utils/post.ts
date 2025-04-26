import { getCollection } from 'astro:content';

export async function getSortedPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLastestPost() {
  const posts = await getSortedPosts();
  return posts[0];
}
