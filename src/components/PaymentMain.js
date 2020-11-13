import React, {Suspense, lazy} from 'react';

const PaymentShipping = lazy(() => import('../components/PaymentShipping'));
const PaymentEmail = lazy(() => import('../components/PaymentEmail'));
const PaymentBilling = lazy(() => import('../components/PaymentBilling'));
const PaymentReview = lazy(() => import('../components/PaymentReview'));

const PaymentMain = props => {
    return(
        <Suspense>
            <PaymentShipping />
            <PaymentEmail />
            <PaymentBilling />
            <PaymentReview />
        </Suspense>
    )
}

export default PaymentMain;