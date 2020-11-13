import React, { useState } from 'react';
import Favorite from '../assets/icons/HEART SOLID 2.svg';
import FavoriteActive from '../assets/icons/FAVORITE ACTIVE.svg';

const ProductItem = props => {
    const [isFavorite, setIsFavorite] = useState(props.data.isFavorite)
    const [stock, setStock] = useState(0 | props.data.stock)

    const _redirect = () => {
        if(stock > 0){
            window.location.href = '/product/detail';
        }else{
            return false;
        }
    }

    return(
        <>
            <div className="favorite" onClick={() => setIsFavorite(!isFavorite)}>
                <img src={isFavorite ? FavoriteActive : Favorite} alt="favorite-icon" />
            </div>
            <div onClick={() => _redirect()} className="card card-product">
                <div className="image">
                    <div className={stock > 0 ? "" : 'disabled'}>
                    </div>
                    <img src={props.data.image} className="card-img-top" alt={props.data.product_name} />
                </div>
                <div className="card-body">
                    <div className="category">{props.data.category}</div>
                    <div className="product-name">{props.data.product_name}</div>
                    <div className="price mb-2">${props.data.price}</div>
                    <div className="row row-color">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;