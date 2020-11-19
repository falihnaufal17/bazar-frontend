import React, {lazy, Suspense, useRef, useState} from 'react';
import mastercard from '../assets/icons/MASTERC.svg';
import visa from '../assets/icons/VISA.svg';
import jcb from '../assets/icons/JCB.svg';
import eye from '../assets/icons/EYE.svg';
import '../assets/styles/profile.scss'

const CCList = lazy(() => import('../components/CCList'));
const AddressList = lazy(() => import('../components/AddressList'));

const Profile = (props) => {
  let formEdit = useRef(null);
  let cPass = useRef(null);
  const [cp, isCp] = useState(false)
  const [isCurr, setIsCurr] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  let dataCard = [
    {
      id: 1,
      cardNumber: '1234567891234567',
      cardHolder: 'VALENTINO ROSSI',
      cardExpires: '17/20'
    },
    {
      id: 2,
      cardNumber: '9839212349992190',
      cardHolder: 'MARIA FERDINAND',
      cardExpires: '17/20'
    },
    {
      id: 3,
      cardNumber: '8942345000028932',
      cardHolder: 'JOHN DOE',
      cardExpires: '17/20'
    },
  ]

  let dataAddress = [
    {
      id: 1,
      address: '425 10th St NW, Washington',
      zip_code: 'DC 20001',
      state: 'United State'
    },
    {
      id: 2,
      address: '325 9th St NW, Calfornia',
      zip_code: 'CF 40035',
      state: 'United State'
    },
    {
      id: 3,
      address: '225 8th St NW, New York',
      zip_code: 'NY 90221',
      state: 'United State'
    },
  ]
  const openModify = () => {
    formEdit.current.classList.add('d-block')
    formEdit.current.classList.remove('d-none')
  }
  const closeModify = () =>{
    formEdit.current.classList.add('d-none')
    formEdit.current.classList.remove('d-block')  
  }
     return (
       <Suspense fallback={<div/>}>
         <div id="section-profile">
          <div className="box">
            <div className="dropdown">
              <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <h1>MY PROFILE</h1>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownProfile">
                <a className="dropdown-item" href="/profile/my-size">MY SIZE</a>
                <a class="dropdown-item" href="#">MY ORDERS</a>
                <a class="dropdown-item" href="/profile/my-wishlist">MY WISHLIST</a>
                <a class="dropdown-item" href="/profile/my-profile">MY PROFILE</a>
                <a class="dropdown-item" href="/customer-care">CUSTOMER CARE</a>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="nav nav-pills vertical-xs" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">YOUR PROFILE</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-creditcard-tab" data-toggle="pill" href="#pills-creditcard" role="tab" aria-controls="pills-creditcard" aria-selected="false">CREDIT CARD</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-address-tab" data-toggle="pill" href="#pills-address" role="tab" aria-controls="pills-address" aria-selected="false">ADDRESS</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="card-content card-profile">
                  <div className="fullname">STEVEN GERRAD</div>
                  <div className="hline"></div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md">
                      <div className="field mb-3">Gender</div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="value mb-3">Man</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md">
                      <div className="field mb-3">Email</div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="value mb-3">stevengerrad@gmail.com</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md">
                      <div className="field mb-3">Birth of date</div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="value mb-3">12/12/97</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md">
                      <div className="field mb-3">Phone Number</div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="value mb-3">+62 812345678</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md">
                      <div className="field mb-3">Password</div>
                    </div>
                    <div className="col text-right password">
                      <div><input type="password" className="value mb-3 password" id="d-password" value="password" disabled/></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn-modify" onClick={() => openModify()}>MODIFY</button>
                  </div>
                </div>
                <div className="card-content d-none" ref={formEdit} id="form-edit">
                  <div className="fullname text-left">YOUR DETAIL</div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="label">First Name</label>
                        <input type="text" className="form-control custom-form" placeholder="Steven"/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="label">Last Name</label>
                        <input type="text" className="form-control custom-form" placeholder="Gerrad"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Gender </label>
                    <div className="row">
                      <div className="col-auto">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="male" name="gender" value="male" className="custom-control-input" />
                          <label className="custom-control-label label" htmlFor="male"> Male</label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="female" name="gender" value="female" className="custom-control-input" />
                          <label className="custom-control-label label" htmlFor="female"> Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Date of Birth</label>
                    <input type="text" className="form-control custom-form" placeholder="DD/MM/YY"/>
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
                    <div ref={cPass}>
                      <div className="fullname text-left">SIGN IN DETAILS</div>
                      <div className="form-group">
                        <label className="label">Email</label>
                        <input type="email" className="form-control custom-form" placeholder="example@gmail.com"/>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cp" checked={cp} onChange={()=>isCp(!cp)} />
                        <label className="custom-control-label" htmlFor="cp">Change Password</label>
                      </div>
                    {
                      cp ? (
                        <div>
                          <div className="form-group">
                            <label className="label">Current Password</label>
                            <div className="input-group mb-2">
                              <input type={isCurr ? 'text' : 'password'} className="form-control secret custom-form" placeholder="password"/>
                              <div className="input-group-prepend">
                                <a href="#" className="input-group-text secret-group" onClick={(e) => {e.preventDefault(); setIsCurr(!isCurr)}}>
                                  <img src={eye} alt="eye"/>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-md">
                              <div className="form-group">
                                <label className="label">New Password</label>
                                <div className="input-group mb-2">
                                  <input type={isNew ? "text" : "password"} className="form-control secret custom-form" placeholder="password"/>
                                  <div className="input-group-prepend">
                                    <a href="#" className="input-group-text secret-group" onClick={(e) => {e.preventDefault(); setIsNew(!isNew)}}>
                                      <img src={eye} alt="eye"/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md">
                              <div className="form-group">
                                <label className="label">Confirm New Password</label>
                                <div className="input-group mb-2">
                                  <input type={isConfirm ? "text" : "password"} className="form-control secret custom-form" placeholder="password"/>
                                  <div className="input-group-prepend">
                                    <a href="#" className="input-group-text secret-group" onClick={(e) => {e.preventDefault(); setIsConfirm(!isConfirm)}}>
                                      <img src={eye} alt="eye"/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (<div/>)
                    }
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="pp" />
                    <label className="custom-control-label" htmlFor="pp">I would like to receive the newsletter with the latest news and promotions. Consult our Privacy Policy for further information.</label>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-auto">
                      <button className="btn-cancel" type={'reset'} onClick={() => closeModify()}>Cancel</button>
                    </div>
                    <div className="col-12 col-md-auto">
                      <button className="btn-save">Save</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-creditcard" role="tabpanel" aria-labelledby="pills-creditcard-tab">
                <div className="card-content">
                  <div className="row align-items-center justify-content-between mb-4">
                    <div className="col-12 col-md">
                      <div className="label">ADD CREDIT CARD</div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="row">
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
                    <div className="form-group">
                      <label className="label">Fullname</label>
                      <input type="text" className="form-control custom-form" placeholder="Steven Gerrad"/>
                    </div>
                    <div className="form-group">
                      <label className="label">Card Number</label>
                      <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <img src={mastercard} alt="mastercard"/>
                          </div>
                        </div>
                        <input type="text" className="form-control custom-form" placeholder="xxxx - xxxx - xxxx - xxxx"/>
                      </div>
                    </div>
                    <div className="row">
                      {/* <div className="col">
                        <div className="form-group">
                          <label className="label">CVV</label>
                          <div className="input-group mb-2 mr-sm-2">
                            <input type="password" className="form-control custom-form" placeholder="cvv"/>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <img src={eye} alt="eye"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col">
                        <div className="form-group">
                          <label className="label">Expiration Date</label>
                          <input type="text" className="form-control custom-form" placeholder="MM/YY"/>
                        </div>
                      </div>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="terms" />
                      <label className="custom-control-label" htmlFor="terms">I would like to receive the newsletter with the latest news and promotions. Consult our Privacy Policy for further information.</label>
                    </div>
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
                        dataCard.map((item, key)=>{
                          return(
                            <div className="col-12 col-md-6" key={key}>
                              <CCList cardHolder={item.cardHolder} cardNumber={item.cardNumber} cardExpires={item.cardExpires} />
                            </div>)
                        })
                      }
                    </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
                <div className="card-content">
                    <div className="form-group">
                      <label className="label">Address</label>
                      <textarea className="form-control custom-form" placeholder="Your Address" rows={5}></textarea>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label className="label">ZIP Code</label>
                            <input type="password" className="form-control custom-form" placeholder=""/>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label className="label">State</label>
                          <select className="form-control custom-form">
                            <option>Indonesia</option>
                            <option>United State</option>
                            <option>Egypt</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="hline"/>
                    <div className="row mb-3">
                      <div className="col-12 col-md">
                        <div className="label">BILLING ADDRESS</div>
                      </div>
                      <div className="col-12 col-md-auto">
                        <div className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" id="sameAddress" />
                          <label className="custom-control-label sameAddress" htmlFor="sameAddress">Billing Address is the same as the shipping address</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label">Address</label>
                      <textarea className="form-control custom-form" placeholder="Your Address" rows={5}></textarea>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label className="label">ZIP Code</label>
                            <input type="password" className="form-control custom-form" placeholder=""/>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label className="label">State</label>
                          <select className="form-control custom-form">
                            <option>Indonesia</option>
                            <option>United State</option>
                            <option>Egypt</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="termsAddress" />
                      <label className="custom-control-label" htmlFor="termsAddress">I would like to receive the newsletter with the latest news and promotions. Consult our Privacy Policy for further information.</label>
                    </div>
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
                        dataAddress.map((item, key)=>{
                          return(
                            <div className="col-12 col-md-6" key={key}>
                              <AddressList id={key} address={item.address} zip_code={item.zip_code} state={item.state} />
                            </div>)
                        })
                      }
                    </div>
                  </div>
              </div>
            </div>
          </div>
         </div>
    </Suspense>
  )
}  
 export default Profile;