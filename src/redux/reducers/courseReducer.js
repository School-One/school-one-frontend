import { 
    COURSE_GET_ALUMN_REQUEST,
    COURSE_GET_ALUMN_SUCCESS,
    COURSE_GET_ALUMN_FAIL
 } from '../constants/courseConstants';

 export const courseGetAllReducer = (state = {}, action) =>{
    switch(action.type){

        case COURSE_GET_ALUMN_REQUEST:
            return { loading: true };

        case COURSE_GET_ALUMN_SUCCESS:
            return { loading: false, courses: action.payload };

        case COURSE_GET_ALUMN_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;

    }
 }