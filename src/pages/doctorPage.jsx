import React from 'react';

const DoctorProfile = () => {
  const upcomingAppointments = [
    { id: 1, patient: "AAA", time: "10:00 AM", date: "Today" },
    { id: 2, patient: "BBB", time: "11:30 AM", date: "Today" },
    { id: 3, patient: "CCC", time: "2:00 PM", date: "Tomorrow" },
    { id: 4, patient: "", time: "9:00 AM", date: "Dec 15" }
  ];

  const notifications = [
    { id: 1, message: "New patient registration: AAAA", time: "5 min ago" },
    { id: 2, message: "Prescription approved for BBBB", time: "15 min ago" },
    { id: 3, message: "Video call scheduled for 2:00 PM", time: "1 hour ago" },
    { id: 4, message: "Lab results available for CCCC", time: "2 hours ago" }
  ];

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa'
    },
    sidebar: {
      width: '300px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      padding: '20px',
      boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    profileSection: {
      textAlign: 'center'
    },
    profileCircle: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: '#4f46e5',
      margin: '0 auto 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
    },
    doctorName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '5px'
    },
    licenseNumber: {
      fontSize: '14px',
      color: '#64748b',
      marginBottom: '20px'
    },
    sectionContainer: {
      marginBottom: '20px'
    },
    sectionHeader: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px 8px 0 0',
      padding: '12px 15px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151'
    },
    listContainer: {
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderTop: 'none',
      borderRadius: '0 0 8px 8px',
      maxHeight: '200px',
      overflowY: 'auto'
    },
    appointmentItem: {
      padding: '12px 15px',
      borderBottom: '1px solid #f1f5f9',
      fontSize: '13px'
    },
    appointmentPatient: {
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '4px'
    },
    appointmentTime: {
      color: '#64748b',
      fontSize: '12px'
    },
    notificationItem: {
      padding: '12px 15px',
      borderBottom: '1px solid #f1f5f9',
      fontSize: '13px'
    },
    notificationMessage: {
      color: '#374151',
      marginBottom: '4px'
    },
    notificationTime: {
      color: '#64748b',
      fontSize: '11px'
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      padding: '15px 25px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    calendarIcon: {
      fontSize: '24px',
      color: '#4f46e5',
      cursor: 'pointer'
    },
    searchContainer: {
      position: 'relative'
    },
    searchBar: {
      padding: '10px 15px 10px 40px',
      border: '1px solid #d1d5db',
      borderRadius: '25px',
      width: '300px',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s ease'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      fontSize: '16px'
    },
    contentArea: {
      flex: 1,
      padding: '25px',
      position: 'relative'
    },
    demoVideo: {
      width: '100%',
      maxWidth: '800px',
      height: '400px',
      backgroundColor: '#000',
      borderRadius: '12px',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '18px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    actionButtons: {
      display: 'flex',
      gap: '20px',
      marginBottom: '20px'
    },
    actionButton: {
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      padding: '15px 25px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    actionButtonHover: {
      backgroundColor: '#4338ca',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
    },
    notesButton: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      padding: '15px 20px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
      transition: 'all 0.2s ease'
    },
    notesButtonHover: {
      backgroundColor: '#059669',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 25px rgba(16, 185, 129, 0.4)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Sidebar */}
      <div style={styles.sidebar}>
        {/* Profile Section */}
        <div style={styles.profileSection}>
          <div style={styles.profileCircle}>
            DR
          </div>
          <div style={styles.doctorName}>Dr. Sarah Mitchell</div>
          <div style={styles.licenseNumber}>License #: MD-2024-7891</div>
        </div>

        {/* Upcoming Appointments List */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            📅 Upcoming Appointments
          </div>
          <div style={styles.listContainer}>
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} style={styles.appointmentItem}>
                <div style={styles.appointmentPatient}>{appointment.patient}</div>
                <div style={styles.appointmentTime}>{appointment.time} - {appointment.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            🔔 Notifications
          </div>
          <div style={styles.listContainer}>
            {notifications.map((notification) => (
              <div key={notification.id} style={styles.notificationItem}>
                <div style={styles.notificationMessage}>{notification.message}</div>
                <div style={styles.notificationTime}>{notification.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.calendarIcon}>📅</div>
          <div style={styles.searchContainer}>
            <div style={styles.searchIcon}>🔍</div>
            <input
              type="text"
              placeholder="Search patients..."
              style={styles.searchBar}
              onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
        </div>

        {/* Content Area */}
        <div style={styles.contentArea}>
          {/* Demo Video */}
          <div style={styles.demoVideo}>
            🎥 Telemedicine Platform Demo Video
            <br /><br/><br/>
            <small style={{ fontSize: '14px', marginTop: '10px' }}>Click to play introduction video</small>
          </div>

          {/* Action Buttons */}
          <div style={styles.actionButtons}>
            <button 
              style={styles.actionButton}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.actionButtonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4f46e5';
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              📹 Video Chat
            </button>
            
            <button 
              style={styles.actionButton}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.actionButtonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4f46e5';
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              📋 Medical Record
            </button>
            
            <button 
              style={styles.actionButton}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.actionButtonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4f46e5';
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              💊 Prescription Generator
            </button>
          </div>
        </div>

        {/* Notes Button (Bottom Right) */}
        <button 
          style={styles.notesButton}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, styles.notesButtonHover);
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#10b981';
            e.target.style.transform = 'none';
            e.target.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
          }}
        >
          📝 Notes
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;