import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPage } from '../api/wp-api';

export default function PageView() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPage(slug).then(setPage);
  }, [slug]);

  if (!page) return <p>Loading...</p>;

  return (
    <article className="section">
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </article>
  );
}
