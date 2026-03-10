import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/wp-api';
import showcases from '../showcases';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data.slice(0, 3)));
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Devonshire</h1>
        <p>A minimal React + Vite frontend for prototyping UX and headless WordPress.</p>
      </section>

      <section className="section">
        <h2>Showcases</h2>
        <div className="grid">
          {showcases.map((s) => (
            <Link to={`/showcases/${s.id}`} key={s.id} className="card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Latest Posts</h2>
        <div className="grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="card">
              <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
