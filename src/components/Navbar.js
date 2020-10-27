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
                    <div className="col col-md col-lg-auto order-5 order-md-3 order-lg-2">
                        <div className="d-flex nav-box">
                            <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
                            <img src={SearchIcon} alt="search-icon" />
                        </div>
                    </div>
                    <div className="col-auto order-3 order-md-4 order-lg-3">
                        <div className="valign">
                            <div className="inner">
                                <a href="#" className="btn-login">
                                    {/* <div className="row align-items-center nav-box shadow-none p3">
                                        <div className="col-auto"> */}
                                        {/* </div>
                                        <div className="col-auto"> */}
                                        {/* </div>
                                    </div> */}
                                    {/* <img src={SignInIcon} alt="signin-icon" /> */}
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
                        <li className="nav-item">
                            <a className="nav-link" href="/products/women">Women</a>
                            {props.match.params.menu == 'women' ? (<div className="active" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/men">Men</a>
                            {props.match.params.menu == 'men' ? (<div className="active" id="men" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/shoes">Shoes</a>
                            {props.match.params.menu == 'shoes' ? (<div className="active" id="shoes" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/bags">Bags</a>
                            {props.match.params.menu == 'bags' ? (<div className="active" id="bags" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/accessories">Accessories</a>
                            {props.match.params.menu == 'accessories' ? (<div className="active" id="accessories" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/beauty">Beauty</a>
                            {props.match.params.menu == 'beauty' ? (<div className="active" id="beauty" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/kids">Kids</a>
                            {props.match.params.menu == 'kids' ? (<div className="active" id="kids" />) : ''}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/on-sale">On Sale</a>
                            {props.match.params.menu == 'on-sale' ? (<div className="active" id="on-sale" />) : ''}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;