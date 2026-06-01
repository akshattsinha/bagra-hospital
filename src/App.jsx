import React from 'react';

// Core layout components
import TopEmergencyBar from './components/TopEmergencyBar';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Page sections
import Hero from './components/Hero';
import About from './components/About';
import Specialities from './components/Specialities';
import WhyChooseUs from './components/WhyChooseUs';
import EmergencySection from './components/EmergencySection';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import AppointmentBooking from './components/AppointmentBooking';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

// Styling resets
import './App.css';

function App() {
  return (
    <div style={styles.appWrapper}>
      {/* Top Notification Emergency Helpline Banner */}
      <TopEmergencyBar />

      {/* Sticky Premium Navigation Bar */}
      <Navbar />

      {/* Core Page Content Sections */}
      <main>
        {/* 1. Hero Section with Float Stats */}
        <Hero />

        {/* 2. Institutional About Section */}
        <About />

        {/* 3. Medical Specialities Cards Grid */}
        <Specialities />

        {/* 4. Brand Value Why Choose Us Grid */}
        <WhyChooseUs />

        {/* 5. 24-Hour Urgent Red Trauma Banner */}
        <EmergencySection />

        {/* 6. Facilities & Infrastructure Grid */}
        <Facilities />

        {/* 7. Jaipur Patient Testimonials Auto-Carousel */}
        <Testimonials />

        {/* 8. Premium Appointment Booking Form with WhatsApp Link */}
        <AppointmentBooking />

        {/* 9. Masonry Photo Gallery */}
        <Gallery />

        {/* 10. Embedded Maps Location & Hours Info Box */}
        <LocationSection />
      </main>

      {/* 11. Complete Deep Navy Footer */}
      <Footer />

      {/* Global Floating WhatsApp Support Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
  },
};

export default App;
