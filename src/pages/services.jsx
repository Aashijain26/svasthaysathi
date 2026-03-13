import React from 'react';
import { 
  Heart, 
  QrCode, 
  Bot, 
  Video, 
  MapPin, 
  Watch, 
  MessageSquare, 
  Wifi,
  Stethoscope,
  Users,
  Shield,
  Smartphone,
  Calendar,
  Pill
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <QrCode className="w-12 h-12" />,
      title: "Portable Health Records",
      emoji: "🩺",
      description: "Each patient receives a unique QR code linked to their complete medical history. This ensures seamless access across hospitals, pharmacies, and doctors—even without an internet connection.",
      color: "#3B82F6"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Chatbot & Medicine Analyzer",
      emoji: "🤖",
      description: "Our intuitive AI-driven chatbot allows users to describe symptoms in their local language, guiding them toward possible diagnoses. Additionally, the medicine analyzer lets users scan medicine strips to understand their uses, promoting informed healthcare decisions.",
      color: "#8B5CF6"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Doctor Consultations",
      emoji: "👩‍⚕️",
      description: "Connect with qualified doctors through video consultations, priority doctor listings, and slot bookings. Whether it's a routine check-up or a specific health concern, expert medical advice is just a click away.",
      color: "#10B981"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Pharmacy Integration & Real-Time Medicine Tracking",
      emoji: "🏥",
      description: "Stay informed with real-time updates on local pharmacy stock availability, reducing unnecessary visits and ensuring timely access to medications. Our system syncs with local pharmacies to provide live medicine availability.",
      color: "#F59E0B"
    },
    {
      icon: <Watch className="w-12 h-12" />,
      title: "Wearable Health Monitoring",
      emoji: "⌚",
      description: "Our affordable fit-band hardware continuously monitors heart rate and other vital signs, sending instant alerts in case of irregularities. Users can track their health trends over time through the app, reducing the need for frequent hospital visits for minor illnesses.",
      color: "#EF4444"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Inclusive Communication Channels",
      emoji: "📱",
      description: "Receive appointment reminders, prescription updates, and vaccination schedules via SMS, WhatsApp, or voice alerts, ensuring inclusivity for non-smartphone users.",
      color: "#06B6D4"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Low-Network & Offline Mode",
      emoji: "🌐",
      description: "Designed to function efficiently in areas with poor connectivity, Svasthay Sathi's core features operate offline and sync data once online, ensuring uninterrupted access to essential services.",
      color: "#84CC16"
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

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            At Svasthay Sathi, we offer a comprehensive suite of healthcare services designed to make medical care accessible, efficient, and user-friendly for everyone—especially in underserved and remote areas.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            <Stethoscope style={{ width: '48px', height: '48px', color: 'white' }} />
            <Users style={{ width: '48px', height: '48px', color: 'white' }} />
            <Shield style={{ width: '48px', height: '48px', color: 'white' }} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <main style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${service.color}20, ${service.color}10)`,
                  zIndex: 0
                }} />
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      color: service.color,
                      marginRight: '1rem',
                      padding: '1rem',
                      background: `${service.color}15`,
                      borderRadius: '15px'
                    }}>
                      {service.icon}
                    </div>
                    <span style={{ fontSize: '2rem' }}>{service.emoji}</span>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#2d3748'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            padding: '4rem',
            marginTop: '4rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            animation: 'slideInUp 0.8s ease-out 1s both'
          }}>
            <Heart style={{
              width: '64px',
              height: '64px',
              color: '#667eea',
              margin: '0 auto 2rem'
            }} />
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#2d3748'
            }}>
              Ready to Transform Your Healthcare Experience?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Join thousands of users who trust Svasthay Sathi for their healthcare needs. Experience the future of accessible, intelligent medical care.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem'
            }}>
              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(45deg, #667eea15, #764ba215)',
                borderRadius: '15px'
              }}>
                <Calendar style={{ width: '32px', height: '32px', color: '#667eea', margin: '0 auto 0.5rem' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>24/7 Availability</h4>
                <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Access healthcare services anytime, anywhere</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(45deg, #667eea15, #764ba215)',
                borderRadius: '15px'
              }}>
                <Smartphone style={{ width: '32px', height: '32px', color: '#667eea', margin: '0 auto 0.5rem' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Multi-Platform</h4>
                <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Works on any device, even basic phones</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(45deg, #667eea15, #764ba215)',
                borderRadius: '15px'
              }}>
                <Pill style={{ width: '32px', height: '32px', color: '#667eea', margin: '0 auto 0.5rem' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Local Language</h4>
                <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Healthcare in your preferred language</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Heart style={{ color: '#e53e3e', width: '32px', height: '32px', marginRight: '0.5rem' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SehatLink</span>
          </div>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Empowering communities with comprehensive healthcare solutions. From AI-powered diagnostics to real-time medicine tracking, we're here to make healthcare accessible for everyone.
          </p>
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            display: 'inline-block'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              🌟 Trusted by thousands • 🏥 Connected to 500+ pharmacies • 👩‍⚕️ 200+ qualified doctors
            </p>
          </div>
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
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;