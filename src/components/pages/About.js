import React from 'react';

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

            <section className = "section bg-light border-bottom">
                <div className = "container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sint quia quod laudantium eius maiores maxime sit eos error. Delectus, maiores.</p>
                </div>
            </section>
        </div>
    );
};

export default About;