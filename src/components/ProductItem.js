import React from 'react';
import Favorite from '../assets/icons/HEART SOLID 2.svg';

const ProductItem = props => {
    return(
        <div href="#" className="card">
            <div className="favorite" onClick={() => console.log('favorite kuu')}>
                <img src={Favorite} alt="favorite-icon" />
            </div>
            <div className="image">
                <img src={props.data.image} className="card-img-top" alt={props.data.product_name} />
            </div>
            <div className="card-body">
                <div className="category">{props.data.category}</div>
                <div className="product-name">{props.data.product_name}</div>
                <div className="price">${props.data.price}</div>
            </div>
        </div>
    )
}

export default ProductItem;