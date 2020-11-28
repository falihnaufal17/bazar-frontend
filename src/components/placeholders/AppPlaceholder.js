import React, { useState } from 'react';
import Favorite from '../../assets/icons/HEART SOLID 2.svg';
import FavoriteActive from '../../assets/icons/FAVORITE ACTIVE.svg';
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

    return(
        <div className="row grid-list">
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