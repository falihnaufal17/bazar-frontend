import React from 'react';

import AddressList from '../AddressList';

const Address = (props) => {
    return(
        <>
            <div className="card-content shipping-content">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                        <label className="label">First Name</label>
                        <input type="text" className="form-control custom-form" placeholder="Steven" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                        <label className="label">Last Name</label>
                        <input type="text" className="form-control custom-form" placeholder="Gerrad" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label">Address</label>
                    <input type="text" className="form-control custom-form" placeholder="Address" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label className="label">Country</label>
                            <input type="text" className="form-control custom-form" name="country" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label className="label">State / Province</label>
                            <input type="text" className="form-control custom-form" name="province" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label className="label">City</label>
                            <input type="text" className="form-control custom-form" name="city" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label className="label">ZIP</label>
                            <input type="tel" className="form-control custom-form" placeholder="ZIP" name="zip_code" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label">Phone Number</label>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="17" fill="white" />
                                <rect width="28" height="9" fill="#FF0000" />
                                </svg>
                            </div>
                        </div>
                        <input type="tel" className="form-control custom-form" defaultValue={props.user.phone} placeholder="+62" name="phone" />
                    </div>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="termsAddress" />
                    <label className="custom-control-label" htmlFor="termsAddress">Save your preferred shipping address</label>
                </div>
                <div className="hline" />
                <p className="caution-text">The personal data that you have provided will be used by BAZAR to expedite your purchasing process. The telephone number you enter may be used to provide you with information regarding the shipping of your order. The data processors are: The personnel responsible for managing the Bazar service and the IT systems. Please consult the Privacy Policy for further information about your rights.</p>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-auto">
                        <button className="btn-cancel" type={'reset'}>Cancel</button>
                    </div>
                    <div className="col-12 col-md-auto">
                        <button className="btn-save">Save</button>
                    </div>
                </div>
            </div>
            <div className="card-content cc">
                <div className="label text-center font-weight-bold mb-5">YOUR SHIPPING ADDRESS</div>
                <div className="row">
                {
                    props.dataAddress.map((item, key) => {
                        return (
                            <div className="col-12 col-md-6" key={key}>
                                <AddressList id={key} {...props} address={item.address} zip_code={item.zip_code} state={item.state} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Address