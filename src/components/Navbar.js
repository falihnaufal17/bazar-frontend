import React from 'react';
import SearchIcon from '../assets/icons/SEARCH.svg';
import SignInIcon from '../assets/icons/SIGN IN.svg';
import profile from '../assets/icons/LOGIN ICON.svg';
import favorite from '../assets/icons/FAVORITE ICON.svg';
import BasketIcon from '../assets/icons/BASKET.svg';
import Menu from '../assets/icons/MENU.svg';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg order-2 order-md-2 order-lg-1">
                        <a className="navbar-brand mr-0" href="/">Bazar</a>
                    </div>
                    <div className="col-12 col-md col-lg-auto order-6 order-md-4 order-lg-2">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0027 6.00604C10.0027 8.22 8.20974 10.0121 6.00134 10.0121C3.79294 10.0121 2 8.22 2 6.00604C2 3.79209 3.79294 2 6.00134 2C8.20974 2 10.0027 3.79209 10.0027 6.00604ZM9.69801 10.7377C8.67909 11.5361 7.39575 12.0121 6.00134 12.0121C2.68689 12.0121 0 9.32309 0 6.00604C0 2.689 2.68689 0 6.00134 0C9.31579 0 12.0027 2.689 12.0027 6.00604C12.0027 7.13635 11.6907 8.19374 11.1482 9.09665L14.0738 12.0245L12.5288 13.5707L9.69801 10.7377Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto order-3 order-md-4 order-lg-4">
                        <div className="valign">
                            <div className="inner">
                                <a href="#" className="btn-login">
                                    Sign In
                                </a>
                                {/* <a href="#">
                                    <img src={profile} alt="profile" />
                                </a> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-2 order-4 order-md-5 order-lg-5">
                        <a href="#">
                            <img src={favorite} alt="favorite" />
                        </a>
                    </div> */}
                    <div className="col-auto order-5 order-md-5 order-lg-5">
                        <a href="#">
                            <div className="position-relative">
                                <img src={BasketIcon} alt="basket-icon" />
                                {/* <div className="float-count">1</div> */}
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
                                            <div className="item">
                                            <a className="dropdown-item" href="/products/women-clothing/activewear-&-yoga">Activewear & Yoga</a>
                                            {props.location.pathname == "/products/women-clothing/activewear-&-yoga" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/denim-&-jeans">Denim & Jeans</a>
                                                {props.location.pathname == "/products/women-clothing/denim-&-jeans" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/dresses">Dresses</a>
                                                {props.location.pathname == "/products/women-clothing/dresses" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/jackets">Jackets</a>
                                                {props.location.pathname == "/products/women-clothing/jackets" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/jumpsuits-&-rompers">Jumpsuits & Rompers</a>
                                                {props.location.pathname == "/products/women-clothing/jumpsuits-&-rompers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/outwear-&-coats">Outerwear & Coats</a>
                                                {props.location.pathname == "/products/women-clothing/outwear-&-coats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/pants">Pants</a>
                                                {props.location.pathname == "/products/women-clothing/pants" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/shirts-&-tops">Shirts & Tops</a>
                                                {props.location.pathname == "/products/women-clothing/shirts-&-tops" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/shorts">Shorts</a>
                                                {props.location.pathname == "/products/women-clothing/shorts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/skirts">Skirts</a>
                                                {props.location.pathname == "/products/women-clothing/skirts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/sleepwear">Sleepwear</a>
                                                {props.location.pathname == "/products/women-clothing/sleepwear" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/sweaters">Sweaters</a>
                                                {props.location.pathname == "/products/women-clothing/sweaters" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/swimear">Swimear</a>
                                                {props.location.pathname == "/products/women-clothing/swimear" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/sweets-&-hoodies">Sweets & Hoodies</a>
                                                {props.location.pathname == "/products/women-clothing/sweets-&-hoodies" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/petite">Petite</a>
                                                {props.location.pathname == "/products/women-clothing/petite" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/plus">Plus</a>
                                                {props.location.pathname == "/products/women-clothing/plus" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-clothing/shop-all-clothing">Shop All Clothing</a>
                                                {props.location.pathname == "/products/women-clothing/shop-all-clothing" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                        <div className="col-12 col-md-4">
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-clothing/activewear">Activewear</a>
                                                {props.location.pathname == "/products/men-clothing/activewear" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-clothing/denim-&-jeans">Denim & Jeans</a>
                                                {props.location.pathname == "/products/men-clothing/denim-&-jeans" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-clothing/outerwear-&-coats">Outerwear & Coats</a>
                                                {props.location.pathname == "/products/men-clothing/outerwear-&-coats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-clothing/pants">Pants</a>
                                                {props.location.pathname == "/products/men-clothing/pants" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-clothing/shirt-&-tops">Shirt & Tops</a>
                                                {props.location.pathname == "/products/men-clothing/shirt-&-tops" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/athletic-&-sneakers">Athletic & Sneakers</a>
                                                {props.location.pathname == "/products/women-shoes/athletic-&-sneakers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/boots-&-booties">Boots & Booties</a>
                                                {props.location.pathname == "/products/women-shoes/boots-&-booties" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/clogs-&-mules">Clogs & Mules</a>
                                                {props.location.pathname == "/products/women-shoes/clogs-&-mules" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/comfort">Comfort</a>
                                                {props.location.pathname == "/products/women-shoes/comfort" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/flats">Flats</a>
                                                {props.location.pathname == "/products/women-shoes/flats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/heels">Heels</a>
                                                {props.location.pathname == "/products/women-shoes/heels" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/loafers">Loafers</a>
                                                {props.location.pathname == "/products/women-shoes/loafers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/pumps">Pumps</a>
                                                {props.location.pathname == "/products/women-shoes/pumps" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-shoes/sandals">Sandals</a>
                                                {props.location.pathname == "/products/women-shoes/sandals" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">  
                                            <div className="dropdown-header">Men's Shoes</div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/ahtletic-&-sneakers">Athletic & Sneakers</a>
                                                {props.location.pathname == "/products/men-shoes/ahtletic-&-sneakers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/boots-&-booties">Boots & Booties</a>
                                                {props.location.pathname == "/products/men-shoes/boots-&-booties" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/clogs-&-mules">Clogs & Mules</a>
                                                {props.location.pathname == "/products/men-shoes/clogs-&-mules" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/boots">Boots</a>
                                                {props.location.pathname == "/products/men-shoes/boots" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/dress-shoes">Dress Shoes</a>
                                                {props.location.pathname == "/products/men-shoes/dress-shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/loafers">Loafers</a>
                                                {props.location.pathname == "/products/men-shoes/loafers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/sandals">Sandals</a>
                                                {props.location.pathname == "/products/men-shoes/loafers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-shoes/slippers">Slippers</a>
                                                {props.location.pathname == "/products/men-shoes/slippers" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/backpacks">Backpacks</a>
                                                {props.location.pathname == "/products/women-bags/backpacks" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/clutches">Clutches</a>
                                                {props.location.pathname == "/products/women-bags/clutches" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/handbags">Handbags</a>
                                                {props.location.pathname == "/products/women-bags/handbags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/shoulder-bags">Shoulder Bags</a>
                                                {props.location.pathname == "/products/women-bags/shoulder-bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/walllet">Walllet</a>
                                                {props.location.pathname == "/products/women-bags/walllet" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-bags/shop-all-bags">Shop all Bags</a>
                                                {props.location.pathname == "/products/women-bags/walllet" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Bag's</div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-bags/businnes-bags">Businnes Bags</a>
                                                {props.location.pathname == "/products/men-bags/businnes-bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-bags/backpacks">Backpacks</a>
                                                {props.location.pathname == "/products/men-bags/backpacks" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-bags/gym-bags">Gym Bags</a>
                                                {props.location.pathname == "/products/men-bags/gym-bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-bags/messengger">Mesengger</a>
                                                {props.location.pathname == "/products/men-bags/messengger" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-bags/shop-all-bags">Shop All Bags</a>
                                                {props.location.pathname == "/products/men-bags/shop-all-bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/belts">Belts</a>
                                                {props.location.pathname == "/products/women-accessories/belts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/everywear">Everywear</a>
                                                {props.location.pathname == "/products/women-accessories/everywear" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/gloves">GLoves</a>
                                                {props.location.pathname == "/products/women-accessories/gloves" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/hats">Hats</a>
                                                {props.location.pathname == "/products/women-accessories/hats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/jewlrey">jewlrey</a>
                                                {props.location.pathname == "/products/women-accessories/jewlrey" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/scarves">Scarves</a>
                                                {props.location.pathname == "/products/women-accessories/scarves" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/watches">Watches</a>
                                                {props.location.pathname == "/products/women-accessories/watches" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-accessories/shop-all-accessories">Shop All Accessories</a>
                                                {props.location.pathname == "/products/women-accessories/shop-all-accessories" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Accessories</div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/belts">Belts</a>
                                                {props.location.pathname == "/products/men-accessories/belts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/everywear">Everywear</a>
                                                {props.location.pathname == "/products/men-accessories/everywear" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/gloves">GLoves</a>
                                                {props.location.pathname == "/products/men-accessories/gloves" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/hats">Hats</a>
                                                {props.location.pathname == "/products/men-accessories/hats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/ties">Ties</a>
                                                {props.location.pathname == "/products/men-accessories/ties" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/wallets">Wallets</a>
                                                {props.location.pathname == "/products/men-accessories/wallets" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/watches">Watches</a>
                                                {props.location.pathname == "/products/men-accessories/watches" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/men-accessories/shop-all-accessories">Shop All Accessories</a>
                                                {props.location.pathname == "/products/men-accessories/shop-all-accessories" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/dresses">Dresses</a>
                                                {props.location.pathname == "/products/girls/dresses" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/outwear-&-coats">Outerwear & Coats</a>
                                                {props.location.pathname == "/products/girls/outwear-&-coats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/pants">Pants</a>
                                                {props.location.pathname == "/products/girls/pants" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/shoes">Shoes</a>
                                                {props.location.pathname == "/products/girls/shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/skirts-&-skorts">Skirts & Skorts</a>
                                                {props.location.pathname == "/products/girls/skirts-&-skorts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/tops">Tops</a>
                                                {props.location.pathname == "/products/girls/tops" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/girls/shop-all">Shop All</a>
                                                {props.location.pathname == "/products/girls/shop-all" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/outerwear-&-coats">Outerwear & Coats</a>
                                                {props.location.pathname == "/products/boys/outerwear-&-coats" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/pants">Pants</a>
                                                {props.location.pathname == "/products/boys/pants" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/shoes">Shoes</a>
                                                {props.location.pathname == "/products/boys/shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/shorts">Shorts</a>
                                                {props.location.pathname == "/products/boys/shorts" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/sweaters">Sweaters</a>
                                                {props.location.pathname == "/products/boys/sweaters" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/tops">Tops</a>
                                                {props.location.pathname == "/products/boys/tops" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys/shop-all">Shop All</a>
                                                {props.location.pathname == "/products/boys/shop-all" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
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
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-sale/clothing">Clohting </a>
                                                {props.location.pathname == "/products/women-sale/clothing" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-sale/shoes">Shoes</a>
                                                {props.location.pathname == "/products/women-sale/shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-sale/accessories">Accessories</a>
                                                {props.location.pathname == "/products/women-sale/accessories" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/women-sale/bags">Bags</a>
                                                {props.location.pathname == "/products/women-sale/bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys-sale/clothing">Clohting </a>
                                                {props.location.pathname == "/products/boys-sale/clothing" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys-sale/shoes">Shoes</a>
                                                {props.location.pathname == "/products/boys-sale/shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys-sale/accessories">Accessories</a>
                                                {props.location.pathname == "/products/boys-sale/accessories" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/boys-sale/bags">Bags</a>
                                                {props.location.pathname == "/products/boys-sale/bags" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Kids Sale</div>
                                            <div className="item"> 
                                                <a className="dropdown-item" href="/products/kids-sale/girl-clothing">Girl Clohting </a>
                                                {props.location.pathname == "/products/kids-sale/girl-clothing" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/kids-sale/girl-shoes">Girl Shoes</a>
                                                {props.location.pathname == "/products/kids-sale/girl-shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/kids-sale/boy-clothing">Boy Clothing</a>
                                                {props.location.pathname == "/products/kids-sale/boy-clothing" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                            <div className="item">
                                                <a className="dropdown-item" href="/products/kids-sale/boy-shoes">Boy Shoes</a>
                                                {props.location.pathname == "/products/kids-sale/boy-shoes" ? <div className="active"/> : <div className="deactive"/>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className="nav-item">
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
                        </li> */}
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;