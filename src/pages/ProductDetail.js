import React, { useState, useEffect, useRef, lazy } from 'react';
import '../assets/styles/ProductDetail.scss';
import detail from '../assets/images/detail-foto.svg';
import recommendation from '../assets/images/recommendation.svg';
import arrowDropdown from '../assets/icons/ARROW DROPDOWN.svg';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchProductDetail } from '../actions/Products';
import { handleChange } from '../helpers';

const ProductRecommendation = lazy(() => import('../components/ProductRecommendation'));

const ProductDetail = (props) => {
    let token = localStorage.getItem('token');
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [modals, setModals] = useState(0);
    let slider1 = useRef(null);
    let slider2 = useRef(null);
    let modalCart = useRef(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
        props.fetchProductDetail(props.apiUrl, props.match.params.product_id);
        if(JSON.parse(localStorage.getItem('profile')) != null){
            setUserId(JSON.parse(localStorage.getItem('profile')).id)
        }
    }, [])

    const [data, setData] = useState({
        color: '',
        listing_id: props.product.id,
        size: '',
        quantity: 1,
        user_id: userId
    });

    const addToCart = () => {
        if(token != null){
            // hit api add to cart
        }else{
            window.location.href = '/login'
        }
    }

    return (
        <>
            <section id="detail">
                <div ref={modalCart} class="modal fade modal-cart" id="addToCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="position-relative image-cart">
                                    <img src={props.product.images[0].path} className="w-100" alt={props.product.images[0].path} />
                                </div>
                                <div className="text-center">
                                    <div>1 Item | Size {data.size}</div>
                                    <div>{props.product.title}</div>
                                    <div className="mb-3">Total $ {props.product.sizes[0].price}</div>
                                    <a href="/bags" className="btn-primary mt-3">VIEW BAG & CHECKOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-md-10">
                                    <Slider
                                        asNavFor={nav2}
                                        ref={slider => { slider1 = slider }}
                                    >
                                        {
                                            props.product.images.map((item, index) => {
                                                return (
                                                    <div className="image">
                                                        <img src={item.path} id={item.image_id} alt={`item-${item.image_id}`} type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => setModals(<img src={item.path} id={index} alt={`item-${item.image_id}`} />)} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">{modals}</div>
                                        </div>
                                    </div>
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
                                        centerMode={true}
                                        infinite={true}
                                        centerPadding={"60px"}
                                        responsive={
                                            [
                                                {
                                                    breakpoint: 600,
                                                    settings: {
                                                        dots: false,
                                                        infinite: true,
                                                        speed: 500,
                                                        slidesToShow: 3,
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
                                                        slidesToShow: 3,
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
                                            props.product.images.map((item, index) => {
                                                return (
                                                    <div className="image">
                                                        <img src={item.path} id={item.image_id} alt={`item-${item.image_id}`} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <h1 className="product-name">{props.product.title}</h1>
                            <h2 className="price">$ {props.product.sizes[0].price}</h2>
                            <div className="form-group">
                                <label className="label">Color</label>
                                <div className="flex-container">
                                    {
                                        props.product.images.map((d, i) => {
                                            return (
                                                <div className="flex-items color" key={i}>
                                                    <div className="item-color" onClick={() => setData({ ...data,color: d.type })} style={{ backgroundColor: d.type }} />
                                                    <label className="label text-center">{d.type}</label>
                                                    {
                                                        data.color == d.type ?
                                                            (
                                                                <div className="item-active" />
                                                            ) :
                                                            (
                                                                <div />
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
                                            {/* <div className="input-group-append">
                                                <div className="valign">
                                                    <div className="inner">
                                                        <img src={arrowDropdown} alt="dropdown" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <select className="form-control select" name="size" onChange={(e) => handleChange(e, data, setData)}>
                                                {
                                                    props.product.sizes.map((d, i) => {
                                                        return (
                                                            <option value={d.size}>{d.size}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className="label">About The Brand</label>
                            <p className="description" dangerouslySetInnerHTML={{__html: props.product.description}} />
                            <div className="row row-p">
                                <div className="col col-md-auto">
                                    <a href="#" onClick={(e) => {e.preventDefault(); addToCart()}} data-target="#addToCart" data-toggle="modal" className="btn-primary">ADD TO CART</a>
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

const mapStateToProps = state => {
    return {
        product: state.ProductDetailReducer.result,
        isLoading: state.ProductDetailReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductDetail: (url, id) => {
            dispatch(fetchProductDetail(url, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);