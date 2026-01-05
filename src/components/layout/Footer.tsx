import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import logoImage from '../../assets/logos/LogiCore_Technologies_logo-no bg.png';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about LogiCore Technologies services.');
    window.open(`https://wa.me/254790010567?text=${message}`, '_blank');
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Why Us', path: '/why-us' },
  ];

  const services = [
    { label: 'Web Development', path: '/services#web' },
    { label: 'Mobile Apps', path: '/services#mobile' },
    { label: 'Cloud Solutions', path: '/services#cloud' },
    { label: 'UI/UX Design', path: '/services#design' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <img src={logoImage} alt="LogiCore Technologies" className={styles.logoImage} />
            </div>
            <p className={styles.description}>
              Modern technology solutions for your business. We deliver innovative digital experiences that drive growth and success.
            </p>
            <Button
              variant="cta"
              size="md"
              onClick={handleWhatsAppClick}
              icon={<Icon name="whatsapp" size="sm" />}
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Icon name="mail" size="sm" />
                <a href="mailto:info@logicore.tech" className={styles.link}>
                  info@logicore.tech
                </a>
              </li>
              <li className={styles.contactItem}>
                <Icon name="phone" size="sm" />
                <a href="tel:+254790010567" className={styles.link}>
                  +254 790 010567
                </a>
              </li>
              <li className={styles.contactItem}>
                <Icon name="location" size="sm" />
                <span className={styles.text}>Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} LogiCore Technologies. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span className={styles.separator}>•</span>
            <Link to="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
