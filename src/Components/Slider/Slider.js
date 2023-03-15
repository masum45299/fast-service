import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import './Slider.css'
import service3 from './service3.jpg';
import service4 from './service4.jpg';
import service5 from './service5.jpg'


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block height w-100"
            src={service3}
            alt="First slide"
            />
            <Carousel.Caption>
            <h1>One Place All Service</h1>
            <h3>বাংলাদেশের একটি অন্যতম</h3>
            <h3>SERVICE PLATEFORM</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block height w-100"
            src={service4}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1>One Place All Service</h1>
            <h3>বাংলাদেশের একটি অন্যতম</h3>
            <h3>SERVICE PLATEFORM</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block height w-100"
            src={service5}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1>One Place All Service</h1>
            <h3>বাংলাদেশের একটি অন্যতম</h3>
            <h3>SERVICE PLATEFORM</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    
  );
}

export default Slider;