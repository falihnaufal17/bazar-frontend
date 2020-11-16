import React, {useState, useEffect, useRef, Suspense, lazy} from 'react';
import '../assets/styles/ProductDetail.scss';
import detail from '../assets/images/detail-foto.svg';
import recommendation from '../assets/images/recommendation.svg';
import arrowDropdown from '../assets/icons/ARROW DROPDOWN.svg';
import Slider from 'react-slick';

const ProductRecommendation = lazy(()=>import('../components/ProductRecommendation'));

const ProductDetail = (props) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [data, setData] = useState({
        color: ''
    })
    let slider1 = useRef(null);
    let slider2 = useRef(null);

    useEffect(()=>{
        setNav1(slider1)
        setNav2(slider2)
    },[])

    const sizeData = [
        {
            size: 'S (4 - 6)'
        },
        {
            size: 'M (8 - 10)'
        },
        {
            size: 'L (12 - 14)'
        },
        {
            size: 'XL (16 - 18)'
        },
        {
            size: 'XXL (20 - 22)'
        }
    ]
    let images = [
        {
            image: detail
        },
        {
            image: detail
        },
        {
            image: detail
        },
        {
            image: detail
        }
    ]
    const dataColor = [
        {
            id: 1,
            color: '#6DE734',
            name: 'lightgreen'
        },
        {
            id: 2,
            color: '#FFF',
            name: 'white'
        },
        {
            id: 3,
            color: '#000',
            name: 'black'
        },
        {
            id: 4,
            color: '#FF0000',
            name: 'red'
        },
        {
            id: 5,
            color: '#00FF00',
            name: 'green'
        },
    ]
    return(
        <>
            <section id="detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-10">
                                    <Slider
                                        asNavFor={nav2}
                                        ref={slider => {slider1 = slider}}
                                    >
                                        {
                                            images.map((item, index) => {
                                                return(
                                                    <div className="image">
                                                        <img src={item.image} id={index} alt={`item-${index}`} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                                <div className="col-12 col-md-2">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={slider => (slider2 = slider)}
                                        slidesToShow={3}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        vertical={true}
                                        verticalSwiping={true}
                                        responsive={
                                            [
                                                {
                                                    breakpoint: 600,
                                                    settings: {
                                                      dots: false,
                                                      infinite: true,
                                                      speed: 500,
                                                      slidesToShow: images.length,
                                                      slidesToScroll: 1,
                                                      variableWidth: false,
                                                      centerMode: false,
                                                      vertical: false,
                                                      verticalSwiping: false
                                                    }
                                                },
                                                {
                                                    breakpoint: 480,
                                                    settings: {
                                                        infinite: false,
                                                        speed: 500,
                                                        dots: false,
                                                        slidesToShow: images.length,
                                                        slidesToScroll: 1,
                                                        centerMode: true,
                                                        vertical: false,
                                                        verticalSwiping: false
                                                    }
                                                }  
                                            ]
                                        }
                                    >
                                        {
                                            images.map((item, index) => {
                                                return(
                                                    <div className="image">
                                                        <img src={item.image} id={index} alt={`item-${index}`} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <h1 className="product-name">Adidas LOTTA VOLKOVA</h1>
                            <h2 className="price">$635</h2>
                            <div className="form-group">
                                <label className="label">Color</label>
                                <div className="flex-container">
                                    {
                                        dataColor.map((d, i) => {
                                            return(
                                                <div className="flex-items color" key={i}>
                                                    <div className="item-color" onClick={() => setData({color: d.name})} style={{backgroundColor: d.color}} />
                                                    <label className="label text-center">{d.name}</label>
                                                    {
                                                        data.color == d.name ?
                                                        (
                                                            <div className="item-active"/>
                                                        ):
                                                        (
                                                            <div/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md">
                                    <div className="form-group">
                                        <label className="label">Size</label>
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <div className="valign">
                                                    <div className="inner">
                                                        <img src={arrowDropdown} alt="dropdown" />
                                                    </div>
                                                </div>
                                            </div>
                                            <select className="form-control select">
                                                {
                                                    sizeData.map((d, i) => {
                                                        return(
                                                            <option value={d.size}>{d.size}</option>
                                                        )
                                                    })
                                                }
                                                <option value={1}>1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className="label">About The Brand</label>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div className="row row-p">
                                <div className="col col-md-auto">
                                    <a href="#" className="btn-primary">ADD TO CART</a>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="btn-secondary">FAVOURITE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="recommendation-section">
                <div className="container">
                    <h1 className="title-recommendation">RECOMMENDED FOR YOU</h1>
                    <ProductRecommendation />
                </div>
            </section>
        </>
    )
}

export default ProductDetail;