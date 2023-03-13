import React from 'react';
import './About.css';
import Man from './Man.jpg'

const About = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center about'>ABOUT US <span></span></h1>
            <div className='row'>
                <div className='col-md-6'>
                    <img className=' w-100' src={Man} alt='Man' />
                </div>
            <div className='col-md-6 about-text'>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default About;