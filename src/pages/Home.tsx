import React from 'react';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { Card } from '../components/molecules/Card';
import { Section } from '../components/layout/Section';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about LogiCore Technologies services.');
    window.open(`https://wa.me/254790010567?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
    },
    {
      icon: 'mobile',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
    },
    {
      icon: 'design',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that drive engagement',
    },
    {
      icon: 'consulting',
      title: 'Digital Consulting',
      description: 'Strategic guidance for your digital transformation journey',
    },
  ];

  const audiences = [
    {
      title: 'Individuals',
      description: 'Personal projects and portfolio websites',
      icon: '👤',
    },
    {
      title: 'SMEs',
      description: 'Growing businesses need scalable solutions',
      icon: '🏢',
    },
    {
      title: 'Enterprises',
      description: 'Large-scale corporate digital infrastructure',
      icon: '🏗️',
    },
    {
      title: 'NGOs',
      description: 'Non-profit organizations making an impact',
      icon: '🌍',
    },
  ];

  const features = [
    '10+ Years Industry Experience',
    'Trusted by 50+ Clients',
    'Modern Tech Stack',
    '24/7 Support',
    'Scalable Solutions',
    'Cost-Effective Services',
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <Section padding="xl" className={styles.hero}>
        <div className={styles.heroWrapper}>
          {/* Offer Banner */}
          <div className={styles.offerBanner}>
            {/* Accent Lines */}
            <div className={styles.accentLine1}></div>
            <div className={styles.accentLine2}></div>
            <div className={styles.accentLine3}></div>
            <div className={styles.accentLine4}></div>
            <div className={styles.accentLine5}></div>
            <div className={styles.accentLine6}></div>
            
            {/* Layered Shapes */}
            <div className={styles.bannerLayer1}>
              <div className={styles.layer1Content}>
                <span className={styles.limitedOffer}>LIMITED TIME OFFER</span>
              </div>
            </div>
            <div className={styles.bannerLayer2}></div>
            <div className={styles.bannerLayer3}>
              <div className={styles.layer3Content}>
                <div className={styles.mainOffer}>60 DAYS FREE</div>
              </div>
            </div>
            <div className={styles.bannerLayer4}></div>
            
            {/* Content Overlay */}
            <div className={styles.bannerContent}>
              <div className={styles.offerSubText}>Web/App Support & Maintenance</div>
              <div className={styles.offerCTA}>FOR EVERY PROJECT</div>
            </div>
            
            {/* Circular Badge */}
            <div className={styles.circleBadge}>
              <div className={styles.badgeInner}>
                <span className={styles.badgeIcon}>✓</span>
              </div>
            </div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Modern Technology Solutions for Your Business
            </h1>
            <p className={styles.heroSubtext}>
              Digital transformation, web development, consulting, and support - 
              delivering innovative experiences that drive growth and success.
            </p>
            <div className={styles.heroActions}>
            <Button
              variant="cta"
              size="lg"
              onClick={handleWhatsAppClick}
              icon={<Icon name="whatsapp" size="sm" />}
            >
              Talk to Us on WhatsApp
            </Button>
            <Button variant="secondary" size="lg" href="/services">
              Explore Services
            </Button>
          </div>
          </div>
        </div>
        <div className={styles.heroPattern}>
          <div className={styles.patternGrid}>
            {[...Array(20)].map((_, i) => (
              <div key={i} className={styles.patternDot} />
            ))}
          </div>
        </div>
      </Section>

      {/* Services Snapshot */}
      <Section padding="xl" background="gray">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} hoverable shadow="md" padding="lg">
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Icon name={service.icon} size="xl" color="var(--color-blue)" />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who We Serve */}
      <Section padding="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Who We Serve</h2>
          <p className={styles.sectionSubtitle}>
            Delivering value across all business sizes and sectors
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} bordered shadow="sm" padding="lg">
              <div className={styles.audienceCard}>
                <div className={styles.audienceIcon}>{audience.icon}</div>
                <h3 className={styles.audienceTitle}>{audience.title}</h3>
                <p className={styles.audienceDescription}>{audience.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why LogiCore */}
      <Section padding="xl" background="gray">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why LogiCore Technologies</h2>
          <p className={styles.sectionSubtitle}>
            Partnership built on trust, innovation, and results
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <Icon name="check" size="md" color="var(--color-blue)" />
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="navy">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaText}>
            Let's discuss how we can help you achieve your digital goals.
            Our team is ready to bring your vision to life.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={handleWhatsAppClick}
            icon={<Icon name="whatsapp" size="sm" />}
          >
            Start Your Journey on WhatsApp
          </Button>
        </div>
      </Section>
    </div>
  );
};
