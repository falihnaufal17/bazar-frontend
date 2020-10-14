import React from "react";
import Slider from "react-slick";

const Sliders = ({children}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default Sliders;