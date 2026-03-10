export default function HeroSplit() {
  return (
    <section className="showcase-demo">
      <h2>Split Hero Section</h2>
      <p>Image on the left, text and CTA on the right. Stacks on mobile.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-lg)',
          alignItems: 'center',
          marginTop: 'var(--space-md)',
        }}
      >
        <img
          src="https://placehold.co/600x400/0057b7/ffffff?text=Hero+Image"
          alt="Hero visual"
          style={{ width: '100%', borderRadius: 'var(--radius)' }}
        />
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>
            Build Beautiful Experiences
          </h3>
          <p style={{ marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
            Devonshire gives you a lightweight canvas for prototyping UX patterns.
            No heavy frameworks, no boilerplate — just React, Vite, and your
            creativity.
          </p>
          <a
            href="#cta"
            style={{
              display: 'inline-block',
              padding: 'var(--space-sm) var(--space-md)',
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
