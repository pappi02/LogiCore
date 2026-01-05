import React from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Icon } from '../components/atoms/Icon';
import styles from './WhyUs.module.css';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      icon: 'shield',
      title: 'Reliability by design',
      text: 'Resilient architectures, observability, and incident-ready practices from day one.',
    },
    {
      icon: 'time',
      title: 'Speed with intention',
      text: 'Lean delivery pods that ship value quickly without compromising maintainability.',
    },
    {
      icon: 'team',
      title: 'Embedded partnership',
      text: 'We operate as part of your team—shared rituals, transparent reporting, and co-ownership.',
    },
    {
      icon: 'growth',
      title: 'Outcome obsessed',
      text: 'Every sprint anchored to business KPIs so progress is visible and measurable.',
    },
  ];

  const differentiators = [
    'Design systems for consistency across products',
    'Accessibility and performance baked into definition of done',
    'Playbooks for secure coding and data protection',
    'Roadmap advisory from staff-level technologists',
    'Nearshore and onshore teams to fit collaboration styles',
    'Lean documentation and enablement for handoff',
  ];

  const proofPoints = [
    { label: 'Launch cadence', value: 'Bi-weekly increments' },
    { label: 'Uptime targets', value: '99.9% SLA planning' },
    { label: 'Engagement model', value: 'Pods or augmentation' },
  ];

  return (
    <div className={styles.page}>
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>Why teams choose LogiCore.</h1>
            <p className={styles.heroSubtitle}>
              We combine senior product thinking with disciplined engineering so you can ship faster and sleep better.
            </p>
          </div>
          <Card padding="lg" shadow="lg">
            <div className={styles.proofCard}>
              <Icon name="trophy" size="xl" color="var(--color-blue)" />
              <h3>Outcomes first</h3>
              <p>We measure success by the KPIs you care about—activation, conversion, retention, or uptime.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our pillars</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide every LogiCore engagement.
          </p>
        </div>
        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <Card key={pillar.title} padding="lg" shadow="md" hoverable>
              <div className={styles.pillarCard}>
                <Icon name={pillar.icon} size="lg" color="var(--color-blue)" />
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl" background="gray">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How we stand apart</h2>
          <p className={styles.sectionSubtitle}>
            Practices that keep quality high and communication clear.
          </p>
        </div>
        <div className={styles.differentiators}>
          {differentiators.map((item) => (
            <Card key={item} padding="lg" shadow="sm" bordered>
              <div className={styles.listItem}>
                <Icon name="check" size="sm" color="var(--color-blue)" />
                {item}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Proof points</h2>
          <p className={styles.sectionSubtitle}>What to expect when we partner.</p>
        </div>
        <div className={styles.differentiators}>
          {proofPoints.map((point) => (
            <Card key={point.label} padding="lg" shadow="md" hoverable>
              <div className={styles.listItem}>
                <Icon name="sparkles" size="sm" color="var(--color-blue)" />
                <div>
                  <strong>{point.value}</strong>
                  <div className={styles.pillarText}>{point.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
