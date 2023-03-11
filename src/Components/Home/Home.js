import React from 'react';
import About from '../About/About';
import './Home.css'

const Home = () => {
    return (
        <div>
            <header>
                    <div className='container'>
                       <div className='row'> 
                            <div className='col-md-6'>
                               
                            </div>
                            <div className='col-md-6'>
                                <div className='header-text'>
                                    <h1>Hi! We Are</h1>
                                    <h1>Creative Designer</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur   adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>
                       </div>
                    </div>
            </header>
            <About></About>
            

        </div>
    );
};

export default Home;