import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import './Section.css'

const Section = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h4>Logo</h4>
                    <p>Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod apor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>Lorem ipsum dolor sit amet, conser adipisicing elit.</p>
                </div>
                <div className='col-md-3'>
                    <h4>Contact Us</h4>
                    <FontAwesomeIcon className='phone' icon={faPhoneVolume}>
                    </FontAwesomeIcon>
                </div>
                <div className='col-md-2'>
                    <h4>Some Important Links</h4>
                </div>
                <div className='col-md-4'>Fliker Photo</div>
            </div>
        </div>
    );
};

export default Section;