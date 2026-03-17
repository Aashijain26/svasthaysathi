import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
// import '../Homepage.css'


const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('hi');
  const [activeNav, setActiveNav] = useState('Home');
  
  const languageRef = useRef(null);
  const loginRef = useRef(null);
  const navigate = useNavigate();

  const languages = {
    hi: { display: 'हिंदी', flag: '🇮🇳', full: 'हिंदी (Hindi)' },
    en: { display: 'English', flag: '🇺🇸', full: 'English' },
    pa: { display: 'ਪੰਜਾਬੀ', flag: '🇮🇳', full: 'ਪੰਜਾਬੀ (Punjabi)' }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (langCode) => {
    setCurrentLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const handleNavigation = (path, navName) => {
    setActiveNav(navName);
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      // For external paths or special routing
      window.location.href = path;
    }
  };

  const handleLogin = (userType) => {
    setIsLoginOpen(false);
    alert(`Redirecting to ${userType} login...`);
    // Add your login logic here
  };

  return (
    <div className="navbar-container">
      {/* Top Header */}
      <header className="top-header">
        <div className="header-container">
          {/* Left Section */}
          <div className="left-section">
            {/* Logo and Brand Name */}
            <div className="logo-section">
              <div className="logo">SS</div>
              <a href="#" className="brand-name" onClick={() => handleNavigation('/', 'Home')}>
                Svasthay Sathi
              </a>
            </div>

            {/* Notice Section */}
            <div className="notice-section">
              <svg className="notice-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="notice-text">🩺 24/7 Emergency Consultations Available</span>
            </div>

            {/* Language Selector */}
            <div className={`language-selector ${isLanguageOpen ? 'active' : ''}`} ref={languageRef}>
              <button className="language-btn" onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
                🌐 {languages[currentLanguage].display}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="language-dropdown">
                {Object.entries(languages).map(([code, lang]) => (
                  <div 
                    key={code}
                    className={`language-option ${currentLanguage === code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(code)}
                  >
                    {lang.flag} {lang.full}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <button 
              className="header-btn buy-band-btn"
              onClick={() => handleNavigation('/band', 'Buy Band')}
            >
              Buy Band
            </button>
            
            <button 
              className="header-btn institute-btn"
              onClick={() => handleNavigation('/institute', 'Institute')}
            >
              Institute
            </button>
            
            <button 
              className="header-btn doctor-btn"
              onClick={() => handleNavigation('/doctor', 'Doctor')}
            >
              Doctor
            </button>
            
             <button 
              className="header-btn doctor-btn"
              onClick={() => handleNavigation('/pharma', 'Medical Store')}
            >
              Medical Store
            </button>
            <div className={`login-dropdown ${isLoginOpen ? 'active' : ''}`} ref={loginRef}>
              <button 
                className="header-btn login-btn" 
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                Login
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="login-options">
                <div className="login-option" onClick={() => handleLogin('user')}>
                  <svg className="login-option-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Login as Medical Store
                </div>
                <div className="login-option" onClick={() => handleLogin('doctor')}>
                  <svg className="login-option-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Login as Doctor
                </div>
                <div className="login-option" onClick={() => handleLogin('institution')}>
                  <svg className="login-option-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Login as Institution
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-header-actions">
            <div className="mobile-buttons">
              <button 
                className="header-btn buy-band-btn"
                onClick={() => handleNavigation('/buy-band', 'Buy Band')}
              >
                Buy Band
              </button>
              <button 
                className="header-btn institute-btn"
                onClick={() => handleNavigation('/institute', 'Institute')}
              >
                Institute
              </button>
              <button 
                className="header-btn doctor-btn"
                onClick={() => handleNavigation('/doctor', 'Doctor')}
              >
                Doctor
              </button>
              <button className="header-btn signup-btn">Sign Up</button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="mobile-nav-menu">
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'Home' ? 'active' : ''}`}
              onClick={() => handleNavigation('/', 'Home')}
            >
              🏠 Home
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'About Us' ? 'active' : ''}`}
              onClick={() => handleNavigation('/about', 'About Us')}
            >
              ℹ️ About Us
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'Services' ? 'active' : ''}`}
              onClick={() => handleNavigation('/services', 'Services')}
            >
              🔧 Services
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'Doctors' ? 'active' : ''}`}
              onClick={() => handleNavigation('/doctor', 'Doctors')}
            >
              👨‍⚕️ Doctors
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'Institute' ? 'active' : ''}`}
              onClick={() => handleNavigation('/institute', 'Institute')}
            >
              🏥 Institute
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'FAQs' ? 'active' : ''}`}
              onClick={() => handleNavigation('/faqs', 'FAQs')}
            >
              ❓ FAQs
            </a>
            <a 
              href="#" 
              className={`mobile-nav-link ${activeNav === 'Contact/Support' ? 'active' : ''}`}
              onClick={() => handleNavigation('/contact', 'Contact/Support')}
            >
              📞 Contact/Support
            </a>
          </nav>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <a 
                // href="#" 
                className={`nav-link ${activeNav === 'Home' ? 'active' : ''}`}
                onClick={() => handleNavigation('/', 'Home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                // href="#" 
                className={`nav-link ${activeNav === 'About Us' ? 'active' : ''}`}
                onClick={() => handleNavigation('/about', 'About Us')}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a 
                // href="#" 
                className={`nav-link ${activeNav === 'Services' ? 'active' : ''}`}
                onClick={() => handleNavigation('/services', 'Services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a 
                // href="#" 
                className={`nav-link ${activeNav === 'Doctors' ? 'active' : ''}`}
                onClick={() => handleNavigation('/doctor', 'Doctors')}
              >
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a 
                // href="#" 
                className={`nav-link ${activeNav === 'Institute' ? 'active' : ''}`}
                onClick={() => handleNavigation('/institute', 'Institute')}
              >
                Institute
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#" 
                className={`nav-link ${activeNav === 'FAQs' ? 'active' : ''}`}
                onClick={() => handleNavigation('/faqs', 'FAQs')}
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#" 
                className={`nav-link ${activeNav === 'Contact/Support' ? 'active' : ''}`}
                onClick={() => handleNavigation('/contact', 'Contact/Support')}
              >
                Contact/Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;