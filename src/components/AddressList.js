import React from 'react';
import Delete from '../assets/icons/DELETE.svg';

const AddressList = props => {
    return (
        <div className="position-relative mb-5 cards-address">
            <a href="#" className="delete">
                <img src={Delete} alt="delete" />
            </a>
            <div className="row border-bottom mb-3">
                <div className="col">
                    <div className="address-title">{props.user.first_name} {props.user.last_name}</div>
                </div>
                <div className="col-auto">
                    <div className="address-title">Address</div>
                </div>
            </div>
            <div className="address">{props.address}, {props.zip_code}, {props.state}</div>
        </div>
    )
}

export default AddressList;