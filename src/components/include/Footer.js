import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <section className='section footer bg-dark text-white '>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company information</h6>
                    <hr />
                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sequi quae perspiciatis quibusdam voluptate quia rem, quisquam labore suscipit ducimus consequatur incidunt enim culpa id doloremque corporis aspernatur quod rerum.</p>
                </div>

                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <div><Link to = "/">Home</Link></div>
                    <div><Link to = "/">About</Link></div>
                    <div><Link to = "/">Contracat</Link></div>
                    <div><Link to = "/">Blog</Link></div>
                </div>

                <div className="col-md-4">
                    <h6>Contract Infornation</h6>
                    <hr />
                    <div><p className="text-white mb-1">01#########</p></div>
                    <div><p className="text-white mb-1">#35B Dhaka Banani </p></div>
                    <div><p className="text-white mb-1">01#########</p></div>
                    <div><p className="text-white mb-1">email@domin.com</p></div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Footer;