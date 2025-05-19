import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
	const NavBarStyle={
		width:'100vw',
		height:'10vh',
		backgroundColor:'#777',
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around',
		zIndex:1
	}
	const linkStyle = {
		listStyleType: 'none',
		display: 'flex',
		gap: '2rem',
		flexDirection:'row',
		paddingLeft:'60%',
	};
	const linkTextStyle = {
		textDecoration: 'none',
		color: 'yellow',
		fontSize: '1.2rem',
	};
	const ulStyle={
		tectDecoration:'none',
		listStyleType: 'none',
		display:'flex',
		flexDirection:'row',
		gap:'2rem',
		fontSize:'auto'
	}
  	return (
		<div style={NavBarStyle}>
			<div style={linkStyle}>
				<ul style={ulStyle}>
					<li><Link to="/" style={linkTextStyle}>Home</Link></li>
					<li><Link to="/about" style={linkTextStyle}>About</Link></li>
					<li><Link to="/resume" style={linkTextStyle}>Resume</Link></li>
					<li><Link to="/skills" style={linkTextStyle}>Skills</Link></li>
					<li><Link to="/contact" style={linkTextStyle}>Contact</Link></li>
				</ul>
			</div>
		</div>
  )
}

export default NavBar