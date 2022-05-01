import React from 'react';
import './Building.css';
export default function Building() {
    return (
      <div className="building">
          <div className='header'>
            <h1>Building The <span className='bui__span'>Metaverse</span></h1>
            <p>We're already developing exciting new technologies that, will help
                people correct and explore in the metaverse
            </p>
          </div>
          <div className='images'>
          <div className='images__top'>
            <div className='sec__1'>
                <img src='images/build 1.svg' />
                <h2>Virtual Reality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore. 
                </p>
                <p className='bord'>Explore more</p>
            </div>
            <div className='sec__3'>
                <img src='images/build 3.svg' />
                <h2>Virtual Reality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore. 
                </p>
                <p className='bord'>Explore more</p>
            </div>
          </div>
          <div className='images__down'>
                      <div className='sec__2'>
                <img src='images/benefits img 1.svg' />
                <h2>Virtual Reality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore. 
                </p>
                <p className='bord'>Explore more</p>
                <button className='bui__btn'>LOAD MORE</button>
            </div>
        </div>
        </div>
        </div>
    );
  }