import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Cpu, 
  IndianRupee, 
  PhoneCall, 
  HeartHandshake, 
  Sparkles, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <UserCheck size={26} color="var(--primary)" />,
      title: 'Experienced Doctors',
      desc: 'Our clinical panel features top-tier doctors, consultants, and surgical specialists.'
    },
    {
      icon: <Cpu size={26} color="var(--primary)" />,
      title: 'Modern Equipment',
      desc: 'We utilize state-of-the-art diagnostic imaging, scanner suites, and laboratory suites.'
    },
    {
      icon: <IndianRupee size={26} color="var(--primary)" />,
      title: 'Affordable Healthcare',
      desc: 'Top-tier medical interventions structured with transparent, patient-friendly costs.'
    },
    {
      icon: <PhoneCall size={26} color="var(--primary)" />,
      title: '24x7 Emergency Support',
      desc: 'Unmatched 24-hour critical care standby with in-house resident specialists.'
    },
    {
      icon: <HeartHandshake size={26} color="var(--primary)" />,
      title: 'Patient-Centered Approach',
      desc: 'Compassionate care pathways customized to respect unique patient priorities and comfort.'
    },
    {
      icon: <Sparkles size={26} color="var(--primary)" />,
      title: 'Hygienic Environment',
      desc: 'Sterile operation theatres, infection control, and continuous sanitization.'
    },
    {
      icon: <Zap size={26} color="var(--primary)" />,
      title: 'Quick Diagnosis',
      desc: 'Advanced automated testing processes that return highly accurate reports rapidly.'
    },
    {
      icon: <ShieldCheck size={26} color="var(--primary)" />,
      title: 'Comprehensive Care',
      desc: 'A complete spectrum of clinical care under one roof, from diagnostic screenings to rehab.'
    }
  ];

  return (
    <section id="why-choose-us" className="section section-bg">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrapper">
          <span className="section-tag">Our Excellence</span>
          <h2 className="section-title" style={styles.titleColor}>
            Why Choose Bagra Hospital?
          </h2>
          <p className="section-desc">
            We are dedicated to setting medical standards in Sanganer and Jaipur, combining advanced diagnostics with heartfelt compassionate healing.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid-4" style={styles.grid}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ 
                y: -6, 
                backgroundColor: '#ffffff',
                boxShadow: 'var(--shadow-hover)'
              }}
              style={styles.card}
              className="glass-card why-card-hover"
            >
              <div style={styles.headerRow}>
                <div style={styles.iconContainer}>
                  {reason.icon}
                </div>
                <h3 style={styles.cardTitle}>{reason.title}</h3>
              </div>
              <p style={styles.cardDesc}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  titleColor: {
    color: 'var(--primary)',
  },
  grid: {
    gap: '1.75rem',
  },
  card: {
    padding: '1.75rem 1.5rem',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.03)',
    boxShadow: 'var(--shadow-card)',
    textAlign: 'left',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  iconContainer: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: 'var(--accent-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 8px rgba(0, 180, 216, 0.05)',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    lineHeight: '1.3',
  },
  cardDesc: {
    fontSize: '0.88rem',
    lineHeight: '1.5',
    color: 'var(--text-main)',
  },
};

// CSS Injection for internal icon colors on hover
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .why-card-hover:hover div[style*="width: 44px"] {
      background-color: var(--accent) !important;
    }
    .why-card-hover:hover div[style*="width: 44px"] svg {
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
}

export default WhyChooseUs;
