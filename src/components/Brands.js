import React from 'react';
import Slider from "react-slick";
import AcneStudios from '../assets/logos/ACNE-STUDIOS.svg';
import Gucci from '../assets/logos/GUCCI.svg';
import Nike from '../assets/logos/NIKE.svg';
import Ssense from '../assets/logos/SSENSE.svg';
import Yoox from '../assets/logos/YOOX.svg';
import ArrowRight from '../assets/icons/ARROW RIGHT.svg';
import ArrowLeft from '../assets/icons/ARROW LEFT.svg';

const Brands = props => {
    const ArrowNext = (props) => {
        const { className, style, onClick } = props;
        return(
            // <div onClick={onClick} style={{...style}} className={className}>
                <img src={ArrowRight} alt="next" onClick={onClick} style={{...style}} className={className} />
            /* </div> */
        )
    }
    const ArrowPrev = (props) => {
        const { className, style, onClick } = props;
        return(
            // <div onClick={onClick} style={{...style}} className={className}>
                <img src={ArrowLeft} alt="prev" onClick={onClick} style={{...style}} className={className} />
            // </div>
        )
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        centerPadding: "10px",
        speed: 500,
        dots: false,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
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
        <Slider {...settings}>
            <div>
                <img src={AcneStudios} alt="ACNE STUDIOS" className="d-block" />
            </div>
            <div>
                <img src={Gucci} alt="GUCCI" className="d-block" />
            </div>
            <div>
                <img src={Nike} alt="NIKE" className="d-block" />
            </div>
            <div>
                <img src={Ssense} alt="SSENSE" className="d-block" />
            </div>
            <div>
                <img src={Yoox} alt="YOOX" className="d-block" />
            </div>
            <div>
                <img src={AcneStudios} alt="ACNE STUDIOS" className="d-block" />
            </div>
            <div>
                <img src={Gucci} alt="GUCCI" className="d-block" />
            </div>
            <div>
                <img src={Nike} alt="NIKE" className="d-block" />
            </div>
            <div>
                <img src={Ssense} alt="SSENSE" className="d-block" />
            </div>
            <div>
                <img src={Yoox} alt="YOOX" className="d-block" />
            </div>
        </Slider>
    )
}

export default Brands;