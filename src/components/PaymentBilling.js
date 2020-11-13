import React, {Suspense, lazy} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
import mastercard from '../assets/icons/MASTERC.svg';
import visa from '../assets/icons/VISA.svg';
import jcb from '../assets/icons/JCB.svg';

const CreditCard = lazy(() => import('../components/CreditCard'));

const PaymentBilling = props => {
    return(
        <Suspense fallback={<div />}>
            <div className="card">
                <div className="row align-items-center justify-content-between mb-3">
                    <div className="col">
                        <div className="title mb-0">PAYMENT</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg order-3 order-md-3 order-lg-2">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={visa} alt="visa"/>
                            </div>
                            <div className="col-auto">
                                <img src={mastercard} alt="mastercard"/>
                            </div>
                            <div className="col-auto">
                                <img src={jcb} alt="jcb"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto order-2 order-md-2 order-lg-3">
                        <div className="subtitle pointer-event">modify <img src={Arrow} alt="arrow" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <CreditCard cardNumber="1234567890123456" cardHolder="VALENTINO ROSSI" cardExpires="11/20" />
                    </div>
                </div>
                <div className="title">BILLING ADDRESS</div>
                <div className="subtitle">Valentino Rossi</div>
                <div className="subtitle font-weight-normal">825 10th St NW, Washington, DC 20001, United States</div>
            </div>
        </Suspense>
    )
}

export default PaymentBilling;