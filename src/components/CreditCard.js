import React from 'react';
import MasterCard from '../assets/icons/MASTER CARD.svg';
import Card from '../assets/images/CREDIT-CARD.svg';
import {cc_format} from '../helpers';

const CreditCard = props => {
    return(
        <div className="position-relative mb-5 cards">
            <div className="credit-card">
                <div className="valign">
                    <div className="inner">
                        <img src={Card} alt="cc" />
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

export default CreditCard;