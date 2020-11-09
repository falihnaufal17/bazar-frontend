import React from 'react';

const DeliveryList = props => {
    return(
        <div>
            <label className="for" htmlFor={props.type}>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <div className="custom-control custom-radio">
                            <input type="radio" id={props.type} name="deliveryMethod" value={props.type} className="custom-control-input" />
                            <label className="custom-control-label label" htmlFor={props.type}></label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="label mb-0">{props.type}</div>
                        <div className="label detail-delivery">{props.detail}</div>
                        <div className="label detail-delivery italic">{props.delivery_in}</div>
                    </div>
                    <div className="col-auto">
                        <div className="label detail-delivery">(US) ${props.price}</div>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default DeliveryList;