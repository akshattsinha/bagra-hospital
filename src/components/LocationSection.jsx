import React from 'react';
import { MapPin, Phone, Clock, Navigation, Map } from 'lucide-react';

const LocationSection = () => {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Bagra%20Hospital,%20Saipura,%20Madrampur,%20Sanganer,%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Bagra+Hospital+Saipura+Madrampur+Sanganer+Jaipur+Rajasthan+302006";

  return (
    <section id="contact" className="section section-bg" style={styles.section}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrapper">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title" style={styles.titleColor}>
            Our Location & Contact
          </h2>
          <p className="section-desc">
            We are centrally located in Sanganer, Jaipur, providing easy accessibility for ambulances and private vehicles across the region.
          </p>
        </div>

        {/* Location Box Grid */}
        <div style={styles.cardWrapper} className="glass-card">
          <div style={styles.grid}>
            {/* Left Info Column */}
            <div style={styles.infoCol}>
              <h3 style={styles.hospitalName}>Bagra Hospital</h3>
              <p style={styles.subText}>Serving communities with premium medical excellence.</p>
              
              <div style={styles.divider}></div>

              {/* Detail Items */}
              <div style={styles.detailList}>
                <div style={styles.detailItem}>
                  <div style={styles.iconWrapper}>
                    <MapPin size={20} color="var(--accent-dark)" />
                  </div>
                  <div>
                    <h4 style={styles.detailTitle}>Hospital Address</h4>
                    <p style={styles.detailText}>
                      Saipura, Madrampur, Sanganer, <br />
                      Jaipur, Rajasthan 302006
                    </p>
                    <span style={styles.plusCode}>Plus Code: QQH7+W5W Jaipur</span>
                  </div>
                </div>

                <div style={styles.detailItem}>
                  <div style={styles.iconWrapper}>
                    <Phone size={20} color="var(--accent-dark)" />
                  </div>
                  <div>
                    <h4 style={styles.detailTitle}>Emergency Helpline</h4>
                    <a href="tel:+919828688021" style={styles.phoneLink}>
                      +91 98286 88021
                    </a>
                    <p style={styles.detailSubtext}>Call 24/7 for trauma & ambulance coordinator.</p>
                  </div>
                </div>

                <div style={styles.detailItem}>
                  <div style={styles.iconWrapper}>
                    <Clock size={20} color="var(--accent-dark)" />
                  </div>
                  <div>
                    <h4 style={styles.detailTitle}>Availability</h4>
                    <p style={styles.detailText}>Open 24 Hours / 7 Days</p>
                    <span style={styles.availabilityBadge}>Emergency OPD Active</span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a 
                href={directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={styles.directionsBtn}
              >
                <Navigation size={18} />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

            {/* Right Map Column */}
            <div style={styles.mapCol}>
              <div style={styles.mapFrameWrapper}>
                <iframe
                  title="Bagra Hospital Google Maps Location"
                  src={mapEmbedUrl}
                  style={styles.iframe}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingBottom: '6rem',
  },
  titleColor: {
    color: 'var(--primary)',
  },
  cardWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    overflow: 'hidden',
    padding: '3rem',
    maxWidth: '1140px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '3.5rem',
    alignItems: 'stretch',
  },
  infoCol: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  hospitalName: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--primary)',
    marginBottom: '0.25rem',
  },
  subText: {
    fontSize: '0.95rem',
    color: 'var(--text-main)',
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(15,23,42,0.06)',
    margin: '1.5rem 0',
  },
  detailList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    marginBottom: '2rem',
    width: '100%',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  iconWrapper: {
    backgroundColor: 'var(--accent-light)',
    padding: '0.55rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 180, 216, 0.05)',
  },
  detailTitle: {
    fontSize: '0.92rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
    marginBottom: '0.25rem',
  },
  detailText: {
    fontSize: '0.92rem',
    lineHeight: '1.5',
    color: 'var(--text-main)',
  },
  plusCode: {
    display: 'inline-block',
    fontSize: '0.78rem',
    fontWeight: '600',
    color: 'var(--accent-dark)',
    marginTop: '0.15rem',
  },
  phoneLink: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#dc2626',
    transition: 'color 0.3s',
  },
  detailSubtext: {
    fontSize: '0.8rem',
    color: 'var(--text-light)',
    marginTop: '0.15rem',
  },
  availabilityBadge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '700',
    backgroundColor: 'rgba(34, 197, 94, 0.12)',
    color: '#15803d',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    marginTop: '0.35rem',
  },
  directionsBtn: {
    width: '100%',
    padding: '0.9rem 1.5rem',
    boxShadow: '0 4px 12px rgba(11, 37, 69, 0.1)',
  },
  mapCol: {
    display: 'flex',
    alignItems: 'stretch',
  },
  mapFrameWrapper: {
    width: '100%',
    height: '100%',
    minHeight: '380px',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    border: '1px solid rgba(15,23,42,0.06)',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
};

// CSS media overrides for responsive columns
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 1024px) {
      div[style*="max-width: 1140px"] {
        padding: 2rem !important;
      }
      div[style*="grid-template-columns: 0.9fr 1.1fr"] {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      div[style*="min-height: 380px"] {
        min-height: 300px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default LocationSection;
