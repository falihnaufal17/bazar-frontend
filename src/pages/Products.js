import React, {lazy, useState, useEffect} from 'react';
import '../assets/styles/Products.scss';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/Products';
import imgProduct from '../assets/images/adidas-originals-black-3-stripes-t-shirt 1.svg';
const ProductItem = lazy(()=>import('../components/ProductItem'));
const SideBarProducts = lazy(()=>import('../components/SideBarProducts'));

const Products = props => {
    const [category, setCategory] = useState(true);
    const [size, setSize] = useState(true);
    const [color, setColor] = useState(true);
    const [brand, setBrand] = useState(true);

    useEffect(() => {
        props.fetchProducts(props.apiUrl);
    }, []);

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
    return(
        <div className="container mt-5" id="product-lists">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-md-12 col-lg-9" id="header">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg">
                            <h1 className="title">{props.match.params.menu.replace(/-/g, ' ')} | {props.match.params.category.replace(/-/g, ' ')}</h1>
                        </div>
                        <div className="col-6 col-md-auto">
                            <div className="row align-items-center row-p">
                                <div className="col">
                                    <lable className="title subtitle">Brands</lable>
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
                                    <lable className="title subtitle">Short By</lable>
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
                <div className="col-md-9">
                    <div className="row grid-list">
                    {
                        props.products.map((item, key) => {
                            return(
                                <div className="col-6 col-md-4 col-lg-auto position-relative" key={key}>
                                    <ProductItem data={item} key={key} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pagination: state.ProductsReducer.pagination,
        products: state.ProductsReducer.result,
        isLoading: state.ProductsReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (url, per_page, page) => {
            dispatch(fetchProducts(url, per_page, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);