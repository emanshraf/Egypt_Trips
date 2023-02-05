import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './navbarsub.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar1 ">
			<Link to="/" className="nav-logo1">
			<div className='logo'>
			<img className='logo-img' src="/img/logo.png" alt="" width="50px" height="60px"/>
			<div >
			<h1 className='logo-title' >Hurghada-Marsa Alam </h1>
			<h1 className='logo-title' >Excursions</h1>
			</div>
				</div>
			</Link>
			<div onClick={handleClick} className="nav-icon1">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<div className='navItem1'>
			<ul className={open ? 'nav-links1 active' : 'nav-links1'}>
				<li className="nav-item1">
					<Link to="/" className="nav-link1" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/about" className="nav-link1" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/travels" className="nav-link1" onClick={closeMenu}>
					 Excursions
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/opinion" className="nav-link1" onClick={closeMenu}>
						Opinion
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/contact" className="nav-link1" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
			</div>
		</nav>
	);
};

export default Navbar;