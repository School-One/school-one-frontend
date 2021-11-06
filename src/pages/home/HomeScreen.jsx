import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { Helmet } from 'react-helmet';

import styles from './Home.module.css';

import Navbar from '../../components/header/Navbar';

import Banner from '../../components/header/banner/Banner';
import LoadingHome from '../../components/main/loadingHome/LoadingHome';
import About from '../../components/main/about/About';
import Wave from '../../components/main/svg/Wave';
import Footer from '../../components/footer/Footer';

export default function HomeScreen(props) {
    const { user } = useContext(AuthContext);

    if (user) {
        props.history.push('/student');
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
        </>
    );
}
