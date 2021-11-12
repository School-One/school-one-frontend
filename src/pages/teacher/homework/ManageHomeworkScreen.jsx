import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../../context/auth';
import StartScreen from '../../Start/StartScreen';
import Sidebar from '../../student/Sidebar/Sidebar';
import { CREATE_HOMEWORK } from '../../../graphql/mutation';
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';

const ManageStyled = styled.div``;

export default function ManageHomeworkScreen(props) {
  const courseId = props.match.params.courseid;
  const { user } = useContext(AuthContext);

  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [errors, setErrors] = useState(null);

  const [createHomework, { loading }] = useMutation(CREATE_HOMEWORK, {
    update() {
      setTitulo('');
      setContenido('');
    },
    onError(err) {
      setErrors(
        err && err.graphQLErrors[0]
          ? err.graphQLErrors[0].extensions.exception.errors
          : {}
      );
    },
    variables: {
      courseId,
      title: titulo,
      content: contenido,
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    createHomework();
  };

  return (
    <StartScreen teacher={user.rol}>
      <Sidebar teacher={user.rol} course={courseId}>
        <ManageStyled>
          <div className="d-flex justify-content-center">
            <h1 className="fw-bold">Administrar tareas del curso</h1>
          </div>
          <div className="container-fluid my-4">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-md-3">
                  <button className="btn btn-outline-primary">
                    Crear tarea
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-outline-secondary">
                    Administrar tareas
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-outline-danger">
                    Eliminar tarea
                  </button>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <form
                  className="border border-5 p-3 mb-3 form-create"
                  onSubmit={submitHandler}
                >
                  {loading ? (
                    <LoadingBox />
                  ) : errors ? (
                    <MessageBox variant="danger">{errors.general}</MessageBox>
                  ) : null}
                  <div className="mb-3">
                    <label>Titulo</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Ingrese un titulo"
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Contenido</label>
                    <textarea
                      rows="4"
                      cols="50"
                      className="form-control my-3"
                      value={contenido}
                      onChange={(e) => setContenido(e.target.value)}
                    />
                  </div>
                  <button className="col-md-12 btn btn-outline-primary">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ManageStyled>
      </Sidebar>
    </StartScreen>
  );
}
