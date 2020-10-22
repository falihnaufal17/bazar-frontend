import React from 'react';
import Twitter from '../assets/logos/twitter-brands.svg';
import Facebook from '../assets/logos/facebook-f-brands.svg';
import Instagram from '../assets/logos/instagram-brands.svg';

const Footer = (props) => {
  return(
    <footer>
      <div className="container">
        <div className="d-block d-lg-flex justify-content-between">
            <div className="bg-dark">
              <h1>Bazar</h1>
              <p className="description">
                Bazar is the one-stop  shop for all fashion lovers in the MENA region. Our mission is to democratize access to the latest of fashion products and be your trusted partner in your international shopping journey.
              </p>
              <div className="small-text">Connect With us</div>
              <div className="row social-media">
                <div className="col-auto">
                  <a target="__blank" href="https://twitter.com">
                    <img src={Twitter} alt="twitter" />
                  </a>
                </div>
                <div className="col-auto">
                  <a target="__blank" href="https://facebook.com">
                    <img src={Facebook} alt="facebook" />
                  </a>
                </div>
                <div className="col-auto">
                  <a target="__blank" href="https://instagram.com">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          <div className="col-12 col-md-6">
            <div className="row mb-3">
              <div className="col-md">
                <h2>My Bazar</h2>
                <a href="#">Account</a>
                <a href="#">Order</a>
                <a href="#">Whislist</a>
                <a href="#"> Order Tracking</a>
              </div>
              <div className="col-md">
                <h2>About Us</h2>
                <a href="#">Company Info</a>
                <a href="#">Press</a>
                <a href="#">Affiliations</a>
                <a href="#">Careers</a>
              </div>
              <div className="col-md">
                <h2>Help</h2>
                <a href="#">Shipping Times & Costs</a>
                <a href="#">Returns & Refunds</a>
                <a href="#">Payment & Security</a>
                <a href="#">Size Guide</a>
                <a href="#">FAQ</a>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-auto">Terms of Service</div>
              <div className="col-auto">Privacy Policy</div>
            </div>
            <div className="small-text text-right">Copyright © 2020 awfa. All rights reserved</div>
          </div>
        </div>
        {/* <div className="hline"> </div> */}
      </div>
    </footer>
  )
}

export default Footer;