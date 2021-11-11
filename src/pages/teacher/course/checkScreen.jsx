import React from 'react'
import { TeacherNav } from '../../../components/main/Teacher/TeacherNav';
import { useHomework } from '../../../hooks/useHomework';
import ReactHtmlParser from 'react-html-parser';

import { HomeworkForm } from '../../../components/main/form/HomeworkForm';

export default function checkScreen(props) {

    const courseId = props.match.params.courseId;
    const homeworkId = props.match.params.homeworkId;

    const { homeworks, paginaAnterior, paginaSiguiente } = useHomework(homeworkId);

    return (
        <>
            <TeacherNav />
            <div className="container-fluid">
                <div className="row my-3">
                    <div className="col-md-9">
                        <div style={{backgroundColor: '#D6D6D6', height: '38rem'}}>
                            <div className="p-3">
                                {
                                    homeworks && homeworks.map((homework, index) => (
                                        <div className="col-md-12" key={index}>
                                            <div className="col-md-8">
                                                <p>ID-Alumno: {homework.id}</p>
                                            </div>
                                            <div className="col-md-12">
                                                {ReactHtmlParser(homework.student_answer)}
                                            </div>
                                            <div className="relative">
                                                <div className="position-absolute" style={{bottom: '15px'}}>
                                                    Subido el {new Date(homework.submitAt).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Form */}
                        <HomeworkForm courseId={courseId} homeworkId={homeworkId} />
                        {/* Botones */}
                        <div className="d-flex justify-content-center">
                            <button onClick={() => paginaAnterior()} className="col-md-5 mx-2 btn btn-outline-primary">
                                Atras
                            </button>
                            <button onClick={() => paginaSiguiente()} className="col-md-5 btn btn-outline-primary">
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
