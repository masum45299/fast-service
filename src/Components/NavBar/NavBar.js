import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';


import './NavBar.css'

const NavBar = () => {
    <FontAwesomeIcon icon="fa-brands " />
    return (
        <div>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <p className='Fast-service'>Fast Service</p>
                        </div>
                        <div className='col-md-8'>
                            <ul className='li-flex'>
                                <li>
                                <FontAwesomeIcon
                                icon={faTwitter} 
                                ></FontAwesomeIcon>
                                </li>
                                <li>
                                <FontAwesomeIcon
                                icon={faFacebookF} 
                                ></FontAwesomeIcon>
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