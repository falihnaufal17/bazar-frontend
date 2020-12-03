import React from 'react';
import CartList from './CartList';

const ShoppingBag = props => {
    return(
        <div className="main-card">
            <div className="title"><span className="num">1 |</span> YOUR ITEMS ADDED TO SHOPPING BAG</div>
            {
                props.data.map((d, i) => {
                    return(
                        <div key={i}>
                            <CartList {...props} id={d.id} title={d.title} quantity={d.quantity} size={d.size} color={d.color} price={d.price} image={d.image} subcategory={d.subcategory}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShoppingBag;