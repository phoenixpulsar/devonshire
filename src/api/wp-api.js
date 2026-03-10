import postsData from '../mocks/posts.json';
import pagesData from '../mocks/pages.json';

const API_URL = import.meta.env.VITE_WP_API_URL || '/wp-json/wp/v2';
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === 'true';

async function fetchJSON(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  return res.json();
}

export async function getPosts() {
  if (USE_MOCKS) return postsData;
  return fetchJSON('/posts?_embed');
}

export async function getPost(slug) {
  if (USE_MOCKS) {
    const post = postsData.find((p) => p.slug === slug);
    if (!post) throw new Error('Post not found');
    return post;
  }
  const posts = await fetchJSON(`/posts?slug=${slug}&_embed`);
  if (!posts.length) throw new Error('Post not found');
  return posts[0];
}

export async function getPages() {
  if (USE_MOCKS) return pagesData;
  return fetchJSON('/pages?_embed');
}

export async function getPage(slug) {
  if (USE_MOCKS) {
    const page = pagesData.find((p) => p.slug === slug);
    if (!page) throw new Error('Page not found');
    return page;
  }
  const pages = await fetchJSON(`/pages?slug=${slug}&_embed`);
  if (!pages.length) throw new Error('Page not found');
  return pages[0];
}
