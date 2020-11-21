import React from 'react';
import maskgroup from '../assets/icons/MASKGROUP.svg';
import Username from '../assets/icons/USERNAME.svg';
import Password from '../assets/icons/PASSWORD.svg';
import '../assets/styles/LoginPage.scss';

const LoginBeforeCheckout= (props) => {
  return(
    <div id="login">
      <div className="container">
        <div className="card before-checkout">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="title">Sign In</div>
              <div className="form-group">
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <div className="valign">
                            <div className="inner">
                                <img src={Username} alt="username" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <label className="label">Username</label>
                    </div>
                </div>
                <input type="text" className="form-control form-custom"/>
              </div>
              <div className="form-group">
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <div className="valign">
                            <div className="inner">
                                <img src={Password} alt="Password" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <label className="label">Password</label>
                    </div>
                </div>
                <input type="password" className="form-control form-custom"/>
              </div>
              <div className="custom-control custom-switch mb-3">
                  <input type="checkbox" className="custom-control-input" id="rememberMe" />
                  <label className="custom-control-label small-text mb-0 pointer-event" for="rememberMe">Remember Me</label>
              </div>
              <div className="form-group">
                <input type="submit" name="" value="SIGN IN" className="btn-dark"/>
              </div>
              <a href="#" className="small-text disable-text">Forgot Password</a>
              <div className="small-text text-center">ARE YOU NEW TO BAZAR?</div>
              <div className="form-group">
                <a href="/register" className="btn-light text-center d-block">REGISTER NOW</a>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center vline">
              <div className="title mb-5">Checkout As Guest</div>
              <div className="position-relative mb-5">
                <img src={maskgroup} alt="maskgroup"/>
              </div>
              <div className="form-group">
                <a href="/payment" className="btn-outline-primary">CONTINUE TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )    
}

export default LoginBeforeCheckout;