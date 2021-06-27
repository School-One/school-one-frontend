import Axios from 'axios'
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT
} from '../constants/userConstants';

export const login = (username, password) => async(dispatch) =>{
    
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {username, password}
    })

    try {
        
        const { data } = await Axios.post(`http://localhost:4000/api/login`, {username, password});

        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, 
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }

}

export const signout = () => (dispatch) =>{

    localStorage.removeItem('userInfo');
    //localStorage.removeItem('cartItem');
    //localStorage.removeItem('shippingAddress');
    dispatch({type: USER_SIGNOUT});

}