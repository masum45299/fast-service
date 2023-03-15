import React from 'react';
import logo from './logo.png'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";


import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar className='NavBar align-items-center nav-height' expand="lg">
            <Container>
            <Navbar.Brand as={Link} to='/Home'>Fast Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
            <Nav>
                
                <NavLink as={Link} to='/'
                ><FontAwesomeIcon
                icon={faFacebookF} 
                ></FontAwesomeIcon></NavLink>

                
                <NavLink as={Link} to='/'
                ><FontAwesomeIcon
                icon={faInstagram} 
                ></FontAwesomeIcon></NavLink>


                <NavLink as={Link} to='/'
                ><FontAwesomeIcon
                icon={faTwitter} 
                ></FontAwesomeIcon></NavLink>

                
                <NavLink as={Link} to='/'
                ><FontAwesomeIcon
                icon={faLinkedin} 
                ></FontAwesomeIcon></NavLink>


            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>





            <Navbar className='NavBar align-items-center' expand="lg">
            <Container>
            <Navbar.Brand as={Link} to='/Home'><img src={logo} width='70px' height='70px' alt='logo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
            <Nav>
                
                <NavLink as={Link} to='/Home'
                className={({ isActive}) =>
                 isActive ? "isActive" : ""
                }
                >Home</NavLink>

                
                <NavLink  as={Link} to='/About'
                className={({ isActive }) =>
                 isActive ? "isActive" : ""
                }
                >About</NavLink>

                
                <NavLink  as={Link} to='/Service'
                className={({ isActive }) =>
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