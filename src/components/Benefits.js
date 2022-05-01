import React from 'react';
import './Benefits.css';

export default function Benefits() {
    return(
        <div className='benefits'>
            <div className='side__one'>
                <div className='flex__1'>
                    <div className='img__1'>
                        <img src='images/benefits img 1.svg' />
                        <div className='img__text1'>
                            <h3>Virtual Reality</h3>
                            <p>Virual realiy world let you explore new worlds and
                                shared experiences, With Quest even if you're far part
                            </p>
                        </div>
                    </div>
                    <div className='img__2'>
                        <img src='images/benefits img 2.svg' />
                    </div>
                </div>
                <div className='flex__2'>
                    <div className='img__3'>
                        <img src='images/benefits img 3.svg' />
                    </div>
                    <div className='img__4'>
                        <img src='images/benefits img 4.svg' />
                        <div className='img__text4'>
                            <h3>Argumented Reality</h3>
                            <p>Virual realiy world let you explore new worlds and
                                shared experiences, With Quest even if you're far part
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='side__two'>
                <div className='ben__title'>
                <h1>The Benefits of Our <span className='ben__span'>MVR</span> That We Have So Far Offered.</h1>
                <p>
                    The Metaverse is the next evolution of social connection.
                    Our Company vision is to help bring the Metaverse.
                </p>
                <button className='ben__btn'>GET IT NOW</button>
                </div>
            </div>
        </div>
    );
}