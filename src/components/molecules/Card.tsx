import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  bordered = false,
  shadow = 'md',
  padding = 'md',
  className = '',
  onClick,
}) => {
  const classNames = [
    styles.card,
    hoverable && styles.hoverable,
    bordered && styles.bordered,
    shadow !== 'none' && styles[`shadow-${shadow}`],
    padding !== 'none' && styles[`padding-${padding}`],
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};
