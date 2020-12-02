import axios from 'axios';

export const fetchDeliveryMethod = (url) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_DELIVERYMETHOD_PENDING'
        })

        return axios.get(`${url}/delivery-method`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_DELIVERYMETHOD_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_DELIVERYMETHOD_FAILED',
                })
                throw (error);
            })
    }
}