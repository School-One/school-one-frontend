import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { useContext } from 'react/cjs/react.development';
import { GET_ALL_HOMEWORKS_PER_STUDENT } from '../../../graphql/query';
import { AuthContext } from '../../../context/auth';
import LoadingBox from '../loadingBox/LoadingBox';
import MessageBox from '../messageBox/MessageBox';

const HomeworksStyled = styled.div`
  background-color: #e6e6e6;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 5px 10px 18px #888888;
  #homeworks_title {
    text-align: center;
    font-weight: 600;
  }
  #place_homework {
    background-color: #c4c4c4;
  }
  #open_button {
    background-color: #444454;
    border-radius: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    text-decoration: none;
    font-weight: 600;
    color: white;
    transition: background-color 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  #open_button:hover {
    background-color: #333399;
  }
`;

export const Homeworks = ({ id }) => {
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_ALL_HOMEWORKS_PER_STUDENT, {
    variables: {
      courseId: id,
      userId: user.id,
    },
  });

  return (
    <HomeworksStyled>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error.message}</MessageBox>
      ) : (
        <>
          <div id="homeworks_title" className="py-3">
            {user.rol === 'Profesor' ? (
              <h3 className="fw-bold">Tareas del curso</h3>
            ) : (
              <h3 className="fw-bold">Tareas por realizar</h3>
            )}
          </div>
          {data
          && data.getHomeworks.map((homework, index) => (
            <Task key={index}>
              <div className="col-md-8 pt-3 pb-1">
                <h5 className="fw-bold ms-3">{homework.title}</h5>
              </div>
              <TaskActionButton>
                {user.rol === 'Profesor' ? (
                  <Link
                    className="py-1"
                    to={`/check/course/${id}/${homework.id}`}
                    id="open_button"
                  >
                    Revisar
                  </Link>
                  ) : (
                    <Link
                      to={`/course/${id}/assignments/${homework.id}`}
                      id="open_button"
                    >
                      Abrir
                    </Link>
                  )}
              </TaskActionButton>
            </Task>
            ))}
        </>
      )}
    </HomeworksStyled>
  );
};

const Task = ({ children, key }) => (
  <div className="my-2 mx-2" id="place_homework" key={key}>
    <div className="row">{children}</div>
  </div>
);

const TaskActionButton = ({ children }) => (
  <div className="col-md-2 pt-2 pb-2 mx-auto d-flex justify-content-center">
    {children}
  </div>
);

export default Homeworks;
