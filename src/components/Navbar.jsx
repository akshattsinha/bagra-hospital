import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specialities', href: '#specialities' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      ...styles.navbar,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid transparent',
      boxShadow: isScrolled ? 'var(--glass-shadow)' : 'none',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    }}>
      <div className="container" style={styles.container}>
        {/* Logo */}
        <a href="#home" style={styles.logo}>
          <div style={styles.logoIcon}>
            <HeartPulse size={26} color="#ffffff" />
          </div>
          <div style={styles.logoTextWrapper}>
            <span style={styles.logoTitle}>BAGRA</span>
            <span style={styles.logoSubtitle}>HOSPITAL</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div style={styles.ctaWrapper}>
          <a href="#appointment" className="btn btn-primary" style={styles.ctaBtn}>
            <Calendar size={16} />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          style={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--primary)" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={styles.mobileDrawer}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="btn btn-primary" 
            style={styles.mobileCtaBtn}
            onClick={() => setIsOpen(false)}
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
          </a>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
  },
  logoIcon: {
    backgroundColor: 'var(--accent)',
    borderRadius: '10px',
    padding: '0.45rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 180, 216, 0.25)',
  },
  logoTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  },
  logoTitle: {
    fontFamily: 'var(--font-headings)',
    fontSize: '1.4rem',
    fontWeight: '800',
    color: 'var(--primary)',
    letterSpacing: '1px',
  },
  logoSubtitle: {
    fontFamily: 'var(--font-headings)',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--accent-dark)',
    letterSpacing: '2px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.75rem',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  navLink: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    padding: '0.25rem 0',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  ctaWrapper: {
    display: 'block',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  ctaBtn: {
    fontSize: '0.85rem',
    padding: '0.65rem 1.25rem',
    borderRadius: '8px',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: 'var(--bg-secondary)',
    },
  },
  mobileDrawer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderBottom: '1px solid var(--border)',
    boxShadow: 'var(--glass-shadow)',
    gap: '1rem',
    zIndex: 999,
  },
  mobileNavLink: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f1f5f9',
  },
  mobileCtaBtn: {
    width: '100%',
    marginTop: '0.5rem',
  },
};

// CSS media query injection for responsiveness
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 1024px) {
      nav div:nth-child(2) {
        display: none !important;
      }
      nav div:nth-child(3) {
        display: none !important;
      }
      nav button {
        display: block !important;
      }
    }
    
    /* Navbar Hover Effect underliners */
    nav div a {
      position: relative;
    }
    nav div a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--accent);
      transition: width 0.3s ease;
    }
    nav div a:hover::after {
      width: 100%;
    }
    nav div a:hover {
      color: var(--accent-dark) !important;
    }
  `;
  document.head.appendChild(style);
}

export default Navbar;
