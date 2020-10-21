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
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 3,
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
                    slidesToShow: 2,
                    // slidesToScroll: 3,
                    variableWidth: false,
                    // centerMode: false
                }
            }  
        ]
    };

    return(
        <div>
            <div className={"row vertical-xs " + props.className}>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
                <a>
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                </a>
            </div>
        </div>
    )
}

export default PopularCategory;