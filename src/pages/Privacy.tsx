import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import styles from './Legal.module.css';

export const Privacy: React.FC = () => {
  const principles = [
    'We collect only what we need to deliver and improve services.',
    'We never sell personal data and only share with trusted processors under contract.',
    'You control your data: access, correct, delete, and opt-out of marketing.',
    'Security by design: encryption in transit and at rest, least-privilege access.',
    'Transparency: we disclose how data is used, stored, and retained.',
  ];

  const dataUse = [
    'Account and contact details to respond to inquiries and provide support.',
    'Usage analytics to improve performance, reliability, and user experience.',
    'Service communications (operational emails, security notices).',
    'Optional marketing updates with easy opt-out controls.',
  ];

  const rights = [
    'Access: request a copy of the data we hold about you.',
    'Correction: update inaccurate or incomplete information.',
    'Deletion: ask us to delete your data where legally permissible.',
    'Restriction: limit certain processing activities.',
    'Objection: opt out of direct marketing at any time.',
    'Portability: receive your data in a portable format when applicable.',
  ];

  return (
    <div className={styles.page}>
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              How LogiCore Technologies collects, uses, and protects your information. We designed this policy to be
              clear, concise, and actionable.
            </p>
            <div className={styles.meta}>
              <span>Effective: Jan 2, 2026</span>
              <span>Last reviewed: Jan 2, 2026</span>
            </div>
            <div className={styles.ctaRow}>
              <Button variant="cta" size="md" href="mailto:privacy@logicore.tech" icon={<Icon name="mail" size="sm" />}>
                Contact Privacy Team
              </Button>
              <Button variant="secondary" size="md" href="/terms">
                View Terms & Conditions
              </Button>
            </div>
          </div>
          <Card padding="lg" shadow="lg">
            <div className={styles.card}>
              <Icon name="shield" size="xl" color="var(--color-blue)" />
              <h3>Our commitment</h3>
              <p className={styles.sectionText}>
                Privacy is part of our product requirements. We align to industry standards and continuously improve our controls.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>Encryption</span>
                <span className={styles.badge}>Access Controls</span>
                <span className={styles.badge}>Data Minimization</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Core principles</h2>
          <div className={styles.list}>
            {principles.map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.ctaRow}>
                  <Icon name="check" size="sm" color="var(--color-blue)" />
                  <strong>{item}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl" background="gray">
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Information we collect & how we use it</h2>
          <p className={styles.sectionText}>
            We collect data to deliver, secure, and improve our services. Here is how we apply it:
          </p>
          <div className={styles.list}>
            {dataUse.map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.ctaRow}>
                  <Icon name="arrow" size="sm" color="var(--color-blue)" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your privacy rights</h2>
          <p className={styles.sectionText}>
            Depending on your location, you may have rights under GDPR, CCPA/CPRA, or other privacy frameworks. We honor
            verified requests as required by law.
          </p>
          <div className={styles.list}>
            {rights.map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.ctaRow}>
                  <Icon name="check" size="sm" color="var(--color-blue)" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl" background="navy">
        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: 'var(--color-white)' }}>Questions or requests</h2>
          <p className={styles.sectionText} style={{ color: 'var(--color-gray-200)' }}>
            Email privacy@logicore.tech to submit access, correction, or deletion requests. For security disclosures,
            reach security@logicore.tech.
          </p>
          <div className={styles.ctaRow}>
            <Button variant="cta" size="md" href="mailto:privacy@logicore.tech" icon={<Icon name="mail" size="sm" />}>
              Submit a request
            </Button>
            <Link to="/terms" className="link">Read Terms & Conditions</Link>
          </div>
        </div>
      </Section>
    </div>
  );
};
