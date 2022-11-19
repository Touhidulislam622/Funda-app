import React from 'react';
import Slider from '../include/Slider';
import { Link } from 'react-router-dom';
import Vmcv from './inc/Vmcv';
import service1 from "../../components/images/course_11.png";
import service2 from "../../components/images/images12.jfif";
import service3 from "../../components/images/images13.jfif";



function home() {
    return (
        <div>
            <Slider />

            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className='main-heading'>Our Company</h3>
                            <div className="underline mx-auto"> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident odit iusto quasi, exercitationem tenetur a error laudantium modi nam.</p>

                            <Link to="/about" className="btn btn-warning shadow">Read more</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* our vision  mission & values */}

            <Vmcv></Vmcv>

            {/* our services */}

            <section className='section border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5  text-center ">
                            <h3 className='main-heading'> our vision  mission & value</h3>
                            <div className="underline mx-auto"> </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service1} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6> Service 1</h6>
                                    <div className='underline'></div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus eveniet fugiat inventore modi perferendis ut ab voluptate amet! Odio, est?</p>
                                        <Link to = "/services" className = "btn btn-link"> Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service2} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6> Service 1</h6>
                                    <div className='underline'></div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus eveniet fugiat inventore modi perferendis ut ab voluptate amet! Odio, est?</p>
                                        <Link to = "/services" className = "btn btn-link"> Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={service3} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6> Service 1</h6>
                                    <div className='underline'></div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus eveniet fugiat inventore modi perferendis ut ab voluptate amet! Odio, est?</p>
                                        <Link to = "/services" className = "btn btn-link"> Read more </Link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>

        </div>
    );
}

export default home;