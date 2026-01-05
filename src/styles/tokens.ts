/**
 * Design System Tokens
 * Central source of truth for colors, typography, spacing, and other design values
 */

export const colors = {
  primary: {
    navy: '#1a2332',
    charcoal: '#2d3748',
    white: '#ffffff',
  },
  accent: {
    blue: '#0ea5e9',
    teal: '#14b8a6',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    500: '#64748b',
    700: '#334155',
    900: '#0f172a',
  },
  text: {
    primary: '#1a2332',
    secondary: '#64748b',
    light: '#94a3b8',
    inverse: '#ffffff',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    dark: '#1a2332',
  },
  whatsapp: '#25D366',
};

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};

export const typography = {
  fonts: {
    heading: '"Poppins", "Inter", -apple-system, sans-serif',
    body: '"Inter", -apple-system, sans-serif',
  },
  sizes: {
    sm: '14px',
    base: 'clamp(16px, 2vw, 18px)',
    lg: 'clamp(18px, 2.5vw, 20px)',
    xl: 'clamp(20px, 3vw, 24px)',
    '2xl': 'clamp(24px, 4vw, 32px)',
    '3xl': 'clamp(32px, 5vw, 40px)',
    '4xl': 'clamp(40px, 6vw, 56px)',
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 3px rgba(26, 35, 50, 0.1)',
  md: '0 4px 6px rgba(26, 35, 50, 0.1)',
  lg: '0 10px 25px rgba(26, 35, 50, 0.15)',
  xl: '0 20px 40px rgba(26, 35, 50, 0.2)',
};

export const transitions = {
  default: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const zIndex = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  modal: 40,
};
