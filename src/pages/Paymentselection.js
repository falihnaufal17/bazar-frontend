import React, {Suspense, lazy} from 'react';

import '../assets/styles/Payment.scss'
const PaymentMain = lazy(() => import('../components/PaymentMain'));

const Paymentselection = (props) => {
  return (
    <Suspense fallback={<div/>}>
      <section id="section-payment">
        <div class="container">
          <div className="row">
            <div className="col-12 col-md-9">
              <PaymentMain />
            </div>
            <div className="col-12 col-md-3">
              
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  )
}  
 export default Paymentselection;