import React from 'react';

//
import styles from './Home.module.css';
//
import Navbar from '../../components/header/Navbar';
import Banner from '../../components/header/banner/Banner';

export default function HomeScreen() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section className={styles.banner} id="home">
                <Banner />
            </section>
            <main className={styles.containerxfluid}>
                
            </main>
            
            <footer>

            </footer>
        </>
    )
}
