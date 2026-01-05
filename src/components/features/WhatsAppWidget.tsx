import React, { useState, useEffect } from 'react';
import { Icon } from '../atoms/Icon';
import styles from './WhatsAppWidget.module.css';

export interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '254790010567',
  message = 'Hello! I would like to learn more about LogiCore Technologies services.',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.widget}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <Icon name="whatsapp" size="lg" />
    </button>
  );
};
