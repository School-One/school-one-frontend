import { 
    COURSES_GET_ALUMN_REQUEST,
    COURSES_GET_ALUMN_SUCCESS,
    COURSES_GET_ALUMN_FAIL,
    COURSE_GET_ALUMN_REQUEST,
    COURSE_GET_ALUMN_SUCCESS,
    COURSE_GET_ALUMN_FAIL
 } from '../constants/courseConstants';

 export const coursesGetAllReducer = (state = { courses: [] }, action) =>{
    switch(action.type){

        case COURSES_GET_ALUMN_REQUEST:
            return { loading: true };

        case COURSES_GET_ALUMN_SUCCESS:
            return { loading: false, courses: action.payload };

        case COURSES_GET_ALUMN_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;

    }
}

export const getCourseReducer = (state = { course: [] }, action) => {

    switch(action.type) {

        case COURSE_GET_ALUMN_REQUEST:
            return { loading: true };

        case COURSE_GET_ALUMN_SUCCESS:
            return { loading: false, course: action.payload };

        case COURSE_GET_ALUMN_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;

    }

}