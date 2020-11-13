import React from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
import CapaUp from '../assets/icons/CAPA UP.svg';

const PaymentLeft = props => {
    return(
        <div className="card card-left">
            <div className="row">
                <div className="col">
                    <div className="title">ORDER SUMMARY</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle">modify <img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
            <div className="hline mb-3" />
            <div className="scrollable mb-5">
                {
                    props.dataCart.map((item, index) => {
                        return(
                            <div className="row justify-content-center mb-3" key={index}>
                                <div className="col-auto">
                                    <div className="image">
                                        <img src={item.image} alt={item.product_item} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="item">{item.product_name}</div>
                                    <div className="item-child">{item.category}</div>
                                    <div className="item-child">Quantity - {item.quantity}</div>
                                    <div className="item-child">Size - {item.size}</div>
                                    <div className="subtitle">$ {item.price}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="hline mb-3" />
            <div className="row align-items-center mb-3">
                <div className="col">
                    <div className="subtitle font-weight-bold">Have a Voucher?</div>
                </div>
                <div className="col-auto">
                    <div>
                        <img src={CapaUp} alt="capa-up" className="rotate-90" />
                    </div>
                </div>
            </div>
            <div className="hline mb-3" />
            <div className="row mb-2">
                <div className="col">
                    <div className="subtitle">Subtotal (4 items)</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle">$ 1,460.00</div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="subtitle">Delivery Charges</div>
                    <div className="item-child">3 - 5 working days</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle">$ 9.70</div>
                </div>
            </div>
            <div className="hline mb-3" />
            <div className="row">
                <div className="col">
                    <div className="subtitle">Total</div>
                </div>
                <div className="col-auto">
                    <div className="subtitle">$ 1,460.00</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentLeft;