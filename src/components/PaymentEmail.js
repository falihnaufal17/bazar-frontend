import React from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';

const PaymentEmail = props => {
    return(
        <div className="card">
            <div className="row align-items-center justify-content-between">
                <div className="col">
                    <div className="title">EMAIL</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle pointer-event">modify <img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
            <div className="title">valentinorossi46@gmail.com</div>
        </div>
    )
}

export default PaymentEmail;