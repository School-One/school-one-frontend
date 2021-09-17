import {
    TEACHER_GET_REQUEST,
    TEACHER_GET_SUCCESS,
    TEACHER_GET_FAIL
} from '../constants/teacherConstants';

export const teacherGetCoursesReducer = (state = { courses: []}, action) => {

    switch (action.type) {
        case TEACHER_GET_REQUEST:
            return {
                loading: true,
            };
    
        case TEACHER_GET_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            };

        case TEACHER_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }

}