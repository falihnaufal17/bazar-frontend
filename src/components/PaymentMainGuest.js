import React, {Suspense, lazy} from 'react';

const PaymentShippingGuest = lazy(() => import('../components/PaymentShippingGuest'));
const PaymentEmailGuest = lazy(() => import('../components/PaymentEmailGuest'));
const PaymentBilling = lazy(() => import('../components/PaymentBilling'));
const PaymentReview = lazy(() => import('../components/PaymentReview'));

const PaymentMainGuest = (props) => {
    return(
        <Suspense>
            <PaymentShippingGuest token={props.token} />
            <PaymentEmailGuest token={props.token} />
            <PaymentBilling token={props.token} />
            <PaymentReview token={props.token} />
        </Suspense>
    )
}

export default PaymentMainGuest