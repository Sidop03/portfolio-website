import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent successfully!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '10px' }} />
        Contact Me
      </h1>
      <hr style={styles.divider} />

      <div style={styles.content}>
        {/* Contact Information */}
        <div style={styles.infoContainer}>
          <h2 style={styles.subtitle}>Let's Connect</h2>
          
          <div style={styles.infoItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <div>
              <h3 style={styles.infoLabel}>Email</h3>
              <p style={styles.infoText}>siddhant.vyas0311@gmail.com</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} />
            <div>
              <h3 style={styles.infoLabel}>Phone</h3>
              <p style={styles.infoText}>+91 9119287167</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
            <div>
              <h3 style={styles.infoLabel}>Location</h3>
              <p style={styles.infoText}>VIT University, Vellore, India</p>
            </div>
          </div>

          <div style={styles.socialLinks}>
            <a href="https://linkedin.com/in/siddhant-vyas" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FontAwesomeIcon icon={faLinkedin} style={styles.socialIcon} />
            </a>
            <a href="https://github.com/Sidop03" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FontAwesomeIcon icon={faGithub} style={styles.socialIcon} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.subtitle}>Send Me a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                style={styles.input} 
                required 
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                style={styles.input} 
                required 
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea 
                id="message" 
                rows="5" 
                style={styles.textarea} 
                required
              ></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '40px 20px',
    minHeight: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    paddingRight: '10px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: 'border-box', // Ensures padding is included in height
  },
  title: {
    color: 'yellow',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Papyrus, fantasy',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    border: '1px dashed yellow',
    width: '80%',
    margin: '0 auto 30px'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  infoContainer: {
    flex: '1',
    minWidth: '300px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#111',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(255, 255, 0, 0.1)'
  },
  formContainer: {
    flex: '1',
    minWidth: '300px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#111',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(255, 255, 0, 0.1)'
  },
  subtitle: {
    color: 'yellow',
    fontSize: '1.8rem',
    marginBottom: '20px',
    borderBottom: '2px solid yellow',
    paddingBottom: '10px',
    fontFamily: 'Courier, monospace'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px'
  },
  icon: {
    color: 'yellow',
    fontSize: '1.5rem',
    marginRight: '15px',
    marginTop: '5px'
  },
  infoLabel: {
    color: 'yellow',
    fontSize: '1.2rem',
    marginBottom: '5px',
    fontFamily: 'Courier, monospace'
  },
  infoText: {
    margin: '0',
    lineHeight: '1.5'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '30px',
    gap: '20px'
  },
  socialLink: {
    color: 'white',
    transition: 'color 0.3s'
  },
  socialIcon: {
    fontSize: '2rem',
    color: 'yellow',
    ':hover': {
      color: '#fff'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: 'yellow',
    fontFamily: 'Courier, monospace'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#222',
    color: 'white',
    fontSize: '1rem',
    ':focus': {
      outline: 'none',
      borderColor: 'yellow',
      boxShadow: '0 0 5px rgba(255, 255, 0, 0.5)'
    }
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#222',
    color: 'white',
    fontSize: '1rem',
    resize: 'vertical',
    ':focus': {
      outline: 'none',
      borderColor: 'yellow',
      boxShadow: '0 0 5px rgba(255, 255, 0, 0.5)'
    }
  },
  submitButton: {
    backgroundColor: 'yellow',
    color: 'black',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#ffeb3b',
      transform: 'translateY(-2px)'
    }
  }
};

export default Contact;