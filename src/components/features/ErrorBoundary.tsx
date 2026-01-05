import React, { type ReactNode, type ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error boundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.message}>
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              className={styles.button}
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
            >
              Refresh Page
            </button>
            <a href="/" className={styles.link}>
              Return to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
