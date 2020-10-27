import React from 'react';
import '../assets/styles/Products.scss';
import imgProduct from '../assets/images/adidas-originals-black-3-stripes-t-shirt 1.svg';
import ProductItem from '../components/ProductItem';

const Products = props => {
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
    ]
    return(
        <div className="container mt-5" id="product-lists">
            <div className="row">
                <div className="col-md-3">
                    <div>Select Price</div>
                </div>
                <div className="col-md-9">
                    <section id="header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h1 className="title">Women | Dress</h1>
                            </div>
                            <div className="col-auto">
                                <div className="valign">
                                    <div className="inner">
                                        <lable className="title subtitle">Brands</lable>
                                        <select className="form-control select">
                                            <option>Tory Burch</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
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
                    </section>
                    <section>
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
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Products;