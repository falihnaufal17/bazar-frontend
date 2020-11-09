import React from 'react';
import Delete from '../assets/icons/CROSS.svg';

const CartList = props => {
    return(
        <div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <a href="#"><img src={Delete} alt="delete" /></a>
                </div>
                <div className="col-auto">
                    <div className="image">
                        <img src={props.image} alt={props.product_name}/>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md">
                            <div className="label">{props.product_name}</div>
                        </div>
                        <div className="col-12 col-md-auto">
                            <div className="label">${props.price}</div>
                        </div>
                    </div>
                    <div className="label detail">{props.category}</div>
                    <div className="row">
                        <div className="col-12 col-md-auto">
                            <div className="row align-items-center">
                                <div className="col col-md-auto">
                                    <label className="label detail">Quantity</label>
                                </div>
                                <div className="col-auto">
                                    <select className="form-control custom-form">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-auto">
                            <div className="row align-items-center">
                                <div className="col col-md-auto">
                                    <label className="label detail mb-0">Size</label>
                                </div>
                                <div className="col-auto">
                                    <select className="form-control custom-form">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="label detail">Color: {props.color}</div>
                </div>
            </div>
            <div className="hline"></div>
        </div>
    )
}

export default CartList