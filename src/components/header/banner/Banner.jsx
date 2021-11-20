import React from 'react';

import styles from './Banner.module.css';

import EducationCover from '../../../img/education_cover.svg';

export default function Banner() {
  return (
    <>
      <div className={styles.textBx}>
        <h2>
          Bienvenidos a
          <br />
          <span className={styles.textxwhite}>Sophiano College</span>
        </h2>
        <br />
        <h3>Una plataforma de revisión de tareas.</h3>
        <h3 style={{ fontSize: '1.6rem', backgroundColor: '#00000050' }}>
          <i>Moderna, más rápida, más segura, y simple de usar.</i>
        </h3>
        <br />
      </div>
      <img src={EducationCover} alt="New Sophiano College preview experience" />
    </>
  );
}
