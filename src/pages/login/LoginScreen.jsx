import React, { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../graphql/mutation';
import { AuthContext } from '../../context/auth';

//COMPONENTS
import LoadingBox from '../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../components/main/messageBox/MessageBox';
import ImageSVG from '../../img/img.svg';


const LoginStyled = styled.div`
    .body-login {
        font-family: 'Poppins', sans-serif !important;
        min-height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main {
        padding: 0px !important;
    }
    .loginxcontainer {
        max-width: 450px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        text-transform: uppercase;
        font-size: 3em;
        font-weight: bold;
        text-align: center;
        letter-spacing: 1px;
    }

    .separator {
        width: 150px;
        height: 4px;
        background-color: #843bc7;
        margin: 24px;
    }

    .welcomexmessage {
        text-align: center;
        font-size: 1.1em;
        line-height: 28px;
        margin-bottom: 30px;
        color: #696969;
    }

    .loginxform {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .formxcontrol {
        width: 100%;
        position: relative;
        margin-bottom: 24px;
        text-align: center;
    }
    .form_control_links {
        display: flex;
        justify-content: center;
        gap: 15px;
        text-align: center;
    }
    .input_login,
    .button {
        border: none;
        outline: none;
        border-radius: 30px;
        font-size: 1.1em;
    }
    .input_login {
        width: 100%;
        background: #e6e6e6;
        color: #333;
        letter-spacing: 0.5px;
        padding: 14px 64px;
    }
    .input_login ~ i {
        position: absolute;
        left: 32px;
        top: 50%;
        transform: translateY(-50%);
        color: #888;
        transition: color   0.4s;
    }
    .input_login:focus ~ i {
        color: #843bc7;
    }
    .button.submit {
        color: #fff;
        padding: 14px 64px;
        margin: 32px auto;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        background-image: linear-gradient(to right, #8b33c5, #15a0e1);
        cursor: pointer;
        transition: opacity 0.4s;
    }
    .button.submit:hover {
        opacity: 0.9;
    }
    .comeback{
        align-items: center;
        text-decoration: none !important;
        color: #888;
    }
    @media only screen and (max-width: 768px) {
        .side {
            display: none !important;
            .sideimage {
                display: none;
            }
        }
        .body-login {
            display: block;
        }
    }
`;

export default function LoginScreen(props) {

    const { login } = useContext(AuthContext);

    const [errors, setErrors] = useState(null);

    const { email, password, onChange  } = useForm({
        email: '',
        password: ''
    });

    const [ loginUser, { loading } ] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            login(userData);
            props.history.push('/student');
        },
        onError(err){
            setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        },
        variables: {
            email,
            password
        }
    });

    const submitHandler = (e) =>{
        e.preventDefault();
        loginUser();
    }

    return (
        <LoginStyled>
            <div className="body-login">
                <section className="side" >
                    <img src={ImageSVG} alt="a" className="sideimage" />
                </section>
                
                <section className="main">
                    <div className="loginxcontainer">
                        <p className="title">
                            Bienvenido de vuelta
                        </p>
                        <div className="separator" />
                        {
                            loading ? (<LoadingBox></LoadingBox>) : errors ? (<MessageBox variant="danger">{errors.general}</MessageBox>) : (<><p className="welcomexmessage" >Welcome to our E-learning :D</p></>)
                        }
                        
                        <form className="loginxform" onSubmit={submitHandler}>
                            <div className="formxcontrol">
                                <input 
                                    type="text" 
                                    placeholder="Username" 
                                    value={email}
                                    onChange={(e) => onChange(e.target.value, 'email')}
                                    className="input_login"
                                    autoComplete="true"
                                />
                                <i className="fa fa-user" ></i>
                            </div>
                            <div className="formxcontrol">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => onChange(e.target.value, 'password')}
                                    className="input_login"
                                    autoComplete="true"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                            <button className="button submit">Login</button>

                            <div className="form_control_links">
                                <Link to="/" className="comeback" >Regresar</Link>
                                |
                                <Link to="/login-teacher" className="comeback">Soy profesor</Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </LoginStyled>
    )
}
