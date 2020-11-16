import React, {Suspense, lazy, useState} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
import IconCreditCard from '../assets/icons/ICON CREDIT CARD.svg';
import mastercard from '../assets/icons/MASTERC.svg';
import visa from '../assets/icons/VISA.svg';
import jcb from '../assets/icons/JCB.svg';

const CreditCard = lazy(() => import('./CreditCard'));
const EditCC = lazy(() => import('./EditCC'));

const PaymentBillingGuest = props => {
    const [isModify, setIsModify] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSame, setIsSame] = useState(false);

    let dataCC = [
        {
            id: 1,
            cardNumber: '1234567890123456',
            cardHolder: "VALENTINO ROSSI",
            cardExpires: '11/20'
        },
        {
            id: 2,
            cardNumber: '1234567890123456',
            cardHolder: "VALENTINO ROSSI",
            cardExpires: '11/20'
        },
        {
            id: 3,
            cardNumber: '1234567890123456',
            cardHolder: "VALENTINO ROSSI",
            cardExpires: '11/20'
        },
    ]
    return(
        <Suspense fallback={<div />}>
            <div className="card">
                {
                    isOpen ?
                    (
                        <>
                            <div className="row align-items-center justify-content-between mb-3">
                                <div className="col-auto">
                                    <div className="title mb-0">PAYMENT</div>
                                </div>
                                <div className="col-auto col-md-auto col-lg-auto order-3 order-md-3 order-lg-2">
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
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="subtitle">First name</label>
                                    <div className="form-group">
                                        <input type="text" name="firstname" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="subtitle">Last Name</label>
                                    <div className="form-group">
                                        <input type="text" name="lastname" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className="subtitle">Card Number</label>
                                        <div className="input-group mb-2 mr-sm-2">
                                            <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <img src={mastercard} alt="mastercard"/>
                                            </div>
                                            </div>
                                            <input type="text" className="form-control custom-form" name="card_number" placeholder="xxxx - xxxx - xxxx - xxxx"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="subtitle">Expiration date</label>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="tel" name="dd" className="form-control" placeholder="DD" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="tel" name="yy" className="form-control" placeholder="YY" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className="subtitle">Address</label>
                            <div className="form-group">
                                <input type="text" name="address" className="form-control" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="subtitle">Country</label>
                                    <div className="form-group">
                                        <select className="form-control" name="state">
                                            <option value="-">-</option>
                                            <option value="indonesia">Indonesia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="subtitle">State / Province</label>
                                    <div className="form-group">
                                        <select className="form-control" name="province">
                                            <option value="jawa-barat">Jawa Barat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="subtitle">City</label>
                                    <div className="form-group">
                                        <select className="form-control" name="city">
                                            <option value="bandung">Bandung</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="subtitle">ZIP Code</label>
                                    <input type="tel" className="form-control" name="postal_code" />
                                </div>
                            </div>
                            <div className="hline mt-5 mb-5" />
                            <div className="title">BILLING ADDRESS</div>
                            <div className="custom-control custom-checkbox form-group">
                                <input type="checkbox" className="custom-control-input" id="billing" value={isSame} onChange={(e)=> setIsSame(!isSame)} />
                                <label className="custom-control-label" htmlFor="billing">My billing address is the same with my shipping address</label>
                            </div>
                            {
                                isSame ?
                                (
                                    <div/>
                                ) :
                                (
                                    <>
                                        <div className="row">
                                            <div className="col">
                                                <label className="subtitle">First name</label>
                                                <div className="form-group">
                                                    <input type="text" name="firstname" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label className="subtitle">Last Name</label>
                                                <div className="form-group">
                                                    <input type="text" name="lastname" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <label className="subtitle">Address</label>
                                        <div className="form-group">
                                            <input type="text" name="lastname" className="form-control" />
                                        </div>
                                        <label className="subtitle">Address</label>
                                        <input type="text" className="form-control" name="address" />
                                        <div className="row">
                                            <div className="col">
                                                <label className="subtitle">Country</label>
                                                <div className="form-group">
                                                    <select className="form-control" name="country">
                                                        <option value="indonesia">Indonesia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label className="subtitle">State / Province</label>
                                                <div className="form-group">
                                                    <select className="form-control" name="province">
                                                        <option value="jawa-barat">Jawa Barat</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label className="subtitle">City</label>
                                                <div className="form-group">
                                                    <select className="form-control" name="city">
                                                        <option value="bandung">Bandung</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label className="subtitle">ZIP Code</label>
                                                <div className="form-group">
                                                    <select className="form-control" name="country">
                                                        <option value="14045">14045</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Phone Number</label>
                                            <div className="input-group mb-2 mr-sm-2">
                                                <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="28" height="17" fill="white"/>
                                                    <rect width="28" height="9" fill="#FF0000"/>
                                                    </svg>
                                                </div>
                                                </div>
                                                <input type="tel" className="form-control custom-form" placeholder="+62"/>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            <div className="subtitle mb-3">
                                The personal information provided by you when purchasing items will be collected by Bazar in order to process your order and for other steps necessary to it, including operations related to administrative and fiscal obligations.
                                The telephone number you have provided may be used to communicate information related to the deliveries of your orders. The parties appointed for collecting your information are the staff responsible for managing the site and the services related to it, marketing, information systems and administration.
                                Consult our Privacy Policy for more information about your rights.
                                Consult our General Terms and Conditions of Sale.
                            </div>
                            <div className="text-right">
                                <a href="#" className="btn-primary">ADD AS CREDIT CARD</a>
                            </div>
                        </>
                    ):
                    (
                        <div className="text-info pointer-event" onClick={()=>setIsOpen(!isOpen)}><img src={IconCreditCard} alt="icon-credit-card" /> CREDIT CARD</div>
                    )
                }
                
                
            </div>
        </Suspense>
    )
}

export default PaymentBillingGuest;