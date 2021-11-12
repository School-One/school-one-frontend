/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import jQuery from 'jquery';
import styles from './Content.module.css';

import HomeImage from '../../../../img/home.svg';

export default function Content() {
  useEffect(() => {
    const scroll = window.requestAnimationFrame
      || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });
      scroll(loop);
    }

    loop();

    function isElementInViewport(el) {
      // Special bonus for those using jQuery
      if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
      }

      const rect = el.getBoundingClientRect();

      return (
        (rect.top <= 0 && rect.bottom >= 0)
        || (rect.bottom
          >= (window.innerHeight || document.documentElement.clientHeight)
          && rect.top
            <= (window.innerHeight || document.documentElement.clientHeight))
        || (rect.top >= 0
          && rect.bottom
            <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={HomeImage}
            alt="home"
            className="inline-photo show-on-scroll"
          />
        </div>
        <div className="col-md-4 text-center font-general mt-4">
          <p className="title__consola show-on-scroll">Acerca de nosotros</p>
          <p className="about__us show-on-scroll">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            odit nulla nostrum perferendis molestiae quaerat ducimus sequi omnis
            pariatur et quasi, voluptatum obcaecati nihil quod, quisquam ipsa
            earum repudiandae natus?
          </p>
        </div>
      </div>
      <hr />
      <h1 className="text-center">Nuestro equipo</h1>
      <div className="row text-center">
        <div className="col-md-4">
          <div className={styles.about__card}>
            <img
              src="https://sophianocollege.com/pluginfile.php/1/theme_school/tutor1image/1622463604/1.jpg"
              className={styles.about__cardImage}
              alt=""
            />
            <div className={styles.about__cardText}>
              <h2>Don C. Beltrán</h2>
              <h3>Fundador</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.about__card}>
            <img
              src="https://sophianocollege.com/pluginfile.php/1/theme_school/tutor2image/1622463604/2.jpg"
              className={styles.about__cardImage}
              alt=""
            />
            <div className={styles.about__cardText}>
              <h2>Doña Rosa Delgado</h2>
              <h3>Fundadora</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.about__card}>
            <img
              src="https://sophianocollege.com/pluginfile.php/1/theme_school/tutor3image/1622463604/3.jpg"
              className={styles.about__cardImage}
              alt=""
            />
            <div className={styles.about__cardText}>
              <h2>Carlos Beltrán</h2>
              <h3>Promotor</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
