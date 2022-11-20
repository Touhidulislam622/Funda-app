import React from 'react';
import photos8 from '../../components/images/240_F.jpg'


const Contract = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contract us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home/ Contract</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-right">
                                    <h6>Contract us</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="">Full Name</label>
                                        <input type="text"  className ="form-control" placeholder='Enter full name'  />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="">Phone Number</label>
                                        <input type="text"  className ="form-control" placeholder='Enter your phone number'  />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="">Email</label>
                                        <input type="text"  className ="form-control" placeholder='Enter your email'  />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="">Message</label>
                                        <textarea row="3"  className ="form-control" placeholder='type your massage'  />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1' htmlFor="">Message</label>
                                        <button type = "button" className='btn btn-primary shadow w-100'>Send Message</button>
                                    </div>
                                </div>

                                <div className="col-md-6 border-start">
                                    <div className="main-heading">Address Information</div>
                                    <div className="underline"></div>
                                    <p>axxx , Bangladesh , Noakhali - 24xxx</p>
                                    <p>phone : +018xxxxxxx , Bangladesh </p>
                                    <p>email : email@domin.com</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contract;