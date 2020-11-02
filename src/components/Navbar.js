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
                    <div className="col col-md col-lg-auto order-5 order-md-4 order-lg-2">
                        <div className="d-flex nav-box">
                            <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
                            <img src={SearchIcon} alt="search-icon" />
                        </div>
                    </div>
                    <div className="col-auto order-4 order-md-4 order-lg-4">
                        <div className="valign">
                            <div className="inner">
                                <a href="#" className="btn-login">
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
                                            <a className="dropdown-item" href="/products/women-clothing/activewear-&-yoga">Activewear & Yoga</a>
                                            <a className="dropdown-item" href="/products/women-clothing/denim-&-jeans">Denim & Jeans</a>
                                            <a className="dropdown-item" href="/products/women-clothing/dresses">Dresses</a>
                                            <a className="dropdown-item" href="/products/women-clothing/jackets">Jackets</a>
                                            <a className="dropdown-item" href="/products/women-clothing/jumpsuits-&-rompers">Jumpsuits & Rompers</a>
                                            <a className="dropdown-item" href="/products/women-clothing/outwear-&-coats">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="/products/women-clothing/pants">Pants</a>
                                            <a className="dropdown-item" href="/products/women-clothing/shirts-&-tops">Shirts & Tops</a>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <a className="dropdown-item" href="/products/women-clothing/shorts">Shorts</a>
                                            <a className="dropdown-item" href="/products/women-clothing/skirts">Skirts</a>
                                            <a className="dropdown-item" href="/products/women-clothing/sleepwear">Sleepwear</a>
                                            <a className="dropdown-item" href="/products/women-clothing/sweaters">Sweaters</a>
                                            <a className="dropdown-item" href="/products/women-clothing/swimear">Swimear</a>
                                            <a className="dropdown-item" href="/products/women-clothing/sweets-&-hoodies">Sweets & Hoodies</a>
                                            <a className="dropdown-item" href="/products/women-clothing/petite">Petite</a>
                                            <a className="dropdown-item" href="/products/women-clothing/plus">Plus</a>
                                            <a className="dropdown-item" href="/products/women-clothing/shol-all-clothing">Shop All Clothing</a>
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
                                            <a className="dropdown-item" href="/products/men-clothing/activewear">Activewear</a>
                                            <a className="dropdown-item" href="/products/men-clothing/denim-&-jeans">Denim & Jeans</a>
                                            <a className="dropdown-item" href="/products/men-clothing/outerwear-&-coats">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="/products/men-clothing/pants">Pants</a>
                                            <a className="dropdown-item" href="/products/men-clothing/shirt-&-tops">Shirt & Tops</a>
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
                                            <a className="dropdown-item" href="/products/women-shoes/athletic-&-sneakers">Athletic & Sneakers</a>
                                            <a className="dropdown-item" href="/products/women-shoes/boots-&-booties">Boots & Booties</a>
                                            <a className="dropdown-item" href="/products/women-shoes/clogs-&-mules">Clogs & Mules</a>
                                            <a className="dropdown-item" href="/products/women-shoes/comfort">Comfort</a>
                                            <a className="dropdown-item" href="/products/women-shoes/flats">Flats</a>
                                            <a className="dropdown-item" href="/products/women-shoes/heels">Heels</a>
                                            <a className="dropdown-item" href="/products/women-shoes/loafers">Loafers</a>
                                            <a className="dropdown-item" href="/products/women-shoes/pumps">Pumps</a>
                                            <a className="dropdown-item" href="/products/women-shoes/sandals">Sandals</a>
                                        </div>
                                        <div className="col-12 col-md-4">  
                                            <div className="dropdown-header">Men's Shoes</div>
                                            <a className="dropdown-item" href="/products/men-shoes/ahtletic-&-sneakers">Athletic & Sneakers</a>
                                            <a className="dropdown-item" href="/products/men-shoes/boots-&-booties">Boots & Booties</a>
                                            <a className="dropdown-item" href="/products/men-shoes/clogs-&-mules">Clogs & Mules</a>
                                            <a className="dropdown-item" href="/products/men-shoes/boots">Boots</a>
                                            <a className="dropdown-item" href="/products/men-shoes/dress-shoes">Dress Shoes</a>
                                            <a className="dropdown-item" href="/products/men-shoes/loafers">Loafers</a>
                                            <a className="dropdown-item" href="/products/men-shoes/sandals">Sandals</a>
                                            <a className="dropdown-item" href="/products/men-shoes/slippers">Slippers</a>
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
                                            <a className="dropdown-item" href="/products/women-bags/backpacks">Backpacks</a>
                                            <a className="dropdown-item" href="/products/women-bags/clutches">Clutches</a>
                                            <a className="dropdown-item" href="/products/women-bags/handbags">Handbags</a>
                                            <a className="dropdown-item" href="/products/women-bags/shoulder-bags">Shoulder Bags</a>
                                            <a className="dropdown-item" href="/products/women-bags/walllet">Walllet</a>
                                            <a className="dropdown-item" href="/products/women-bags/shop-all-bags">Shop all Bags</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Bag's</div>
                                            <a className="dropdown-item" href="/products/men-bags/businnes-bags">Businnes Bags</a>
                                            <a className="dropdown-item" href="/products/men-bags/backpacks">Backpacks</a>
                                            <a className="dropdown-item" href="/products/men-bags/gym-bags">Gym Bags</a>
                                            <a className="dropdown-item" href="/products/men-bags/messengger">Mesengger</a>
                                            <a className="dropdown-item" href="/products/men-bags/shop-all-bags">Shop All Bags</a>
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
                                            <a className="dropdown-item" href="/products/women-accessories/belts">Belts</a>
                                            <a className="dropdown-item" href="/products/women-accessories/everywear">Everywear</a>
                                            <a className="dropdown-item" href="/products/women-accessories/gloves">GLoves</a>
                                            <a className="dropdown-item" href="/products/women-accessories/hats">Hats</a>
                                            <a className="dropdown-item" href="/products/women-accessories/jewlrey">jewlrey</a>
                                            <a className="dropdown-item" href="/products/women-accessories/scarves">Scarves</a>
                                            <a className="dropdown-item" href="/products/women-accessories/watches">Watches</a>
                                            <a className="dropdown-item" href="/products/women-accessories/shop-all-accessories">Shop All Accessories</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Men's Accessories</div>
                                            <a className="dropdown-item" href="/products/men-accessories/belts">Belts</a>
                                            <a className="dropdown-item" href="/products/men-accessories/everywear">Everywear</a>
                                            <a className="dropdown-item" href="/products/men-accessories/gloves">GLoves</a>
                                            <a className="dropdown-item" href="/products/men-accessories/hats">Hats</a>
                                            <a className="dropdown-item" href="/products/men-accessories/ties">Ties</a>
                                            <a className="dropdown-item" href="/products/men-accessories/wallets">Wallets</a>
                                            <a className="dropdown-item" href="/products/men-accessories/watches">Watches</a>
                                            <a className="dropdown-item" href="/products/men-accessories/shop-all-accessories">Shop All Accessories</a>
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
                                            <a className="dropdown-item" href="/products/girls/dresses">Dresses</a>
                                            <a className="dropdown-item" href="/products/girls/outwear-&-coats">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="/products/girls/pants">Pants</a>
                                            <a className="dropdown-item" href="/products/girls/shoes">Shoes</a>
                                            <a className="dropdown-item" href="/products/girls/skirts-&-skorts">Skirts & Skorts</a>
                                            <a className="dropdown-item" href="/products/girls/tops">Tops</a>
                                            <a className="dropdown-item" href="/products/girls/shop-all">Shop All</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <a className="dropdown-item" href="/products/boys/outerwear-&-coats">Outerwear & Coats</a>
                                            <a className="dropdown-item" href="/products/boys/pants">Pants</a>
                                            <a className="dropdown-item" href="/products/boys/shoes">Shoes</a>
                                            <a className="dropdown-item" href="/products/boys/shorts">Shorts</a>
                                            <a className="dropdown-item" href="/products/boys/sweaters">Sweaters</a>
                                            <a className="dropdown-item" href="/products/boys/tops">Tops</a>
                                            <a className="dropdown-item" href="/products/boys/shop-all">Shop All</a>
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
                                            <a className="dropdown-item" href="/products/women-sale/clothing">Clohting </a>
                                            <a className="dropdown-item" href="/products/women-sale/shoes">Shoes</a>
                                            <a className="dropdown-item" href="/products/women-sale/accessories">Accessories</a>
                                            <a className="dropdown-item" href="/products/women-sale/bags">Bags</a>
                                        </div>   
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Boys</div>
                                            <a className="dropdown-item" href="/products/boys-sale/clothing">Clohting </a>
                                            <a className="dropdown-item" href="/products/boys-sale/shoes">Shoes</a>
                                            <a className="dropdown-item" href="/products/boys-sale/accessories">Accessories</a>
                                            <a className="dropdown-item" href="/products/boys-sale/bags">Bags</a>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown-header">Kids Sale</div>
                                            <a className="dropdown-item" href="/products/kids-sale/girl-clothing">Girl Clohting </a>
                                            <a className="dropdown-item" href="/products/kids-sale/girl-shoes">Girl Shoes</a>
                                            <a className="dropdown-item" href="/products/kids-sale/boy-clothing">Boy Clothing</a>
                                            <a className="dropdown-item" href="/products/kids-sale/boy-shoes">Boy Shoes</a>
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