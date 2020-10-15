import React from 'react';
import Slider from 'react-slick';
import Gambar from '../assets/images/category-1.svg';

const PopularCategory = (props) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return(
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
                <div>
                    <img src={Gambar} alt="Gambar"/>
                </div>
            </Slider>
        </div>
    )
}

export default PopularCategory;