import React, {lazy} from 'react';
import Slider from 'react-slick';
import Image from '../assets/images/recommendation.svg';

const RecommendationItem = lazy(()=>import('../components/RecommendationItem'));

const ProductRecommendation = props =>{
    const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 5,
        centerPadding: "10px",
        speed: 500,
        dots: false,
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
    let data = [
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
        {
            product_name: "Marni",
            price: 170.00,
            image: Image
        },
    ]
    return(
        <>
            <Slider {...settings}>
                {
                    data.map((item, key)=>{
                        return(
                            <RecommendationItem 
                                product_name={item.product_name}
                                price={item.price}
                                image={item.image}
                                key={key}
                            />
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default ProductRecommendation;