import React from "react";
import Slider from "react-slick";

const Sliders = ({children}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: false,
                  centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    speed: 500,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                }
            }  
        ]
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