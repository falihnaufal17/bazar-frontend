import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import eye from '../assets/icons/EYE.svg';
import '../assets/styles/profile.scss';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/Users'
import { handleChange } from '../helpers';
import axios from 'axios';
import CreditCard from '../components/Profile/CreditCard';
import Address from '../components/Profile/Address';

const Profile = (props) => {
  let formEdit = useRef(null);
  let cPass = useRef(null);
  let formTag = useRef(null);

  const [cp, isCp] = useState(false)
  const [isCurr, setIsCurr] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [data, setData] = useState({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    gender: props.user.gender,
    date_of_birth: props.user.date_of_birth,
    phone: props.user.phone,
    email: props.user.email
  })

  useEffect(() => {
    const getProfile = () => {
      props.fetchProfile(props.apiUrl, Number(JSON.parse(localStorage.getItem('profile')).id))
    }

    getProfile();
  },[])

  useEffect(() => {
    setData({
      first_name: props.user.first_name,
      last_name: props.user.last_name,
      gender: props.user.gender,
      date_of_birth: props.user.date_of_birth,
      phone: props.user.phone,
      email: props.user.email
    })
  }, [props.user])

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
  const closeModify = () => {
    formEdit.current.classList.add('d-none')
    formEdit.current.classList.remove('d-block')
  }
  const submitUpdate = (e) => {
    e.preventDefault()
    axios.patch(`${props.apiUrl}/user/update/${props.user.id}`, data)
      .then((res) => {
        alert(res.data.message);
        props.fetchProfile(props.apiUrl, Number(JSON.parse(localStorage.getItem('profile')).id))
      })
      .catch(err => {
        alert(err.response.message);
        throw err;
      })
  }

  return (
    <Suspense fallback={<div />}>
      <div id="section-profile">
        <div className="box">
          <div className="dropdown">
            <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <h1>MY PROFILE</h1>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownProfile">
              <a className="dropdown-item" href="/profile/my-size">MY SIZE</a>
              <a class="dropdown-item" href="/profile/my-order">MY ORDERS</a>
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
                <div className="fullname">{props.user.first_name} {props.user.last_name}</div>
                <div className="hline"></div>
                <div className="row align-items-center justify-content-between">
                  <div className="col-12 col-md">
                    <div className="field mb-3">Gender</div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="value mb-3">{props.user.gender}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md">
                    <div className="field mb-3">Email</div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="value mb-3">{props.user.email}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md">
                    <div className="field mb-3">Birth of date</div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="value mb-3">{props.user.date_of_birth}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md">
                    <div className="field mb-3">Phone Number</div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="value mb-3">{props.user.phone}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md">
                    <div className="field mb-3">Password</div>
                  </div>
                  <div className="col text-right password">
                    <div><input type="password" className="value mb-3 password" id="d-password" defaultValue="password" disabled /></div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn-modify" onClick={() => openModify()}>MODIFY</button>
                </div>
              </div>
              <div className="card-content d-none" ref={formEdit} id="form-edit">
                <div className="fullname text-left">YOUR DETAIL</div>
                <form id="form-edit-profile" method="POST" onSubmit={(e) => submitUpdate(e)}>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="label">First Name</label>
                        <input type="text" name="first_name" onChange={(e)=>handleChange(e, data, setData)} defaultValue={data.first_name} className="form-control custom-form" placeholder="Steven" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="label">Last Name</label>
                        <input type="text" name="last_name" onChange={(e)=>handleChange(e, data, setData)} defaultValue={data.last_name} className="form-control custom-form" placeholder="Gerrad" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Gender </label>
                    <div className="row">
                      <div className="col-auto">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="male" name="gender" onChange={(e) => handleChange(e, data, setData)} defaultValue="male" className="custom-control-input" checked={data.gender == "male" ? true: false} />
                          <label className="custom-control-label label" htmlFor="male"> Male</label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="female" name="gender" onChange={(e) => handleChange(e, data, setData)} defaultValue="female" className="custom-control-input" checked={data.gender == "female" ? true: false} />
                          <label className="custom-control-label label" htmlFor="female"> Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Date of Birth</label>
                    <input type="text"name="date_of_birth" onChange={(e)=>handleChange(e, data, setData)} defaultValue={data.date_of_birth} className="form-control custom-form" placeholder="DD/MM/YY" />
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
                      <input type="tel" name="phone" onChange={(e)=>handleChange(e, data, setData)} defaultValue={data.phone} className="form-control custom-form" placeholder="+62" />
                    </div>
                  </div>
                  <div ref={cPass}>
                    <div className="fullname text-left">SIGN IN DETAILS</div>
                    <div className="form-group">
                      <label className="label">Email</label>
                      <input type="email" name="email" onChange={(e)=>handleChange(e, data, setData)} defaultValue={data.email} className="form-control custom-form" placeholder="example@gmail.com" />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="cp" checked={cp} onChange={() => isCp(!cp)} />
                      <label className="custom-control-label" htmlFor="cp">Change Password</label>
                    </div>
                    {
                      cp ? (
                        <div>
                          <div className="form-group">
                            <label className="label">Current Password</label>
                            <div className="input-group mb-2">
                              <input type={isCurr ? 'text' : 'password'} className="form-control secret custom-form" placeholder="password" />
                              <div className="input-group-prepend">
                                <a href="#" className="input-group-text secret-group" onClick={(e) => { e.preventDefault(); setIsCurr(!isCurr) }}>
                                  <img src={eye} alt="eye" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-md">
                              <div className="form-group">
                                <label className="label">New Password</label>
                                <div className="input-group mb-2">
                                  <input type={isNew ? "text" : "password"} className="form-control secret custom-form" placeholder="password" />
                                  <div className="input-group-prepend">
                                    <a href="#" className="input-group-text secret-group" onClick={(e) => { e.preventDefault(); setIsNew(!isNew) }}>
                                      <img src={eye} alt="eye" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md">
                              <div className="form-group">
                                <label className="label">Confirm New Password</label>
                                <div className="input-group mb-2">
                                  <input type={isConfirm ? "text" : "password"} className="form-control secret custom-form" placeholder="password" />
                                  <div className="input-group-prepend">
                                    <a href="#" className="input-group-text secret-group" onClick={(e) => { e.preventDefault(); setIsConfirm(!isConfirm) }}>
                                      <img src={eye} alt="eye" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (<div />)
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
                      <button className="btn-save" type="submit">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-creditcard" role="tabpanel" aria-labelledby="pills-creditcard-tab">
              <CreditCard {...props} dataCard={dataCard} />
            </div>
            <div className="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
              <Address {...props} dataAddress={dataAddress} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

const mapStateToProps = state => {
  return {
      user: state.UserReducer.result,
      isLoading: state.UserReducer.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchProfile: (url, id) => {
          dispatch(fetchProfile(url, id))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);