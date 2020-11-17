import React from 'react';

const SummaryBags = props => {
    return(
        <div className="main-card side-card">
            <div className="label">SUMMARY</div>
            <div className="hline"/>
            <div className="row">
                <div className="col">
                    <div className="label summary">Subtotal</div>
                </div>
                <div className="col-auto">
                    <div className="label summary">$19.05</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="label summary">Estimated Delivery</div>
                </div>
                <div className="col-auto">
                    <div className="label summary">$19.05</div>
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
                    <div className="label">$28.75</div>
                </div>
            </div>
            <a href="/payment" className="btn-primary">PROCEED TO CHECKOUT</a>
            <a href="#" className="btn-secondary">CONTINUE TO SHOPPING</a>
        </div>
    )
}

export default SummaryBags;