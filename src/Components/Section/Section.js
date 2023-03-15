import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope ,faLocationDot,faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Section.css'
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <section>
            <div className='container pb-5 pt-5'>
                <div className='row text-white'>
                    <div className='col-md-3'>
                        <p className='mb-5 fw-bold font-size'>About</p>
    
                        <p>Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod apor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>Lorem ipsum dolor sit amet, conser adipisicing elit.</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='mb-5 fw-bold font-size'>Contact Us</p>
                        <div className='icone-flex '>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faPhone}>
                            </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'> +880 1617779444</p>
                        </div>
                        <div className='icone-flex '>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faEnvelope}>
                            </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'> fastservice.a@gmail.com</p>
                        </div>
                        <div className='icone-flex'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faLocationDot}>
                                </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'>Road#06,Block#A,<br></br>Section#10,Mirpur#1216</p>
                        </div>
                        <div className='icone-flex'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faGlobe}>
                                </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'>fastservice.com</p>
                        </div>
                        <div className='icone-flex'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faFacebookF}>
                                </FontAwesomeIcon>
                            </div>
                        <a href='https://www.facebook.com/www/fastservicebd'><p className='ms-2'>https://www.facebook.com/<br></br> www/fastservicebd</p></a>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <p className='mb-5 fw-bold font-size'>Some Important Links</p>
                        <div className='importan-link'>
                        <Link to={'/Home'}>Home</Link>
                        <Link to={'/About'}>About</Link>
                        <Link to={'/Service'}>Service</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <p className='mb-5 fw-bold font-size'>Fliker Photo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;