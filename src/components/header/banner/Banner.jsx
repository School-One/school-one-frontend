import React from "react";
import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

import EducationCover from "../../../img/education_cover.svg";

export default function Banner() {
    return (
        <>
            <div className={styles.textBx}>
                <h2>
                    Bienvenidos a <br />
                    <span className={styles.textxwhite}>Sophiano College</span>
                </h2>
                <br />
                <h3>
                    Sitio web donde podras proveer a tus estudiantes una mejor
                    calidad de estudio online :D
                </h3>
                <br />
            </div>
            <img src={EducationCover} alt="New Sophiano College preview experience"  />
        </>
    );
}
