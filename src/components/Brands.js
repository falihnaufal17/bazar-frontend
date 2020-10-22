import React from 'react';
import Slider from "react-slick";
import AcneStudios from '../assets/logos/ACNE-STUDIOS.svg';
import Gucci from '../assets/logos/GUCCI.svg';
import Nike from '../assets/logos/NIKE.svg';
import Ssense from '../assets/logos/SSENSE.svg';
import Yoox from '../assets/logos/YOOX.svg';

const Brands = props => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        centerPadding: "60px",
        speed: 500,
        dots: false
    };
    return(
        <Slider {...settings}>
            <div className="card d-flex">
                <img src={AcneStudios} alt="ACNE STUDIOS" className="d-block" />
            </div>
            <div className="card d-flex">
                <img src={Gucci} alt="GUCCI" className="d-block" />
            </div>
            <div className="card d-flex">
                <img src={Nike} alt="NIKE" className="d-block" />
            </div>
            <div className="card d-flex">
                <img src={Ssense} alt="SSENSE" className="d-block" />
            </div>
            <div className="card d-flex">
                <img src={Yoox} alt="YOOX" className="d-block" />
            </div>
        </Slider>
    )
}

export default Brands;