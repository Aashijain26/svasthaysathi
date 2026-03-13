import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from "../components/NavBar"
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleServiceCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Svasthay Sathi</h1>
          <p className="hero-description">
            Your comprehensive telemedicine platform connecting patients, doctors, and healthcare institutions. 
            Access quality healthcare services from anywhere, anytime with our secure and user-friendly platform.
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          <div 
            className="service-card doctor-card" 
            onClick={() => handleServiceCardClick('/doctor')}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3>For Doctors</h3>
            <p>
              Expand your practice with teleconsultations and reach patients beyond geographical boundaries. 
              Join our network of healthcare professionals and provide quality care remotely with advanced 
              diagnostic tools and secure communication platforms.
            </p>
            <div className="service-features">
              <span className="feature-tag">Video Consultations</span>
              <span className="feature-tag">Digital Prescriptions</span>
              <span className="feature-tag">Patient Management</span>
            </div>
            <div className="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div 
            className="service-card institution-card" 
            onClick={() => handleServiceCardClick('/institute')}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h3>For Institutions</h3>
            <p>
              Integrate telemedicine services and manage multiple healthcare professionals efficiently. 
              Streamline your operations with our comprehensive platform designed for healthcare institutions, 
              hospitals, and clinics seeking digital transformation.
            </p>
            <div className="service-features">
              <span className="feature-tag">Multi-Doctor Dashboard</span>
              <span className="feature-tag">Analytics & Reports</span>
              <span className="feature-tag">Resource Management</span>
            </div>
            <div className="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-title">Why Choose Svasthay Sathi?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon secure">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h4>Secure & Private</h4>
              <p>End-to-end encrypted consultations with HIPAA compliance</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon available">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h4>24/7 Available</h4>
              <p>Round-the-clock emergency consultations and support</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon affordable">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <h4>Affordable Care</h4>
              <p>Cost-effective healthcare solutions for everyone</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon technology">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4>Advanced Technology</h4>
              <p>AI-powered diagnostics and smart health monitoring</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Healthcare?</h2>
            <p>Join thousands of healthcare professionals and institutions already using Svasthay Sathi</p>
            <div className="cta-buttons">
              <button 
                className="cta-btn primary"
                onClick={() => handleServiceCardClick('/register')}
              >
                Get Started Today
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => handleServiceCardClick('/demo')}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo">SL</div>
              <span>Svasthay Sathi</span>
            </div>
            <p>Connecting healthcare, empowering lives.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Svasthay Sathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;