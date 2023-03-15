import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";


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
            
            <Navbar className='NavBar align-items-center' expand="lg">
            <Container>
            <Navbar.Brand as={Link} to='/Home'>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
            <Nav>
                
                <NavLink as={Link} to='/Home'
                className={({ isActive}) =>
                 isActive ? "isActive" : ""
                }
                >Home</NavLink>

                
                <NavLink  as={Link} to='/About'
                className={({ isActive, isPending }) =>
                 isActive ? "isActive" : ""
                }
                >About</NavLink>

                
                <NavLink  as={Link} to='/Service'
                className={({ isActive, isPending }) =>
                isActive ? "isActive" : ""
                }
                >Service</NavLink>


            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;