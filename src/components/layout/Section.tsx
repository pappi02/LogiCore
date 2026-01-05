import React from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'navy' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  background = 'white',
  padding = 'lg',
  className = '',
  id,
}) => {
  const classNames = [
    styles.section,
    styles[`bg-${background}`],
    styles[`padding-${padding}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classNames}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
