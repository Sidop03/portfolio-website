import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUniversity, 
  faSchool, 
  faTrophy,
  faEnvelope,
  faPhone,
  faLink,
  faLaptopCode,
  faDatabase,
  faTools,
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faReact,
  faNodeJs,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faAws
} from '@fortawesome/free-brands-svg-icons';

const Resume = () => {
  return (
    <div style={styles.outerContainer}>
      <div className="resume-container" style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.name}>Siddhant Vyas</h1>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <FontAwesomeIcon icon={faUniversity} style={styles.icon} />
              <span>VIT University, Vellore, India</span>
            </div>
            <div style={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
              <span>siddhant.vyas0311@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} style={styles.icon} />
              <span>+91 9119287167</span>
            </div>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://linkedin.com/in/siddhant-vyas" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={styles.socialIcon} />
            </a>
            <a href="https://github.com/Sidop03" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={styles.socialIcon} />
            </a>
            <a href="https://geeksforgeeks.org/user/siddhantv533b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} style={styles.socialIcon} />
            </a>
            <a href="https://interviewbit.com/profile/siddhant-vyas-71" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTrophy} style={styles.socialIcon} />
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faBriefcase} style={styles.sectionIcon} />
            Professional Summary
          </h2>
          <p style={styles.summary}>
            Computer Science student passionate about problem-solving (<strong>ranked #1 on InterviewBit for VIT</strong>). 
            Skilled in full-stack development (<strong>React, Node.js, MongoDB</strong>) with experience building 
            scalable web applications like e-commerce platforms and API-integrated tools.
          </p>
        </section>

        {/* Education */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faGraduationCap} style={styles.sectionIcon} />
            Education
          </h2>
          <div style={styles.educationItem}>
            <div style={styles.educationHeader}>
              <FontAwesomeIcon icon={faUniversity} style={styles.sectionIcon} />
              <div>
                <h3 style={styles.educationDegree}>B-Tech in Computer Science and Engineering</h3>
                <div style={styles.educationMeta}>
                  <span>VIT University, Vellore</span>
                  <span>Sept 2022 – June 2026</span>
                </div>
              </div>
            </div>
            <ul style={styles.detailsList}>
              <li><strong>CGPA:</strong> 8.77 (till 5th semester)</li>
              <li><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems</li>
            </ul>
          </div>
          <div style={styles.educationItem}>
            <div style={styles.educationHeader}>
              <FontAwesomeIcon icon={faSchool} style={styles.sectionIcon} />
              <div>
                <h3 style={styles.educationDegree}>Senior Secondary Education</h3>
                <div style={styles.educationMeta}>
                  <span>Eden International School</span>
                  <span>Apr 2021 – June 2022</span>
                </div>
              </div>
            </div>
            <ul style={styles.detailsList}>
              <li><strong>Percentage:</strong> 88.4</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faLaptopCode} style={styles.sectionIcon} />
            Projects
          </h2>
          <div style={styles.projectItem}>
            <h3 style={styles.projectTitle}>E-commerce Website</h3>
            <ul style={styles.projectDetails}>
              <li>Developed a full-fledged platform with secure payment gateways (Stripe/PayPal) and JWT authentication, improving user checkout efficiency by 30%.</li>
            </ul>
          </div>
          <div style={styles.projectItem}>
            <h3 style={styles.projectTitle}>FoodStack (Recipe Finder)</h3>
            <ul style={styles.projectDetails}>
              <li>Built an ingredient-based search tool fetching 1000+ recipes via Spoonacular API, reducing recipe discovery time by 40%.</li>
            </ul>
          </div>
          <div style={styles.projectItem}>
            <h3 style={styles.projectTitle}>Crypto Converter</h3>
            <ul style={styles.projectDetails}>
              <li>Designed a real-time cryptocurrency converter supporting 50+ currencies with dynamic charts.</li>
            </ul>
          </div>
          <div style={styles.projectItem}>
            <h3 style={styles.projectTitle}>Expense Tracker</h3>
            <ul style={styles.projectDetails}>
              <li>Created a financial dashboard with monthly analytics, helping users reduce unnecessary spending by 25%.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faTools} style={styles.sectionIcon} />
            Skills
          </h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Programming Languages:</h4>
              <ul style={styles.skillList}>
                <li><FontAwesomeIcon icon={faJava} style={styles.skillIcon} /> C</li>
                <li>C++</li>
                <li><FontAwesomeIcon icon={faJava} style={styles.skillIcon} /> Java</li>
                <li><FontAwesomeIcon icon={faJs} style={styles.skillIcon} /> JavaScript (ES6+)</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Frontend:</h4>
              <ul style={styles.skillList}>
                <li><FontAwesomeIcon icon={faReact} style={styles.skillIcon} /> React</li>
                <li>Bootstrap</li>
                <li><FontAwesomeIcon icon={faHtml5} style={styles.skillIcon} /> HTML/<FontAwesomeIcon icon={faCss3Alt} style={styles.skillIcon} /> CSS</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Backend:</h4>
              <ul style={styles.skillList}>
                <li><FontAwesomeIcon icon={faNodeJs} style={styles.skillIcon} /> Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Databases:</h4>
              <ul style={styles.skillList}>
                <li><FontAwesomeIcon icon={faDatabase} style={styles.skillIcon} /> MongoDB</li>
                <li>SQL (MySQL)</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Tools:</h4>
              <ul style={styles.skillList}>
                <li>Git</li>
                <li><FontAwesomeIcon icon={faAws} style={styles.skillIcon} /> AWS</li>
                <li><FontAwesomeIcon icon={faDocker} style={styles.skillIcon} /> Docker</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillTitle}>Concepts:</h4>
              <ul style={styles.skillList}>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>OOP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faTrophy} style={styles.sectionIcon} />
            Achievements
          </h2>
          <ul style={styles.achievementsList}>
            <li style={styles.achievementItem}>
              <FontAwesomeIcon icon={faTrophy} style={styles.achievementIcon} />
              Ranked <strong>#1 on InterviewBit</strong> (VIT leaderboard)
            </li>
            <li style={styles.achievementItem}>
              <FontAwesomeIcon icon={faTrophy} style={styles.achievementIcon} />
              <strong>Top 302 institutional rank</strong> on GeeksforGeeks
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

