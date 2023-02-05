import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './navbarsub.scss';

const NavbarArabic = () => {
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
			<h1 className='logo-title' >رحلات الغردقة ومرسى علم </h1>
			</div>
				</div>
			</Link>
			<div onClick={handleClick} className="nav-icon1">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<div className='navItem1' dir="rtl">
			<ul className={open ? 'nav-links1 active' : 'nav-links1'}>
				<li className="nav-item1">
					<Link to="/homeArabic" className="nav-link1" onClick={closeMenu}>
						 الصفحة الرئيسية 
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/aboutArabic" className="nav-link1" onClick={closeMenu}>
					من نحن
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/travelsArabic" className="nav-link1" onClick={closeMenu}>
					 الرحلات
					</Link>
				</li>
				<li className="nav-item1">
					
					<Link to="/opinionArabic" className="nav-link1" onClick={closeMenu}>
					 الآراء
					</Link>
				</li>
				<li className="nav-item1">
					<Link to="/contactArabic" className="nav-link1" onClick={closeMenu}>
						اتصل بنا
					</Link>
				</li>
			</ul>
			</div>
		</nav>
	);
};

export default NavbarArabic;