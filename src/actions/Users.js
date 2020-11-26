import axios from 'axios';

export const fetchProfile = (url, id) => {
    return(dispatch) => {
        dispatch({
            type: 'FETCH_PROFILE_PENDING'
        })

        return axios.get(`${url}/user/profile/${id}`)
            .then(response => {
                let payload = response.data;

                dispatch({
                    type: 'FETCH_PROFILE_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}