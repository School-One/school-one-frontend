import React, { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../graphql/mutation";
import { AuthContext } from "../../context/auth";

//COMPONENTS
import LoadingBox from "../../components/main/loadingBox/LoadingBox";
import MessageBox from "../../components/main/messageBox/MessageBox";
import CollaborationImage from "../../img/real_time_collaboration.svg";
import styles from "./Login.module.css";

const LoginStyled = styled.div`
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

    const { email, password, onChange } = useForm({
        email: "",
        password: "",
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            login(userData);
            props.history.push("/student");
        },
        onError(err) {
            setErrors(
                err && err.graphQLErrors[0]
                    ? err.graphQLErrors[0].extensions.exception.errors
                    : {}
            );
        },
        variables: {
            email,
            password,
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser();
    };

    return (
        <LoginStyled>
            <div className={styles.bodyLogin}>
                <section className={styles.side}>
                    <img
                        src={CollaborationImage}
                        alt="a"
                        className={styles.sideimage}
                    />
                </section>

                <section className={styles.main}>
                    <div className={styles.loginxcontainer}>
                        <p className={styles.title}>Sophiano College</p>
                        <div className={styles.separator} />
                        {loading ? (
                            <LoadingBox></LoadingBox>
                        ) : errors ? (
                            <MessageBox variant="danger">
                                {errors.general}
                            </MessageBox>
                        ) : (
                            <>
                                <p className={styles.welcomexmessage}>
                                    Bienvenido alumno
                                </p>
                            </>
                        )}

                        <form
                            className={styles.loginxform}
                            onSubmit={submitHandler}
                        >
                            <div className={styles.formxcontrol}>
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    value={email}
                                    onChange={(e) =>
                                        onChange(e.target.value, "email")
                                    }
                                    className={styles.input_login}
                                    autoComplete="true"
                                />
                                <i className="fa fa-user"></i>
                            </div>
                            <div className={styles.formxcontrol}>
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) =>
                                        onChange(e.target.value, "password")
                                    }
                                    className={styles.input_login}
                                    autoComplete="true"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                            <button className={styles.buttonSubmit}>
                                Login
                            </button>

                            <div className={styles.form_control_links}>
                                <Link to="/" className={styles.comeback}>
                                    Regresar
                                </Link>
                                |
                                <Link
                                    to="/login-teacher"
                                    className={styles.comeback}
                                >
                                    Soy profesor
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </LoginStyled>
    );
}
