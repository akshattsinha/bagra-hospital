import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Siren, 
  Activity, 
  Pill, 
  Truck, 
  Bed, 
  FlaskConical, 
  Layers 
} from 'lucide-react';

const Facilities = () => {
  const facilityItems = [
    {
      icon: <Heart size={28} color="var(--accent-dark)" />,
      title: 'ICU Facilities',
      desc: 'Advanced life support instrumentation, ventilatory systems, and continuous specialist monitoring.'
    },
    {
      icon: <Siren size={28} color="var(--accent-dark)" />,
      title: 'Emergency Ward',
      desc: 'Rapid intervention triage bays equipped for acute trauma care, stabilizing urgent admissions.'
    },
    {
      icon: <Layers size={28} color="var(--accent-dark)" />,
      title: 'Operation Theatre',
      desc: 'Sterile surgical theatres equipped with precision high-resolution visual instrumentation.'
    },
    {
      icon: <Pill size={28} color="var(--accent-dark)" />,
      title: '24/7 Pharmacy',
      desc: 'Fully stocked in-house pharmacy dispensing prescription therapeutics and medical essentials.'
    },
    {
      icon: <Truck size={28} color="var(--accent-dark)" />,
      title: 'Ambulance Support',
      desc: 'On-standby emergency medical vehicles staffed with emergency medical technicians.'
    },
    {
      icon: <Bed size={28} color="var(--accent-dark)" />,
      title: 'Patient Rooms',
      desc: 'Comfortable, highly hygienic single and shared rooms configured for restful clinical recovery.'
    },
    {
      icon: <FlaskConical size={28} color="var(--accent-dark)" />,
      title: 'Laboratory Services',
      desc: 'Fully automated diagnostic lab offering precise pathology, hematology, and biochem test panels.'
    },
    {
      icon: <Activity size={28} color="var(--accent-dark)" />,
      title: 'Diagnostic Imaging',
      desc: 'High-resolution digital radiology, ultrasound, and electro-cardiograph diagnostic scanning.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="facilities" className="section section-bg">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Hospital Infrastructure</span>
          <h2 className="section-title" style={styles.titleColor}>
            State-of-the-Art Facilities
          </h2>
          <p className="section-desc">
            Bagra Hospital provides modern medical infrastructures designed to guarantee maximum diagnostic speed, patient safety, and clinical recovery.
          </p>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          className="grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={styles.grid}
        >
          {facilityItems.map((fac, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: 'var(--shadow-hover)',
                borderColor: 'var(--accent)'
              }}
              style={styles.card}
              className="glass-card facility-card-hover"
            >
              <div style={styles.cardHeader}>
                <div style={styles.iconContainer}>
                  {fac.icon}
                </div>
                <h3 style={styles.cardTitle}>{fac.title}</h3>
              </div>
              <p style={styles.cardDesc}>{fac.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  titleColor: {
    color: 'var(--primary)',
  },
  grid: {
    rowGap: '2rem',
  },
  card: {
    padding: '2rem 1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    boxShadow: 'var(--shadow-card)',
    textAlign: 'left',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '1rem',
  },
  iconContainer: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    backgroundColor: 'var(--accent-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 8px rgba(0, 180, 216, 0.03)',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  cardDesc: {
    fontSize: '0.88rem',
    lineHeight: '1.55',
    color: 'var(--text-main)',
    flexGrow: 1,
  },
};

// Facility CSS hover icon animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .facility-card-hover:hover div[style*="width: 46px"] {
      background-color: var(--accent) !important;
      transform: rotate(-5deg);
    }
    .facility-card-hover:hover div[style*="width: 46px"] svg {
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
}

export default Facilities;
