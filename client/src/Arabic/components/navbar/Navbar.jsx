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
			<h1>رحلات الغردقه ومرسى علم </h1>
				{/* <h1>رحلات</h1> */}
			</div>
				</div>
				
			</Link>

			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<div className='navItem' dir="rtl">
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/homeArabic" className="nav-link" onClick={closeMenu}>
						الصفحة الرئيسية
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/aboutArabic" className="nav-link" onClick={closeMenu}>
					من نحن
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/travelsArabic" className="nav-link" onClick={closeMenu}>
					الرحلات
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/opinionArabic" className="nav-link" onClick={closeMenu}>
					الآراء
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contactArabic" className="nav-link" onClick={closeMenu}>
						 اتصل بنا
					</Link>
				</li>
			</ul>
			</div>
		</nav>
	);
};

export default Navbar;