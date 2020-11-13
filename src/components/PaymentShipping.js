import React from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';

const PaymentShipping = props => {
    return(
        <div className="card">
            <div className="row align-items-center justify-content-between mb-3">
                <div className="col">
                    <div className="title mb-0">SHIPPING</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle pointer-event">modify <img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
            <div className="card card-shipping">
                <div className="row">
                    <div className="col">
                        <div className="subtitle">Valentino Rossi</div>
                    </div>
                    <div className="col-auto">
                        <div className="subtitle">Shipping Address</div>
                    </div>
                </div>
                <div className="hline-black" />
                <div className="subtitle font-weight-normal">825 10th St NW, Washington, DC 20001, United States</div>
            </div>
            <div className="title">DELIVERY</div>
            <div className="title font-weight-normal mb-1">Postal</div>
            <div className="row">
                <div className="col-auto">
                    <div className="title font-weight-normal mb-1">Delivery in 4-6 weeks</div>
                </div>
                <div className="col">
                    <div className="title font-weight-normal mb-1">(US) $9.70</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentShipping;