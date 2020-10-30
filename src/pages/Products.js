import React, {useState} from 'react';
import '../assets/styles/Products.scss';
import imgProduct from '../assets/images/adidas-originals-black-3-stripes-t-shirt 1.svg';
import ProductItem from '../components/ProductItem';
import CapaUp from '../assets/icons/CAPA UP.svg';

const Products = props => {
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
    const dataProduct = [
        {
            id: 1,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 2,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 3,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 4,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 5,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 6,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 7,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
        },
        {
            id: 8,
            category: 'Dress',
            product_name: 'Alexander McQueen',
            price: 635,
            image: imgProduct
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
                <div className="col-md-3"></div>
                <div className="col-md-9" id="header">
                    <div className="row align-items-center">
                        <div className="col-12 col-md">
                            <h1 className="title">{props.match.params.menu} | Dress</h1>
                        </div>
                        <div className="col-6 col-md-auto">
                            <div className="valign">
                                <div className="inner">
                                    <lable className="title subtitle">Brands</lable>
                                    <select className="form-control select">
                                        <option>Tory Burch</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-auto">
                            <div className="valign">
                                <div className="inner">
                                    <lable className="title subtitle">Short By</lable>
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
                    <div className="title side-title">Select Price</div>
                    <div className="row row-p">
                        <div className="col">
                            <div className="form-group">
                                <input type="number" className="form-control" />
                            </div>
                            <div>Min.</div>
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="line" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="ellipse" />
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="number" className="form-control" />
                            </div>
                            <div>Min.</div>
                        </div>
                        <div className="col">
                            <a href="#" className="btn-set">Set</a>
                        </div>
                    </div>
                    <div className="row align-items-center" id="category" onClick={() => toggleClick('category')}>
                        <div className="col">
                            <div className="title side-title side-sub-title">All / Women / Dress</div>
                        </div>
                        <div className="col-auto">
                            {
                                category ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                            }
                        </div>
                    </div>
                    <div className="menu" id="menu">
                        <a href="#" className="item-menu">ActiveWear</a>
                        <a href="#" className="item-menu">Bridal</a>
                        <a href="#" className="item-menu">Denim</a>
                        <a href="#" className="item-menu">Dresses</a>
                        <a href="#" className="item-menu">Intimates</a>
                        <a href="#" className="item-menu">Jackets</a>
                        <a href="#" className="item-menu">Jumpsuits & Rompers</a>
                    </div>
                    <div className="row align-items-center" id="size" onClick={() => toggleClick('size')}>
                        <div className="col">
                            <div className="title side-title">Size</div>
                        </div>
                        <div className="col-auto">
                            {
                                size ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                            }
                        </div>
                    </div>
                    <div className="menu" id="menuSize">
                        {
                            sizes.map((item, key) => {
                                return(
                                    <div className="custom-control custom-checkbox" key={key}>
                                        <input type="checkbox" className="custom-control-input" id={`size-${item.id}`} />
                                        <label className="custom-control-label item-menu" for={`size-${item.id}`}>{item.size}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row align-items-center" id="color" onClick={() => toggleClick('color')}>
                        <div className="col">
                            <div className="title side-title">Color</div>
                        </div>
                        <div className="col-auto">
                            {
                                color ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                            }
                        </div>
                    </div>
                    <div className="menu" id="menuColor">
                        {
                            colors.map((item, key) => {
                                return(
                                    <div className="custom-control custom-checkbox" key={key}>
                                        <input type="checkbox" className="custom-control-input" id={`color-${item.id}`} />
                                        <label className="custom-control-label item-menu" for={`color-${item.id}`}>{item.color}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row align-items-center" id="brand" onClick={() => toggleClick('brand')}>
                        <div className="col">
                            <div className="title side-title">Brand</div>
                        </div>
                        <div className="col-auto">
                            {
                                brand ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                            }
                        </div>
                    </div>
                    <div className="menu" id="menuBrand">
                        {
                            brands.map((item, key) => {
                                return(
                                    <div className="custom-control custom-checkbox" key={key}>
                                        <input type="checkbox" className="custom-control-input" id={`brand-${item.id}`} />
                                        <label className="custom-control-label item-menu" for={`brand-${item.id}`}>{item.brand}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row grid-list">
                    {
                        dataProduct.map((item, key) => {
                            return(
                                <div className="col-6 col-md-auto" key={key}>
                                    <ProductItem data={item} />
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

export default Products;