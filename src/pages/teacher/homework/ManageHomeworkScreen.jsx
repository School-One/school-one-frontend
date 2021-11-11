import React, { useState } from 'react';
import { useMutation } from "@apollo/react-hooks";
import StartScreen from '../../Start/StartScreen';
import Sidebar from '../../student/Sidebar/Sidebar';
import styled from 'styled-components';
import { CREATE_HOMEWORK } from '../../../graphql/mutation';
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';

const ManageStyled = styled.div`
`;

export default function ManageHomeworkScreen() {

  const [cursoId, setCursoId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [errors, setErrors] = useState(null);

  const [ createHomework, {loading} ] = useMutation(CREATE_HOMEWORK, {
    update() {
        setCursoId('');
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
        courseId: cursoId,
        title: titulo,
        content: contenido
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    createHomework();
};

  return (
    <StartScreen>
      <Sidebar>
        <ManageStyled>
          <div className="d-flex justify-content-center">
            <h1 className="fw-bold">Administrar tareas del curso</h1>
          </div>
          <div className="container-fluid my-4">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-md-3">
                  <button
                    className="btn btn-outline-primary"
                  >
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
                <form className="border border-5 p-3 mb-3 form-create" onSubmit={submitHandler}>
                    {loading ? (
                            <LoadingBox></LoadingBox>
                        ) : errors ? (
                            <MessageBox variant="danger">
                                {errors.general}
                            </MessageBox>
                        ) : (
                            null
                    )}
                  <div className="mb-3">
                    <label>ID-Curso</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Ingrese el id del curso"
                      value={cursoId}
                      onChange={(e) => setCursoId(e.target.value)}
                    />
                  </div>
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
                    ></textarea>
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
