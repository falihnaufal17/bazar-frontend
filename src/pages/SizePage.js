import React from 'react';
const Sizepage= (props) => {
    return(
  <from>
        <div id="section-SizePage">
        <div className="box">
        <div class="text-center text-white btn-block btn-dark">
            <a href="#" id="Profile" aria-haspopup="true" aria-expanded="false">
              <h1>MY SIZE</h1>
            </a>
          </div>
          </div>
          </div>
    <div class="container">
   
         <div className="col">
         <div className="form-group">
              <label className="label">Profile Name</label>
              <input type="text" className="form-control custom-form" placeholder="Gerrad"/>
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
        <div class="card">
                <h5 class="card-title">WEAR</h5>
                <h6 class="card-subtitle mb-2 text-muted">TOP WEAR</h6>
        </div>
        <div class="text-center">
                <input type="submit" name="" value="ADD" class="btn btn-dark"/>
        </div>
        <div class="card">
        <div class="card-content d-block" id="from-edit">
        <div class="fullname text-center">YOUR SIZE</div>
        </div>
        </div>
        </div>
              </from>
              
    )
}
export default Sizepage;