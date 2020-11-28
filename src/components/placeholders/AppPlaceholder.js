import React, { useState } from 'react';
import Favorite from '../../assets/icons/HEART SOLID 2.svg';
import FavoriteActive from '../../assets/icons/FAVORITE ACTIVE.svg';
import InfiniteScroll from 'react-infinite-scroll-component';
import imgProduct from '../../assets/images/adidas-originals-black-3-stripes-t-shirt 1.svg';
import ProductItem from '../ProductItem'
import SideBarProducts from '../SideBarProducts'
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

    let activeClass = 'cp-placeholder transparent active'

    const dataProduct = [
        {
            id: 1,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 2,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 3,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 4,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 5,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 6,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 7,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
        {
            id: 8,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct,
            color: [
                {
                    id: 1,
                    color: '#000'
                },
                {
                    id: 2,
                    color: '#D7D7D7'
                },
                {
                    id: 3,
                    color: '#9FD668'
                }
            ],
            stock: 1
        },
    ];
    const sizes = [
        {
            id: 1,
            size: "S (4-6)"
        },
        {
            id: 2,
            size: "M (8-10)"
        },
        {
            id: 3,
            size: "L (12-14)"
        },
        {
            id: 4,
            size: "XL (16-18)"
        },
        {
            id: 5,
            size: "XXL (20-22)"
        },
    ]
    const colors = [
        {
            id: 1,
            color: "Beige"
        },
        {
            id: 2,
            color: "Black"
        },
        {
            id: 3,
            color: "Blue"
        },
        {
            id: 4,
            color: "Brown"
        },
        {
            id: 5,
            color: "Gold"
        },
    ]
    const brands = [
        {
            id: 1,
            brand: "ASOS"
        },
        {
            id: 2,
            brand: "Champ"
        },
        {
            id: 3,
            brand: "Farfect"
        },
        {
            id: 4,
            brand: "Koh's"
        },
        {
            id: 5,
            brand: "Macy's"
        },
    ]
    const [category, setCategory] = useState(true);
    const [size, setSize] = useState(true);
    const [color, setColor] = useState(true);
    const [brand, setBrand] = useState(true);
    const toggleClick = (menu) => {
        if(menu == 'category'){
            if(category){
                document.getElementById('menu').style.opacity = "0";
                document.getElementById('menu').style.transition = "500ms all";
                document.getElementById('menu').style.transform = "translateY(0)";
                document.getElementById('menu').style.height = "1px";
                setCategory(false)
            }else{
                document.getElementById('menu').style.opacity = "1";
                document.getElementById('menu').style.transition = "500ms all";
                document.getElementById('menu').style.transform = "translateY(0)";
                document.getElementById('menu').style.height = "200px";
                setCategory(true)
            }
        }else if(menu == 'size'){
            if(size){
                document.getElementById('menuSize').style.opacity = "0";
                document.getElementById('menuSize').style.transition = "500ms all";
                document.getElementById('menuSize').style.transform = "translateY(0)";
                document.getElementById('menuSize').style.height = "1px";
                setSize(false)
            }else{
                document.getElementById('menuSize').style.opacity = "1";
                document.getElementById('menuSize').style.transition = "500ms all";
                document.getElementById('menuSize').style.transform = "translateY(0)";
                document.getElementById('menuSize').style.height = "200px";
                setSize(true)
            }
        }else if(menu == 'color'){
            if(color){
                document.getElementById('menuColor').style.opacity = "0";
                document.getElementById('menuColor').style.transition = "500ms all";
                document.getElementById('menuColor').style.transform = "translateY(0)";
                document.getElementById('menuColor').style.height = "1px";
                setColor(false)
            }else{
                document.getElementById('menuColor').style.opacity = "1";
                document.getElementById('menuColor').style.transition = "500ms all";
                document.getElementById('menuColor').style.transform = "translateY(0)";
                document.getElementById('menuColor').style.height = "200px";
                setColor(true)
            }
        }else if(menu == 'brand'){
            if(brand){
                document.getElementById('menuBrand').style.opacity = "0";
                document.getElementById('menuBrand').style.transition = "500ms all";
                document.getElementById('menuBrand').style.transform = "translateY(0)";
                document.getElementById('menuBrand').style.height = "1px";
                setBrand(false)
            }else{
                document.getElementById('menuBrand').style.opacity = "1";
                document.getElementById('menuBrand').style.transition = "500ms all";
                document.getElementById('menuBrand').style.transform = "translateY(0)";
                document.getElementById('menuBrand').style.height = "200px";
                setBrand(true)
            }
        }
    }
    return(
        <div className="container mt-5" id="product-lists">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-md-12 col-lg-9" id="header">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg">
                            <h1 className="title"><span className="obj-el">{props.match.params.menu.replace(/-/g, ' ')}</span> | <span className="obj-el">{props.match.params.category.replace(/-/g, ' ')}</span></h1>
                        </div>
                        <div className="col-6 col-md-auto">
                            <div className="row align-items-center row-p">
                                <div className="col">
                                    <lable className="title subtitle"><span className="obj-el">Brands</span></lable>
                                </div>
                                <div className="col">
                                    <select className="form-control select">
                                        <option>Tory Burch</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-auto">
                            <div className="row align-items-center row-p">
                                <div className="col">
                                    <lable className="title subtitle"><span className="obj-el">Short By</span></lable>
                                </div>
                                <div className="col">
                                    <select className="form-control select">
                                        <option>Price low - high</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <SideBarProducts size={size} color={color} category={category} brand={brand} sizes={sizes} colors={colors} brands={brands} toggleClick={toggleClick} />
                </div>
                <div className={"col-md-9 " + activeClass}>
                <InfiniteScroll
                    dataLength={props.products.length} //This is important field to render the next data
                    hasMore={props.hasMore}
                    loader={<ProductItemLoader isLoading={props.isLoading} />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="row grid-list">
                    {
                        props.products.map((item, key) => {
                            return(
                                <div className="col-6 col-md-4 col-lg-auto position-relative" key={key}>
                                    <ProductItem data={item} key={key} isLoading={props.isLoading} />
                                </div>
                            )
                        })
                    }
                    </div>
                </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}