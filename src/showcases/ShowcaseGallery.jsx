import { Link } from 'react-router-dom';
import showcases from './index';

export default function ShowcaseGallery() {
  return (
    <section className="section">
      <h1>Showcases</h1>
      <p>Browse UX pattern demos. Click any card to see it in action.</p>
      <div className="grid" style={{ marginTop: 'var(--space-md)' }}>
        {showcases.map((s) => (
          <Link to={`/showcases/${s.id}`} key={s.id} className="card">
            <h2>{s.title}</h2>
            <p>{s.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
