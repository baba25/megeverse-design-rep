import React from 'react';
import './Activate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
export default function Activate() {
    return (
      <div className="activate">
          <div className='head'>
            <h1>Activating The <sapn className='act__span'>Metaverse</sapn></h1>
            <p>Through MST.MIT.Avatars</p>
          </div>
          <div className='fgt'>
          <div className='top__det' id='det__1'>
              <FontAwesomeIcon icon={faWallet} className="wallet"/>
              <h3>MST</h3>
            </div>
            <div className='top__det' id='det__2'>
              <FontAwesomeIcon icon={faEnvelope} className="envelope"/>
              <h3>MIT</h3>
            </div>
            <div className='top__det' >
              <FontAwesomeIcon icon={faUser} className="user"/>
              <h3>Avatars</h3>
            </div>
          </div>
          <div className='activations'>
            <div className='act__1'>
            <div className='word'>
                <i></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore.
                </p>
                <i></i>
                </div>
                <div className='border__img'></div>
            </div>
            <div className='arrow-wrap'>
              <div className='line'></div>
              <div className='point'></div>
            </div>
            <div className='act__2'>
            <div className='word'>
                <i></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore.
                </p>
                <i></i>
                </div>
                <div className='border__img__2'></div>
            </div>
            <div className='arrow-wrap'>
              <div className='line_2'></div>
              <div className='point_2'></div>
            </div>
            <div className='act__3'>
              <div className='word'>
                <i></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Architecto iste aliquam illo id, iusto 
                    quasi distinctio inventore.
                </p>
                <i></i>
                </div>
                <div className='border__img__3'></div>
            </div>
          </div>
          <div className='act__btn'>
            <button>LEARN MORE</button>
          </div>
      </div>
    );
  }