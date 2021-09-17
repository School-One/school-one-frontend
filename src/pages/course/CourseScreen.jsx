import React, { useEffect } from 'react'
import styles from './Course.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getCourseByAlumn } from '../../redux/actions/courseActions';
import LoadingBox from '../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../components/main/messageBox/MessageBox';
import StartScreen from '../Start/StartScreen';

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

export default function CourseScreen(props) {

    const courseId = props.match.params.courseid;

    const dispatch = useDispatch();

    const user = useSelector((state) => state.userSignin);
    
    const { userInfo } = user;

    const courseDetails = useSelector((state) => state.courseDetails);

    const { error, loading, course } = courseDetails;

    useEffect(() => {
        
        if(courseId) {
            dispatch(getCourseByAlumn(courseId, userInfo._id));
        }

    }, [dispatch, courseId, userInfo._id]);

    return (
        <StartScreen>
            {
                loading 
                ? 
                (<LoadingBox />) 
                : 
                error 
                ? 
                (<MessageBox variant="danger">{error}</MessageBox>) 
                : 
                (
                    <>
                    
                        <div>
                            <div className={styles.courseHeader} style={{ backgroundImage: 'url(https://i.imgur.com/9lgeRVT.jpg)' }}>
                                <div className={styles.courseNameContainer}>
                                    <h1 className={styles.courseName}>
                                        {
                                            course.name
                                        }
                                    </h1>
                                </div>
                            </div>
                            <hr className={styles.hr} />
                            {/* <p className={styles.courseDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
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
                                <h3 className={styles.teacherName}>
                                    {
                                        course.teacher && course.teacher.name + course.teacher.lastname
                                    }
                                </h3>
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quis tempore? Repellat consequuntur, iure quam veniam nobis ratione odit reiciendis et incidunt placeat obcaecati ex harum impedit laborum deserunt vero!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quis tempore? Repellat consequuntur, iure quam veniam nobis ratione odit reiciendis et incidunt placeat obcaecati ex harum impedit laborum deserunt vero!
                        </p>
                    </>
                )
            }
        </StartScreen>
    )
}
