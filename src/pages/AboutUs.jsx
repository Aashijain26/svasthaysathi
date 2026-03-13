import React from 'react';
import { Heart, Shield, Globe, Users, Smartphone, Stethoscope, MapPin, Wifi } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "QR-Based Health Records",
      description: "Carry your complete medical history anywhere with secure, portable QR codes"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI in Local Languages",
      description: "Smart symptom checker and medicine analyzer that understands your language"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "MBBS College Partnerships",
      description: "Connecting rural communities with medical students and professionals"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Pharmacy Integration",
      description: "Real-time medicine availability updates from nearby pharmacies"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Multi-Channel Teleconsults",
      description: "Video calls, WhatsApp, SMS, and voice alerts for seamless communication"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Low-Network Solutions",
      description: "Healthcare access even in areas with limited internet connectivity"
    }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      lineHeight: '1.6',
      color: '#1a202c',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Heart style={{ color: '#e53e3e', width: '32px', height: '32px' }} />
            <h1 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold', 
              margin: 0,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Svasthay Sathi
            </h1>
          </div>
        </div>
      </header>

    
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            About Svasthay Sathi
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            Empowering communities with inclusive, intelligent healthcare solutions
          </p>
          <Shield style={{ 
            width: '64px', 
            height: '64px', 
            color: 'white', 
            margin: '0 auto',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      </section>

      {/* Main Content */}
      <main style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Mission Statement */}
          <section style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            marginBottom: '4rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            animation: 'slideInUp 0.8s ease-out'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Heart style={{ 
                width: '48px', 
                height: '48px', 
                color: '#667eea', 
                margin: '0 auto 1rem'
              }} />
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#2d3748',
                marginBottom: '1.5rem'
              }}>
                Our Mission
              </h3>
            </div>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#4a5568',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              At <strong style={{ color: '#667eea' }}>Svasthay Sathi</strong>, we empower communities with inclusive, intelligent healthcare solutions built for everyone. Our platform offers QR‑based health records you can carry everywhere and an AI symptom checker & medicine analyzer that works in local languages. We partner with MBBS colleges to bring medical support to rural areas, and integrate local pharmacies to give you real‑time updates on medicine availability. Whether through video teleconsults, WhatsApp/SMS/voice alerts, or wearable vitals monitoring, Svasthay Sathi keeps you connected even in low‑network settings. Trust, accessibility, and innovation guide us forward — helping you stay healthier, sooner.
            </p>
          </section>

          {/* Features Grid */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              What Makes Us Different
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    color: '#667eea',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#2d3748',
                    textAlign: 'center'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    textAlign: 'center'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            animation: 'slideInUp 0.8s ease-out'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: '#2d3748'
            }}>
              Our Values
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div>
                <Shield style={{ width: '40px', height: '40px', color: '#667eea', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2d3748' }}>Trust</h4>
                <p style={{ color: '#4a5568' }}>Secure, reliable healthcare you can depend on</p>
              </div>
              <div>
                <Globe style={{ width: '40px', height: '40px', color: '#667eea', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2d3748' }}>Accessibility</h4>
                <p style={{ color: '#4a5568' }}>Healthcare for everyone, everywhere</p>
              </div>
              <div>
                <Stethoscope style={{ width: '40px', height: '40px', color: '#667eea', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2d3748' }}>Innovation</h4>
                <p style={{ color: '#4a5568' }}>Cutting-edge solutions for modern healthcare</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Heart style={{ color: '#e53e3e', width: '24px', height: '24px', marginRight: '0.5rem' }} />
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Svasthay Sathi</span>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Connecting communities to better health, one link at a time.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;