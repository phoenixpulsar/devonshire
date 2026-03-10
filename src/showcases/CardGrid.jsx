const cards = [
  { title: 'Analytics', text: 'Track user behaviour and engagement metrics in real time.' },
  { title: 'Integrations', text: 'Connect with third-party services using webhooks and APIs.' },
  { title: 'Security', text: 'Enterprise-grade encryption and role-based access control.' },
  { title: 'Performance', text: 'Optimised delivery with edge caching and lazy loading.' },
  { title: 'Design System', text: 'Consistent tokens, components, and patterns across products.' },
  { title: 'Accessibility', text: 'WCAG 2.1 AA compliant with keyboard and screen reader support.' },
];

export default function CardGrid() {
  return (
    <section className="showcase-demo">
      <h2>Responsive Card Grid</h2>
      <p>Resize the browser to see the grid adapt. Uses <code>auto-fill</code> + <code>minmax()</code>.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 'var(--space-md)',
          marginTop: 'var(--space-md)',
        }}
      >
        {cards.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
