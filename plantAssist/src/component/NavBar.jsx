import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignIn from './pages/Login';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Plant Assist 
            <i className='fa-brands fa-pagelines' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/zone' className='nav-links' onClick={closeMobileMenu}>
                US Zones
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/explore'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              path='/login'
                to='/login'
                className='nav-links'
                element={<SignIn/>}
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>LOGIN</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;