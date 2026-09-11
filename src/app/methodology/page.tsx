import type { Metadata } from 'next';
import GradeBadge from '../../components/GradeBadge';
import type { Grade } from '../../content/posts';

export const metadata: Metadata = {
  title: 'Our Grading Methodology',
  description: 'How AIGradeLab tests and grades every AI tool. Transparent criteria, honest scores from A+ to F.',
};

const grades: { grade: Grade; label: string; range: string }[] = [
  { grade: 'A+', label: 'Exceptional — Best in class', range: '9.0 – 10' },
  { grade: 'A', label: 'Excellent — Highly recommended', range: '8.0 – 8.9' },
  { grade: 'B+', label: 'Very Good — Strong with trade-offs', range: '7.0 – 7.9' },
  { grade: 'B', label: 'Good — Solid for specific uses', range: '6.0 – 6.9' },
  { grade: 'C', label: 'Average — Gets the job done', range: '5.0 – 5.9' },
  { grade: 'D', label: 'Below Average — Significant issues', range: '4.0 – 4.9' },
  { grade: 'F', label: 'Fail — Not recommended', range: '0 – 3.9' },
];

const criteria = [
  { name: 'Ease of Use', desc: 'How intuitive is the interface? How fast can a new user get value? We evaluate onboarding flow, UI clarity, and learning curve.' },
  { name: 'Output Quality', desc: 'Does the tool deliver on its promises? We run real-world tests and compare outputs against competitors and manual alternatives.' },
  { name: 'Value for Money', desc: 'Is the pricing fair for what you get? We assess free tiers, paid plans, and whether cheaper alternatives deliver similar results.' },
  { name: 'Integration & Workflow', desc: 'Does it fit into a real workflow? We check API access, integrations with popular tools, export options, and automation support.' },
  { name: 'Support & Updates', desc: 'Is the team behind the tool responsive? We evaluate documentation quality, update frequency, community, and customer support.' },
];

export default function MethodologyPage() {
  return (
    <div className="container">
      <div className="methodology">
        <h1>How We Grade AI Tools</h1>
        <p>
          Every AI tool reviewed on AIGradeLab goes through the same rigorous testing process.
          We believe in transparency: you should know exactly how we arrive at every grade,
          what we test, and what each score means.
        </p>
        <p>
          No tool pays for a higher grade. No sponsored placements affect our scores.
          Our revenue comes from display ads and affiliate links — but our grades are
          determined before any monetization is considered.
        </p>

        <h2>The Grade Scale</h2>
        <p>Each tool receives a final grade from A+ to F based on its average score across our five criteria.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {grades.map(({ grade, label, range }) => (
            <div key={grade} style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '14px 18px',
            }}>
              <GradeBadge grade={grade} size="md" />
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '0.95rem' }}>{label}</strong>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {range} / 10
              </span>
            </div>
          ))}
        </div>

        <h2>5 Testing Criteria</h2>
        <p>Each criterion is scored from 0 to 10 based on hands-on testing. The final grade is the average of all five.</p>

        {criteria.map(({ name, desc }, i) => (
          <div key={name} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '20px 22px', margin: '16px 0',
          }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
              {i + 1}. {name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
          </div>
        ))}

        <h2>Our Testing Process</h2>
        <p>
          For every tool we review, we create a real account, go through the onboarding,
          and use the tool for its intended purpose. We take screenshots of our actual experience,
          run comparative tests when relevant, and note every friction point and delight.
        </p>
        <p>
          Reviews include a &quot;Last Tested&quot; date so you know how current our assessment is.
          We re-test and update grades when tools ship major changes.
        </p>
        <p>
          Questions about our methodology? Disagree with a grade? We welcome feedback
          — reach out at <strong>hello@aigradelab.com</strong>.
        </p>
      </div>
    </div>
  );
}
