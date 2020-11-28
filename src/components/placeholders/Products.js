import React from 'react';
import ProductItem from '../ProductItem';
import SideBarProducts from '../SideBarProducts';

const ProductsPlaceholder = (props) => {

    let activeClass = 'cp-placeholder transparent'

    if(props.isLoading){
        activeClass = activeClass + ' active'
    }
    let products = [
        {
            category: "Shoes",
            color_id: "476875",
            id: 7,
            images_id: 3,
            path: "https://via.placeholder.com/150",
            price: 70.98,
            subcategory: "Heels",
            title: "Sam Edelman Patti Ankle Strap Heeled Sandal",
            type: "Classic Nude Patent",
        },
        {
            category: "Shoes",
            color_id: "476875",
            id: 7,
            images_id: 3,
            path: "https://via.placeholder.com/150",
            price: 70.98,
            subcategory: "Heels",
            title: "Sam Edelman Patti Ankle Strap Heeled Sandal",
            type: "Classic Nude Patent",
        },
        {
            category: "Shoes",
            color_id: "476875",
            id: 7,
            images_id: 3,
            path: "https://via.placeholder.com/150",
            price: 70.98,
            subcategory: "Heels",
            title: "Sam Edelman Patti Ankle Strap Heeled Sandal",
            type: "Classic Nude Patent",
        },
        {
            category: "Shoes",
            color_id: "476875",
            id: 7,
            images_id: 3,
            path: "https://via.placeholder.com/150",
            price: 70.98,
            subcategory: "Heels",
            title: "Sam Edelman Patti Ankle Strap Heeled Sandal",
            type: "Classic Nude Patent",
        },
        {
            category: "Shoes",
            color_id: "476875",
            id: 7,
            images_id: 3,
            path: "https://via.placeholder.com/150",
            price: 70.98,
            subcategory: "Heels",
            title: "Sam Edelman Patti Ankle Strap Heeled Sandal",
            type: "Classic Nude Patent",
        }
    ]
    return(
        <div className={"container mt-5 " + activeClass} id="product-lists">
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
                                <div className="col obj-el">
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
                                <div className="col obj-el">
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
                    {/* <SideBarProducts /> */}
                </div>
                <div className={"col-md-9"}>
                    <div className="row grid-list">
                        {
                            products.map((item, key) => {
                                return(
                                    <div className="col-6 col-md-4 col-lg-auto position-relative" key={key}>
                                        <ProductItem data={item} key={key} isLoading={props.isLoading} />
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

export default ProductsPlaceholder;