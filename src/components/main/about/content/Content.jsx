/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import jQuery from 'jquery';
import styles from './Content.module.css';

import Team from './components/Team';

import HomeImage from '../../../../img/home.svg';

// eslint-disable-next-line import/no-unresolved
import Map from './Map';

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
          <p className="title__consola show-on-scroll">
            Acerca de nosotros
          </p>
          <p className="about__us show-on-scroll">
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Fugiat odit nulla nostrum perferendis molestiae
            quaerat ducimus sequi omnis pariatur et quasi,
            voluptatum obcaecati nihil quod, quisquam ipsa earum
            repudiandae natus?
          </p>
        </div>
      </div>
      <hr />
      <h1 className="text-center">Nuestro equipo</h1>
      <div className="row text-center">
        <Team />
      </div>
      <hr />
      <h1 className="text-center">Ubicación</h1>
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    </>
  );
}
