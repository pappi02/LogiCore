import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import styles from './NotFound.module.css';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className={styles.actions}>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
