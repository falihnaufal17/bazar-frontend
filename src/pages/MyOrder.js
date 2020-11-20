import React from 'react';
import kardus from '../assets/icons/KARDUS.svg';
const Myorder= (props) => {
    return(
<div>
    <div id="section-order">
        <div className=" text-center text-white btn-dark btn-block box">
          <div className="dropdown">
            <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <h1>MY ORDER</h1>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownProfile">
                <a className="dropdown-item" href="/profile/my-size">MY SIZE</a>
                <a className="dropdown-item" href="#">MY ORDERS</a>
                <a className="dropdown-item" href="/profile/my-wishlist">MY WISHLIST</a>
                <a className="dropdown-item" href="/profile/my-profile">MY PROFILE</a>
                <a class="dropdown-item" href="/customer-care">CUSTOMER CARE</a>
            </div>
          </div>
        </div>
    </div>
        <div className="text-center">
          <img src={kardus} alt="kardus" />
          <div className="title subtitle">THERE ARE NOT ORDER YET</div>
          <div className="title subtitle font-weight-normal mb-5">Get inspired by our selections and discover the unmissable promotions created just for you. And if you change your mind,dont worry.You can always use our easy returns</div>
          <a href="/" className="btn-primary">BACK TO SHOPPING</a>
        </div>
</div>


        )
    
}
export default Myorder;