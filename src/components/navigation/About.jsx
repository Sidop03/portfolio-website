import React from 'react';

function About() {
  const bodyDesign = {
    backgroundColor: 'black',
    padding: '0',
    margin: '0',
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden'
  };

  const outerContainer = {
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: 'black'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '2%',
    flexWrap: 'wrap'
  };

  return (
    <div style={outerContainer}>
      <div style={bodyDesign}>
        <h1 style={{
          padding: '0',
          margin: '0',
          color: 'yellow',
          fontFamily: 'Papyrus',
          fontSize: '3rem',
          paddingLeft: '2%',
          paddingTop: '2%'
        }}>About me</h1>

        <hr style={{ border: '1px dashed yellow', margin: '1% 2%' }} />

        <div style={contentStyle}>
          {/* Left Side - Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%', minWidth: '300px' }}>
            <h1 style={{ color: 'yellow', fontFamily: 'Courier', paddingLeft: '2%', marginTop: '0' }}>Full-Stack Developer</h1>
            <p style={{ 
              color: 'yellow', 
              fontFamily: 'Courier', 
              paddingLeft: '2%',
              whiteSpace: 'pre-line',
              lineHeight: '1.6'
            }}>
              Hi, I'm Siddhant Vyas, a Full-Stack Developer and B.Tech CSE student at VIT Vellore. I specialize in creating responsive,
              high-performance web applications using React, Node.js, Express, and MongoDB.
              {"\n\n"}
              Over the past year, I've developed several real-world projects including an E-commerce Website, FoodStack,
              and a Hostel Room Allocation System. I was also proud to be the 2nd runner-up at CodeInnovact,
              a national-level coding event.
              {"\n\n"}
              I'm passionate about learning new technologies and building solutions that make an impact.
              I'm currently open to internship opportunities, freelance work, and tech collaborations.
              {"\n\n"}
              Beyond tech, I enjoy jogging, reading about AI, and pushing the limits of what I can build.
            </p>
            <h1 style={{
              color: 'yellow',
              fontFamily: 'Courier',
              paddingLeft: '2%',
              marginBottom: '0.5rem'
            }}>Personal Information</h1>
            <ul style={{ 
              listStyleType: 'none', 
              paddingLeft: '2%',
              marginTop: '0'
            }}>
              <li style={{ color: '#fff', marginBottom: '0.5rem' }}>
                <span style={{ textDecoration: 'underline 1px solid yellow', display: 'inline-block', width: '120px' }}>Name</span> Siddhant Vyas
              </li>
              <li style={{ color: '#fff', marginBottom: '0.5rem' }}>
                <span style={{ textDecoration: 'underline 1px solid yellow', display: 'inline-block', width: '120px' }}>Age</span> 22
              </li>
              <li style={{ color: '#fff', marginBottom: '0.5rem' }}>
                <span style={{ textDecoration: 'underline 1px solid yellow', display: 'inline-block', width: '120px' }}>Address</span> F-block VIT University Vellore Tamil Nadu
              </li>
              <li style={{ color: '#fff', marginBottom: '0.5rem' }}>
                <span style={{ textDecoration: 'underline 1px solid yellow', display: 'inline-block', width: '120px' }}>Email</span> siddhant.vyas03@gmail.com
              </li>
              <li style={{ color: '#fff', marginBottom: '0.5rem' }}>
                <span style={{ textDecoration: 'underline 1px solid yellow', display: 'inline-block', width: '120px' }}>Contact Number</span> +919119287167
              </li>
            </ul>
          </div>

          {/* Right Side - GIF Animation */}
          <div style={{ 
            width: '45%', 
            minWidth: '300px',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Developer Animation"
              style={{ 
                width: '100%', 
                maxWidth: '500px',
                borderRadius: '1rem',
                border: '2px solid yellow'
              }}
            />
          </div>
        </div>
        
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
}

export default About;