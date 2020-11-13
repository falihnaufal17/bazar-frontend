import React from 'react';
import '../assets/styles/LoginPage.scss';
const Loginpage= (props) => {
    return(
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-md-4">
              <div class="card">
                <div class="card-header bg-transparent mb-0"><h5> <span class="font-weight-bold text-dark">Sign In</span></h5></div>
                <div class="card-body">
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
                  <div class="Register">
                      <input type="submit" name="" value="REGISTER NOW" class="btn btn-block"/>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
    )
    
}

export default Loginpage;