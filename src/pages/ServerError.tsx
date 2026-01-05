import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServerError.module.css';

export interface ServerErrorProps {
  error?: string;
  statusCode?: number;
}

export const ServerError: React.FC<ServerErrorProps> = ({
  error = 'Internal Server Error',
  statusCode = 500,
}) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>{statusCode}</h1>
        <h2 className={styles.errorTitle}>Something Went Wrong</h2>
        <p className={styles.errorMessage}>
          We encountered an unexpected error while processing your request. Our team has been notified and we're working on a fix.
        </p>

        <div className={styles.technicalDetails}>
          <p className={styles.detailsTitle}>Error Details:</p>
          <p className={styles.detailsText}>{error}</p>
          <p className={styles.noticeBox}>
            Error ID: {Date.now()}
          </p>
        </div>

        <div className={styles.actionButtons}>
          <Link to="/" className={`${styles.actionButtons} ${styles.primaryButton}`}>
            Go Home
          </Link>
          <Link to="/contact" className={`${styles.actionButtons} ${styles.secondaryButton}`}>
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
};
