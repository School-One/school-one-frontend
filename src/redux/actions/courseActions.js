import Axios from 'axios';
import { 
    COURSES_GET_ALUMN_REQUEST,
    COURSES_GET_ALUMN_SUCCESS,
    COURSES_GET_ALUMN_FAIL,
    COURSE_GET_ALUMN_REQUEST,
    COURSE_GET_ALUMN_SUCCESS,
    COURSE_GET_ALUMN_FAIL
 } from '../constants/courseConstants';

export const getCoursesByAlumn = (userId) => async (dispatch, getState) =>{

    dispatch({
        type: COURSES_GET_ALUMN_REQUEST,
        payload: userId,
    });

    try {

        const {
            userSignin: { userInfo },
        } = getState();

        const { data } = await Axios.get(`http://localhost:4000/api/course/student/${userId}`, {
            headers: {
                Authorization: userInfo.token,
            },
        });

        dispatch({
            type: COURSES_GET_ALUMN_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: COURSES_GET_ALUMN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}

export const getCourseByAlumn = (courseId, userId) => async(dispatch, getState) => {

    dispatch({
        type: COURSE_GET_ALUMN_REQUEST,
        payload: {courseId, userId}
    });

    try {
        
        const { userSignin: { userInfo } } = getState();

        const { data } = await Axios.get(`http://localhost:4000/api/course/student/${courseId}/${userId}`, {
            headers: {
                Authorization: userInfo.token,
            },
        });

        dispatch({
            type: COURSE_GET_ALUMN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COURSE_GET_ALUMN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}