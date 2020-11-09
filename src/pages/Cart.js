import React, {Suspense, lazy} from 'react';
import Cart1 from '../assets/images/CART-1.svg';
import Cart2 from '../assets/images/CART-2.svg';

import '../assets/styles/Cart.scss';

const ShoppingBag = lazy(()=>import('../components/ShoppingBag'));
const DeliverMethod = lazy(() => import('../components/DeliverMethod'));
const SummaryBags = lazy(() => import('../components/SummaryBags'));

const Cart = props => {

    const dataCart = [
        {
            id: 1,
            product_name: 'Adidas Lotta Volkova',
            price: 635,
            image: Cart2,
            category: 'Women’s Dress',
            color: 'Green Light'
        },
        {
            id: 2,
            product_name: 'Alexander Mcqueen',
            price: 1270,
            image: Cart1,
            category: 'Women’s Dress',
            color: 'Pink-charcoal'
        }
    ]
    const deliver = [
        {
            id: 1,
            type: 'Postal',
            detail: 'Import charges collected upon delivery',
            delivery_in: 'Delivery in 4-6 weeks',
            price: '9.70'
        },
        {
            id: 2,
            type: 'Standard',
            detail: 'No additional import charges at delivery',
            delivery_in: 'Delivery in 10-16 business days',
            price: '20.70'
        },
        {
            id: 3,
            type: 'Express',
            detail: 'No additional import charges at delivery',
            delivery_in: 'Delivery in 9-14 business days',
            price: '30.00'
        }
    ]
    return(
        <Suspense fallback={<div />}>
            <div id="bags">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <ShoppingBag {...props} data={dataCart} />
                            <DeliverMethod {...props} data={deliver}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <SummaryBags {...props}/> 
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Cart;