import Axios from 'axios';
import { 
    COURSE_GET_ALUMN_REQUEST,
    COURSE_GET_ALUMN_SUCCESS,
    COURSE_GET_ALUMN_FAIL
 } from '../constants/courseConstants';

export const getCourseByAlumn = (userId) => async (dispatch) =>{

    dispatch({
        type: COURSE_GET_ALUMN_REQUEST,
        payload: userId,
    });

    try {

        
        const { data } = await Axios.get(`http://localhost:4000/api/course/student/${userId}`);

        dispatch({
            type: COURSE_GET_ALUMN_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: COURSE_GET_ALUMN_FAIL,
            payload: error
        });
    }

}