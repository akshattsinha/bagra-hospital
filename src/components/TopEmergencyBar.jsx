import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const TopEmergencyBar = () => {
  return (
    <div style={styles.bar}>
      <div className="container" style={styles.container}>
        <div style={styles.marquee}>
          <span style={styles.text}>
            <AlertCircle size={16} style={styles.icon} />
            <strong>EMERGENCY HELPLINE AVAILABLE 24/7</strong>
            <span style={styles.divider}>|</span>
            <span>Immediate Medical Assistance: </span>
            <a href="tel:+919828688021" style={styles.link}>
              <Phone size={14} style={styles.phoneIcon} />
              +91 98286 88021
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bar: {
    backgroundColor: '#dc2626',
    color: '#ffffff',
    padding: '0.6rem 0',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    zIndex: 1100,
    position: 'relative',
    boxShadow: '0 2px 10px rgba(220, 38, 38, 0.2)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  marquee: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    animation: 'pulseBar 2s infinite ease-in-out',
  },
  text: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  icon: {
    color: '#ffffff',
    animation: 'spinSlow 4s infinite linear',
  },
  divider: {
    opacity: 0.5,
    margin: '0 0.5rem',
  },
  link: {
    color: '#ffffff',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    marginLeft: '0.3rem',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    transition: 'all 0.3s ease',
  },
  phoneIcon: {
    animation: 'wiggle 1s infinite alternate',
  },
};

// Add standard keyframes dynamically to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes wiggle {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(15deg); }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

export default TopEmergencyBar;
