import React, { useState } from 'react';
import './Card.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sc from './sc-servicing.jpg';
import acInstall from './Picsart3.jpg';
import asBasic from './AC-Basic-Service.png';




const details1=
    {
        id : 1,
        name:"1.5 ton AC servicing",
        service:"Services, AC Fixing",
        price:"৳ 500.00",
      };
const details2=
    {
        id : 2,
        name:"AC Re Installation",
        service:"AC Installation",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        price:"৳ 2,795.00",

      };
const details3=
    {
        id : 3,
        name:"AC Basic Service 1 To 1.5 Ton",
        service:"Services, AC Fixing, AC Basic Service",
        price:"৳ 500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
      };


const Card = () => {


    const [selectedItem, setSelectedItem] = useState({});
    const [showMenu, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(selectedItem.name)
    const click=(id)=>{
        setSelectedItem(id)
        handleShow()
    }

    return (
        <div>
            <div className='container mb-5  '>
                <h1 className='text-center service'>Our service <span></span></h1>

                <Offcanvas show={showMenu} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Details</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                    <div>
                                        <h4>{selectedItem.name}</h4>
                                        <p className='service-text'>{selectedItem.service}</p>
                                        <p className='money card-text'>{selectedItem.price}</p>
                                        
                                       
                                    </div>
                            </Offcanvas.Body>
                </Offcanvas>


                <div className='Card-flex '>

                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={sc} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">1.5 ton AC servicing</h6>
                            <p className='service-text' >Services, AC Fixing</p>
                            <p className="card-text"> <del>৳ 800.00</del>&nbsp;&nbsp; <span className='money'>৳ 500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details1)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Re Installation</h6>
                            <p className='service-text' >AC Installation</p>
                            <p className="card-text"> <del>৳ 4,000.00</del>&nbsp;&nbsp; <span className='money'>৳ 2,795.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details2)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={asBasic} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Basic Service 1 To 1.5 Ton</h6>
                            <p className='service-text' >Services, AC Fixing</p>
                            <p className="card-text"> <del>৳ 700.00</del>&nbsp;&nbsp; <span className='money'>৳ 500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details3)}>Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;