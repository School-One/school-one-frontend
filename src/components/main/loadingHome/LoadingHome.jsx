import React, { useEffect } from 'react';

import styles from './LoadingHome.module.css';

import $ from "jquery";

export default function LoadingHome() {

    useEffect(() => {

        $(function(){
            $(".LoadingHome_loader__wrapper__2V3wF").fadeOut("slow");
        });

    }, []);

    return (
        <>

            <div className={styles.loader__wrapper}>
                <span className={styles.loader}>
                    <span className={styles.loader__inner}></span>
                </span>
            </div>
        </>
    )
}
