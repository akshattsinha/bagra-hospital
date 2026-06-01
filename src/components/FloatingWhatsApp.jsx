import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = '919828688021';
  const textMessage = encodeURIComponent('Hello Bagra Hospital! I have a query regarding appointment availability/healthcare services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={styles.floatingBtn}
      title="Chat with Bagra Hospital on WhatsApp"
    >
      <div style={styles.iconContainer}>
        {/* Pulsating Ring */}
        <span style={styles.pulseRing}></span>
        
        {/* Modern WhatsApp-like icon layout */}
        <svg 
          viewBox="0 0 24 24" 
          width="26" 
          height="26" 
          fill="currentColor" 
          style={styles.svg}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.026 0c3.218.001 6.243 1.253 8.516 3.527 2.273 2.274 3.52 5.3 3.518 8.514-.004 6.656-5.379 12.03-12.028 12.03-2.001-.001-3.968-.5-5.719-1.455L0 24zm6.59-16.735c-.225-.5-1-.512-1.372-.512-.3-.002-.647.003-.961.347-.32.352-1.22 1.196-1.22 2.92 0 1.724 1.252 3.393 1.428 3.63.177.236 2.436 3.842 5.955 5.239 2.926 1.161 3.52.93 4.77.817 1.25-.113 2.7-.1.1-3.3-1.127-.563-1.32-.475-.817.37.28.47.535 1.05.772 1.433.237.382.474.573.71.573.237 0 .474-.012.71-.1.237-.087 1.196-.487 1.196-.487z" />
        </svg>
      </div>
      <span style={styles.tooltip}>Chat with Us</span>
    </a>
  );
};

const styles = {
  floatingBtn: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
  },
  iconContainer: {
    backgroundColor: '#22c55e',
    color: '#ffffff',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  svg: {
    color: '#ffffff',
    zIndex: 2,
  },
  pulseRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'rgba(34, 197, 94, 0.4)',
    zIndex: 1,
    animation: 'pulse-green 2s infinite ease-in-out',
  },
  tooltip: {
    position: 'absolute',
    right: '72px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: '600',
    padding: '0.5rem 0.85rem',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    boxShadow: 'var(--glass-shadow)',
    opacity: 0,
    transform: 'translateX(10px)',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
  },
};

// Hover and glow dynamics via CSS injection
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    a[title="Chat with Bagra Hospital on WhatsApp"]:hover {
      transform: translateY(-4px) scale(1.05);
    }
    a[title="Chat with Bagra Hospital on WhatsApp"]:hover div {
      box-shadow: 0 12px 30px rgba(34, 197, 94, 0.6);
    }
    a[title="Chat with Bagra Hospital on WhatsApp"]:hover span:last-child {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  document.head.appendChild(style);
}

export default FloatingWhatsApp;
