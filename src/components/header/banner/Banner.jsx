import React from 'react';
import { Link } from 'react-router-dom';

//
import styles from './Banner.module.css';

import CloudImage from '../../../img/Cloud.png';

export default function Banner() {
    return (
        <>
            <div className={styles.textBx}>
                <h2>Bienvenidos a <br/><span className={styles.textxwhite}>Academy</span></h2>
                <h3>Sitio web donde podras proveer a tus estudiantes una mejor calidad de estudio online :D</h3>
                <Link to="#body" className={styles.btn}>About</Link>
            </div>
            <img src={CloudImage} alt="Cloud" />
        </>
    )
}
