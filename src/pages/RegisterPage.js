import React, {useState} from 'react';
import eye from '../assets/icons/EYE.svg';
import '../assets/styles/Register.scss';

const RegisterPage = (props) => {
  const [isHideRePass, setIsHideRePass] = useState(false)
  const [isHidePass, setIsHidePass] = useState(false)

  return (
    <div id="register">
      <div className="container">
        <form className="card">
          <div className="form-group">
            <label className="label">First Name</label>
            <input required type="text" name="first_name" className="form-control custom-form" placeholder=""/>
          </div>
          <div className="form-group">
            <label className="label">Last Name</label>
            <input required type="text" name="last_name" className="form-control custom-form" placeholder=""/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input required type="email" name="email" className="form-control custom-form" placeholder="example@gmail.com"/>
          </div>
          <div className="form-group">
            <label className="label">Date of Birth</label>
            <input required type="text" className="form-control custom-form" placeholder="DD/MM/YY"/>
          </div>
          <div className="form-group">
            <label className="label">Gender </label>
            <div className="row">
              <div className="col-auto">
                <div className="custom-control custom-radio">
                  <input required type="radio" id="male" name="gender" value="male" className="custom-control-input" />
                  <label className="custom-control-label label" htmlFor="male"> Male</label>
                </div>
              </div>
              <div className="col-auto">
                <div className="custom-control custom-radio">
                  <input required type="radio" id="female" name="gender" value="female" className="custom-control-input" />
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
                <input required type="tel" name="phone" className="form-control custom-form" placeholder="+62"/>
              </div>
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <div className="input-group mb-2">
              <input required type={isHidePass ? 'text' : 'password'} name="password" className="form-control secret custom-form" placeholder="password"/>
              <div className="input-group-prepend">
                <a href="#" className="input-group-text secret-group" onClick={(e) => {e.preventDefault(); setIsHidePass(!isHidePass)}}>
                  <img src={eye} alt="eye"/>
                </a>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="label">Re-type password</label>
            <div className="input-group mb-2">
              <input required type={isHideRePass ? 'text' : 'password'} name="retype_password" className="form-control secret custom-form" placeholder="password"/>
              <div className="input-group-prepend">
                <a href="#" className="input-group-text secret-group" onClick={(e) => {e.preventDefault(); setIsHideRePass(!isHideRePass)}}>
                  <img src={eye} alt="eye"/>
                </a>
              </div>
            </div>
          </div>
          <div className="custom-control custom-checkbox">
            <input required type="checkbox" name="terms" className="custom-control-input" id="terms" />
            <label className="custom-control-label" htmlFor="terms">I declare that I have read and accept the MYOOX Terms and Conditions of Use</label>
          </div>
          <div className="custom-control custom-checkbox">
            <input required type="checkbox" name="newsletter" className="custom-control-input" id="newsletter" />
            <label className="custom-control-label" htmlFor="newsletter">I de would like to receive the newsletter with the latest news and promotions. Consult our Privacy Policy for further information.clare that I have read and accept the MYOOX Terms and Conditions of Use</label>
          </div>
          <button className="btn-primary">REGISTER</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage;