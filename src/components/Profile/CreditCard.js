import React from 'react';
import mastercard from '../../assets/icons/MASTERC.svg';
import visa from '../../assets/icons/VISA.svg';
import jcb from '../../assets/icons/JCB.svg';

import CCList from '../CCList';

const CreditCard = (props) => {
    return(
        <>
            <div className="card-content">
                <div className="row align-items-center justify-content-between mb-4">
                  <div className="col-12 col-md">
                    <div className="label">ADD CREDIT CARD</div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="row">
                      <div className="col-auto">
                        <img src={visa} alt="visa" />
                      </div>
                      <div className="col-auto">
                        <img src={mastercard} alt="mastercard" />
                      </div>
                      <div className="col-auto">
                        <img src={jcb} alt="jcb" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="label">First name</label>
                      <input type="text" className="form-control custom-form" placeholder="Steven" name="firstname" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label className="label">Last name</label>
                      <input type="text" className="form-control custom-form" placeholder="Gerrad" name="lastname" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="label">Card Number</label>
                      <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <img src={mastercard} alt="mastercard" />
                          </div>
                        </div>
                        <input type="text" className="form-control custom-form" placeholder="xxxx - xxxx - xxxx - xxxx" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <label className="label">Expiration Date</label>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <input type="tel" name="mm" className="form-control custom-form" placeholder="MM" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <div></div>
                          <input type="tel" name="yy" className="form-control custom-form" placeholder="YY" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="label">Address</label>
                      <input type="text" className="form-control custom-form" placeholder="Address" />
                    </div>
                  </div>
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

                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="terms" />
                  <label className="custom-control-label" htmlFor="terms">Save as preferred card.</label>
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
                <div className="label text-center font-weight-bold mb-5">YOUR CREDIT CARD</div>
                <div className="row">
                  {
                    props.dataCard.map((item, key) => {
                      return (
                        <div className="col-12 col-md-6" key={key}>
                          <CCList cardHolder={item.cardHolder} cardNumber={item.cardNumber} cardExpires={item.cardExpires} />
                        </div>)
                    })
                  }
                </div>
              </div>
        </>
    )
}

export default CreditCard;