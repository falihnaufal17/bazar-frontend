import React from 'react';
import ToTop from '../assets/images/to-top.svg';

const FloatButtonToTop = props => {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return(
        <div onClick={() => scrollTop()} className="float-to-top">
            <img src={ToTop} alt="ToTop" />
        </div>
    )
}

export default FloatButtonToTop;