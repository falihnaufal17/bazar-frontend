import React, {Suspense, lazy} from 'react';

const PaymentShippingGuest = lazy(() => import('../components/PaymentShippingGuest'));
const PaymentEmailGuest = lazy(() => import('../components/PaymentEmailGuest'));
const PaymentBillingGuest = lazy(() => import('../components/PaymentBillingGuest'));
const PaymentReviewGuest = lazy(() => import('../components/PaymentReviewGuest'));

const PaymentMainGuest = (props) => {
    return(
        <Suspense>
            <PaymentShippingGuest token={props.token} />
            <PaymentEmailGuest token={props.token} />
            <PaymentBillingGuest token={props.token} />
            <PaymentReviewGuest token={props.token} />
        </Suspense>
    )
}

export default PaymentMainGuest