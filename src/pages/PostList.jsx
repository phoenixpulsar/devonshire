import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/wp-api';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section className="section">
      <h1>Blog</h1>
      <div className="grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="card">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt=""
                className="card-img"
              />
            )}
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </Link>
        ))}
      </div>
    </section>
  );
}
