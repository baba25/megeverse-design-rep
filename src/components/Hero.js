import React from 'react';

import './Hero.css';
export default function Hero() {
    return (
      <div className="hero">
          <div className='empty'></div>
          <div className='top__hero'>
            <div className='heroside__one'>
                <h1>METAVERSE</h1>
                <h3>NEXT FUTURE <span className='hero__span'>TECHNOLOGY</span></h3>
                <p>it's time to move on to a more advanced
                    step by living as normal virtual reality
                </p>
                <button className='hero__btn'>FIND EVENT</button>
                <div className='r__counts'>
                    <div className='satisfied'>
                        <h2>1.2M+</h2>
                        <p>Satisfied player</p>
                    </div>
                    <div className='games'>
                        <h2>180K+</h2>
                        <p>Games Provided</p>
                    </div>
                </div>
            </div>
            <div className='heroside__two'>
                <img src='images/VR illustraion.svg' />
                <div className='bes__img'>
                    <h4>256,658+</h4>
                    <p>Professional Players</p>
                </div>
            </div>
          </div>
          <div className='down__hero'>
            <div className='rec__one'>
                <img src='images/image 3.svg' className='hero_img_1'/>
                <h3>Interoperabilty</h3>
                <p>Allowing anyone to build smart contacts and deploy
                    them to the meterverse chain
                </p>
            </div>
            <div className='rec__two'>
                <img src='images/image 4.svg' className='hero_img_2'/>
                <h3>Security</h3>
                <p>Proof of work (POW) to determine authority and grandpa finality 
                </p>
            </div>
            <div className='rec__three'>
                <img src='images/image 5.svg' className='hero_img_3'/>
                <h3>Interoperabilty</h3>
                <p>Allowing anyone to build smart contacts and deploy
                    them to the meterverse chain
                </p>
            </div>
          </div>
      </div>
    );
  }