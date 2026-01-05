import React from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Icon } from '../components/atoms/Icon';
import styles from './About.module.css';

export const About: React.FC = () => {
  const approach = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business goals, challenges, and target audience to create a strategic roadmap.',
    },
    {
      step: 2,
      title: 'Strategic Design',
      description: 'Our team designs intuitive user experiences and beautiful interfaces that align with your brand identity.',
    },
    {
      step: 3,
      title: 'Development & Build',
      description: 'Using cutting-edge technologies, we build scalable, secure, and high-performance solutions.',
    },
    {
      step: 4,
      title: 'Testing & Deployment',
      description: 'Rigorous testing ensures quality, followed by seamless deployment to production environments.',
    },
    {
      step: 5,
      title: 'Support & Growth',
      description: 'Ongoing maintenance, updates, and optimization to ensure continued success and growth.',
    },
  ];

  return (
    <div className={styles.about}>
      {/* Company Overview */}
      <Section padding="xl">
        <div className={styles.overview}>
          <h1 className={styles.mainTitle}>About LogiCore Technologies</h1>
          <div className={styles.overviewContent}>
            <p className={styles.leadText}>
              LogiCore Technologies is a modern digital solutions provider dedicated to helping businesses
              transform and thrive in the digital age.
            </p>
            <p>
              We specialize in creating innovative web and mobile applications, cloud infrastructure, and
              digital strategies that drive measurable results. Our team combines technical expertise with
              creative problem-solving to deliver solutions that exceed expectations.
            </p>
            <p>
              With over a decade of experience, we've partnered with businesses of all sizes - from
              startups to enterprises - helping them navigate digital transformation and achieve their goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section padding="xl" background="gray">
        <div className="grid grid-cols-2 gap-8">
          <Card padding="lg" shadow="md">
            <div className={styles.missionVision}>
              <div className={styles.mvIcon}>
                <Icon name="star" size="xl" color="var(--color-blue)" />
              </div>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <p className={styles.mvText}>
                To empower businesses with innovative technology solutions that drive growth,
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
          </Card>
          <Card padding="lg" shadow="md">
            <div className={styles.missionVision}>
              <div className={styles.mvIcon}>
                <Icon name="arrow" size="xl" color="var(--color-teal)" />
              </div>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <p className={styles.mvText}>
                To be the trusted technology partner for businesses worldwide, known for excellence,
                innovation, and lasting partnerships that create meaningful impact.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Approach */}
      <Section padding="xl">
        <div className={styles.approachHeader}>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionSubtitle}>
            A proven methodology that delivers consistent results
          </p>
        </div>
        <div className={styles.approachTimeline}>
          {approach.map((item) => (
            <div key={item.step} className={styles.approachStep}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section padding="xl" background="navy">
        <div className={styles.valuesSection}>
          <h2 className={styles.valuesSectionTitle}>Our Values</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Excellence</h3>
              <p>Committed to the highest quality in every project we deliver</p>
            </div>
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Innovation</h3>
              <p>Constantly exploring new technologies and creative solutions</p>
            </div>
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Integrity</h3>
              <p>Transparent communication and honest partnerships</p>
            </div>
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Collaboration</h3>
              <p>Working closely with clients as trusted partners</p>
            </div>
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Growth</h3>
              <p>Dedicated to continuous learning and improvement</p>
            </div>
            <div className={styles.valueItem}>
              <Icon name="check" size="lg" />
              <h3>Impact</h3>
              <p>Creating solutions that make a real difference</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
