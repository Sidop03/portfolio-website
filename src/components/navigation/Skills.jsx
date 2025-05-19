import React from 'react';

function Skills() {
  const bodyDesign = {
    backgroundColor: 'black',
    padding: '2rem',
    margin: '0',
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    flexWrap: 'wrap'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '250px',
    backgroundColor: '#111',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255,255,0,0.2)'
  };

  const sectionTitle = {
    color: 'yellow',
    fontFamily: 'Papyrus',
    fontSize: '1.8rem',
    margin: '0 0 1rem 0',
    textAlign: 'center',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid yellow'
  };

  const skillItem = {
    margin: '1rem 0',
    padding: '0.8rem',
    backgroundColor: '#222',
    borderRadius: '8px'
  };

  const skillName = {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const skillLevelContainer = {
    width: '100%',
    height: '8px',
    backgroundColor: '#333',
    borderRadius: '4px',
    marginTop: '0.3rem'
  };

  const skillLevelBar = {
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'yellow'
  };

  const skillLevelText = {
    fontSize: '0.8rem',
    color: 'yellow',
    marginLeft: '0.5rem'
  };

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JAVASCRIPT', level: 85 }
    ],
    backend: [
      { name: 'JAVA', level: 90 },
      { name: 'PYTHON', level: 80 },
      { name: 'KOTLIN', level: 70 }
    ],
    databases: [
      { name: 'SQL', level: 85 },
      { name: 'MONGODB', level: 80 },
      { name: 'ORACLE', level: 75 }
    ]
  };

  return (
    <div style={bodyDesign}>
      <h1 style={{ 
        color: 'yellow',
        fontFamily: 'Papyrus',
        fontSize: '3rem',
        margin: '0 0 2rem 0',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(255,255,0,0.3)'
      }}>
        My Skills
      </h1>

      <div style={containerStyle}>
        {/* Frontend Column */}
        <div style={columnStyle}>
          <h2 style={sectionTitle}>FRONT END</h2>
          {skillsData.frontend.map((skill, index) => (
            <div key={`front-${index}`} style={skillItem}>
              <div style={skillName}>
                {skill.name}
                <span style={skillLevelText}>{skill.level}%</span>
              </div>
              <div style={skillLevelContainer}>
                <div style={{ ...skillLevelBar, width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Backend Column */}
        <div style={columnStyle}>
          <h2 style={sectionTitle}>BACK END</h2>
          {skillsData.backend.map((skill, index) => (
            <div key={`back-${index}`} style={skillItem}>
              <div style={skillName}>
                {skill.name}
                <span style={skillLevelText}>{skill.level}%</span>
              </div>
              <div style={skillLevelContainer}>
                <div style={{ ...skillLevelBar, width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Databases Column */}
        <div style={columnStyle}>
          <h2 style={sectionTitle}>DATABASES</h2>
          {skillsData.databases.map((skill, index) => (
            <div key={`db-${index}`} style={skillItem}>
              <div style={skillName}>
                {skill.name}
                <span style={skillLevelText}>{skill.level}%</span>
              </div>
              <div style={skillLevelContainer}>
                <div style={{ ...skillLevelBar, width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;