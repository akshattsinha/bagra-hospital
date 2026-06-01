import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Image as ImageIcon } from 'lucide-react';

// Import our 6 generated premium assets
import imgHospital from '../assets/hero_hospital.png';
import imgConsult from '../assets/doctor_consultation.png';
import imgEquipment from '../assets/medical_equipment.png';
import imgEmergency from '../assets/emergency_care.png';
import imgFamily from '../assets/family_health.png';
import imgReception from '../assets/hospital_infrastructure.png';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Infrastructure', 'Doctors', 'Facilities', 'Patient Care', 'Emergency'];

  const galleryItems = [
    {
      id: 1,
      image: imgHospital,
      title: 'Hospital Facade',
      category: 'Infrastructure',
      sizeClass: 'tall'
    },
    {
      id: 2,
      image: imgConsult,
      title: 'Patient Consultation',
      category: 'Doctors',
      sizeClass: 'wide'
    },
    {
      id: 3,
      image: imgEquipment,
      title: 'Advanced MRI Suite',
      category: 'Facilities',
      sizeClass: 'tall'
    },
    {
      id: 4,
      image: imgEmergency,
      title: 'Emergency ICU Ward',
      category: 'Emergency',
      sizeClass: 'wide'
    },
    {
      id: 5,
      image: imgFamily,
      title: 'Pediatric Care Clinic',
      category: 'Patient Care',
      sizeClass: 'tall'
    },
    {
      id: 6,
      image: imgReception,
      title: 'Serene Hospital Reception',
      category: 'Infrastructure',
      sizeClass: 'wide'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section" style={styles.section}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrapper">
          <span className="section-tag">Visual Tour</span>
          <h2 className="section-title" style={styles.titleColor}>
            Hospital Gallery
          </h2>
          <p className="section-desc">
            Take a visual tour through our premium clinical suites, advanced diagnostics departments, emergency wards, and healing environments.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div style={styles.filterRow}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(cat)}
              style={{
                ...styles.filterBtn,
                backgroundColor: activeFilter === cat ? 'var(--accent-dark)' : 'transparent',
                color: activeFilter === cat ? '#ffffff' : 'var(--text-dark)',
                borderColor: activeFilter === cat ? 'var(--accent-dark)' : 'rgba(15,23,42,0.1)',
              }}
              className="gallery-filter-btn"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div 
          layout
          style={styles.masonryGrid}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{
                  ...styles.galleryCard,
                  gridColumnEnd: item.sizeClass === 'wide' ? 'span 2' : 'span 1',
                  gridRowEnd: item.sizeClass === 'tall' ? 'span 2' : 'span 1'
                }}
                className="gallery-card-hover"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={styles.image} 
                />
                
                {/* Overlay Card Details */}
                <div style={styles.overlay} className="gallery-card-overlay">
                  <div style={styles.zoomIconWrapper}>
                    <Eye size={20} color="#ffffff" />
                  </div>
                  <h4 style={styles.overlayTitle}>{item.title}</h4>
                  <span style={styles.overlayCategory}>{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffffff',
  },
  titleColor: {
    color: 'var(--primary)',
  },
  filterRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.65rem',
    flexWrap: 'wrap',
    marginBottom: '3.5rem',
  },
  filterBtn: {
    padding: '0.5rem 1.25rem',
    fontSize: '0.88rem',
    fontWeight: '700',
    borderRadius: '50px',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'var(--font-headings)',
  },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '240px',
    gap: '1.5rem',
    gridAutoFlow: 'dense',
  },
  galleryCard: {
    position: 'relative',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(11, 37, 69, 0.9) 0%, rgba(11, 37, 69, 0.2) 60%, transparent 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '2rem 1.5rem',
    opacity: 0,
    transition: 'all 0.35s ease',
  },
  zoomIconWrapper: {
    backgroundColor: 'var(--accent)',
    padding: '0.5rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.75rem',
    transform: 'translateY(15px)',
    transition: 'transform 0.4s ease',
    boxShadow: '0 4px 10px rgba(0, 180, 216, 0.3)',
  },
  overlayTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#ffffff',
    margin: 0,
    transform: 'translateY(10px)',
    transition: 'transform 0.4s ease 0.05s',
  },
  overlayCategory: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '0.2rem',
    transform: 'translateY(10px)',
    transition: 'transform 0.4s ease 0.1s',
  },
};

// Gallery hover effects CSS Injection
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .gallery-filter-btn:hover {
      background-color: var(--accent-light) !important;
      color: var(--accent-dark) !important;
      border-color: var(--accent) !important;
    }
    
    .gallery-card-hover:hover img {
      transform: scale(1.08);
    }
    .gallery-card-hover:hover .gallery-card-overlay {
      opacity: 1;
    }
    .gallery-card-hover:hover .gallery-card-overlay div,
    .gallery-card-hover:hover .gallery-card-overlay h4,
    .gallery-card-hover:hover .gallery-card-overlay span {
      transform: translateY(0) !important;
    }
    
    @media (max-width: 1024px) {
      div[style*="grid-template-columns: repeat(3, 1fr)"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    
    @media (max-width: 640px) {
      div[style*="grid-template-columns: repeat(3, 1fr)"] {
        grid-template-columns: 1fr !important;
        grid-auto-rows: 200px !important;
      }
      div[style*="grid-column-end: span 2"] {
        grid-column-end: span 1 !important;
      }
      div[style*="grid-row-end: span 2"] {
        grid-row-end: span 1 !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Gallery;
