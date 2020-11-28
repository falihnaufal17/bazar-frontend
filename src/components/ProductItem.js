import React, { useState } from 'react';
import Favorite from '../assets/icons/HEART SOLID 2.svg';
import FavoriteActive from '../assets/icons/FAVORITE ACTIVE.svg';

const ProductItem = props => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [stock, setStock] = useState(0 | props.data.stock)

    const _redirect = (id) => {
        // if(stock > 0){
            window.location.href = '/product/detail/' + id;
        // }else{
            // return false;
        // }
    }

    return(
        <div>
            <div className="favorite" onClick={() => setIsFavorite(!isFavorite)}>
                <img src={isFavorite ? FavoriteActive : Favorite} alt="favorite-icon" />
            </div>
            <div onClick={() => _redirect(props.data.id)} className="card card-product">
                <div className="image">
                    <div className={stock > 0 ? "" : 'disabled'}>
                    </div>
                    <div className="obj-el">
                        <img src={props.data.path} className="card-img-top" alt={props.data.title} />
                    </div>
                </div>
                <div className="card-body">
                    <div className="category"><span className="obj-el">{props.data.subcategory}</span></div>
                    <div className="product-name"><span className="obj-el">{props.data.title}</span></div>
                    <div className="price mb-2"><span className="obj-el">${props.data.price}</span></div>
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
}

export default ProductItem;