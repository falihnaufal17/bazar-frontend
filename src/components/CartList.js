import React, {useState} from 'react';
import Delete from '../assets/icons/CROSS.svg';
import axios from 'axios';

const CartList = props => {
    const [message, setMessage] = useState('');

    const deleteCart = () => {
        axios.delete(`${props.apiUrl}/cart/${props.id}`)
            .then(response => {
                setMessage(response.data.message)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                setMessage(err.response.data.message)
                throw err;
            })
    }

    return(
        <div>
            <div className="modal fade" id="dialog-message" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Message</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="dialog-delete" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure delete this item?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary" data-target="#dialog-message" data-toggle="modal" data-dismiss="modal" onClick={() => deleteCart()}>Yes</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <a href="#" data-target="#dialog-delete" data-toggle="modal"><img src={Delete} alt="delete" /></a>
                </div>
                <div className="col">
                    <div className="image position-relative">
                        <img src={props.image} alt={props.title} className="w-100 d-block"/>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md">
                            <div className="label">{props.title}</div>
                        </div>
                        <div className="col-12 col-md-auto">
                            <div className="label">${props.price}</div>
                        </div>
                    </div>
                    <div className="label detail">{props.subcategory}</div>
                    <div className="row">
                        <div className="col-12 col-md-auto">
                            <div className="row align-items-center">
                                <div className="col col-md-auto">
                                    <label className="label detail">Quantity</label>
                                </div>
                                <div className="col-auto">
                                    {/* <input type="text" name="quantity" className="form-control" /> */}
                                    <select className="form-control custom-form" name="quantity" onChange={e => {
                                        axios.patch(`${props.apiUrl}/cart/${props.id}`, {quantity: e.target.value, size: props.size})
                                            .then(response => {
                                                console.log(response.data)
                                                props.fetchCarts(props.apiUrl, JSON.parse(localStorage.getItem('profile')).id);
                                                return true;
                                            })
                                            .catch(err => {
                                                console.log(err);
                                                throw err;
                                            })
                                    }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
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
                                    <select className="form-control custom-form" name="size" onChange={e => {
                                        axios.patch(`${props.apiUrl}/cart/${props.id}`, {size: e.target.value, quantity: props.quantity})
                                            .then(response => {
                                                console.log(response.data)
                                                props.fetchCarts(props.apiUrl, JSON.parse(localStorage.getItem('profile')).id);
                                                return true;
                                            })
                                            .catch(err => {
                                                console.log(err);
                                                throw err;
                                            })
                                    }}>
                                        <option value={10}>10</option>
                                        <option value={4.5}>4.5</option>
                                        <option value={40}>40</option>
                                        <option value={5}>5</option>
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