import React from 'react';

import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Section></Section>
            <Footer></Footer>

        </div>
    );
};

export default Home;