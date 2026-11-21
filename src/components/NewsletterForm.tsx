'use client';
import { useState } from 'react';

type Props = { ctaText: string; placeholder: string; successText: string };

export default function NewsletterForm({ ctaText, placeholder, successText }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:hello@aigradelab.com?subject=Newsletter%20Subscription&body=Please%20add%20me%20to%20the%20AIGradeLab%20newsletter.%20My%20email%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return <p style={{ color: 'var(--grade-aplus)', fontWeight: 600 }}>{successText}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="newsletter-input"
      />
      <button type="submit" className="cta-btn">{ctaText} &rarr;</button>
    </form>
  );
}
