import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import './Section.css'

const Section = () => {
    return (
        <section>
            <div className='container pb-5 pt-5'>
                <div className='row text-white'>
                    <div className='col-md-3'>
                        <p className='mb-5 fw-bold font-size'>Logo</p>
                        <p>Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod apor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>Lorem ipsum dolor sit amet, conser adipisicing elit.</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='mb-5 fw-bold font-size'>Contact Us</p>
                        <div className='icone-flex mb-4'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faPhone}>
                            </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'> +880 1617779444</p>
                        </div>
                        <div className='icone-flex mb-4'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faEnvelope}>
                            </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'> +880 1617779444</p>
                        </div>
                        <div className='icone-flex'>
                            <div className='icon-bg'>
                                <FontAwesomeIcon className='phone' icon={faLocationDot}>
                                </FontAwesomeIcon>
                            </div>
                        <p className='ms-2'> +880 1617779444</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <p className='mb-5 fw-bold font-size'>Some Important Links</p>
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