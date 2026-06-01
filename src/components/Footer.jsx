import { 
  HeartPulse, 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Hospital', href: '#about' },
    { name: 'Clinical Services', href: '#specialities' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Hospital Facilities', href: '#facilities' },
    { name: 'Patient Gallery', href: '#gallery' },
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Contact & Location', href: '#contact' }
  ];

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      {/* Upper Footer: Branding & Details */}
      <div className="container" style={styles.container}>
        <div style={styles.grid}>
          {/* Col 1: Branding & Intro */}
          <div style={styles.brandCol}>
            <a href="#home" style={styles.logo}>
              <div style={styles.logoIcon}>
                <HeartPulse size={24} color="#ffffff" />
              </div>
              <div style={styles.logoTextWrapper}>
                <span style={styles.logoTitle}>BAGRA</span>
                <span style={styles.logoSubtitle}>HOSPITAL</span>
              </div>
            </a>
            
            <p style={styles.brandDesc}>
              Delivering exceptional, accessible, and high-quality clinical healthcare with compassion and state-of-the-art diagnostics in Sanganer, Jaipur.
            </p>

            {/* Social Icons */}
            <div style={styles.socialRow}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="footer-social-btn" aria-label="Bagra Hospital on Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="footer-social-btn" aria-label="Bagra Hospital on Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="footer-social-btn" aria-label="Bagra Hospital on Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="footer-social-btn" aria-label="Bagra Hospital on LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={styles.linksCol}>
            <h3 style={styles.colTitle}>Quick Links</h3>
            <div style={styles.barSeparator}></div>
            <div style={styles.linksGrid}>
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href} style={styles.footerLink} className="footer-link-hover">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Info */}
          <div style={styles.contactCol}>
            <h3 style={styles.colTitle}>Contact Us</h3>
            <div style={styles.barSeparator}></div>
            
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <Phone size={16} color="var(--accent)" style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactLabel}>24/7 Trauma Helpline</h4>
                  <a href="tel:+919828688021" style={styles.phoneVal}>+91 98286 88021</a>
                </div>
              </div>

              <div style={styles.contactItem}>
                <MapPin size={16} color="var(--accent)" style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactLabel}>Hospital Location</h4>
                  <p style={styles.contactText}>Saipura, Madrampur, Sanganer, Jaipur, RJ</p>
                </div>
              </div>

              <div style={styles.contactItem}>
                <Clock size={16} color="var(--accent)" style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactLabel}>Emergency Status</h4>
                  <span style={styles.badgeOpen}>Emergency Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomContainer}>
          <p style={styles.copyright}>
            &copy; 2026 <strong>Bagra Hospital</strong>. All Rights Reserved. Designed with clinical excellence and compassion.
          </p>

          <a href="#home" onClick={handleScrollTop} style={styles.scrollTopBtn} className="scroll-top-hover" title="Scroll back to top">
            <ArrowUp size={16} color="#ffffff" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#07162c', // Deep clinical navy
    color: '#cbd5e1',
    padding: '5rem 0 0 0',
    position: 'relative',
    textAlign: 'left',
    borderTop: '4px solid var(--accent-dark)',
  },
  container: {
    paddingBottom: '4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.9fr 0.9fr',
    gap: '4.5rem',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    marginBottom: '1.5rem',
  },
  logoIcon: {
    backgroundColor: 'var(--accent)',
    borderRadius: '8px',
    padding: '0.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  },
  logoTitle: {
    fontFamily: 'var(--font-headings)',
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '1px',
  },
  logoSubtitle: {
    fontFamily: 'var(--font-headings)',
    fontSize: '0.7rem',
    fontWeight: '600',
    color: 'var(--accent)',
    letterSpacing: '2px',
  },
  brandDesc: {
    fontSize: '0.92rem',
    lineHeight: '1.65',
    color: '#94a3b8',
    marginBottom: '1.75rem',
    maxWidth: '340px',
  },
  socialRow: {
    display: 'flex',
    gap: '0.75rem',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#94a3b8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  colTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  barSeparator: {
    width: '40px',
    height: '3px',
    backgroundColor: 'var(--accent)',
    borderRadius: '2px',
    marginBottom: '1.5rem',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.85rem 1.5rem',
    width: '100%',
  },
  footerLink: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#94a3b8',
    textAlign: 'left',
    transition: 'all 0.3s ease',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '100%',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.85rem',
  },
  contactIcon: {
    marginTop: '0.2rem',
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.15rem',
  },
  phoneVal: {
    fontSize: '1.05rem',
    fontWeight: '800',
    color: 'var(--accent)',
    transition: 'color 0.3s',
  },
  contactText: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    lineHeight: '1.4',
  },
  badgeOpen: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '700',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    color: '#f87171',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    marginTop: '0.25rem',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '1.5rem 0',
    marginTop: '4rem',
    backgroundColor: '#051020',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0,
  },
  scrollTopBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: 'var(--primary-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
};

// Footer hovers CSS Injection
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .footer-social-btn:hover {
      background-color: var(--accent) !important;
      color: #ffffff !important;
      border-color: var(--accent) !important;
      transform: translateY(-3px);
    }
    
    .footer-link-hover:hover {
      color: var(--accent) !important;
      transform: translateX(3px);
    }
    
    .scroll-top-hover:hover {
      background-color: var(--accent) !important;
      transform: translateY(-3px);
    }
    
    @media (max-width: 1024px) {
      footer div[style*="grid-template-columns: 1.2fr 0.9fr 0.9fr"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
    }
    
    @media (max-width: 640px) {
      footer div[style*="display: flex; justify-content: space-between"] {
        flex-direction: column-reverse !important;
        gap: 1.5rem !important;
        text-align: center !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Footer;
