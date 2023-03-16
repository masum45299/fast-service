import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope ,faLocationDot,faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Section.css'
import { Link } from 'react-router-dom';
import section1 from './section1.jpg';
import section2 from './section2.jpg';
import section3 from './section3.jpg';
import section4 from './section4.jpg';
import section5 from './section5.jpg';
import section6 from './section6.jpg';


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
                        <div className='row'>
                            <div className='col-md-6'>
                                <img className='section-img' src={section1} alt='section1'></img>
                            </div>
                            <div className='col-md-6'>
                                <img className='section-img' src={section2} alt='section2'></img>
                            </div>
                            <div className='col-md-6'>
                                <img className='section-img' src={section3} alt='section3'></img>
                            </div>
                            <div className='col-md-6'>
                                <img className='section-img' src={section3} alt='section3'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;