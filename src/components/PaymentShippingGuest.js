import React, {lazy, Suspense, useState} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
const EditShipping = lazy(() => import('./EditShipping'));
const DeliveryMethod = lazy(() => import('./DeliverMethod'));

const PaymentShippingGuest = props => {
    const [isModify, setIsModify] = useState(false);
    const [data, setData] = useState({
        id: 1,
        name_person: '',
        address: '',
        postal_code: '',
        state: ''
    })
    const [dataShipping, setDataShipping] = useState([]);
    
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

    const handleInput = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        setData({...data, [name]: value})
    }

    const onSubmit = (param) => {
        dataShipping.push(param);
        setDataShipping(dataShipping)
    }

    console.log(dataShipping.length)

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
                                {
                                    dataShipping.length > 0 ?
                                    (
                                        <div className="subtitle pointer-event" onClick={()=>setIsModify(!isModify)}>modify <img src={Arrow} alt="arrow" /></div>
                                    ):
                                    (
                                        <div />
                                    )
                                }
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
                        {
                            dataShipping.length > 0 ?
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
                            ):
                            (
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <label className="subtitle">First name</label>
                                            <div className="form-group">
                                                <input type="text" name="name_person" className="form-control" onChange={(e) => handleInput(e)} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label className="subtitle">Last Name</label>
                                            <div className="form-group">
                                                <input type="text" name="name_person" className="form-control" onChange={(e) => handleInput(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <label className="subtitle">Address</label>
                                    <div className="form-group">
                                        <input type="text" name="address" className="form-control" onChange={(e) => handleInput(e)} />
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label className="subtitle">Country</label>
                                            <div className="form-group">
                                                <select className="form-control" onChange={(e) => handleInput(e)} name="state">
                                                    <option value="-">-</option>
                                                    <option value="indonesia">Indonesia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label className="subtitle">State / Province</label>
                                            <div className="form-group">
                                                <select className="form-control" onChange={(e) => handleInput(e)} name="province">
                                                    <option value="jawa-barat">Jawa Barat</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label className="subtitle">City</label>
                                            <div className="form-group">
                                                <select className="form-control" onChange={(e) => handleInput(e)} name="city">
                                                    <option value="bandung">Bandung</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label className="subtitle">ZIP Code</label>
                                            <input type="tel" className="form-control" onChange={(e) => handleInput(e)} name="postal_code" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Phone Number</label>
                                        <div className="input-group mb-2 mr-sm-2">
                                            <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="28" height="17" fill="white"/>
                                                <rect width="28" height="9" fill="#FF0000"/>
                                                </svg>
                                            </div>
                                            </div>
                                            <input type="tel" className="form-control custom-form" placeholder="+62"/>
                                        </div>
                                    </div>
                                    <DeliveryMethod data={deliver}/>
                                    <div className="text-right w-100">
                                        <a href="#" className="btn-primary pointer-event" onClick={() => onSubmit(data)}>ADD AS SHIPPING ADDRESS</a>
                                    </div>
                                </>
                            )
                        }
                            
                        </>
                    )
                }
            </div>
        </Suspense>
    )
}

export default PaymentShippingGuest;