import React from 'react';
import eye from '../assets/icons/EYE.svg';

const RegisterPage = (props) => {
  return (
<div>
 <form>
 <div class="container">
                
                      <div className="form-group">
                        <label className="label">First Name</label>
                        <input type="text" className="form-control custom-form" placeholder=""/>
                      </div>
                
                
                      <div className="form-group">
                        <label className="label">Last Name</label>
                        <input type="text" className="form-control custom-form" placeholder=""/>
                      </div>
                
                    <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control custom-form" placeholder="example@gmail.com"/>

                      </div>
                      <div className="form-group">
                    <label className="label">Date of Birth</label>
                    <input type="text" className="form-control custom-form" placeholder="DD/MM/YY"/>
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
                    <div className="form-group">
                      <div className="label">Password</div>
                    </div>
                    <div className="input-group mb-2">
                      <div>
                        <input type="password" className="password" id="d-password" value="password" disabled/>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="label">Re-type Password</div>
                    </div>
                    <div className="password">
                      <div><input type="password" className="password" id="d-password" value="password" disabled/></div>
                    </div>
                    <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label class="form-check-label" for="defaultCheck1">
                      I declare that I have read and accept the MYOOX Terms and Conditions of Use
                       </label>
                    </div>
                    <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label class="form-check-label" for="defaultCheck1">
                      I de would like to receive the newsletter with the latest news and promotions.
                       Consult our Privacy Policy for further information.clare that I have read and 
                       accept the MYOOX Terms and Conditions of Use
                       </label>
                    </div>
                    <div className="col-12 col-md-auto">
                        <button className="btn-save btn btn-dark btn-lg btn-block">REGISTER</button>
                      </div>



                  
                   

    </div>
    </form>
    </div>
  )
}  
 export default RegisterPage;