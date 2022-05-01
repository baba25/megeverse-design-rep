import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
      <div className="navbar">
        <div className='nav'>
          <div className='logo'>
            <h1>Mag<span className='nav__span'>Verse</span></h1>
          </div>
          <div className='nav__menu'>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>How it works</li>
                <li>FAQs</li>
            </ul>
          </div>
          <div className='nav__btn'>
            <button className='navbtn'>SIGN UP</button>
          </div>
          </div>
      </div>
    );
  }