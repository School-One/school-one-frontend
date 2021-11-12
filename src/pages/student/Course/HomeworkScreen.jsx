import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactHtmlParser from 'react-html-parser';
import StartScreen from '../../Start/StartScreen';
import Sidebar from '../Sidebar/Sidebar';
import { GET_HOMEWORK } from '../../../graphql/query';
import { Editor } from '../../../components/main/sidebar/Editor';
import { AuthContext } from '../../../context/auth';

export default function HomeworkScreen(props) {
  const { user } = useContext(AuthContext);

  if (!user) {
    props.history.push('/');
  }

  const courseId = props.match.params.courseid;
  const homeworkId = props.match.params.homeworkid;

  const { data: { getHomework } = {} } = useQuery(GET_HOMEWORK, {
    variables: {
      courseId,
      homeworkId,
    },
  });

  let homeworkMarkup;

  if (!getHomework) {
    homeworkMarkup = <p>Loading...</p>;
  } else {
    const {
      id, curse_id, title, content, answers, answerCount
    } = getHomework;

    homeworkMarkup = (
      <StartScreen>
        <Sidebar course={courseId}>
          <div className="row mt-3">
            <div className="col-md-12">
              <h1>{title}</h1>
            </div>
            <div
              className="col-md-11 my-4"
              style={{ height: '0.2rem', backgroundColor: '#D6D6D6' }}
            />
            <div className="col-md-11">
              <p>{content}</p>
            </div>
            <div
              className="col-md-11 my-4"
              style={{ height: '0.2rem', backgroundColor: '#D6D6D6' }}
            />
            <Editor id={id} courseId={courseId} />
            <div
              className="col-md-11 my-4"
              style={{ height: '0.2rem', backgroundColor: '#D6D6D6' }}
            />
            <div className="col-md-12">
              <h6 className="fw-bold">
                Respuestas (
                {answerCount}
                )
              </h6>
            </div>
          </div>
        </Sidebar>
      </StartScreen>
    );
  }

  return homeworkMarkup;
}
