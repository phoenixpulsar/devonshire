import { useParams, Link } from 'react-router-dom';
import showcases from './index';

export default function ShowcaseView() {
  const { id } = useParams();
  const showcase = showcases.find((s) => s.id === id);

  if (!showcase) {
    return (
      <section className="section">
        <h1>Showcase not found</h1>
        <Link to="/showcases">Back to all showcases</Link>
      </section>
    );
  }

  const Component = showcase.component;

  return (
    <section className="section">
      <Link to="/showcases" style={{ display: 'inline-block', marginBottom: 'var(--space-md)' }}>
        &larr; All Showcases
      </Link>
      <Component />
    </section>
  );
}
