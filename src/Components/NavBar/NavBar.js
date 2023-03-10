import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons';


import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className='nav-height'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <p className='Fast-service'>Fast Service</p>
                        </div>
                        <div className='col-md-8 icon-right'>
                            <ul className='li-flex'>
                                <li>
                                <a href='/'><FontAwesomeIcon
                                icon={faTwitter} 
                                ></FontAwesomeIcon></a>
                                </li>
                                <li>
                                <a href='/'><FontAwesomeIcon
                                icon={faFacebookF} 
                                ></FontAwesomeIcon></a>
                                </li>
                                <li>
                                <a href='/'><FontAwesomeIcon
                                icon={faLinkedin} 
                                ></FontAwesomeIcon></a>
                                </li>
                                <li>
                                <a href='/'><FontAwesomeIcon
                                icon={faInstagram} 
                                ></FontAwesomeIcon></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
               
            </nav>
            <Navbar className='NavBar' expand="lg">
            <Container>
            <Navbar.Brand as={Link} to='/Home'>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
            <Nav>
                <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/About'>About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;