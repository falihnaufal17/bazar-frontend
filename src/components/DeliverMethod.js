import React from 'react';
import DeliveryList from './DeliveryList';

const DeliverMethod = props => {
    return(
        <div className="main-card">
            <div className="title"><span className="num">2 |</span> SELECT DELIVERY METHOD</div>
            {
                props.data.map((d, i) => {
                    return(
                        <div key={i}>
                            <DeliveryList delivery_type={d.delivery_type} delivery_additional={d.delivery_additional} delivery_in={d.delivery_in} price={d.price} estimated={props.estimated} setEstimated={props.setEstimated} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DeliverMethod;