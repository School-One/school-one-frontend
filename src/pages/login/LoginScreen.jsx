import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

//COMPONENTS
import LoadingBox from '../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../components/main/messageBox/MessageBox';
import ImageSVG from '../../img/img.svg';

//CSS
import styles from './Login.module.css';

//REDUX
import { login } from '../../redux/actions/userActions';

export default function LoginScreen(props) {

    const dispatch = useDispatch();

    const user = useSelector(state => state.userSignin);

    const { loading, error, userInfo } = user;

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/student';

    const { username, password, onChange  } = useForm({
        username: '',
        password: ''
    });

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(login(username, password));
    }

    useEffect(() => {
        
        if(userInfo){
            props.history.push(redirect);
        }

    }, [props.history, redirect, userInfo])

    return (
        <div className={styles.body}>
            <section className={styles.side}>
                <img src={ImageSVG} alt="a" className={styles.sideimage} />
            </section>
            
            <section className={styles.main}>
                <div className={styles.loginxcontainer}>
                    <p className={styles.title}>Welcome back</p>
                    <div className={styles.separator} />
                    {
                        loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (<><p className={styles.welcomexmessage}>Welcome to our E-learning :D</p></>)
                    }
                    
                    <form className={styles.loginxform} onSubmit={submitHandler}>
                        <div className={styles.formxcontrol}>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username}
                                onChange={(e) => onChange(e.target.value, 'username')}
                            />
                            <i className="fa fa-user" ></i>
                        </div>
                        <div className={styles.formxcontrol}>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => onChange(e.target.value, 'password')}
                            />
                            <i className="fa fa-lock"></i>
                        </div>
                        <button className={styles.submit}>Login</button>

                        <div className={styles.formxcontrol}>
                            <Link to="/" className={styles.comeback}>Regresar</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
