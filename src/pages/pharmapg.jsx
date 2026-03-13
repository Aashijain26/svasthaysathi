import React from 'react';
import { 
  Heart, 
  Pill, 
  ShoppingCart, 
  FileText, 
  Bell, 
  BarChart3,
  Phone,
  Mail,
  User,
  Check
} from 'lucide-react';

const MEDICALSTORE = () => {
  const features = [
    {
      icon: <Pill style={{ width: '48px', height: '48px', color: '#2563eb' }} />,
      title: "Smart Inventory Management",
    },
    {
      icon: <ShoppingCart style={{ width: '48px', height: '48px', color: '#059669' }} />,
      title: "Fast Billing",
    },
    {
      icon: <FileText style={{ width: '48px', height: '48px', color: '#7c3aed' }} />,
      title: "QR Based Billing",
    },
    {
      icon: <Bell style={{ width: '48px', height: '48px', color: '#dc2626' }} />,
      title: "Stock Alerts",
    },
    {
      icon: <BarChart3 style={{ width: '48px', height: '48px', color: '#ea580c' }} />,
      title: "Online Prescription Upload",
    },
    {
      icon: <Heart style={{ width: '48px', height: '48px', color: '#e11d48' }} />,
      title: "Medicine Substitution Suggestions",
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation Bar */}
      <nav style={{
        background: 'linear-gradient(to right, #1e40af, #1e3a8a)',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Pill style={{ width: '32px', height: '32px' }} />
              <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>PHARMA STORE</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <User style={{ width: '20px', height: '20px' }} />
              <span style={{ fontSize: '14px' }}>Welcome, Admin</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
        color: 'white',
        padding: '2.5rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '0.75rem'
          }}>Pharmacy Store Billing Software</h2>
          <p style={{
            fontSize: '1.125rem',
            opacity: 0.9,
            margin: 0
          }}>Streamline your medical store operations with cutting-edge technology</p>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>WHAT ARE WE PROVIDING?</h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280'
          }}>Advanced features designed specifically for modern pharmacy operations</p>
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '2rem',
          justifyItems: 'center'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid #e5e7eb',
              width: '100%',
              maxWidth: '400px',
              cursor: 'pointer'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                minHeight: '100px'
              }}>
                <div style={{
                  marginBottom: '1.5rem',
                  padding: '1.25rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>{feature.title}</h3>

                {/* ✅ Single feature tick */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left',
                  width: '100%'
                }}>
                  
                </ul>
              </div>
            </div>
          ))}
        </div>


        {/* Pricing Section */}
        {/* <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>Billing System Prize</h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <span style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#dc2626',
              textDecoration: 'line-through'
            }}>₹5000</span>
            <span style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#059669'
            }}>₹4500</span>
          </div>
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>One-time setup cost for complete pharmacy billing software</p>
        </div> */}
      </div>

      {/* Demo & Contact Section */}
      <div style={{
        background: 'linear-gradient(to right, #f1f5f9, #e2e8f0)',
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
            padding: '3rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>TAKE A DEMO & CONTACT US</h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280'
              }}>Experience the power of our pharmacy management system</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem'
            }}>
              {/* Demo Section */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  backgroundColor: '#eff6ff',
                  padding: '2rem',
                  borderRadius: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e40af',
                    marginBottom: '1.5rem'
                  }}>Free Demo Available</h3>
                  <p style={{
                    color: '#374151',
                    marginBottom: '1.5rem'
                  }}>Get a personalized demonstration of our software with your pharmacy data</p>
                  <button style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1d4ed8';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    Schedule Demo
                  </button>
                </div>
              </div>

              {/* Contact Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem'
                }}>
                  <Phone style={{ width: '32px', height: '32px', color: '#059669' }} />
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Phone Support</h4>
                    <p style={{
                      color: '#2563eb',
                      fontWeight: 'bold',
                      fontSize: '1.125rem',
                      margin: '0 0 0.25rem 0'
                    }}>+91 98765 43210</p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      margin: 0
                    }}>Available 24/7 for support</p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem'
                }}>
                  <Mail style={{ width: '32px', height: '32px', color: '#2563eb' }} />
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>Email Support</h4>
                    <p style={{
                      color: '#2563eb',
                      fontWeight: 'bold',
                      fontSize: '1.125rem',
                      margin: '0 0 0.25rem 0'
                    }}>support@pharmastore.com</p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      margin: 0
                    }}>Quick response guaranteed</p>
                  </div>
                </div>
                
                <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                  <button style={{
                    background: 'linear-gradient(to right, #10b981, #059669)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #059669, #047857)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #10b981, #059669)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    Contact Sales Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{
        backgroundColor: '#374151',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>© 2024 Pharmastore. All rights reserved. | Your Health, Our Priority</p>
          <p style={{ color: '#d1d5db' }}>Licensed Online Pharmacy | 24/7 Customer Support</p>
        </div>
      </footer>
    </div>
  );
};

export default MEDICALSTORE;