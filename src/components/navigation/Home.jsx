import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css'; // Import your CSS here
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1 className="animated-text">Hello. I'm Siddhant.</h1><br />
      <h1 className="animated-text">A Full-Stack Developer</h1>

      <div className="button-group">
        <button className="yellow-button" onClick={() => navigate('/contact')}>Hire Me</button>
        <a href="https://drive.google.com/file/d/1LwUHqCBwUSaqlCEB-LL8AaZ5miN4BQHz/view?usp=drive_link"
        target='blank' rel="noopener noreferrer">
          <button className="yellow-button" >Resume Download</button>
        </a> 
      </div>

      <div className="social-icons">
        <a href="https://wa.me/+919119287167" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-vyas-98b904276/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default Home;
