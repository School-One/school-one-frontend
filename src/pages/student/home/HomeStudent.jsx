import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { AuthContext } from '../../../context/auth';

// Graphql
import { GET_ALL_COURSES } from '../../../graphql/query';

import ImageExample from '../../../assets/img/Img.png';

// COMPONENTS
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';

import StartScreen from '../../Start/StartScreen';
import { Reminder } from '../../../components/main/reminder/Reminder';

const HomeStudentCard = ({
  courseId,
  image,
  courseName,
  courseGradeSection,
  courseTeacherName,
}) => (
  <div key={courseId} className="col">
    <div className="card c-bottom">
      <img src={image} className="card-img-top" alt={courseName} />
      <div className="card-body">
        <Link to={`course/${courseId}`} className="card-title blue-color-font">
          <h4>{courseName}</h4>
        </Link>
        <p className="card_mini">{courseGradeSection}</p>
        <p className="card_teacher">
          <i
            className="fas fa-chalkboard-teacher"
            style={{ marginRight: '0.5rem' }}
          />
          {courseTeacherName}
        </p>
      </div>
    </div>
  </div>
);

const HomeStyled = styled.div`
  .title_h2 {
    font-weight: 900;
  }
  .separator {
    width: 95%;
    height: 3px;
    background: #333399;
  }
  .c-bottom {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition-property: transform;
    transition-timing-function: ease;
    transition-duration: 300ms;
  }
  .c-bottom:hover {
    transform: scale(1.04);
  }
  .Todo_title {
    color: #333399;
    font-weight: bold;
    width: 100%;
    font-size: 14px;
  }
  .Todo_desc {
    font-size: 12px;
    font-weight: bold;
    color: #757575;
    transition: color 1s;
  }
  .Todo_desc:hover {
    color: black;
  }
  .Todo_fech {
    font-size: 12px;
    font-weight: bold;
    color: black;
    margin-top: 0.5rem;
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

  if (!user) {
    props.history.push('/');
  }

  const { loading, error, data } = useQuery(GET_ALL_COURSES, {
    variables: {
      userId: user.id,
    },
  });

  return (
    <StartScreen>
      <HomeStyled>
        <div className="container-fluid mt-3 ml-3">
          <div className="row">
            <div className="col-md-9 mb-5 px-4" id="tablero">
              <div className="title">
                <h2 className="title_h2">Cursos</h2>
              </div>
              <div className="separator mt-3" />
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                {loading ? (
                  <LoadingBox />
                ) : error ? (
                  <MessageBox variant="danger">{error.message}</MessageBox>
                ) : (
                  data
                  && data.getCourses.map((course) => (
                    <HomeStudentCard
                      courseId={course.id}
                      image={ImageExample}
                      courseName={course.name}
                      courseGradeSection={course.grade_section}
                      courseTeacherName={course.teacher.name}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="col-md-3" id="por_hacer">
              <div className="title">
                <h2 className="title_h2">Por hacer</h2>
              </div>
              <div className="separator mt-3" />
              <Reminder studentId={user.id} />
            </div>
          </div>
        </div>
      </HomeStyled>
    </StartScreen>
  );
}
