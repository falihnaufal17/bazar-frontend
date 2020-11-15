import React, {lazy, Suspense, useState} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
const EditShipping = lazy(() => import('./EditShipping'));

const PaymentShipping = props => {
    const [isModify, setIsModify] = useState(false);
    let dataShipping = [
        {
            id: 1,
            name_person: 'Valentino Rossi',
            address: '825 10th St NW, Washington, DC',
            postal_code: 20001,
            state: 'United States'
        },
        {
            id: 2,
            name_person: 'Valentino Rossi',
            address: '825 10th St NW, Washington, DC',
            postal_code: 20001,
            state: 'United States'
        },
        {
            id: 3,
            name_person: 'Valentino Rossi',
            address: '825 10th St NW, Washington, DC',
            postal_code: 20001,
            state: 'United States'
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
        <Suspense fallback={<div/>}>
            <div className="card">
                <div className="row align-items-center justify-content-between mb-3">
                    <div className="col">
                        <div className="title mb-0">SHIPPING</div>
                    </div>
                    {
                        isModify ? 
                        (
                            <>
                                <div className="col-auto">
                                    <div className="subtitle pointer-event" onClick={()=>setIsModify(false)}><img className="rotate-90" src={Arrow} alt="arrow" /> Save & return</div>
                                </div>
                                <div className="col-auto">
                                    <div className="subtitle pointer-event" onClick={()=>setIsModify(false)}>Cancel</div>
                                </div>
                            </>
                        ) :
                        (
                            <div className="col-auto">
                                <div className="subtitle pointer-event" onClick={()=>setIsModify(!isModify)}>modify <img src={Arrow} alt="arrow" /></div>
                            </div>
                        )
                    }
                </div>
                {
                    isModify ?
                    (
                        <EditShipping data={dataShipping} deliveryMethod={deliver} />
                    ):
                    (
                        <>
                            <div className="card card-shipping">
                                <div className="row">
                                    <div className="col">
                                        <div className="subtitle">Valentino Rossi</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="subtitle">Shipping Address</div>
                                    </div>
                                </div>
                                <div className="hline-black" />
                                <div className="subtitle font-weight-normal">825 10th St NW, Washington, DC 20001, United States</div>
                            </div>
                            <div className="title">DELIVERY</div>
                            <div className="title font-weight-normal mb-1">Postal</div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="title font-weight-normal mb-1">Delivery in 4-6 weeks</div>
                                </div>
                                <div className="col">
                                    <div className="title font-weight-normal mb-1">(US) $9.70</div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </Suspense>
    )
}

export default PaymentShipping;