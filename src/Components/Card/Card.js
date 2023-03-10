import React from 'react';
import './Card.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pi7.jpg';
import pic8 from './pic8.jpg'

const Card = () => {
    return (
        <div className='container mb-5 '>
            <h1 className='text-center service'>Our service <span></span></h1>


            <div className='Card-flex'>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className=" btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic5} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic6} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic7} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='card-box' >
                    <div className='p-2'>
                        <img src={pic8} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn-color">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;