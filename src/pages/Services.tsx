import React from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Icon } from '../components/atoms/Icon';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  const coreServices = [
    {
      icon: 'code',
      title: 'Web Platforms',
      description: 'Composable web apps, portals, and headless CMS experiences built for speed and scalability.',
    },
    {
      icon: 'mobile',
      title: 'Mobile Products',
      description: 'Native-quality mobile apps with seamless performance across iOS and Android ecosystems.',
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Cloud architecture, CI/CD, observability, and zero-downtime delivery pipelines.',
    },
    {
      icon: 'design',
      title: 'Product Design',
      description: 'Research-backed UX, UI systems, and prototypes that move from idea to launch faster.',
    },
    {
      icon: 'consulting',
      title: 'Digital Strategy',
      description: 'Roadmaps, technology selection, and delivery playbooks aligned to business outcomes.',
    },
    {
      icon: 'security',
      title: 'Security & Compliance',
      description: 'Secure-by-design builds with compliance guidance and proactive risk mitigation.',
    },
  ];

  const delivery = [
    {
      step: '01',
      title: 'Discovery Sprints',
      text: 'We capture goals, constraints, and success metrics to build a clear delivery blueprint.',
    },
    {
      step: '02',
      title: 'Design & Validate',
      text: 'UX flows, prototypes, and architecture decisions validated with stakeholders early.',
    },
    {
      step: '03',
      title: 'Build & Iterate',
      text: 'Agile delivery with quality gates, performance budgets, and transparent reporting.',
    },
    {
      step: '04',
      title: 'Launch & Grow',
      text: 'Production readiness, handover, and continuous optimization after go-live.',
    },
  ];

  const capabilities = ['React & TypeScript', 'React Native', 'Node.js & APIs', 'AWS & Azure', 'CI/CD & IaC', 'Design Systems', 'Analytics & Experimentation', 'QA Automation'];

  const stats = [
    { value: '10+ years', label: 'Shipping production systems' },
    { value: '50+ launches', label: 'Platforms, apps, and sites' },
    { value: '4.9 / 5', label: 'Average client satisfaction' },
  ];

  return (
    <div className={styles.page}>
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <div>
            <span className={styles.pill}>LogiCore Services</span>
            <h1 className={styles.heroTitle}>Build smarter digital products with LogiCore.</h1>
            <p className={styles.heroSubtitle}>
              From discovery to scale, LogiCore Technologies delivers cloud-native platforms, mobile products,
              and experience-led interfaces that keep your roadmap moving.
            </p>
            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <div className={styles.statValue}>{item.value}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Card padding="lg" shadow="lg">
            <div className={styles.ctaCard}>
              <Icon name="rocket" size="xl" color="var(--color-blue)" />
              <h3>Need a delivery pod?</h3>
              <p>Spin up a dedicated LogiCore squad with engineering, design, and QA in under two weeks.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What we ship</h2>
          <p className={styles.sectionSubtitle}>
            Cross-functional teams delivering resilient software with measurable business impact.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {coreServices.map((service) => (
            <Card key={service.title} padding="lg" hoverable shadow="md">
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Icon name={service.icon} size="lg" />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl" background="gray">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How we deliver</h2>
          <p className={styles.sectionSubtitle}>
            Transparent, iterative, and data-backed delivery to keep stakeholders aligned.
          </p>
        </div>
        <div className={styles.processList}>
          {delivery.map((item) => (
            <Card key={item.step} padding="lg" shadow="sm" bordered>
              <div className={styles.processCard}>
                <span className={styles.processStep}>
                  <Icon name="check" size="sm" />
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical toolkit</h2>
          <p className={styles.sectionSubtitle}>
            Proven stack choices that balance velocity, stability, and maintainability.
          </p>
        </div>
        <div className={styles.badges}>
          {capabilities.map((capability) => (
            <span key={capability} className={styles.badge}>{capability}</span>
          ))}
        </div>
      </Section>
    </div>
  );
};
