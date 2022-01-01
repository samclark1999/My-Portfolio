import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to ="hero" 
                    className="navbar-logo" 
                    onClick={toggleHome} 
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                        SAM CLARK<i className="fab fa-battle-net"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link 
                            to = "hero"
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to = "projects" 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to = "about" 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.github.com/samclark1999/" className="nav-links" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.linkedin.com/in/samclark99/" className="nav-links" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
