import React, { useState } from 'react';
import Favorite from '../../assets/icons/HEART SOLID 2.svg';
import FavoriteActive from '../../assets/icons/FAVORITE ACTIVE.svg';
import ProductsComponent from '../Products';
import Slider from 'react-slick';
import '../../assets/styles/ProductDetail.scss';
export const ProductItemLoader = (props) => {
    let result = [
        {
            id: 1,
            title: "product title",
            price: 2300,
            subcategory: "subcategory",
            path: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "product title",
            price: 2300,
            subcategory: "subcategory",
            path: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "product title",
            price: 2300,
            subcategory: "subcategory",
            path: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            title: "product title",
            price: 2300,
            subcategory: "subcategory",
            path: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            title: "product title",
            price: 2300,
            subcategory: "subcategory",
            path: "https://via.placeholder.com/150"
        }
    ]
    const [isFavorite, setIsFavorite] = useState(false)
    const [stock, setStock] = useState(0)

    const _redirect = (id) => {
        // if(stock > 0){
            window.location.href = '/product/detail/' + id;
        // }else{
            // return false;
        // }
    }

    let activeClass = 'cp-placeholder transparent active'

    return(
        <div className={"row grid-list " + activeClass}>
            {
                result.map((item, key)=>{
                    return(
                        <div className="col-6 col-md-4 col-lg-auto position-relative" key={key}>
                            <div className="favorite">
                                <img src={isFavorite ? FavoriteActive : Favorite} alt="favorite-icon" />
                            </div>
                            <div className="card card-product">
                                <div className="image">
                                    <div className={stock > 0 ? "" : 'disabled'}>
                                    </div>
                                    <div className="obj-el">
                                        <img src={item.path} className="card-img-top" alt={item.title} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="category"><span className="obj-el">{item.subcategory}</span></div>
                                    <div className="product-name"><span className="obj-el">{item.title}</span></div>
                                    <div className="price mb-2"><span className="obj-el">${item.price}</span></div>
                                    {/* <div className="row row-color">
                                        {props.data.color.map((d, i) => {
                                            return(
                                                <div className="col-auto" key={i}>
                                                    <div className="item-color" style={{backgroundColor: d.color}}/>
                                                    {
                                                        d.color == '#000' ? (<div className="line-active"/>) : (<div/>)
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const ProductsPlaceholder = (props) => {
    return(
        <ProductsComponent {...props} />
    )
}

export const ProductDetailPlaceholder = (props) => {
    let product = {
        images: [
            {
                image_id: 1,
                path: "https://via.placeholder.com/150",
                type: 'Lorem'
            },
            {
                image_id: 2,
                path: "https://via.placeholder.com/150",
                type: 'Lorem'
            },
            {
                image_id: 3,
                path: "https://via.placeholder.com/150",
                type: 'Lorem'
            },
            {
                image_id: 4,
                path: "https://via.placeholder.com/150",
                type: 'Lorem'
            },
            {
                image_id: 5,
                path: "https://via.placeholder.com/150",
                type: 'Lorem'
            }
        ],
        title: 'Lorem Ipsum Dolor Sit Amet',
        sizes: [
            {
                size: 'lorem',
                price: 100
            }
        ],
        description: "<ul><li class=cu>With an adjustable ankle strap and single vamp strap, the Sam Edelman® Patti sandals are a sexy shoe choice that'll take an outfit from ho-hum to va-va-voom.</li><li class=fu>SKU: #<!-- -->8674246</li><li>Heeled sandal is available in a variety of leather, suede, man-made, and textile uppers. </li><li>Fit technology features a padded sock to boost comfort.</li><li>Synthetic insole. </li><li>Wrapped stem heel.</li><li>Leather or man-made outsole.</li><li>Imported.</li><li>Product measurements were taken using size 6, width M. Please note that measurements may vary by size.</li><li>Weight of footwear is based on a single item, not a pair.</li><li>Measurements:<ul>    <li> Heel Height: 3 in</li>    <li> Weight: 4 oz</li>    </ul></li></ul>"
    }

    let activeClass = "cp-placeholder transparent";
    if(props.isLoading){
        activeClass = activeClass + " active"
    }

    return(
        <div className={"container " + activeClass}>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-10">
                            <Slider
                            >
                                {
                                    product.images.map((item, index) => {
                                        return (
                                            <div className="image obj-el">
                                                <img src={item.path} id={item.image_id} alt={`item-${item.image_id}`} type="button" data-toggle="modal" data-target="#exampleModal" />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="col-12 col-md-2">
                            <Slider
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
                                    product.images.map((item, index) => {
                                        return (
                                            <div className="image obj-el">
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
                    <h1 className="product-name"><span className="obj-el">{product.title}</span></h1>
                    <h2 className="price"><span className="obj-el">$ {product.sizes[0].price}</span></h2>
                    <div className="form-group">
                        <label className="label"><span className="obj-el">Color</span></label>
                        <div className="flex-container">
                            {
                                product.images.map((d, i) => {
                                    return (
                                        <div className="flex-items color" key={i}>
                                            <div className="item-color obj-el" style={{ backgroundColor: d.type }} />
                                            <label className="label text-center"><span className="obj-el">{d.type}</span></label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md">
                            <div className="form-group">
                                <label className="label"><span className="obj-el">Size</span></label>
                                <div className="input-group obj-el">
                                    <select className="form-control select" name="size">
                                        {
                                            product.sizes.map((d, i) => {
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
                    <label className="label"><span className="obj-el">About The Brand</span></label>
                    <p className="description obj-el" dangerouslySetInnerHTML={{__html: product.description}} />
                    <div className="row row-p">
                        <div className="col col-md-auto obj-el">
                            <a href="#" data-target="#addToCart" data-toggle="modal" className="btn-primary"><span className="obj-el">ADD TO CART</span></a>
                        </div>
                        <div className="col-auto obj-el">
                            <a href="#" className="btn-secondary"><span className="obj-el">FAVOURITE</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}