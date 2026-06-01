import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ramesh Sharma',
      location: 'Sanganer, Jaipur',
      rating: 5,
      avatarBg: '#0284c7',
      text: 'I brought my elderly father to Bagra Hospital during a severe medical emergency. The trauma doctors were exceptionally fast, highly professional, and deeply compassionate. Their quick triage stabilized him immediately. Highly recommended!'
    },
    {
      name: 'Sunita Gupta',
      location: 'Mansarovar, Jaipur',
      rating: 5,
      avatarBg: '#0d9488',
      text: 'Dr. Akshat and the pediatrics team took wonderful care of my 5-year-old daughter. The nursing staff made her feel extremely safe and calm. It is a relief to have such a premium, family-friendly hospital in Sanganer.'
    },
    {
      name: 'Anil Choudhary',
      location: 'Madrampur, Jaipur',
      rating: 5,
      avatarBg: '#4f46e5',
      text: 'I underwent knee joint replacement surgery at Bagra Hospital. The operation theatre facilities are clean and world-class, and the postoperative physiotherapy care has helped me walk completely pain-free within weeks. Incredible experience.'
    },
    {
      name: 'Pooja Yadav',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      avatarBg: '#db2777',
      text: 'Highly impressed by their 24/7 diagnostic pathology laboratory and pharmacy. The diagnostic reports were incredibly prompt, and the pricing was very affordable and honest compared to larger corporate commercial chains in the city.'
    },
    {
      name: 'Vikram Singh',
      location: 'Durgapura, Jaipur',
      rating: 5,
      avatarBg: '#ea580c',
      text: 'A very clean, well-sanitized, and quiet hygienic environment. The patient private rooms are premium and extremely peaceful for clinical recovery. The senior consulting doctors explain the entire treatment pathway with extreme patience.'
    },
    {
      name: 'Meena Bagra',
      location: 'Sanganer, Jaipur',
      rating: 5,
      avatarBg: '#84cc16',
      text: 'Outstanding maternity care and delivery services! The consulting gynaecologists and labor room staff are highly experienced, making our child delivery experience absolutely seamless, comforting, and reassuring.'
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5500);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handlePrev = () => {
    stopAutoSlide();
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const handleDotClick = (idx) => {
    stopAutoSlide();
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
    startAutoSlide();
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  // Variants for slide transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeInOut' }
    })
  };

  return (
    <section id="testimonials" className="section" style={styles.section}>
      {/* Dynamic Background visual aids */}
      <div style={styles.bgBlob}></div>

      <div className="container" style={styles.container}>
        {/* Section Title */}
        <div className="section-title-wrapper">
          <span className="section-tag">Patient Stories</span>
          <h2 className="section-title" style={styles.titleColor}>
            What Our Patients Say
          </h2>
          <p className="section-desc">
            Nothing builds more trust than the stories of recovery and care shared by patients who chose Bagra Hospital for their health needs.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div 
          style={styles.carouselContainer}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Controls */}
          <button onClick={handlePrev} style={styles.arrowLeft} className="btn-carousel-ctrl" aria-label="Previous review">
            <ChevronLeft size={22} color="var(--primary)" />
          </button>
          
          <button onClick={handleNext} style={styles.arrowRight} className="btn-carousel-ctrl" aria-label="Next review">
            <ChevronRight size={22} color="var(--primary)" />
          </button>

          {/* Testimonial Active Display */}
          <div style={styles.slideOuter}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={styles.slideCard}
                className="glass-card"
              >
                <div style={styles.quoteIconWrapper}>
                  <Quote size={40} color="rgba(0, 180, 216, 0.15)" />
                </div>
                
                {/* Rating */}
                <div style={styles.ratingRow}>
                  {[...Array(reviews[index].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#eab308" color="#eab308" />
                  ))}
                </div>

                {/* Review Text */}
                <p style={styles.reviewText}>
                  "{reviews[index].text}"
                </p>

                {/* Reviewer Details */}
                <div style={styles.reviewerRow}>
                  <div style={{...styles.avatar, backgroundColor: reviews[index].avatarBg}}>
                    {getInitials(reviews[index].name)}
                  </div>
                  <div style={styles.reviewerInfo}>
                    <h4 style={styles.reviewerName}>{reviews[index].name}</h4>
                    <p style={styles.reviewerLoc}>{reviews[index].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicator Dots */}
        <div style={styles.dotsRow}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                ...styles.dot,
                width: idx === index ? '24px' : '8px',
                backgroundColor: idx === index ? 'var(--accent-dark)' : 'rgba(15, 23, 42, 0.15)',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  bgBlob: {
    position: 'absolute',
    top: '30%',
    left: '-10%',
    width: '450px',
    height: '450px',
    backgroundColor: 'rgba(0, 180, 216, 0.04)',
    borderRadius: '50%',
    filter: 'blur(90px)',
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  titleColor: {
    color: 'var(--primary)',
  },
  carouselContainer: {
    position: 'relative',
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 3.5rem',
  },
  slideOuter: {
    overflow: 'hidden',
    minHeight: '320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideCard: {
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    padding: '3rem',
    textAlign: 'left',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    position: 'relative',
    width: '100%',
  },
  quoteIconWrapper: {
    position: 'absolute',
    top: '1.5rem',
    right: '2rem',
  },
  ratingRow: {
    display: 'flex',
    gap: '0.2rem',
    marginBottom: '1.25rem',
  },
  reviewText: {
    fontSize: '1.12rem',
    lineHeight: '1.7',
    color: 'var(--text-dark)',
    fontStyle: 'italic',
    fontWeight: '500',
    marginBottom: '2rem',
  },
  reviewerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderTop: '1px solid #f1f5f9',
    paddingTop: '1.5rem',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '0.95rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '1px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
  },
  reviewerInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  reviewerName: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  reviewerLoc: {
    fontSize: '0.8rem',
    color: 'var(--text-light)',
    fontWeight: '500',
  },
  arrowLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    boxShadow: '0 4px 12px rgba(15,23,42,0.06)',
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease',
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    boxShadow: '0 4px 12px rgba(15,23,42,0.06)',
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease',
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2.5rem',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Testimonial arrow buttons glow CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .btn-carousel-ctrl:hover {
      background-color: var(--accent-light) !important;
      border-color: var(--accent) !important;
      transform: translateY(-50%) scale(1.08);
      box-shadow: 0 6px 15px rgba(0, 180, 216, 0.15) !important;
    }
    
    @media (max-width: 768px) {
      div[style*="padding: 0 3.5rem"] {
        padding: 0 1rem !important;
      }
      .btn-carousel-ctrl {
        display: none !important; /* Hide arrows on mobile and rely on swipe/dots */
      }
      div[style*="padding: 3rem"] {
        padding: 2rem 1.5rem !important;
      }
      div[style*="min-height: 320px"] {
        min-height: 380px !important; /* Extra height space for wrapping text */
      }
    }
  `;
  document.head.appendChild(style);
}

export default Testimonials;
