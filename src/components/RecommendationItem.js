import React from 'react';

const RecommendationItem = props => {

    return(
        <>
            <a href="#" className="card recommendation" key={props.key}>
                <div className="image">
                    <img src={props.image} alt="recommendation" />
                </div>
                <div className="product-name">{props.product_name}</div>
                <div className="price">${props.price}</div>
            </a>
        </>
    )
}

export default RecommendationItem;