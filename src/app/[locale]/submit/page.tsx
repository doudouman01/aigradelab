'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getTranslations, isValidLocale, defaultLocale } from '../../../lib/i18n';

export default function SubmitPage() {
  const params = useParams();
  const locale = typeof params.locale === 'string' ? params.locale : 'en';
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  const t = getTranslations(lang);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    toolName: '',
    toolUrl: '',
    category: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Tool Name: ${form.toolName}%0ATool URL: ${form.toolUrl}%0ACategory: ${form.category}%0AContact Email: ${form.email}%0ADescription: ${form.description}`;
    window.location.href = `mailto:hello@aigradelab.com?subject=Tool%20Submission%3A%20${encodeURIComponent(form.toolName)}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submit-page">
        <div className="container">
          <div className="submit-success">
            <div className="submit-success-icon">&#10003;</div>
            <h1>{t.submit.successTitle}</h1>
            <p>{t.submit.successDesc}</p>
            <Link href={`/${lang}`} className="btn-primary">{t.notFound.cta}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="submit-page">
      <div className="container">
        <div className="submit-header">
          <h1>{t.submit.title}</h1>
          <p>{t.submit.intro}</p>
        </div>

        <div className="submit-grid">
          <div className="submit-form-section">
            <h2>{t.submit.formTitle}</h2>
            <p className="submit-form-desc">{t.submit.formDesc}</p>
            <form onSubmit={handleSubmit} className="submit-form">
              <div className="form-group">
                <label htmlFor="toolName">{t.submit.fields.toolName} *</label>
                <input type="text" id="toolName" name="toolName" value={form.toolName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="toolUrl">{t.submit.fields.toolUrl} *</label>
                <input type="url" id="toolUrl" name="toolUrl" value={form.toolUrl} onChange={handleChange} required placeholder="https://" />
              </div>
              <div className="form-group">
                <label htmlFor="category">{t.submit.fields.category}</label>
                <select id="category" name="category" value={form.category} onChange={handleChange}>
                  <option value="">—</option>
                  <option value="writing">AI Writing</option>
                  <option value="image">AI Image</option>
                  <option value="video">AI Video</option>
                  <option value="audio">AI Audio</option>
                  <option value="coding">AI Coding</option>
                  <option value="productivity">Productivity</option>
                  <option value="marketing">Marketing</option>
                  <option value="chatbot">Chatbot</option>
                  <option value="automation">Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.submit.fields.email} *</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="description">{t.submit.fields.description}</label>
                <textarea id="description" name="description" value={form.description} onChange={handleChange} rows={4} />
              </div>
              <button type="submit" className="btn-primary submit-btn">{t.submit.submit}</button>
            </form>
          </div>

          <div className="submit-premium-section">
            <div className="premium-card">
              <div className="premium-badge">&#9733;</div>
              <h2>{t.submit.premiumTitle}</h2>
              <p>{t.submit.premiumDesc}</p>
              <ul className="premium-features">
                {t.submit.premiumFeatures.map((f, i) => (
                  <li key={i}><span className="premium-check">&#10003;</span> {f}</li>
                ))}
              </ul>
              <a href="mailto:hello@aigradelab.com?subject=Priority%20Review%20Request" className="btn-secondary premium-cta">{t.submit.premiumCta}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
