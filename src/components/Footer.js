import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
export default function Footer() {
    return (
      <div className="footer">
          <div className='top'>
            <div className='one'>
                <h1>Mag<span className='footer__span'>Verse</span></h1>
                <div className='social__icon'>
                    <FontAwesomeIcon icon={faFacebook} className="ficon"/>
                    <FontAwesomeIcon icon={faTwitter} className="ticon"/>
                    <FontAwesomeIcon icon={faInstagram} className="iicon"/>
                </div>
            </div>
            <div className='footer__links'>
                <div className='links'>
                    <li className='head'>Company</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </div>
                <div className='links'>
                    <li className='head' id='shift'>Our Users</li>
                    <li>Customer Support</li>
                    <li>Guide</li>
                    <li>How it works</li>
                </div>
                <div className='links'>
                    <li className='head'>Resources</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Store</li>
                </div>
            </div>
          </div>
          <hr/>
          <div className='down'>
            <p>Copyright @ Magnificent, All Right Reserved</p>
            <div className='down__left'>
                <p>Term and Agreements</p>
                <p>Privacy Policy</p>
            </div>
          </div>
      </div>
    );
  }