import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Section } from '../components/layout/Section';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import styles from './Contact.module.css';

const COMPANY_EMAIL = 'logicore.tech1@gmail.com';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
// Public logo URL for email clients (cannot use local file paths)
const LOGO_URL = 'https://raw.githubusercontent.com/pappi02/LogiCore/main/src/assets/logos/LogiCore_Technologies_logo-no%20bg.png';

type SubmissionPreview = {
  name: string;
  email: string;
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<SubmissionPreview | null>(null);

  useEffect(() => {
    if (!showSuccessModal) return;
    const timeout = window.setTimeout(() => setShowSuccessModal(false), 10000);
    return () => window.clearTimeout(timeout);
  }, [showSuccessModal]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about LogiCore Technologies services.');
    window.open(`https://wa.me/254790010567?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `New inquiry from ${formData.name || 'LogiCore visitor'}`;
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_email: COMPANY_EMAIL,
      subject,
      timestamp,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      // Fire auto-reply to the user via a dedicated template (custom code method)
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        const autoReplyParams = {
          to_email: formData.email,
          from_name: 'LogiCore Technologies',
          subject: 'Thanks for contacting LogiCore — we got your message',
          message: formData.message,
          logo_url: LOGO_URL,
        };
        // Do not block UI on auto-reply; run and swallow errors
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, autoReplyParams, EMAILJS_PUBLIC_KEY)
          .catch((err) => console.warn('Auto-reply failed', err));
      }

      const submissionPreview: SubmissionPreview = {
        name: formData.name,
        email: formData.email,
      };

      setLastSubmission(submissionPreview);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed', error);
      alert('We could not send your message. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
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
      description: COMPANY_EMAIL,
      action: 'Send Email',
      onClick: () => window.location.href = `mailto:${COMPANY_EMAIL}`,
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
                    <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
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
      {showSuccessModal && lastSubmission && (
        <div
          className={styles.modalOverlay}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="success-title"
          aria-describedby="success-description"
          onClick={handleModalClose}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <Icon name="check" size="lg" />
            </div>
            <h3 id="success-title">Message sent successfully</h3>
            <p id="success-description" className={styles.modalText}>
              {lastSubmission.name ? `Thanks, ${lastSubmission.name}!` : 'Thank you!'} We got your note and will follow up soon.
            </p>
            <div className={styles.modalChip}>
              <span>We will reach you at</span>
              <strong>{lastSubmission.email || COMPANY_EMAIL}</strong>
            </div>
            <div className={styles.statusList}>
              <div className={`${styles.statusItem} ${styles.statusSuccess}`}>
                <div className={styles.statusLeft}>
                  <span className={styles.statusDot} />
                  <div>
                    <p className={styles.statusTitle}>Message sent</p>
                    <span className={styles.statusHint}>Delivered to our inbox</span>
                  </div>
                </div>
                <div className={styles.statusBadge}>
                  <Icon name="check" size="sm" />
                  <span>Completed</span>
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <Button variant="primary" size="md" onClick={handleModalClose}>
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
