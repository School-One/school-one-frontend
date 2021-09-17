import axios from 'axios';

import {
    TEACHER_GET_REQUEST,
    TEACHER_GET_SUCCESS,
    TEACHER_GET_FAIL
} from '../constants/teacherConstants';

export const getCourses = () => async(dispatch, getState) => {

    dispatch({
        type: TEACHER_GET_REQUEST,
    })

    try {
        
        const { userSignin: { userInfo } } = getState();

        const { data } = await axios.get(`http://localhost:4000/api/User/teacher/${userInfo._id}`);

        dispatch({
            type: TEACHER_GET_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: TEACHER_GET_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}