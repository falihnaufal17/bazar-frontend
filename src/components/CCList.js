import React from 'react';
import MasterCard from '../assets/icons/MASTER CARD.svg';
import Delete from '../assets/icons/DELETE.svg';
import CreditCard from '../assets/images/CREDIT-CARD.svg';
import {cc_format} from '../helpers';
import Edit from '../assets/icons/EDIT.svg';

const CCList = props => {
    return(
        <div className="position-relative mb-5 cards">
            <a href="#" className="delete">
                <img src={Delete} alt="delete"/>
            </a>
            <div className="edit">
                <div />
                <div className="text-center">
                    <a href="#">
                        edit your credit card <img src={Edit} alt="edit" />
                    </a>
                </div>
                <div />
            </div>
            <div className="credit-card">
                <div className="valign">
                    <div className="inner">
                        <img src={CreditCard} alt="cc" />
                    </div>
                </div>
                <div className="detail-card">
                    <div className="ml-auto"><img src={MasterCard} alt="master-card" /></div>
                    <div className="card-number text-center">{cc_format(props.cardNumber)}</div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="label-card">CARDHOLDER</div>
                            <div className="value-card">{props.cardHolder}</div>
                        </div>
                        <div>
                            <div className="label-card">EXPIRES</div>
                            <div className="value-card">{props.cardExpires}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CCList;