import React from 'react'
import NavScroll from './NavScroll'
import './Navbar.css'

const Navbar = () => {
  
  return (
    <nav className='nav-wrapper'>
       <div className="flexCenter nav-container">
            <img src="logo.png" alt="logo" style={{ width: 150, height: 90 }} />
            <ul className="global-nav__list">
              <li>
                <button className="has-dropdown">Personal</button>
                <button className="has-dropdown">Business</button>
                <button className="has-dropdown">Developer</button>
                <button className="has-dropdown">Learn</button>
              </li>
            </ul>
            <div className="global-nav__ctas">
                <a href="#" className="button button--text">Log In</a>
                <a href="#" className="button">Sign Up For Free</a>
              </div>
        </div>
      <NavScroll/>
    </nav>
  )
}

export default Navbar
