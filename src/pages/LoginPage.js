import React from 'react';
import '../assets/styles/LoginPage.scss';
import Username from '../assets/icons/USERNAME.svg';
import Password from '../assets/icons/PASSWORD.svg';

const Loginpage= (props) => {
    return(
      <div id="login">
        <div className="container">
          <div className="card">
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
            <a href="#" className="btn-light text-center">REGISTER NOW</a>
          </div>
        </div>
      </div>
    )
}

export default Loginpage;