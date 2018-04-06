import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

	return (
		<div className='NavBar'>
			<Link to="/">HOME</Link>
			<Link to="/bars">BARS</Link>						
			
			{props.currentUser
				? (
					<span>
						<Link to="/vip">VIP</Link>
						<Link to="/logout">LOGOUT</Link>
						<Link to="/bars/new">NEW BAR</Link>						
					</span>
				)
				: (
					<span>
						<Link to="/login">LOG IN</Link>
						<Link to="/signup">SIGN UP</Link>
					</span>
				)
			}
		</div>
	)
}

export default NavBar