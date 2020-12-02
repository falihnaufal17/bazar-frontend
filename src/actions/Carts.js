import axios from 'axios';

export const fetchCarts = (url, user_id) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_CARTS_PENDING'
        })

        return axios.get(`${url}/cart/${user_id}`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_CARTS_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_CARTS_FAILED',
                })
                throw (error);
            })
    }
}