// Styles
const styles = {
  outerContainer: {
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: 'yellow',
    lineHeight: '1.6',
    backgroundColor: '#000',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    minHeight: 'calc(100% - 40px)' // Subtract padding
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '1rem'
  },
  name: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: 'yellow'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center'
  },
  icon: {
    color: '#3498db',
    width: '20px'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: 'yellow',
    transition: 'color 0.3s',
    ':hover': {
      color: '#3498db'
    }
  },
  section: {
    marginBottom: '2.5rem'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: 'yellow',
    borderBottom: '1px solid #eee',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  sectionIcon: {
    color: 'yellow',
    width: '24px'
  },
  summary: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    paddingLeft: '2rem'
  },
  educationItem: {
    marginBottom: '1.8rem',
    paddingLeft: '2rem'
  },
  educationHeader: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    marginBottom: '0.5rem'
  },
  educationDegree: {
    margin: '0',
    fontSize: '1.2rem',
    color: 'yellow'
  },
  educationMeta: {
    display: 'flex',
    gap: '1.5rem',
    color: 'yellow',
    fontSize: '0.9rem',
    marginTop: '0.3rem'
  },
  detailsList: {
    marginLeft: '1.5rem',
    paddingLeft: '0.5rem',
    listStyleType: 'disc'
  },
  projectItem: {
    marginBottom: '1.8rem',
    paddingLeft: '2rem'
  },
  projectTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: 'yellow'
  },
  projectDetails: {
    marginLeft: '1rem',
    paddingLeft: '1rem',
    listStyleType: 'circle'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    paddingLeft: '2rem'
  },
  skillCategory: {
    backgroundColor: '#777',
    padding: '1.2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',

  },
  skillTitle: {
    marginTop: '0',
    marginBottom: '0.8rem',
    color: 'yellow',
    fontSize: '1.1rem'
  },
  skillList: {
    margin: '0',
    paddingLeft: '1.2rem',
    listStyleType: 'none'
  },
  skillIcon: {
    color: 'yellow',
    marginRight: '0.5rem',
    width: '18px'
  },
  achievementsList: {
    listStyleType: 'none',
    paddingLeft: '2rem'
  },
  achievementItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '0.8rem',
    fontSize: '1.1rem'
  },
  achievementIcon: {
    color: 'yellow',
    width: '20px'
  }
};

export default Resume;