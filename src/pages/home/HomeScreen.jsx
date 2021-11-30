import React, { useContext, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../context/auth';

import styles from './Home.module.css';

const Navbar = lazy(() => import('../../components/header/Navbar'));
const Banner = lazy(() => import('../../components/header/banner/Banner'));
const LoadingHome = lazy(() => import('../../components/main/loadingHome/LoadingHome'));
const About = lazy(() => import('../../components/main/about/About'));
const Wave = lazy(() => import('../../components/main/svg/Wave'));
const Footer = lazy(() => import('../../components/footer/Footer'));

export default function HomeScreen(props) {
  const { user } = useContext(AuthContext);

  if (user && user.rol === 'Estudiante') {
    props.history.push('/student');
  } else if (user && user.rol === 'Profesor') {
    props.history.push('/teacher');
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sophiano College - Powered by School One</title>
        <meta
          name="description"
          content="Sophiano College liderada por un equipo humano de profesionales calificados, idóneos y comprometidos que propician la formación integral de los educandos."
        />
      </Helmet>
      <Suspense fallback={null}>
        <header>
          <Navbar />
          <LoadingHome />
        </header>
        <section className={styles.banner} id="home">
          <Banner />
        </section>
        <main>
          <div className={styles.container}>
            <Wave />
          </div>
          <div className="container-fluid">
            <About />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </Suspense>
    </>
  );
}
