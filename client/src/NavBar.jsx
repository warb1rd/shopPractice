import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

	return (
		<div id="navbar" className='NavBar'>
			<Link to="/"> <i className="fa fa-angle-left"> </i> </Link>
			<Link to="/" className="nav active"> HOME </Link>
			<Link to="/items">SHOP</Link>						
			
			{props.currentUser
				? (
					<span>
						{/* <Link to="/vip">VIP</Link> */}
						<Link to="/logout" className="nav" >LOGOUT</Link>
						<Link to="/items/new" className="nav">CHECKOUT</Link>						
					</span>
				)
				: (
					<span>
						<Link to="/login" className="nav">LOG IN</Link>
						<Link to="/signup" className="nav">SIGN UP</Link>
					</span>
				)
			}
		</div>
	)
}

export default NavBar