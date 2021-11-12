import React, { useEffect, useState } from 'react';

export const HomeworkForm = ({ courseId, homeworkId }) => (
  <form className="border border-5 p-3 mb-3">
    <div className="mb-3">
      <label>Nota</label>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Ingrese la nota de la tarea"
      />
    </div>
    <div className="mb-3">
      <label>Ingrese un comentario</label>
      <textarea rows="4" cols="50" className="form-control my-3" />
    </div>
    <button className="col-md-12 btn btn-outline-primary">Enviar</button>
    <div className="my-3">
      <p>
        ID-Curso:
        {courseId}
      </p>
      <p>
        ID-Tarea:
        {homeworkId}
      </p>
    </div>
  </form>
  );
