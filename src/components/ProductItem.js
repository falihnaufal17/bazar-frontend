import React from 'react';
import Favorite from '../assets/icons/HEART SOLID 2.svg';

const ProductItem = props => {
    return(
        <div className="col-6 col-md-4 col-lg-auto position-relative" key={props.key}>
            <div className="favorite" onClick={() => console.log('favorite kuu')}>
                <img src={Favorite} alt="favorite-icon" />
            </div>
            <a href="/product/detail" className="card card-product">
                <div className="image">
                    <img src={props.data.image} className="card-img-top" alt={props.data.product_name} />
                </div>
                <div className="card-body">
                    <div className="category">{props.data.category}</div>
                    <div className="product-name">{props.data.product_name}</div>
                    <div className="price">${props.data.price}</div>
                </div>
            </a>
        </div>
    )
}

export default ProductItem;