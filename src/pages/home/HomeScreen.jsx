import React from 'react';
import { useSelector } from 'react-redux';

//
import styles from './Home.module.css';
//
import Navbar from '../../components/header/Navbar';
import Banner from '../../components/header/banner/Banner';
import LoadingHome from '../../components/main/loadingHome/LoadingHome';
import About from '../../components/main/about/About';
import Wave from '../../components/main/svg/Wave';
import Footer from '../../components/footer/Footer';

export default function HomeScreen(props) {
    
    const userSignin = useSelector((state) => state.userSignin);

    const { userInfo } = userSignin;

    if(userInfo){
        props.history.push('/student');
    }

    return (
        <>          
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
    )
}
