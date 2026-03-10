import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api/wp-api';

export default function PostSingle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(slug).then(setPost);
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="section">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <time>{new Date(post.date).toLocaleDateString()}</time>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
