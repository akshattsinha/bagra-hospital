import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, CheckCircle, ShieldAlert, Award, Clock, Star } from 'lucide-react';
import heroImage from '../assets/hero_hospital.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Reusable float stats data
  const floatStats = [
    { icon: <Clock color="var(--accent-dark)" size={18} />, label: '24/7 Care', desc: 'Always Available', pos: { top: '15%', left: '-8%' } },
    { icon: <ShieldAlert color="#ef4444" size={18} />, label: 'Emergency Support', desc: 'Immediate Aid', pos: { bottom: '20%', left: '-12%' } },
    { icon: <Award color="var(--accent-dark)" size={18} />, label: 'Trusted Healthcare', desc: '100% Quality', pos: { top: '30%', right: '-8%' } },
    { icon: <Star color="#eab308" size={18} />, label: 'Modern Facilities', desc: 'Advanced Tech', pos: { bottom: '10%', right: '-5%' } }
  ];

  return (
    <section id="home" style={styles.section}>
      {/* Visual background gradient blur blobs */}
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>

      <div className="container" style={styles.container}>
        <motion.div 
          className="grid-2" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={styles.grid}
        >
          {/* Left Text Column */}
          <motion.div style={styles.textColumn}>
            <motion.div variants={itemVariants} style={styles.badge}>
              <span style={styles.badgeDot}></span>
              <span>Leading Healthcare Provider in Jaipur</span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={styles.headline}>
              Advanced Healthcare with <span style={styles.highlightText}>Compassion</span> & Excellence
            </motion.h1>

            <motion.p variants={itemVariants} style={styles.subheadline}>
              Providing quality medical care, emergency services, and comprehensive healthcare solutions for families across Jaipur. Our patients are at the heart of everything we do.
            </motion.p>

            {/* Verification Checklist */}
            <motion.div variants={itemVariants} style={styles.checklist}>
              <div style={styles.checkItem}>
                <CheckCircle size={16} color="var(--accent)" />
                <span>24/7 Emergency Care</span>
              </div>
              <div style={styles.checkItem}>
                <CheckCircle size={16} color="var(--accent)" />
                <span>Experienced Medical Team</span>
              </div>
              <div style={styles.checkItem}>
                <CheckCircle size={16} color="var(--accent)" />
                <span>Modern Facilities</span>
              </div>
              <div style={styles.checkItem}>
                <CheckCircle size={16} color="var(--accent)" />
                <span>Patient-Centered Care</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={styles.ctaGroup}>
              <a href="#appointment" className="btn btn-primary" style={styles.btnAdjust}>
                <Calendar size={18} />
                <span>Book Appointment</span>
              </a>
              <a href="tel:+919828688021" className="btn btn-danger" style={styles.btnAdjust}>
                <PhoneCall size={18} />
                <span>Emergency Contact</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Column with Floating Statistics */}
          <motion.div 
            style={styles.imageColumn}
            variants={imageVariants}
          >
            <div style={styles.imageWrapper}>
              <img 
                src={heroImage} 
                alt="Bagra Hospital modern infrastructure" 
                style={styles.heroImg} 
              />
              {/* Inner glow frame overlay */}
              <div style={styles.imgOverlay}></div>

              {/* Floating stats cards around the image */}
              {floatStats.map((stat, i) => (
                <motion.div
                  key={i}
                  style={{...styles.floatCard, ...stat.pos}}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-hover)' }}
                  className="glass-card hero-float-card"
                >
                  <div style={styles.floatCardIcon}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 style={styles.floatCardTitle}>{stat.label}</h4>
                    <p style={styles.floatCardDesc}>{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '7rem 0 5.5rem 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  bgBlob1: {
    position: 'absolute',
    top: '-10%',
    left: '-5%',
    width: '400px',
    height: '400px',
    backgroundColor: 'rgba(0, 180, 216, 0.05)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  bgBlob2: {
    position: 'absolute',
    bottom: '10%',
    right: '-5%',
    width: '500px',
    height: '500px',
    backgroundColor: 'rgba(11, 37, 69, 0.03)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  grid: {
    alignItems: 'center',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--accent-light)',
    color: 'var(--accent-dark)',
    fontSize: '0.85rem',
    fontWeight: '700',
    padding: '0.45rem 1.15rem',
    borderRadius: '50px',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 180, 216, 0.1)',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--accent)',
    borderRadius: '50%',
    animation: 'pulseDot 1.5s infinite',
  },
  headline: {
    fontSize: '3.3rem',
    fontWeight: '800',
    color: 'var(--primary)',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
    letterSpacing: '-1px',
  },
  highlightText: {
    color: 'var(--accent-dark)',
    position: 'relative',
    display: 'inline-block',
  },
  subheadline: {
    fontSize: '1.15rem',
    lineHeight: '1.65',
    color: 'var(--text-main)',
    marginBottom: '2rem',
    maxWidth: '540px',
  },
  checklist: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    width: '100%',
    maxWidth: '500px',
    marginBottom: '2.5rem',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontWeight: '600',
    fontSize: '0.95rem',
    color: 'var(--text-dark)',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  btnAdjust: {
    minWidth: '180px',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    width: '90%',
    maxWidth: '480px',
    borderRadius: 'var(--radius-xl)',
    boxShadow: '0 20px 50px rgba(11, 37, 69, 0.12)',
    padding: '0.5rem',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.05)',
  },
  heroImg: {
    width: '100%',
    height: 'auto',
    borderRadius: 'calc(var(--radius-xl) - 4px)',
    display: 'block',
    objectFit: 'cover',
  },
  imgOverlay: {
    position: 'absolute',
    top: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',
    bottom: '0.5rem',
    border: '1.5px solid rgba(255, 255, 255, 0.15)',
    borderRadius: 'calc(var(--radius-xl) - 4px)',
    pointerEvents: 'none',
  },
  floatCard: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.85rem 1.25rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--glass-shadow)',
    border: '1px solid var(--glass-border)',
    textAlign: 'left',
    zIndex: 5,
    minWidth: '190px',
  },
  floatCardIcon: {
    backgroundColor: 'rgba(0, 180, 216, 0.12)',
    borderRadius: '8px',
    padding: '0.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatCardTitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  floatCardDesc: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: 'var(--text-main)',
  },
};

// Inject dot pulsation keyframes
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulseDot {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 180, 216, 0.5); }
      70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(0, 180, 216, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 180, 216, 0); }
    }
    
    @media (max-width: 1200px) {
      /* Reposition or scale float cards slightly to fit inside bounds */
      .hero-float-card[style*="top: 15%"] { left: -2% !important; }
      .hero-float-card[style*="bottom: 20%"] { left: -4% !important; }
      .hero-float-card[style*="top: 30%"] { right: -2% !important; }
      .hero-float-card[style*="bottom: 10%"] { right: -2% !important; }
    }

    @media (max-width: 1024px) {
      section#home h1 {
        font-size: 2.6rem !important;
      }
    }

    @media (max-width: 768px) {
      section#home {
        padding-top: 3.5rem !important;
        text-align: center;
      }
      section#home div[style*="display: flex; flex-direction: column"] {
        align-items: center !important;
      }
      section#home h1 {
        font-size: 2.2rem !important;
        text-align: center;
      }
      section#home p {
        text-align: center;
      }
      /* Hide floating cards on mobile to avoid overlap */
      .hero-float-card {
        display: none !important;
      }
      /* But keep the base image wrapper */
      div[style*="position: relative; width: 90%"] {
        display: block !important;
        width: 100% !important;
        margin-top: 2rem;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Hero;
