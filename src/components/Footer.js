import React from 'react';

const Footer = (props) => {
    return(
<footer>
<div class="container">

<div class="row mb-3">
          <div class="col-md-5"> 
            <div>Bazar</div>
            <p class = "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            
          </div>
          <div class="col-md">
            <div>My Account</div>
            <p> My Account</p>
            <p> Cart</p>
            <p>Whislist</p>
            <p> Order Tracking</p>
            <p> Delivery Information</p>

            
          </div>
          <div class="col-md">
            <div>Catalog</div>
            <p>Women</p>
            <p>Men</p>
            <p>Kids</p>
            <p>Beauty</p>
            <p>Trending</p>
            
          </div>
          <div class="col-md">
            <div>Customer Care</div>
            <p>Address Store</p>
            <p>Phone Number Store</p>
            <p>Email Store</p>
          </div>
        </div>
        </div>
        <div class="hline"> </div>



</footer>
    )
}

export default Footer;