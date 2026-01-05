import React from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Icon } from '../components/atoms/Icon';
import styles from './Portfolio.module.css';

export const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Replatform',
      client: 'Retail Enterprise',
      summary: 'Headless storefront with optimized checkout, resulting in faster launches across brands.',
      outcome: '↑ 38% conversion rate',
      tags: ['Headless commerce', 'Performance', 'A/B testing'],
    },
    {
      title: 'Field Operations App',
      client: 'Logistics Leader',
      summary: 'Offline-first mobile app with real-time routing and SLA visibility for distributed teams.',
      outcome: '↓ 27% route time',
      tags: ['Mobile', 'Offline sync', 'Mapping'],
    },
    {
      title: 'Analytics Modernization',
      client: 'Fintech',
      summary: 'Event-driven data pipeline with self-serve dashboards and governance baked in.',
      outcome: 'Hours to minutes reporting',
      tags: ['Data', 'Observability', 'Cloud'],
    },
  ];

  const testimonials = [
    {
      quote: 'LogiCore delivered like an extension of our in-house team—transparent, fast, and quality-driven.',
      client: 'VP of Product, Logistics Platform',
    },
    {
      quote: 'They launched our MVP in record time without sacrificing stability or polish.',
      client: 'Founder, SaaS Startup',
    },
  ];

  const metrics = [
    { label: 'Avg. performance lift', value: '+35%' },
    { label: 'On-time delivery', value: '96%' },
    { label: 'Client satisfaction', value: '4.9/5' },
  ];

  return (
    <div className={styles.page}>
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>Proof in shipped products.</h1>
            <p className={styles.heroSubtitle}>
              LogiCore teams design, build, and scale digital products that move KPIs. Here are a few wins we
              are proud to share.
            </p>
            <div className={styles.metrics}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Card padding="lg" shadow="lg">
            <div className={styles.caseBody}>
              <Icon name="sparkles" size="xl" color="var(--color-blue)" />
              <h3>New project? Start here.</h3>
              <p>Tell us the outcomes you need. We will propose a delivery approach within 48 hours.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent engagements</h2>
          <p className={styles.sectionSubtitle}>
            A sampling of the platforms, products, and experiences LogiCore has recently shipped.
          </p>
        </div>
        <div className={styles.grid}>
          {caseStudies.map((item) => (
            <Card key={item.title} padding="lg" shadow="md" hoverable>
              <div className={styles.caseBody}>
                <div className={styles.tags}>
                  <span className={styles.tag}>{item.client}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.outcome}>
                  <Icon name="arrow" size="sm" color="var(--color-blue)" />
                  {item.outcome}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl" background="gray">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What partners say</h2>
          <p className={styles.sectionSubtitle}>Direct words from the teams we build with.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.client} className={styles.testimonial}>
              <Icon name="quote" size="lg" color="var(--color-blue)" />
              <p className={styles.quote}>
                “{item.quote}”
              </p>
              <span className={styles.client}>{item.client}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
