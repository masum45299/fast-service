import React, { useState } from 'react';
import './Card.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sc from './sc-servicing.jpg';
import acInstall from './Picsart3.jpg';
import asBasic from './AC-Basic-Service.png';
import acnewInstall from './AC-Installation-.png';
import acGas from './AC-Gas-Recharge.png';
import refrigerator from './Refrigerator-Fixing.png';
import jetwash from './Jet Wash.jpg';
import shifting from './AC-Shifting-.png';
import water from './AC-Watr-07.png';
import acrefil from './Picsart2.jpg';
import micro from './Micro.png';




const details1=
    {
        id : 1,
        name:"1.5 ton AC servicing",
        service:"Services, AC Fixing",
        price:"৳ 500.00",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",

      };
const details2=
    {
        id : 2,
        name:"AC Re Installation",
        service:"AC Installation",
        price:"৳ 2,795.00",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
 

      };
const details3=
    {
        id : 3,
        name:"AC Basic Service 1 To 1.5 Ton",
        service:"Services, AC Fixing, AC Basic Service",
        price:"৳ 500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details4=
    {
        id : 4,
        name:"AC Installation 1 To 1.5 Ton",
        service:"Services, AC Fixing, AC Installation",
        price:"৳ 1,500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details5=
    {
        id : 5,
        name:"AC Installation 2 To 3 Ton",
        service:"Services, AC Fixing, AC Installation",
        price:" ৳ 1,800.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details6=
    {
        id : 6,
        name:"AC Installation 4 To 5 Ton",
        service:"Services, AC Fixing, AC Installation",
        price:" ৳ 3,000.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details7=
    {
        id : 7,
        name:"Refrigerator Gas Refill",
        service:"Services, Fridge Fixing, Refrigerator Fixing, Refrigerator Fixing Service, Refrigerator Gas Refill",
        price:" ৳ 1,800.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details8=
    {
        id : 8,
        name:"Refrigerator Above 14.5 CFT",
        service:"Services, Fridge Fixing, Refrigerator Fixing, Refrigerator Fixing Service",
        price:"৳ 800.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details9=
    {
        id : 9,
        name:"Refrigerator Circut Repairing",
        service:"Services, Fridge Fixing, Refrigerator Fixing, Refrigerator Circut Repairing, Refrigerator Fixing Service",
        price:"৳ 1,500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details10=
    {
        id : 10,
        name:"Refrigerator Up To 14.5CFT",
        service:"Services, Fridge Fixing, Refrigerator Fixing, Refrigerator Fixing Service",
        price:"৳ 400.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details11=
    {
        id : 11,
        name:"Refrigerator Up To 14.5CFT",
        service:"Services, Fridge Fixing, Refrigerator Fixing, Refrigerator Fixing Service",
        price:"৳ 400.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details12=
    {
        id : 12,
        name:"AC Shifting 1 To 1.5 Ton",
        service:"Services, AC Fixing, AC Shifting",
        price:"৳ 2,500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details13=
    {
        id : 13,
        name:"AC Shifting 2 To 3 Ton",
        service:"Services, AC Fixing, AC Shifting",
        price:"৳ 3,000.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details14=
    {
        id : 14,
        name:"AC Shifting 4 To 5 Ton",
        service:"Services, AC Fixing, AC Shifting",
        price:"৳ 3,500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details15=
    {
        id : 15,
        name:"AC Uninstallation 1 To 2Ton",
        service:"Services, AC Fixing, AC uninstallation",
        price:"৳ 1,500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details16=
    {
        id : 16,
        name:"AC Uninstallation 3 To 5Ton",
        service:"Services, AC Fixing, AC uninstallation",
        price:" ৳ 2,000.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details17=
    {
        id : 17,
        name:"AC Water Drop Solution 1 To 2 Ton",
        service:"Services, AC Fixing, AC Water Leakage Solution",
        price:" ৳ 700.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details18=
    {
        id : 18,
        name:"AC Water Drop Solution 3 To 5 Ton",
        service:"Services, AC Fixing, AC Water Leakage Solution",
        price:" ৳ 1,000.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details19=
    {
        id : 19,
        name:"Gas Charging",
        service:"AC Gas Recharge",
        price:"৳ 1,795.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
      };
const details20=
    {
        id : 20,
        name:"Microwave Oven Fixing Service",
        service:"Services, Oven Fixing",
        price:"৳ 500.00",
        Categories: "AC Basic Service, AC Fixing, Services",
        extra1:"✅দক্ষ টেকনিশিয়ান",
        extra2:"✅7 দিনের সার্ভিস ওয়ারেন্টি",
        extra3:"✅বেস্ট কোয়ালিটি",
        extra4:"✅প্রতি সার্ভিসে ডিসকাউন্ট",
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
                                        <span>{selectedItem.extra1}</span><br></br>
                                        <span>{selectedItem.extra2}</span><br></br>
                                        <span>{selectedItem.extra3}</span><br></br>
                                        <span>{selectedItem.extra4}</span><br></br>
                                        
                                       
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
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acnewInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Installation 1 To 1.5 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Installation</p>
                            <p className="card-text"> <del>৳ 2,000.00</del>&nbsp;&nbsp; <span className='money'>৳ 1,500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details4)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acnewInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Installation 2 To 3 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Installation</p>
                            <p className="card-text"> <del>৳ 2,300.00</del>&nbsp;&nbsp; <span className='money'>৳ 1,800.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details5)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acnewInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Installation 4 To 5 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Installation</p>
                            <p className="card-text"> <del>৳ 3,600.00</del>&nbsp;&nbsp; <span className='money'>৳ 3,000.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details6)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acGas} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Refrigerator Gas Refill</h6>
                            <p className='service-text' >Refrigerator Gas Refill</p>
                            <p className="card-text"> <del>৳ 2,200.00</del>&nbsp;&nbsp; <span className='money'>৳ 1,800.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details7)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={refrigerator} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Refrigerator Above 14.5 CFT</h6>
                            <p className='service-text' >Refrigerator Fixing Service</p>
                            <p className="card-text"> <del>৳ 1,000.00</del>&nbsp;&nbsp; <span className='money'>৳ 800.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details8)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={refrigerator} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Refrigerator Circut Repairing</h6>
                            <p className='service-text' >Refrigerator Circut Repairing</p>
                            <p className="card-text"> <del>৳ 2,200.00</del>&nbsp;&nbsp; <span className='money'>৳ 1,500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details9)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={refrigerator} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Refrigerator Up To 14.5CFT</h6>
                            <p className='service-text' >Refrigerator Fixing Service</p>
                            <p className="card-text"> <del>৳ 600.00 </del>&nbsp;&nbsp; <span className='money'>৳ 400.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details10)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={jetwash} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Jet Wash</h6>
                            <p className='service-text' >AC Master Service</p>
                            <p className="card-text"> <del>৳ 1,500.00 </del>&nbsp;&nbsp; <span className='money'>৳ 999.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details11)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={shifting} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Shifting 1 To 1.5 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Shifting</p>
                            <p className="card-text"> <del>৳ 3,000.00  </del>&nbsp;&nbsp; <span className='money'>৳ 2,500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details12)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={shifting} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Shifting 2 To 3 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Shifting</p>
                            <p className="card-text"> <del>৳ 3,500.00 </del>&nbsp;&nbsp; <span className='money'>৳ 3,000.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details13)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={shifting} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Shifting 4 To 5 Ton</h6>
                            <p className='service-text' >Services, AC Fixing, AC Shifting</p>
                            <p className="card-text"> <del>৳ 4,000.00</del>&nbsp;&nbsp; <span className='money'>৳ 3,500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details14)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acnewInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Uninstallation 1 To 2Ton</h6>
                            <p className='service-text' >AC uninstallation</p>
                            <p className="card-text"> <del>৳ 1,800.00 </del>&nbsp;&nbsp; <span className='money'>৳ 1,500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details15)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acnewInstall} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Uninstallation 3 To 5Ton</h6>
                            <p className='service-text' >AC uninstallation</p>
                            <p className="card-text"> <del>৳ 2,200.00 </del>&nbsp;&nbsp; <span className='money'> ৳ 2,000.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details16)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={water} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Water Drop Solution 1 To 2 Ton</h6>
                            <p className='service-text' >AC Water Leakage Solution</p>
                            <p className="card-text"> <del>৳ 900.00 </del>&nbsp;&nbsp; <span className='money'>৳ 700.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details17)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={water} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">AC Water Drop Solution 3 To 5 Ton</h6>
                            <p className='service-text' >AC Water Leakage Solution</p>
                            <p className="card-text"> <del>৳ 1,200.00 </del>&nbsp;&nbsp; <span className='money'>৳ 1,000.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details18)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={acrefil} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Gas Charging</h6>
                            <p className='service-text' >AC Gas Recharge</p>
                            <p className="card-text"> <del>৳ 2,500.00 </del>&nbsp;&nbsp; <span className='money'>৳ 1,795.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details19)}>Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-box' >
                        <div className='p-2 pb-3'>
                            <img src={micro} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Microwave Oven Fixing Service</h6>
                            <p className='service-text' >Services, Oven Fixing</p>
                            <p className="card-text"> <del>৳ 700.00 </del>&nbsp;&nbsp; <span className='money'>৳ 500.00</span></p>
                            <button  className="btn-color" onClick={()=>click(details20)}>Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;