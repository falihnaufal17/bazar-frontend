import React, {Suspense, lazy, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchCarts } from '../actions/Carts';
import { fetchDeliveryMethod } from '../actions/DeliveryMethod';
import '../assets/styles/Cart.scss';

const ShoppingBag = lazy(()=>import('../components/ShoppingBag'));
const DeliverMethod = lazy(() => import('../components/DeliverMethod'));
const SummaryBags = lazy(() => import('../components/SummaryBags'));

const Cart = props => {
    const [estimated, setEstimated] = useState({
        price: 0
    })
    let [total, setTotal] = useState(0);
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('profile')) != null){
            props.fetchCarts(props.apiUrl, JSON.parse(localStorage.getItem('profile')).id);
        }
        props.fetchDeliveryMethod(props.apiUrl);
    }, [])
    return(
        <Suspense fallback={<div />}>
            <div id="bags">
                <div className="container">
                    {
                        props.carts.length > 0 ?
                        (
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <ShoppingBag {...props} data={props.carts} />
                                    <DeliverMethod {...props} data={props.deliveryMethod} estimated={estimated} setEstimated={setEstimated}/>
                                </div>
                                <div className="col-12 col-md-4">
                                    <SummaryBags {...props} estimated={estimated} total={total} setTotal={setTotal} /> 
                                </div>
                            </div>
                        ) : 
                        (
                            <div className="text-center p-5">
                                <h1>No Item Cart Here!</h1>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </Suspense>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.CartsReducer.result,
        isLoading: state.CartsReducer.isLoading,
        deliveryMethod: state.DeliveryMethodReducer.result,
        isLoadingDeliveryMethod: state.DeliveryMethodReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCarts: (url, user_id) => {
            dispatch(fetchCarts(url, user_id))
        },
        fetchDeliveryMethod: (url) => {
            dispatch(fetchDeliveryMethod(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);