import React, { Suspense, lazy, useState } from 'react';

const CreditCard = lazy(() => import('../components/CreditCard'));

const EditCC = p => {
    const [isSame, setIsSame] = useState(false);
    return(
        <Suspense fallback={<div/>}>
            {
                p.data.map((item, key) => {
                    return(
                        <div>
                            <label className="for" htmlFor={item.id} key={key}>
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id={item.id} name="creditCard" value={item.id} className="custom-control-input" />
                                            <label className="custom-control-label label" htmlFor={item.id}></label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-12 col-md-9">
                                                <CreditCard cardNumber={item.cardNumber} cardHolder={item.cardHolder} cardExpires={item.cardExpires} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )
                })
            }
            <a href="/profile/my-profile" className="btn-add-address">+ ADD YOUR CREDIT CARD</a>
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
            <div className="subtitle">
                The personal information provided by you when purchasing items will be collected by Bazar in order to process your order and for other steps necessary to it, including operations related to administrative and fiscal obligations.
                The telephone number you have provided may be used to communicate information related to the deliveries of your orders. The parties appointed for collecting your information are the staff responsible for managing the site and the services related to it, marketing, information systems and administration.
                Consult our Privacy Policy for more information about your rights.
                Consult our General Terms and Conditions of Sale.
            </div>
        </Suspense>
    )
}

export default EditCC;