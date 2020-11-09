import React from 'react';

import '../assets/styles/profile.scss'

const Profile = (props) => {
     return (
         <>
             <div className="box"> 
                  <h1> MY PROFILE</h1>
                  
            </div>
            <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">First Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Last Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
<div class="form-check">
  <label for="exampleFormControlInput1">Gender </label>
  <input class="form-check-input" type="radio" name="exampleMale" id="male" value="option1" checked/>
  <label class="form-check-label" for="exampleMale1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleFemale" id="female" value="option1" checked/>
  <label class="form-check-label" for="exampleFemale1">
    Female
  </label>
</div>
<div class="form-group">
    <label for="exampleFormControlInput1">Date of Birth</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>



</form>
         </>
    
         )
}  
 export default Profile;