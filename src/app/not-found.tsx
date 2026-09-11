import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '12px' }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>This page doesn't exist.</p>
      <Link href="/" style={{
        background: 'var(--accent)', color: '#fff', padding: '12px 28px',
        borderRadius: '8px', fontWeight: 600,
      }}>
        Back to Home
      </Link>
    </div>
  );
}
