import React from 'react'
import styles from './Course.module.css';

function HomeworkRow({ name, wasSent }) {

    let circleWasSent = wasSent ? styles.circleWasSent : styles.circleWasNotSent;
    let buttonWasSent = wasSent ? styles.buttonWasSent : styles.buttonWasNotSent;

    return (
        <div className={styles.HomeworkRow}>
            <div className={styles.HomeworkRowLeft}>
                <div className={circleWasSent}></div>
                <h1 className={styles.HomeworkRowTitle}>{name}</h1>
            </div>
            <button className={buttonWasSent}>
                Open
            </button>
        </div>
    )
}

export default function CourseScreen() {
    return (
        <div>
            <div>
                <div className={styles.courseHeader} style={{ backgroundImage: 'url(https://i.imgur.com/9lgeRVT.jpg)' }}>
                    <div className={styles.courseNameContainer}>
                        <h1 className={styles.courseName}>Course Names</h1>
                    </div>
                </div>
                <hr className={styles.hr} />
                <p className={styles.courseDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={styles.mainPanel}>
                <div className={`${styles.homeworkBox} ${styles.courseCard}`}>
                    <h2 className={styles.cardTitle}>Homeworks published</h2>
                    <div>
                        <HomeworkRow name="Homework C#" wasSent={true} />
                        <HomeworkRow name="Homework PHP" wasSent={false} />
                        <HomeworkRow name="Software project" wasSent={true} />
                    </div>
                </div>
                <div className={`${styles.teacherCard} ${styles.courseCard}`}>
                    <h1 className={styles.cardTitle}>Teacher</h1>
                    <div className={styles.teacherProfileImage} style={{ backgroundImage: 'url(https://i.imgur.com/9lgeRVT.jpg)' }} />
                    <h1 className={styles.teacherName}>Teacher name larger</h1>
                    <a href="/">
                        <button className={`${styles.teacherButton} ${styles.teacherButtonPrimary}`}>
                            Message
                        </button>
                    </a>
                    <a href="/">
                        <button className={`${styles.teacherButton} ${styles.teacherButtonSecondary}`}>
                            Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
