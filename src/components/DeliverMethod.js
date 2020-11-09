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
                            <DeliveryList type={d.type} detail={d.detail} delivery_in={d.delivery_in} price={d.price} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DeliverMethod;