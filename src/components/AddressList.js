import React from 'react';
import Delete from '../assets/icons/DELETE.svg';

const AddressList = props => {
    return (
        <div className="position-relative mb-5 cards-address">
            <a href="#" className="delete">
                <img src={Delete} alt="delete" />
            </a>
            <div className="address-title text-center">Address {props.id + 1}</div>
            <div className="address-title address-subtitle">Shipping Address</div>
            <div className="address">{props.address}, {props.zip_code}, {props.state}</div>
            <div className="address-title address-subtitle">Billing Address</div>
            <div className="address mb-0">{props.address}, {props.zip_code}, {props.state}</div>
        </div>
    )
}

export default AddressList;