import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about LogiCore Technologies services.');
    window.open(`https://wa.me/254790010567?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactMethods = [
    {
      icon: 'whatsapp',
      title: 'WhatsApp',
      description: 'Instant messaging for quick responses',
      action: 'Chat Now',
      onClick: handleWhatsAppClick,
      color: 'var(--color-whatsapp)',
    },
    {
      icon: 'mail',
      title: 'Email',
      description: 'info@logicore.tech',
      action: 'Send Email',
      onClick: () => window.location.href = 'mailto:info@logicore.tech',
      color: 'var(--color-blue)',
    },
    {
      icon: 'phone',
      title: 'Phone',
      description: '+254 790 010567',
      action: 'Call Us',
      onClick: () => window.location.href = 'tel:+254790010567',
      color: 'var(--color-teal)',
    },
  ];

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <Section padding="xl" background="gradient">
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Let's discuss how we can help transform your digital presence
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section padding="lg">
        <div className="grid grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <Card key={method.title} hoverable padding="lg" shadow="md">
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon} style={{ color: method.color }}>
                  <Icon name={method.icon} size="xl" />
                </div>
                <h3 className={styles.methodTitle}>{method.title}</h3>
                <p className={styles.methodDescription}>{method.description}</p>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={method.onClick}
                >
                  {method.action}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section padding="xl" background="gray">
        <div className="grid grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p className={styles.sectionSubtitle}>
              Fill out the form below and we'll get back to you soon.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className={styles.successMessage}>
                  ✓ Thanks! We'll respond on WhatsApp soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Icon name="location" size="lg" color="var(--color-blue)" />
                <div>
                  <h4>Location</h4>
                  <p>Kenya</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Icon name="mail" size="lg" color="var(--color-blue)" />
                <div>
                  <h4>Email</h4>
                    <a href="mailto:info@logicore.tech">info@logicore.tech</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Icon name="phone" size="lg" color="var(--color-blue)" />
                <div>
                  <h4>Phone</h4>
                    <a href="tel:+254790010567">+254 790 010567</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Icon name="whatsapp" size="lg" color="var(--color-whatsapp)" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>Available 24/7 for instant support</p>
                  <Button
                    variant="cta"
                    size="md"
                    onClick={handleWhatsAppClick}
                    className={styles.whatsappBtn}
                  >
                    Chat Now
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.businessHours}>
              <h4>Business Hours</h4>
              <p>Every day: 24/7</p>
              <p className={styles.note}>Our team is available around the clock.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
