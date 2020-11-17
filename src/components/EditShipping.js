import React, {lazy, Suspense} from 'react';
const DeliveryMethod = lazy(() => import('./DeliverMethod'));

const EditShipping = (p) => {
    return(
        <Suspense fallback={<div/>}>
            {
                p.data.map((item, key) => {
                    return(
                        <div>
                            <label className="for" htmlFor={item.id} key={key}>
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id={item.id} name="shippingAddress" value={item.id} className="custom-control-input" />
                                            <label className="custom-control-label label" htmlFor={item.id}></label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card-shipping mb-0">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="subtitle">{item.name_person}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="subtitle">Shipping Address</div>
                                                </div>
                                            </div>
                                            <div className="hline-black" />
                                            <div className="subtitle font-weight-normal">{item.address} {item.postal_code}, {item.state}</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )
                })
            }
            <a href="/profile/my-profile" className="btn-add-address">+ ADD YOUR SHIPPING ADDRESS</a>
            <div className="hline mt-5 mb-5" />
            <DeliveryMethod data={p.deliveryMethod}/>
        </Suspense>
    )
}

export default EditShipping;