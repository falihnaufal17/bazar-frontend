import React from 'react';
import SearchIcon from '../assets/icons/SEARCH.svg';
import SignInIcon from '../assets/icons/SIGN IN.svg';
import BasketIcon from '../assets/icons/BASKET.svg';
import Menu from '../assets/icons/MENU.svg';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto col-lg order-2 order-md-2 order-lg-1">
                        <a className="navbar-brand" href="/">Bazar</a>
                    </div>
                    <div className="col-auto order-5 order-md-3 order-lg-2">
                        <div className="row row-p align-items-center nav-box">
                            <div className="col col-lg-auto">
                                <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
                            </div>
                            <div className="col-auto">
                                <img src={SearchIcon} alt="search-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-auto order-3 order-md-4 order-lg-3">
                        <a href="#">
                            <div className="row align-items-center nav-box shadow-none p3">
                                <div className="col-auto">
                                    <img src={SignInIcon} alt="signin-icon" />
                                </div>
                                <div className="col-auto">
                                    <div className="login-text">Sign In</div>
                                </div>
                            </div>
                        </a>
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women {/* <span className="sr-only">(current)</span> */}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bags</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Beauty</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">On Sale</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;