import axios from 'axios';

export const fetchProducts = (url, per_page, page, subcategory) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_PRODUCTS_PENDING'
        })

        return axios.get(`${url}/barang?per_page=${per_page}&page=${page}&subcategory=${subcategory}`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_PRODUCTS_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_PRODUCTS_FAILED',
                })
                throw (error);
            })
    }
}

export const fetchProductDetail = (url, id) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_PRODUCTDETAIL_PENDING'
        })

        return axios.get(`${url}/barang/${id}`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_PRODUCTDETAIL_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}