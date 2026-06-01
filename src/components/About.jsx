import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Building, Heart } from 'lucide-react';
import aboutImage from '../assets/doctor_consultation.png';

const About = () => {
  const stats = [
    { 
      icon: <Clock size={28} color="var(--accent-dark)" />, 
      number: '24/7', 
      label: 'Emergency Services', 
      desc: 'Round-the-clock availability for critical medical care.' 
    },
    { 
      icon: <Users size={28} color="var(--accent-dark)" />, 
      number: '15,000+', 
      label: 'Patients Served', 
      desc: 'Trusted by families across Sanganer and Jaipur.' 
    },
    { 
      icon: <Shield size={28} color="var(--accent-dark)" />, 
      number: '50+', 
      label: 'Medical Professionals', 
      desc: 'Highly trained doctors and nursing specialists.' 
    },
    { 
      icon: <Building size={28} color="var(--accent-dark)" />, 
      number: '100%', 
      label: 'Modern Facilities', 
      desc: 'Equipped with the latest healthcare technology.' 
    }
  ];

  return (
    <section id="about" className="section section-bg">
      <div className="container">
        {/* Main Grid: Info & Image */}
        <div className="grid-2" style={styles.mainGrid}>
          {/* Left Column: Reassuring Photographic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            style={styles.imageColumn}
          >
            <div style={styles.imageContainer}>
              <img 
                src={aboutImage} 
                alt="Doctor consulting senior patient at Bagra Hospital" 
                style={styles.aboutImg} 
              />
              <div style={styles.experienceBadge}>
                <Heart size={32} color="#ffffff" style={styles.heartIcon} />
                <div>
                  <h3 style={styles.expTitle}>15+ Years</h3>
                  <p style={styles.expDesc}>Of Healing & Care</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={styles.textColumn}
          >
            <span className="section-tag">About Bagra Hospital</span>
            <h2 className="section-title" style={styles.titleAdjust}>
              Dedicated to Delivering Exceptional Healthcare
            </h2>
            <div style={styles.barSeparator}></div>
            <p style={styles.paragraph}>
              Bagra Hospital is a trusted healthcare institution dedicated to delivering exceptional medical care with compassion and excellence. Our mission is to provide affordable, accessible, and high-quality healthcare services backed by modern technology and experienced medical professionals.
            </p>
            <p style={styles.paragraph}>
              We strive to ensure every patient receives personalized attention, accurate diagnosis, and comprehensive treatment in a safe, hygienic, and highly comfortable environment. Our clinical staff operates with absolute commitment to patient safety and positive health outcomes.
            </p>
            
            <a href="#appointment" className="btn btn-outline" style={styles.learnMoreBtn}>
              Schedule a Consultation
            </a>
          </motion.div>
        </div>

        {/* Dynamic Numerical Statistics Grid */}
        <div style={styles.statsSection}>
          <div className="grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-hover)' }}
                style={styles.statCard}
                className="glass-card"
              >
                <div style={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <h3 style={styles.statNumber}>{stat.number}</h3>
                <h4 style={styles.statLabel}>{stat.label}</h4>
                <p style={styles.statDesc}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  mainGrid: {
    alignItems: 'center',
    marginBottom: '4.5rem',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    width: '95%',
    maxWidth: '460px',
    borderRadius: 'var(--radius-lg)',
    overflow: 'visible',
    boxShadow: '0 15px 40px rgba(15, 23, 42, 0.08)',
    border: '1px solid rgba(15, 23, 42, 0.05)',
    padding: '0.45rem',
    backgroundColor: '#ffffff',
  },
  aboutImg: {
    width: '100%',
    height: 'auto',
    borderRadius: 'calc(var(--radius-lg) - 4px)',
    display: 'block',
  },
  experienceBadge: {
    position: 'absolute',
    bottom: '-25px',
    right: '-25px',
    backgroundColor: 'var(--primary)',
    color: '#ffffff',
    padding: '1rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    boxShadow: '0 10px 25px rgba(11, 37, 69, 0.25)',
    zIndex: 5,
    border: '1.5px solid rgba(255, 255, 255, 0.2)',
  },
  heartIcon: {
    animation: 'heartBeat 1.5s infinite alternate ease-in-out',
  },
  expTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#ffffff',
    margin: 0,
    lineHeight: 1.1,
  },
  expDesc: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: 0,
    fontWeight: '500',
  },
  textColumn: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleAdjust: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'var(--primary)',
  },
  barSeparator: {
    width: '60px',
    height: '4px',
    backgroundColor: 'var(--accent)',
    borderRadius: '2px',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-main)',
    marginBottom: '1.5rem',
  },
  learnMoreBtn: {
    marginTop: '0.5rem',
  },
  statsSection: {
    marginTop: '5rem',
  },
  statCard: {
    padding: '2rem 1.5rem',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    transition: 'all 0.4s ease',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    boxShadow: 'var(--shadow-card)',
  },
  statIconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 1.25rem auto',
    boxShadow: '0 4px 10px rgba(0, 180, 216, 0.08)',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--primary)',
    marginBottom: '0.25rem',
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '0.5rem',
  },
  statDesc: {
    fontSize: '0.85rem',
    lineHeight: '1.5',
    color: 'var(--text-light)',
  },
};

// Pulse Animation for the heart badge icon
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartBeat {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
    
    @media (max-width: 768px) {
      .section#about div[style*="margin-bottom: 4.5rem"] {
        margin-bottom: 2.5rem !important;
      }
      /* Reposition experience badge on mobile to avoid overflows */
      div[style*="bottom: -25px; right: -25px"] {
        bottom: 10px !important;
        right: 10px !important;
        padding: 0.65rem 1rem !important;
      }
      .section#about h2 {
        font-size: 2rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default About;
