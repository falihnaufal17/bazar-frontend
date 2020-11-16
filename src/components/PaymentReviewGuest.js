import React, {useState} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';

const PaymentReviewGuest = props => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="card">
            {
                isOpen ?
                (
                    <>
                        <div className="title">REVIEW AND COMPLETE</div>
                        <div className="form-group">
                            <label className="subtitle font-weight-normal">Insert the CVV/Security Code for your chosen payment card to complete your transaction</label>
                            <input type="text" className="form-control" placeholder="CVV/CID/CVC"/>
                        </div>
                        <div className="hline mb-2 mt-2" />
                        <div className="subtitle font-weight-bold mb-3">By completing your order, you declare that you are familiar with and accept Bazar General Terms and Conditions of Sale.</div>
                        <div className="text-center">
                            <a href="#" className="btn-primary">PLACE ORDER</a>
                        </div>
                    </>
                ):
                (
                    <div className="text-info pointer-event" onClick={()=>setIsOpen(!isOpen)}>REVIEW AND COMPLETE</div>
                )
            }
            
        </div>
    )
}

export default PaymentReviewGuest;