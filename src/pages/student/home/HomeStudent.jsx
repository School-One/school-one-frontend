import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../context/auth';

//Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_COURSES } from '../../../graphql/query';

import ImageExample from '../../../assets/img/Img.png';

//COMPONENTS
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';

import StartScreen from '../../Start/StartScreen';

const HomeStyled = styled.div`
    .title_h2 {
        font-weight: 900;
    }
    .separator {
        width: 75%;
        height: 3px;
        background: #333399;
    }
    .c-bottom {
        box-shadow: 0 4px 2px -2px gray;
    }
    .Todo_title {
        color: #00BFE9;
        font-weight: bold;
        width: 100%;
    }
    .Todo_desc {
        font-size: 12px;
        font-weight: bold;
        color: #757575;
    }
    .Todo_fech {
        font-size: 12px;
        font-weight: bold;
        color: #757575;
    }
    .icon_right {
        float: right;
        font-size: 25px;
        color: black;
    }
    .card_mini {
        font-size: 12px;
        font-weight: bold;
        color: #757575;
    }
    .card_teacher {
        font-size: 13px;
        font-weight: bold;
        color: #1b1b1b;
    }
    a {
        text-decoration: none;
    }
`;

export default function HomeStudent(props) {

    const { user } = useContext(AuthContext);

    if(!user) {
        props.history.push('/');
    }

    const { loading, error, data } = useQuery(GET_ALL_COURSES, {
        variables: {
            userId: user.id
        }
    });

    return (
        <StartScreen>
            <HomeStyled>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-10 mb-5">
                            <div className="title">
                                <h2 className="title_h2">Tablero</h2>
                            </div>
                            <div className="separator mt-3"></div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">

                               { loading ? (<LoadingBox />) : error ? (<MessageBox variant="danger">{error.message}</MessageBox>) : 
                               (   
                                    data && data.getCourses.map(course => (
                                        <div key={course.id} className="col">
                                            <div className="card c-bottom">
                                                <img src={ImageExample} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <Link to={`course/${course.id}`} className="card-title">
                                                        <h5>{course.name}</h5>
                                                    </Link>
                                                    <p className="card_mini">{course.grade_section}</p>
                                                    <p className="card_teacher"><i className="fas fa-chalkboard-teacher" style={{marginRight: '0.5rem'}}></i>{course.teacher.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))    
                               )}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="title">
                                <h2 className="title_h2">Por hacer</h2>
                            </div>
                            <div className="separator mt-3"></div>
                            <div className="row mt-3">
                                <p className="Todo_title">Tarea 1 <i className='bx bx-x icon_right' ></i></p>
                                <p className="Todo_desc">
                                    Enviar tarea a asignación
                                </p>
                                <p className="Todo_fech">
                                    02/07/2021 18:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeStyled>
        </StartScreen>      
    )
}
