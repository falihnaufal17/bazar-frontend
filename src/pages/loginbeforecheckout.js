import React from 'react';
import maskgroup from '../assets/icons/MASKGROUP.svg';

const loginbeforecheckout= (props) => {
    return(
      <form>
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-md-4">
              <div class="card">
                <div class="card-header bg-transparent mb-0"><h5> <span class="font-weight-bold text-dark">Sign In</span></h5></div>
                  <form action="">
                 <div class="form-group">
                    <input type="text" name="" class="form-control" placeholder="Username"/>
                 </div>
                 <div class="form-group">
                    <input type="text" name="" class="form-control" placeholder="Password"/>
                 </div>
                 <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="remember"/>
                    <label class="custom-control-label" for="remember">Remember</label>
                 </div>
                 <div class="form-group">
                    <input type="submit" name="" value="SIGN IN" class="btn btn-dark btn-block "/>
                 </div>
                  </form>
                    <a href="#" class="btn btn-default">Forgot Password</a>
                 <div class="small-text text-center">ARE YOU NEW TO BAZAR?</div>
                 </div>
                 <div class="form-group">
                    <input type="submit" name="" value="REGISTER" class="btn btn-dark btn-block "/>
                 </div>
            </div>
            <div class="col-md-4">
            <div class="card">
            <div class="card-header bg-transparent mb-0"><h5> <span class="font-weight-bold text-dark">Checkout As Guest</span></h5></div>
                <img src={maskgroup} alt="maskgroup"/>
                  <div class="form-group">
                    <input type="submit" name="" value="CONTINUE TO CHECKOUT" class="btn btn-li btn-block "/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
    )
    
}

export default loginbeforecheckout;