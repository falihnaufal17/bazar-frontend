import React from 'react';
import SearchIcon from '../assets/icons/SEARCH.svg';
import SignInIcon from '../assets/icons/SIGN IN.svg';
import BasketIcon from '../assets/icons/BASKET.svg';
import Menu from '../assets/icons/MENU.svg';
import Facebook from '../assets/icons/FACEBOOK.svg';
import Google from '../assets/icons/GOOGLE.svg';

const Navbar = (props) => {
    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto col-lg order-2 order-md-2 order-lg-1">
                        <a className="navbar-brand" href="/">Bazar</a>
                    </div>
                    <div className="col col-md col-lg-auto order-5 order-md-4 order-lg-2">
                        <div className="d-flex nav-box">
                            <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
                            <img src={SearchIcon} alt="search-icon" />
                        </div>
                    </div>
                    <div className="col-auto order-4 order-md-4 order-lg-4">
                        <div className="valign">
                            <div className="inner">
                                <a href="#" className="btn-login" data-toggle="modal" data-target="#modalLogin">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.38098 15H13.5H16V12.5V2.5V0H13.5H8.38098V2.5H13.5V12.5H8.38098V15Z" fill="black"/>
                                        <path d="M8.91128 8.38775C9.20417 8.09486 9.20417 7.61999 8.91128 7.32709L4.13831 2.55412C3.84542 2.26123 3.37054 2.26123 3.07765 2.55412C2.78476 2.84701 2.78476 3.32189 3.07765 3.61478L7.32029 7.85742L3.07765 12.1001C2.78476 12.393 2.78476 12.8678 3.07765 13.1607C3.37054 13.4536 3.84542 13.4536 4.13831 13.1607L8.91128 8.38775ZM0 8.60742H8.38095V7.10742H0V8.60742Z" fill="black"/>
                                    </svg>
                                    <span className="login-text">Sign In</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto order-4 order-md-5 order-lg-4">
                        <a href="#">
                            <div className="position-relative">
                                <img src={BasketIcon} alt="basket-icon" />
                                <div className="float-count">1</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-auto p-0 order-1 order-md-1">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <img src={Menu} alt="menu" />
                        </button>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Women</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="dropdown-header">Women's Clothing</div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <a className="dropdown-item" href="#">Activewear & Yoga</a>
                                            <a className="dropdown-item" href="#">Denim & Jeans</a>
                                            <a className="dropdown-item" href="#">Dresses</a>
                                            <a className="dropdown-item" href="#">Jackets</a>
                                            <a className="dropdown-item" href="#">Jumpsuits & Rompers</a>
                                            <a className="dropdown-item" href="#">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="#">Pants</a>
                                            <a className="dropdown-item" href="#">Shirts & Tops</a>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <a className="dropdown-item" href="#">Shorts</a>
                                            <a className="dropdown-item" href="#">Skirts</a>
                                            <a className="dropdown-item" href="#">Sleepwear</a>
                                            <a className="dropdown-item" href="#">Sweaters</a>
                                            <a className="dropdown-item" href="#">Swimear</a>
                                            <a className="dropdown-item" href="#">Sweets & Hoodies</a>
                                            <a className="dropdown-item" href="#">Petite</a>
                                            <a className="dropdown-item" href="#">Plus</a>
                                            <a className="dropdown-item" href="#">Shop All Clothing</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Men {/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="dropdown-header">Men Clothing</div>
                                    <div className="row">
                                        <div className="col-12">
                                            <a className="dropdown-item" href="#">Activewear</a>
                                            <a className="dropdown-item" href="#">Denim & Jeans</a>
                                            <a className="dropdown-item" href="#">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="#">Pants</a>
                                            <a className="dropdown-item" href="#">Shirt & Tops</a>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shoes {/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Women's Shoes</div>
                                            <a className="dropdown-item" href="#">Athletic & Sneakers</a>
                                            <a className="dropdown-item" href="#">Boots & Booties</a>
                                            <a className="dropdown-item" href="#">Clogs & Mules</a>
                                            <a className="dropdown-item" href="#">Comfort</a>
                                            <a className="dropdown-item" href="#">Flats</a>
                                            <a className="dropdown-item" href="#">Heels</a>
                                            <a className="dropdown-item" href="#">Loafers</a>
                                            <a className="dropdown-item" href="#">Pumps</a>
                                            <a className="dropdown-item" href="#">Sandals</a>
                                        </div>
                                        <div className="col-12 col-md-4">  
                                            <div className="dropdown-header">Men's Shoes</div>
                                            <a className="dropdown-item" href="#">Athletic & Sneakers</a>
                                            <a className="dropdown-item" href="#">Boots & Booties</a>
                                            <a className="dropdown-item" href="#">Clogs & Mules</a>
                                            <a className="dropdown-item" href="#">Boots</a>
                                            <a className="dropdown-item" href="#">Dress Shoes</a>
                                            <a className="dropdown-item" href="#">Loafers</a>
                                            <a className="dropdown-item" href="#">Sandals</a>
                                            <a className="dropdown-item" href="#">Slippers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bags {/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Women's Bag's</div>
                                            <a className="dropdown-item" href="#">Backpacks</a>
                                            <a className="dropdown-item" href="#">Clutches</a>
                                            <a className="dropdown-item" href="#">Handbags</a>
                                            <a className="dropdown-item" href="#">Shoulder Bags</a>
                                            <a className="dropdown-item" href="#">Walllet</a>
                                            <a className="dropdown-item" href="#">Shop all Bags</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Bag's</div>
                                            <a className="dropdown-item" href="#">Businnes Bags</a>
                                            <a className="dropdown-item" href="#">Backpacks</a>
                                            <a className="dropdown-item" href="#">Gym Bags</a>
                                            <a className="dropdown-item" href="#">Mesengger</a>
                                            <a className="dropdown-item" href="#">Shop All Bags</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accessories{/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Women's Accessories</div>
                                            <a className="dropdown-item" href="#">Belts</a>
                                            <a className="dropdown-item" href="#">Everywear</a>
                                            <a className="dropdown-item" href="#">GLoves</a>
                                            <a className="dropdown-item" href="#">Hats</a>
                                            <a className="dropdown-item" href="#">jewlrey</a>
                                            <a className="dropdown-item" href="#">Scarves</a>
                                            <a className="dropdown-item" href="#">Watches</a>
                                            <a className="dropdown-item" href="#">Shop All Accessories</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Accessories</div>
                                            <a className="dropdown-item" href="#">Belts</a>
                                            <a className="dropdown-item" href="#">Everywear</a>
                                            <a className="dropdown-item" href="#">GLoves</a>
                                            <a className="dropdown-item" href="#">Hats</a>
                                            <a className="dropdown-item" href="#">Ties</a>
                                            <a className="dropdown-item" href="#">Wallets</a>
                                            <a className="dropdown-item" href="#">Watches</a>
                                            <a className="dropdown-item" href="#">Shop All Accessories</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Beauty{/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="dropdown-header">Coming Soon</div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kids{/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Girls</div>
                                            <a className="dropdown-item" href="#">Dresses</a>
                                            <a className="dropdown-item" href="#">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="#">Pants</a>
                                            <a className="dropdown-item" href="#">Shoes</a>
                                            <a className="dropdown-item" href="#">Skirts & Skorts</a>
                                            <a className="dropdown-item" href="#">Tops</a>
                                            <a className="dropdown-item" href="#">Shop All</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <a className="dropdown-item" href="#">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="#">Pants</a>
                                            <a className="dropdown-item" href="#">Shoes</a>
                                            <a className="dropdown-item" href="#">Shorts</a>
                                            <a className="dropdown-item" href="#">Sweaters</a>
                                            <a className="dropdown-item" href="#">Tops</a>
                                            <a className="dropdown-item" href="#">Shop All</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="WomenDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">On Sale{/* <span className="sr-only">(current)</span> */}</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Women Sale</div>
                                            <a className="dropdown-item" href="#">Clohting </a>
                                            <a className="dropdown-item" href="#">Shoes</a>
                                            <a className="dropdown-item" href="#">Accessories</a>
                                            <a className="dropdown-item" href="#">Bags</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <a className="dropdown-item" href="#">Clohting </a>
                                            <a className="dropdown-item" href="#">Shoes</a>
                                            <a className="dropdown-item" href="#">Accessories</a>
                                            <a className="dropdown-item" href="#">Bags</a>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Kids Sale</div>
                                            <a className="dropdown-item" href="#">Girl Clohting </a>
                                            <a className="dropdown-item" href="#">Girl Shoes</a>
                                            <a className="dropdown-item" href="#">Boy Clothing</a>
                                            <a className="dropdown-item" href="#">Boy Shoes</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </nav>
        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Welcome To Bazar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-group">
         <input type="username" class="form-control" id="username" placeholder="username"/>
      </div>
      <div class="form-group">
    <input type="password" class="form-control" id="pwd" placeholder="Password"/>
    </div>
    <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
    <br>
    </br>
    <a href="#">Forgot Password?</a>
    </div>
        </form>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark">Sign In</button>
        </div>
        <div>
            <br></br>
     <a href="#">Forgot Password</a> | <a href="#">Sign Up</a>
     </div>
     <div class="auth">or sign in with</div>
     <button type="button" class="btn btn-primary"> <img src={Facebook} alt="Facebook" />Facebook</button>
     <button type="button" class="btn "> <img src={Google} alt="Google" />Google</button>
    </div>
  </div>
</div>

        
      </>
    )
}

export default Navbar;