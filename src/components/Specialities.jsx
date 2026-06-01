import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Activity, 
  Baby, 
  Heart, 
  ShieldAlert, 
  Microscope, 
  Award, 
  ClipboardCheck, 
  ArrowRight
} from 'lucide-react';

const Specialities = () => {
  const specialtiesList = [
    {
      icon: <Stethoscope size={30} color="var(--accent-dark)" />,
      title: 'General Medicine',
      desc: 'Comprehensive diagnosis and therapeutic treatment for acute and chronic internal illnesses.'
    },
    {
      icon: <Activity size={30} color="var(--accent-dark)" />,
      title: 'Orthopaedics',
      desc: 'Expert care for bones, joints, ligaments, tendons, and complex musculoskeletal trauma.'
    },
    {
      icon: <Baby size={30} color="var(--accent-dark)" />,
      title: 'Pediatrics',
      desc: 'Nurturing, specialized clinical healthcare for infants, toddlers, children, and growing adolescents.'
    },
    {
      icon: <Heart size={30} color="var(--accent-dark)" />,
      title: 'Gynecology',
      desc: 'Comprehensive women\'s health, advanced maternity care, and family planning solutions.'
    },
    {
      icon: <ShieldAlert size={30} color="#ef4444" />,
      title: 'Emergency Care',
      desc: 'Round-the-clock emergency medical response and state-of-the-art trauma resuscitation.'
    },
    {
      icon: <Microscope size={30} color="var(--accent-dark)" />,
      title: 'Diagnostic Services',
      desc: 'Accurate and rapid laboratory pathology, high-resolution radiology, and diagnostic imaging.'
    },
    {
      icon: <Award size={30} color="var(--accent-dark)" />,
      title: 'Surgery',
      desc: 'Advanced minimally invasive laparoscopic surgery and specialized general operative procedures.'
    },
    {
      icon: <ClipboardCheck size={30} color="var(--accent-dark)" />,
      title: 'Preventive Health',
      desc: 'Early disease detection, wellness programs, and tailored annual executive health checkups.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="specialities" className="section" style={styles.section}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrapper">
          <span className="section-tag">Clinical Departments</span>
          <h2 className="section-title" style={styles.mainTitle}>
            Our Medical Specialities
          </h2>
          <p className="section-desc">
            We offer comprehensive, patient-centered clinical services backed by state-of-the-art medical technology and top physicians.
          </p>
        </div>

        {/* Specialties Grid */}
        <motion.div 
          className="grid-4" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={styles.grid}
        >
          {specialtiesList.map((spec, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                borderColor: 'var(--accent)',
                boxShadow: 'var(--shadow-hover)'
              }}
              style={styles.card}
              className="glass-card spec-card-hover"
            >
              <div style={styles.iconWrapper}>
                {spec.icon}
              </div>
              <h3 style={styles.cardTitle}>{spec.title}</h3>
              <p style={styles.cardDesc}>{spec.desc}</p>
              
              <a href="#appointment" style={styles.arrowLink}>
                <span>Book Doctor</span>
                <ArrowRight size={14} style={styles.arrowIcon} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffffff',
  },
  mainTitle: {
    color: 'var(--primary)',
  },
  grid: {
    rowGap: '2.5rem',
  },
  card: {
    padding: '2.25rem 1.5rem',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.05)',
    boxShadow: 'var(--shadow-card)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  iconWrapper: {
    width: '55px',
    height: '55px',
    borderRadius: '12px',
    backgroundColor: 'var(--accent-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 10px rgba(0, 180, 216, 0.05)',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '0.75rem',
  },
  cardDesc: {
    fontSize: '0.9rem',
    lineHeight: '1.55',
    color: 'var(--text-main)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  arrowLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--accent-dark)',
    transition: 'all 0.3s',
  },
  arrowIcon: {
    transition: 'transform 0.3s ease',
  },
};

// Add card interaction style modifiers dynamically
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .spec-card-hover:hover div[style*="width: 55px"] {
      transform: scale(1.1) rotate(5deg);
      background-color: var(--accent) !important;
    }
    .spec-card-hover:hover div[style*="width: 55px"] svg {
      color: #ffffff !important;
    }
    .spec-card-hover:hover a[style*="display: inline-flex"] {
      color: var(--primary) !important;
    }
    .spec-card-hover:hover a[style*="display: inline-flex"] svg {
      transform: translateX(5px);
    }
  `;
  document.head.appendChild(style);
}

export default Specialities;
