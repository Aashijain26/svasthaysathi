import React, { useState, useEffect } from 'react';

const SehatBandWebpage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    payment: ''
  });

  // Put this above your Features Section
const features = [
  {
    icon: "👣",
    name: "Step Tracker",
    description: "Track your daily steps and stay active with real-time updates.",
  },
  {
    icon: "❤️",
    name: "Heart Rate Monitoring",
    description: "Monitor your heart rate anytime for better health insights.",
  },
  {
    icon: "🔥",
    name: "Calories Count",
    description: "Keep track of calories burned to maintain a healthy lifestyle.",
  },
  {
    icon: "🫁",
    name: "SpO₂ Monitoring",
    description: "Measure your blood oxygen levels to ensure proper wellness.",
  },
];


  const slideshowImages = [
    {
      title: 'Track Your Steps',
      description: 'Monitor your daily activity with precision step counting',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Heart Rate Monitoring',
      description: 'Real-time heart rate tracking for optimal health',
      image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Calories & Fitness',
      description: 'Track calories burned and achieve your fitness goals',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'SpO2 Monitoring',
      description: 'Monitor your blood oxygen levels throughout the day',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBuyNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setOrderForm({
      name: '',
      address: '',
      phoneNumber: '',
      payment: ''
    });
  };

  const handleSubmitOrder = () => {
    if (!orderForm.name || !orderForm.address || !orderForm.phoneNumber || !orderForm.payment) {
      alert('Please fill in all fields');
      return;
    }
    alert('Order placed successfully! We will contact you soon.');
    handleClosePopup();
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    },
    header: {
      backgroundColor: '#1a365d',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'relative'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    featuresDropdown: {
      position: 'relative',
      display: 'inline-block'
    },
    dropdownButton: {
      backgroundColor: '#2d5aa0',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    dropdownContent: {
      display: showFeaturesDropdown ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: 'white',
      minWidth: '160px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      zIndex: 1,
      borderRadius: '5px',
      marginTop: '5px'
    },
    dropdownItem: {
      color: '#333',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    userProfile: {
      backgroundColor: '#2d5aa0',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '1.2rem'
    },
    slideshow: {
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden',
      margin: '20px 0'
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 1s ease-in-out'
    },
    activeSlide: {
      opacity: 1
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    slideOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    },
    slideTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    slideDescription: {
      fontSize: '1.5rem',
      maxWidth: '600px',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '40px 0',
      padding: '0 20px'
    },
    button: {
      padding: '15px 30px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '150px'
    },
    buyNowButton: {
      backgroundColor: '#e53e3e',
      color: 'white'
    },
    learnMoreButton: {
      backgroundColor: '#3182ce',
      color: 'white'
    },
    popup: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: showPopup ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    popupContent: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '30px',
      width: '90%',
      maxWidth: '500px',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#666'
    },
    popupTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#1a365d',
      textAlign: 'center'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: '#333',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '80px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
    submitButton: {
      backgroundColor: '#38a169',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '10px'
    },
    indicators: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeIndicator: {
      backgroundColor: 'white'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.featuresDropdown}>
          
        </div>

        <h1 style={styles.logo}>SehatBand</h1>

        <div 
          style={styles.userProfile}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4a90e2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2d5aa0'}
        >
          👤
        </div>
      </header>

      {/* Features Section */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '40px', 
          color: '#1a365d' 
        }}>
          SehatBand Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#1a365d'
              }}>
                {feature.name}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button 
          style={{...styles.button, ...styles.buyNowButton}}
          onClick={handleBuyNow}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c53030';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#e53e3e';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Buy Now
        </button>
        
      </div>

      {/* Popup */}
      <div style={styles.popup} onClick={(e) => e.target === e.currentTarget && handleClosePopup()}>
        <div style={styles.popupContent}>
          <button style={styles.closeButton} onClick={handleClosePopup}>×</button>
          <h2 style={styles.popupTitle}>Place Your Order</h2>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={orderForm.name}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter your full name"
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Address</label>
            <textarea
              name="address"
              value={orderForm.address}
              onChange={handleInputChange}
              style={styles.textarea}
              placeholder="Enter your complete address"
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={orderForm.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter your phone number"
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Payment</label>
            <select
              name="payment"
              value={orderForm.payment}
              onChange={handleInputChange}
              style={styles.select}
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            >
              <option value="">Select payment method</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          </div>

          <button 
            onClick={handleSubmitOrder}
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2f855a';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#38a169';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SehatBandWebpage;