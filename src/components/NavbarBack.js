import React from 'react';
import BasketIcon from '../assets/icons/BASKET.svg';
import Menu from '../assets/icons/MENU.svg';
import Facebook from '../assets/icons/FACEBOOK.svg';
import Google from '../assets/icons/GOOGLE.svg';
import Username from '../assets/icons/USERNAME.svg';
import Password from '../assets/icons/PASSWORD.svg';
import Cross from '../assets/icons/CROSS.svg';

const NavbarBack = (props) => {
    const goBack = () => {
        props.history.goBack();
    }
    return(
        <nav class="navbar navbar-expand-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <a className="navbar-brand mr-0" href="/">Bazar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-auto">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="JavaScript:Void(0)" onClick={() => goBack()}>Back</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Help
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarBack;