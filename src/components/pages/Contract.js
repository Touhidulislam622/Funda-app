import React from 'react';
import photos8 from '../../components/images/240_F.jpg'


const Contract = () => {
    return (
        <div className="contract-pg">
            <div className="row">
            <div className="col-md-6">
                <img src={photos8} alt="contract" className="img-6" />
                <hr />
            </div>
            <div className="col-md-6">
                <img src={photos8} alt="img-4" />
            </div>
            </div>
        </div>
    );
};

export default Contract;