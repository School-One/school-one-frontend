import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userSigninReducer } from './redux/reducers/userReducers';
import { coursesGetAllReducer, getCourseReducer } from './redux/reducers/courseReducer';
import { teacherGetCoursesReducer } from './redux/reducers/teacherReducer';

//Reducers
const reducer = combineReducers({
    userSignin: userSigninReducer,
    coursesList: coursesGetAllReducer,
    courseDetails: getCourseReducer,
    coursesByTeacher: teacherGetCoursesReducer
});
// const reducer = (state, action) =>{
//     return { products: 'hola' }
// }

//State
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo')) 
        : null
    }
};

//Store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;