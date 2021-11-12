import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ONE_COURSE } from '../../../graphql/query';
// SCREENS & COMPONENTS
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import StartScreen from '../../Start/StartScreen';
import Sidebar from './Sidebar';
import { Homeworks } from '../../../components/main/sidebar/Homeworks';
import DefaultPhoto from '../../../img/default_photograph.png';
import DetailModal from '../../../components/main/Modal/DetailModal';
import { AuthContext } from '../../../context/auth';

export default function CourseScreen(props) {
  const { user } = useContext(AuthContext);

  const courseId = props.match.params.courseid;

  const [modalOpen, setModalOpen] = useState(false);

  const { data: { getCourse } = {} } = useQuery(GET_ONE_COURSE, {
    variables: {
      courseId,
    },
  });

  let courseMarkUp;

  if (!getCourse) {
    courseMarkUp = <LoadingBox />;
  } else {
    const {
      id,
      name,
      // grade_section,
      teacher,
    } = getCourse;

    courseMarkUp = (
      <StartScreen teacher={user.rol}>
        <Sidebar step="Home" teacher={user.rol} course={courseId}>
          <div
            style={{
              background: `url(${
                `${process.env.PUBLIC_URL}/img/mate_wallpaper.jpg`
              }) no-repeat center`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              height: '200px',
              borderBottom: '5px solid #333399',
            }}
          >
            <div className="col-md-12">
              <div className="d-flex justify-content-center">
                <div
                  className="col-md-11 mt-5 rounded-pill"
                  style={{ backgroundColor: 'rgba(51,51,153,0.6)' }}
                >
                  <h2 className="text-white py-3 px-4 mt-1">{name}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className={`${
                user.rol === 'Profesor' ? 'col-md-12' : 'col-md-8'
              }`}
            >
              <Homeworks id={id} />
            </div>
            {user.rol === 'Profesor' ? null : (
              <div className="col-md-4">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: '#E6E6E6', borderRadius: '1rem' }}
                >
                  <div className="text-center py-3">
                    <h3>Profesor</h3>
                  </div>
                  <div className="py-2 d-flex justify-content-center">
                    <img
                      src={DefaultPhoto}
                      alt="Teacher_img"
                      className="img-fluid mb-3 rounded-pill"
                    />
                  </div>
                  <div className="text-center">
                    <h3>{teacher.name}</h3>
                  </div>
                  <div className="py-3 m-3">
                    <div
                      style={{
                        backgroundColor: '#333399',
                        borderRadius: '3rem',
                      }}
                    >
                      <div className="p-1 text-center text-white">
                        <h3>Message</h3>
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        backgroundColor: '#2F2E41',
                        borderRadius: '3rem',
                        cursor: 'pointer',
                      }}
                      onClick={() => setModalOpen(true)}
                      id="btn-detail"
                    >
                      <div className="p-1 text-center text-white">
                        <h3>Detalles</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <DetailModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              teacher={teacher}
            />
          </div>
        </Sidebar>
      </StartScreen>
    );
  }

  return courseMarkUp;
}
