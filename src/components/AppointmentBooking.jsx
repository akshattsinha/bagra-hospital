import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Mail, FileText, CheckCircle2, MessageSquare } from 'lucide-react';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Medicine',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'General Medicine',
    'Orthopaedics',
    'Pediatrics',
    'Gynecology',
    'Emergency Care',
    'Diagnostic Services',
    'Surgery',
    'Preventive Health Checkup'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Proactively clear error on type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) tempErrors.date = 'Preferred date is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger success animations
    setIsSubmitted(true);

    // Format WhatsApp message
    const waNumber = '919828688021';
    const waText = `Hello Bagra Hospital, Sanganer! I would like to book a medical appointment.

*PATIENT DETAILS:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not Provided'}
*Department:* ${formData.department}
*Preferred Date:* ${formData.date}
*Additional Message:* ${formData.message || 'None'}`;

    const waEncoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${waNumber}?text=${waEncoded}`;

    // Open WhatsApp link in new window after a brief delay so they see the success card
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: 'General Medicine',
        date: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <section id="appointment" className="section" style={styles.section}>
      {/* Decorative Blob */}
      <div style={styles.bgBlob}></div>

      <div className="container" style={styles.container}>
        <div style={styles.gridOuter}>
          {/* Info Card left column */}
          <div style={styles.infoCol}>
            <span className="section-tag" style={styles.tagAdjust}>Consultation</span>
            <h2 style={styles.leftTitle}>Book An Appointment</h2>
            <p style={styles.leftDesc}>
              Fill out our premium booking form to request an appointment slot. Our front desk staff will receive your details and coordinate with you instantly on WhatsApp to confirm the final booking.
            </p>
            
            <div style={styles.helpBox}>
              <div style={styles.helpIconWrapper}>
                <MessageSquare size={24} color="var(--accent-dark)" />
              </div>
              <div>
                <h4 style={styles.helpTitle}>Prefer Direct Chat?</h4>
                <p style={styles.helpDesc}>Click the floating WhatsApp button to chat instantly with our support team.</p>
              </div>
            </div>

            <div style={styles.timingCard}>
              <h4 style={styles.timingTitle}>Hospital Working Hours</h4>
              <div style={styles.timingRow}>
                <span>Emergency Unit</span>
                <span style={styles.timingHigh}>Open 24 Hours / 7 Days</span>
              </div>
              <div style={styles.timingRow}>
                <span>Outpatient Department (OPD)</span>
                <span>09:00 AM - 08:00 PM</span>
              </div>
              <div style={styles.timingRow}>
                <span>Diagnostic Labs</span>
                <span>08:00 AM - 09:00 PM</span>
              </div>
            </div>
          </div>

          {/* Form container right column */}
          <div style={styles.formCol}>
            <div style={styles.formCard} className="glass-card">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    style={styles.form}
                  >
                    <h3 style={styles.formTitle}>Enter Patient Details</h3>
                    
                    {/* Name Field */}
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Full Name <span style={styles.asterisk}>*</span></label>
                      <div style={styles.inputWrapper}>
                        <User size={18} style={styles.fieldIcon} />
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g., Akshat Sinha" 
                          style={{...styles.input, borderColor: errors.name ? 'var(--danger)' : '#cbd5e1'}}
                        />
                      </div>
                      {errors.name && <span style={styles.errorText}>{errors.name}</span>}
                    </div>

                    {/* Phone & Email Row */}
                    <div style={styles.inputRow}>
                      <div style={{...styles.inputGroup, flex: 1}}>
                        <label style={styles.label}>Phone Number <span style={styles.asterisk}>*</span></label>
                        <div style={styles.inputWrapper}>
                          <Phone size={18} style={styles.fieldIcon} />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g., +91 98286 88021" 
                            style={{...styles.input, borderColor: errors.phone ? 'var(--danger)' : '#cbd5e1'}}
                          />
                        </div>
                        {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
                      </div>

                      <div style={{...styles.inputGroup, flex: 1}}>
                        <label style={styles.label}>Email Address (Optional)</label>
                        <div style={styles.inputWrapper}>
                          <Mail size={18} style={styles.fieldIcon} />
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g., yourname@mail.com" 
                            style={{...styles.input, borderColor: errors.email ? 'var(--danger)' : '#cbd5e1'}}
                          />
                        </div>
                        {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Department & Date Row */}
                    <div style={styles.inputRow}>
                      <div style={{...styles.inputGroup, flex: 1}}>
                        <label style={styles.label}>Select Department</label>
                        <div style={styles.inputWrapper}>
                          <FileText size={18} style={styles.fieldIcon} />
                          <select 
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            style={styles.select}
                          >
                            {departments.map((dept, i) => (
                              <option key={i} value={dept}>{dept}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div style={{...styles.inputGroup, flex: 1}}>
                        <label style={styles.label}>Preferred Date <span style={styles.asterisk}>*</span></label>
                        <div style={styles.inputWrapper}>
                          <Calendar size={18} style={styles.fieldIcon} />
                          <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]} // Prevents past dates selection
                            style={{...styles.input, borderColor: errors.date ? 'var(--danger)' : '#cbd5e1'}}
                          />
                        </div>
                        {errors.date && <span style={styles.errorText}>{errors.date}</span>}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Message / Symptom details (Optional)</label>
                      <div style={styles.inputWrapper}>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your symptoms or request details..." 
                          rows="3"
                          style={styles.textarea}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                      <Calendar size={18} />
                      <span>Book Appointment via WhatsApp</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={styles.successWrapper}
                  >
                    <div style={styles.successIconWrapper}>
                      <CheckCircle2 size={54} color="#22c55e" style={styles.successIcon} />
                    </div>
                    <h3 style={styles.successTitle}>Booking Form Submitted!</h3>
                    <p style={styles.successDesc}>
                      Thank you for choosing Bagra Hospital, <strong>{formData.name}</strong>. We are now redirecting you to WhatsApp to instantly confirm your slot with our care coordinator.
                    </p>
                    <div style={styles.spinner}></div>
                    <span style={styles.redirectText}>Redirecting to WhatsApp chat...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
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
    bottom: '-15%',
    left: '-10%',
    width: '450px',
    height: '450px',
    backgroundColor: 'rgba(0, 180, 216, 0.03)',
    borderRadius: '50%',
    filter: 'blur(90px)',
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  gridOuter: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  infoCol: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tagAdjust: {
    marginBottom: '1rem',
  },
  leftTitle: {
    fontSize: '2.5rem',
    color: 'var(--primary)',
    fontWeight: '800',
    marginBottom: '1.25rem',
  },
  leftDesc: {
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: 'var(--text-main)',
    marginBottom: '2rem',
  },
  helpBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'var(--accent-light)',
    borderRadius: 'var(--radius-md)',
    padding: '1.25rem',
    width: '100%',
    marginBottom: '2rem',
    border: '1.5px dashed rgba(0, 180, 216, 0.25)',
  },
  helpIconWrapper: {
    backgroundColor: '#ffffff',
    padding: '0.6rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.03)',
  },
  helpTitle: {
    fontSize: '0.98rem',
    fontWeight: '700',
    color: 'var(--primary)',
    margin: 0,
  },
  helpDesc: {
    fontSize: '0.85rem',
    lineHeight: '1.4',
    color: 'var(--text-main)',
    margin: 0,
    marginTop: '0.2rem',
  },
  timingCard: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-lg)',
    padding: '1.75rem 2rem',
    width: '100%',
    border: '1px solid rgba(15, 23, 42, 0.05)',
  },
  timingTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: 'var(--primary)',
    marginBottom: '1rem',
    borderBottom: '1px solid rgba(15,23,42,0.06)',
    paddingBottom: '0.5rem',
  },
  timingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    padding: '0.5rem 0',
  },
  timingHigh: {
    color: '#ef4444',
  },
  formCol: {
    width: '100%',
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    padding: '2.75rem',
    boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.08)',
    border: '1px solid rgba(15, 23, 42, 0.04)',
    minHeight: '480px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    textAlign: 'left',
  },
  formTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: 'var(--primary)',
    marginBottom: '0.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.4rem',
    width: '100%',
  },
  inputRow: {
    display: 'flex',
    gap: '1.25rem',
    width: '100%',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  asterisk: {
    color: 'var(--danger)',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  fieldIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--text-light)',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '0.8rem 1rem 0.8rem 2.6rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid #cbd5e1',
    fontFamily: 'var(--font-body)',
    fontSize: '0.92rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    ':focus': {
      borderColor: 'var(--accent)',
      boxShadow: '0 0 0 3px rgba(0, 180, 216, 0.15)',
    },
  },
  select: {
    width: '100%',
    padding: '0.8rem 1rem 0.8rem 2.6rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-body)',
    fontSize: '0.92rem',
    outline: 'none',
    cursor: 'pointer',
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23475569\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '15px',
    appearance: 'none',
    WebkitAppearance: 'none',
  },
  textarea: {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid #cbd5e1',
    fontFamily: 'var(--font-body)',
    fontSize: '0.92rem',
    resize: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
    ':focus': {
      borderColor: 'var(--accent)',
      boxShadow: '0 0 0 3px rgba(0, 180, 216, 0.15)',
    },
  },
  errorText: {
    fontSize: '0.75rem',
    color: 'var(--danger)',
    fontWeight: '600',
  },
  submitBtn: {
    width: '100%',
    padding: '0.95rem 1.5rem',
    marginTop: '0.5rem',
    backgroundColor: 'var(--accent-dark)',
  },
  // Success screen styles
  successWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
  },
  successIconWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  successIcon: {
    animation: 'bounceScale 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary)',
    marginBottom: '0.75rem',
  },
  successDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--text-main)',
    marginBottom: '2rem',
    maxWidth: '340px',
  },
  spinner: {
    width: '32px',
    height: '32px',
    border: '3px solid rgba(0, 180, 216, 0.2)',
    borderTopColor: 'var(--accent-dark)',
    borderRadius: '50%',
    animation: 'spin 1s infinite linear',
    marginBottom: '0.75rem',
  },
  redirectText: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-light)',
  },
};

// Injection for inputs focus, spinner keyframe, success bounce
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    form input:focus, form select:focus, form textarea:focus {
      border-color: var(--accent) !important;
      box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.15) !important;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounceScale {
      0% { transform: scale(0.3); opacity: 0; }
      50% { transform: scale(1.1); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    
    @media (max-width: 1024px) {
      div[style*="grid-template-columns: 0.9fr 1.1fr"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="padding: 2.75rem"] {
        padding: 2rem !important;
      }
    }

    @media (max-width: 560px) {
      div[style*="display: flex; gap: 1.25rem; width: 100%"] {
        flex-direction: column !important;
        gap: 1.25rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default AppointmentBooking;
