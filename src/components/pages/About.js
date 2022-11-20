import React from 'react';
import Vmcv from './inc/Vmcv';


const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className = "float-end">Home/ About</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className = "section border-bottom">
                <div className = "container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sint quia quod laudantium eius maiores maxime sit eos error. Delectus, maiores.</p>
                </div>
            </section>

            {/* our vision  mission & values */}

            <Vmcv></Vmcv>

            {/* our services */}

        </div>
        
            
    );
};

export default About;