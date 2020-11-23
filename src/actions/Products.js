import axios from 'axios';

export const fetchProducts = (url, per_page, page) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_PRODUCTS_PENDING'
        })

        return axios.get(`${url}/barang`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_PRODUCTS_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}