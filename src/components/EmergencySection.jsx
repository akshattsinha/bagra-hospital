import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section style={styles.section}>
      {/* Decorative pulse glow circles behind */}
      <div style={styles.redGlow1}></div>
      <div style={styles.redGlow2}></div>

      <div className="container" style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.alertBox}
        >
          <div style={styles.grid}>
            {/* Left Content column */}
            <div style={styles.textColumn}>
              <div style={styles.badge}>
                <AlertTriangle size={14} color="#dc2626" style={styles.flashIcon} />
                <span>24 Hour Trauma & Emergency</span>
              </div>
              
              <h2 style={styles.headline}>
                Emergency Care Available 24 Hours
              </h2>
              
              <p style={styles.desc}>
                Our emergency response team and resident trauma surgeons are available around the clock to provide immediate, life-saving medical attention whenever you need it. We stand ready, 365 days a year.
              </p>

              <div style={styles.bulletList}>
                <div style={styles.bullet}>
                  <ShieldCheck size={16} color="#4ade80" />
                  <span>Immediate Triage Assessment</span>
                </div>
                <div style={styles.bullet}>
                  <ShieldCheck size={16} color="#4ade80" />
                  <span>On-standby Ambulance Fleet</span>
                </div>
                <div style={styles.bullet}>
                  <ShieldCheck size={16} color="#4ade80" />
                  <span>Fully Equipped ICU & Trauma Suites</span>
                </div>
              </div>
            </div>

            {/* Right Action Call column */}
            <div style={styles.actionColumn}>
              <div style={styles.card} className="glass-card red-section-card">
                <div style={styles.phoneIconRing}>
                  <Phone size={36} color="#ffffff" style={styles.phoneIcon} />
                </div>
                <h3 style={styles.callHeadline}>Helpline Available Now</h3>
                <p style={styles.callDesc}>Tap to dial our front-desk trauma coordinator:</p>
                <a href="tel:+919828688021" className="btn btn-danger" style={styles.dialBtn}>
                  <Phone size={18} />
                  <span>Call Now: +91 98286 88021</span>
                </a>
                <span style={styles.avgWait}>Average response: Under 30 seconds</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4.5rem 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  redGlow1: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '400px',
    backgroundColor: 'rgba(239, 68, 68, 0.06)',
    borderRadius: '50%',
    filter: 'blur(90px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  redGlow2: {
    position: 'absolute',
    bottom: '-10%',
    right: '10%',
    width: '300px',
    height: '300px',
    backgroundColor: 'rgba(11, 37, 69, 0.04)',
    borderRadius: '50%',
    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  alertBox: {
    background: 'linear-gradient(135deg, #0b2545 0%, #030712 100%)',
    borderRadius: 'var(--radius-xl)',
    padding: '3.5rem 4rem',
    color: '#ffffff',
    boxShadow: '0 25px 60px -15px rgba(11, 37, 69, 0.35)',
    border: '1.5px solid rgba(255, 255, 255, 0.05)',
    textAlign: 'left',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '4rem',
    alignItems: 'center',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    color: '#f87171',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    fontSize: '0.82rem',
    fontWeight: '700',
    padding: '0.35rem 1rem',
    borderRadius: '50px',
    marginBottom: '1.5rem',
  },
  flashIcon: {
    animation: 'alertFlash 1s infinite alternate',
  },
  headline: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.25',
    marginBottom: '1.25rem',
    letterSpacing: '-0.5px',
  },
  desc: {
    fontSize: '1.05rem',
    lineHeight: '1.65',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2rem',
  },
  bulletList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  bullet: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.92rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  actionColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: 'var(--radius-lg)',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '360px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
  phoneIconRing: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    backgroundColor: '#dc2626',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 1.5rem auto',
    boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.6)',
    animation: 'phoneGlow 2s infinite',
  },
  phoneIcon: {
    animation: 'vibrate 0.4s infinite alternate',
  },
  callHeadline: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  callDesc: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '1.5rem',
  },
  dialBtn: {
    width: '100%',
    padding: '0.95rem 1.25rem',
    fontSize: '0.95rem',
    boxShadow: '0 8px 24px rgba(220, 38, 38, 0.3)',
  },
  avgWait: {
    display: 'block',
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: '1rem',
    fontWeight: '500',
  },
};

// Dial vibrating and flashing alert keyframes
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes alertFlash {
      0% { opacity: 0.3; }
      100% { opacity: 1; }
    }
    @keyframes phoneGlow {
      0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
      70% { box-shadow: 0 0 0 15px rgba(220, 38, 38, 0); }
      100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
    }
    @keyframes vibrate {
      0% { transform: rotate(-8deg) scale(1); }
      100% { transform: rotate(8deg) scale(1); }
    }
    
    @media (max-width: 1024px) {
      div[style*="padding: 3.5rem 4rem"] {
        padding: 2.5rem 2rem !important;
      }
      div[style*="grid-template-columns: 1.2fr 0.8fr"] {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      div[style*="display: flex; justify-content: center"] {
        margin-top: 1rem;
      }
    }
  `;
  document.head.appendChild(style);
}

export default EmergencySection;
