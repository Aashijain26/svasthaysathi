import React, { useState } from 'react';

const SehatLinkInstitutionPage = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    phoneNumber: '',
    address: '',
    numberOfStudents: '',
    availability: '',
    payment: ''
  });

  const institutions = [
    'Delhi Medical College',
    'Mumbai Institute of Technology',
    'Bangalore Health Sciences',
    'Chennai Nursing College',
    'Kolkata Pharmacy Institute',
    'Hyderabad Medical University',
    'Pune Healthcare Academy',
    'Jaipur Medical Institute',
    'Lucknow Health College',
    'Ahmedabad Medical School',
    'Kochi Dental College',
    'Patna Medical Institute'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.institutionName || !formData.phoneNumber || !formData.address || 
        !formData.numberOfStudents || !formData.availability || !formData.payment) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Institution details submitted successfully!');
    // Reset form
    setFormData({
      institutionName: '',
      phoneNumber: '',
      address: '',
      numberOfStudents: '',
      availability: '',
      payment: ''
    });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundColor: '#f0f2f5'
    },
    header: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    headerTitle: {
      margin: 0,
      fontSize: '2.5rem',
      fontWeight: 'bold',
      letterSpacing: '2px'
    },
    mainContainer: {
      display: 'flex',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      gap: '30px'
    },
    sidebar: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '25px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      height: 'fit-content',
      minWidth: '280px'
    },
    sidebarTitle: {
      color: '#2c3e50',
      fontSize: '1.5rem',
      marginBottom: '20px',
      borderBottom: '3px solid #3498db',
      paddingBottom: '10px',
      fontWeight: 'bold'
    },
    institutionsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    institutionItem: {
      padding: '12px 0',
      borderBottom: '1px solid #ecf0f1',
      color: '#34495e',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    formContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    formTitle: {
      color: '#2c3e50',
      fontSize: '2rem',
      marginBottom: '30px',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: '#2c3e50',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #bdc3c7',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #bdc3c7',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '100px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #bdc3c7',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
    submitButton: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Svasthay Sathi</h1>
      </div>

      <div style={styles.mainContainer}>
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Listed Institutions</h2>
          <ul style={styles.institutionsList}>
            {institutions.map((institution, index) => (
              <li 
                key={index} 
                style={{
                  ...styles.institutionItem,
                  ':hover': {
                    color: '#3498db',
                    paddingLeft: '10px'
                  }
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3498db';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#34495e';
                  e.target.style.paddingLeft = '0';
                }}
              >
                {institution}
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Add New Institution</h2>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Institution Name</label>
            <input
              type="text"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter institution name"
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter phone number"
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              style={styles.textarea}
              placeholder="Enter complete address"
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Number of Students</label>
            <input
              type="number"
              name="numberOfStudents"
              value={formData.numberOfStudents}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter number of students"
              min="1"
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              style={styles.select}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            >
              <option value="">Select availability month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleInputChange}
              style={styles.select}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
            >
              <option value="">Select payment method</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
            </select>
          </div>

          <button 
            onClick={handleSubmit} 
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2980b9';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Add Institution
          </button>
        </div>
      </div>
    </div>
  );
};

export default SehatLinkInstitutionPage;
                