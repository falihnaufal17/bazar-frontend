import React from 'react';

import '../assets/styles/profile.scss'

const Paymentselection = (props) => {
     return (
         <>
             <div class="container">
                 </div>

             <from>

          
             <div class="container">
  <div class="row">
    <div class="col-md-8">PAYMENT SELECTION</div>
    <div class="col-6 col-md-4">ORDER SUMMARRY</div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4">SELECT YOUR CREDIT CARD</div>
  </div>
  <div class="row">
    <div class="col-6">OTHER PAYMENT METHODS</div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Card Number</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="......"/>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">CVV</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-row"/>
    <div class="form-group col-md-6">
      <label for="inputCity">Expiration date</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group"/>
    <div class="form-check"/>
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      I would like to receive the newsletter with the latest news and promotions.Consult our Privacy Policy for further information.
  </div>
</div>
<button type="submit" class="btn btn-primary">CONFIRM AND PAY</button>
     </from>
    </>
         )
}  
 export default Paymentselection;