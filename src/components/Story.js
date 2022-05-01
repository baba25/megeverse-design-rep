import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Story.css';
export default function Story() {
    return (
      <div className="story">
          <div className='story__one'>
            <h1>The <span className='story__span'>Metaverse</span> Will Be Social</h1>
            <p className='sub'>Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Architecto iste aliquam illo id, iusto 
                quasi distinctio inventore.
            </p>
            <h2>Chapters</h2>
            <div className='drops'>
                <h3 className='far'>Testing <FontAwesomeIcon icon={faAngleRight} /></h3>
                <h3 className='far'>Social connection <FontAwesomeIcon icon={faAngleRight} className="arrow"/></h3>
                <h3 className='far'>Gaming <FontAwesomeIcon icon={faAngleRight} className="arrow"/></h3>
                <h3 className='far'>Gaming <FontAwesomeIcon icon={faAngleRight} className="arrow"/></h3>
                <h3 className='far'>Education <FontAwesomeIcon icon={faAngleRight} className="arrow"/></h3>
                <h3 className='far'>Welcome <FontAwesomeIcon icon={faAngleRight} className="arrow"/></h3>
            </div>
          </div>
          <div className='story__two'>
          <img src='images/build 3.svg' className='story__img'/>
          </div>
      </div>
    );
  }