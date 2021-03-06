import React, {Suspense, lazy, useState} from 'react';
import Cart1 from '../assets/images/CART-1.svg';
import Cart2 from '../assets/images/CART-2.svg';

import '../assets/styles/Payment.scss'
const PaymentMain = lazy(() => import('../components/PaymentMain'));
const PaymentMainGuest = lazy(() => import('../components/PaymentMainGuest'));
const PaymentLeft = lazy(() => import('../components/PaymentLeft'));

const Paymentselection = (props) => {
  const dataCart = [
    {
        id: 1,
        product_name: 'Adidas Lotta Volkova',
        price: 635,
        image: Cart2,
        category: 'Women’s Dress',
        size: 'S',
        quantity: 2,
        color: 'Green Light'
    },
    {
        id: 2,
        product_name: 'Alexander Mcqueen',
        price: 1270,
        image: Cart1,
        category: 'Women’s Dress',
        size: 'S',
        quantity: 2,
        color: 'Pink-charcoal'
    },
    {
      id: 1,
      product_name: 'Adidas Lotta Volkova',
      price: 635,
      image: Cart2,
      category: 'Women’s Dress',
      size: 'S',
      quantity: 2,
      color: 'Green Light'
  },
  {
      id: 2,
      product_name: 'Alexander Mcqueen',
      price: 1270,
      image: Cart1,
      category: 'Women’s Dress',
      size: 'S',
      quantity: 2,
      color: 'Pink-charcoal'
  },
  {
    id: 1,
    product_name: 'Adidas Lotta Volkova',
    price: 635,
    image: Cart2,
    category: 'Women’s Dress',
    size: 'S',
    quantity: 2,
    color: 'Green Light'
  },
  {
      id: 2,
      product_name: 'Alexander Mcqueen',
      price: 1270,
      image: Cart1,
      category: 'Women’s Dress',
      size: 'S',
      quantity: 2,
      color: 'Pink-charcoal'
  },
  {
    id: 1,
    product_name: 'Adidas Lotta Volkova',
    price: 635,
    image: Cart2,
    category: 'Women’s Dress',
    size: 'S',
    quantity: 2,
    color: 'Green Light'
  },
  {
    id: 2,
    product_name: 'Alexander Mcqueen',
    price: 1270,
    image: Cart1,
    category: 'Women’s Dress',
    size: 'S',
    quantity: 2,
    color: 'Pink-charcoal'
  }
  ]
  const [token, setToken] = useState(null)
  return (
    <Suspense fallback={<div/>}>
      <section id="section-payment">
        <div class="container">
          <div className="row">
            <div className="col-12 col-md-9">
              {
                token != null ?
                (
                  <PaymentMain {...props}/>
                ):
                (
                  <PaymentMainGuest {...props} token={token} />
                )
              }
            </div>
            <div className="col-12 col-md-3">
              <PaymentLeft dataCart={dataCart}/>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  )
}  
 export default Paymentselection;