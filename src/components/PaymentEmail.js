import React, {useState, lazy, Suspense} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
const EditEmail = lazy(() => import('./EditEmail'));

const PaymentEmail = props => {
    const [isModify, setIsModify] = useState(false);

    return(
        <Suspense fallback={<div/>}>
            <div className="card">
                <div className="row align-items-center justify-content-between mb-3">
                    <div className="col">
                        <div className="title mb-0">EMAIL</div>
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
                        <EditEmail />
                    ) :
                    (
                        <div className="title">valentinorossi46@gmail.com</div>
                    )
                }
            </div>
        </Suspense>
    )
}

export default PaymentEmail;