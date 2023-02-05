import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar ">
			<Link to="/" className="nav-logo">
			<div className='logo'>
			<img src="/img/logo.png" alt="" width="60px" height="60px"/>
			<div>
			<h1>Hurghada-Marsa Alam </h1>
				<h1>Excursions</h1>
			</div>
				</div>
				
			</Link>
		
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<div className='navItem'>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/travels" className="nav-link" onClick={closeMenu}>
					Excursions
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/opinion" className="nav-link" onClick={closeMenu}>
						Opinion
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
			</div>
		</nav>
	);
};

export default Navbar;