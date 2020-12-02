import React from 'react';
import {handleChange} from '../helpers'

const DeliveryList = props => {
    return(
        <div>
            <label className="for" htmlFor={props.type}>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <div className="custom-control custom-radio">
                            <input type="radio" id={props.type} name="price" value={props.price} onChange={(e) => handleChange(e, props.estimated, props.setEstimated)} className="custom-control-input" />
                            <label className="custom-control-label label" htmlFor={props.delivery_type}></label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="label mb-0">{props.delivery_type}</div>
                        <div className="label detail-delivery">{props.delivery_additional}</div>
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