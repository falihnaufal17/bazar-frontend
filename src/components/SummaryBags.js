import React, { useState, useEffect } from 'react';

const SummaryBags = props => {
    const [token, setToken] = useState(null);
    let [subTotal, setSubTotal] = useState(0)
    useEffect(() => {
        setToken(localStorage.getItem('token'));
        props.carts.map((item, key) =>{
            setSubTotal(subTotal = subTotal + item.price * item.quantity)
        })
    }, [props.carts])
    props.setTotal(Number(subTotal) + Number(props.estimated.price))
    return(
        <div className="main-card side-card">
            <div className="label">SUMMARY</div>
            <div className="hline"/>
            <div className="row">
                <div className="col">
                    <div className="label summary">Subtotal</div>
                </div>
                <div className="col-auto">
                    <div className="label summary">${subTotal}</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="label summary">Estimated Delivery</div>
                </div>
                <div className="col-auto">
                    <div className="label summary">${props.estimated.price}</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="label summary">Estimated Duites and Tax</div>
                </div>
                <div className="col-auto">
                    <div className="label summary">$0</div>
                </div>
            </div>
            <div className="hline" />
            <div className="row mb-3">
                <div className="col">
                    <div className="label">Total</div>
                </div>
                <div className="col-auto">
                    <div className="label">${props.total}</div>
                </div>
            </div>
            <a href={token != null ? "/checkout/payment" : "/checkout/login"} className="btn-primary">PROCEED TO CHECKOUT</a>
            <a href="#" className="btn-secondary">CONTINUE TO SHOPPING</a>
        </div>
    )
}

export default SummaryBags;