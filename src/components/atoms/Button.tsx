import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'cta' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  href,
  className = '',
  type = 'button',
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    // Use React Router Link for internal routes, regular <a> for external URLs
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={href}
          className={classNames}
          onClick={(e) => {
            if (disabled || loading) {
              e.preventDefault();
              return;
            }
            onClick?.();
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{children}</span>
          {loading && <span className={styles.spinner}>⏳</span>}
        </a>
      );
    }
    
    return (
      <Link
        to={href}
        className={classNames}
        onClick={(e) => {
          if (disabled || loading) {
            e.preventDefault();
            return;
          }
          onClick?.();
        }}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {loading && <span className={styles.spinner}>⏳</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {loading && <span className={styles.spinner}>⏳</span>}
    </button>
  );
};
