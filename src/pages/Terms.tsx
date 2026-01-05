import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import styles from './Legal.module.css';

export const Terms: React.FC = () => {
  const highlights = [
    'Scope: These terms govern use of LogiCore Technologies websites, content, and services.',
    'Acceptance: By accessing or using our services, you agree to these terms and our Privacy Policy.',
    'Eligibility: You represent you have authority to bind your organization where applicable.',
    'Updates: We may update terms; continued use constitutes acceptance of the revised terms.',
  ];

  const obligations = [
    'Provide accurate information when interacting with our services.',
    'Use the site lawfully and refrain from reverse engineering or misuse.',
    'Protect your account access and notify us of any unauthorized use.',
    'Respect intellectual property and refrain from infringing materials.',
  ];

  const liabilities = [
    'Services provided “as is” and “as available”.',
    'No warranty of uninterrupted or error-free operation.',
    'Liability is limited to the maximum extent permitted by law.',
    'Indemnification for misuse, unlawful conduct, or violation of these terms.',
  ];

  return (
    <div className={styles.page}>
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>Terms & Conditions</h1>
            <p className={styles.heroSubtitle}>
              The rules of engagement for using LogiCore Technologies digital properties and services.
            </p>
            <div className={styles.meta}>
              <span>Effective: Jan 2, 2026</span>
              <span>Last reviewed: Jan 2, 2026</span>
            </div>
            <div className={styles.ctaRow}>
              <Button variant="cta" size="md" href="mailto:legal@logicore.tech" icon={<Icon name="mail" size="sm" />}>
                Contact Legal
              </Button>
              <Button variant="secondary" size="md" href="/privacy">
                View Privacy Policy
              </Button>
            </div>
          </div>
          <Card padding="lg" shadow="lg">
            <div className={styles.card}>
              <Icon name="shield" size="xl" color="var(--color-blue)" />
              <h3>Key expectations</h3>
              <p className={styles.sectionText}>
                We operate transparently and expect the same of our partners and users. Please review these terms before using our services.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>Fair Use</span>
                <span className={styles.badge}>Security</span>
                <span className={styles.badge}>Compliance</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Highlights</h2>
          <div className={styles.list}>
            {highlights.map((item) => (
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
          <h2 className={styles.sectionTitle}>User obligations</h2>
          <p className={styles.sectionText}>
            To keep the platform secure and fair for everyone, you agree to the following obligations:
          </p>
          <div className={styles.list}>
            {obligations.map((item) => (
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
          <h2 className={styles.sectionTitle}>Limitations & liability</h2>
          <div className={styles.list}>
            {liabilities.map((item) => (
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
          <h2 className={styles.sectionTitle} style={{ color: 'var(--color-white)' }}>Need to talk?</h2>
          <p className={styles.sectionText} style={{ color: 'var(--color-gray-200)' }}>
            Reach legal@logicore.tech for contracts, data processing agreements, or questions about these terms.
          </p>
          <div className={styles.ctaRow}>
            <Button variant="cta" size="md" href="mailto:legal@logicore.tech" icon={<Icon name="mail" size="sm" />}>
              Email Legal
            </Button>
            <Link to="/privacy" className="link">Review Privacy Policy</Link>
          </div>
        </div>
      </Section>
    </div>
  );
};
