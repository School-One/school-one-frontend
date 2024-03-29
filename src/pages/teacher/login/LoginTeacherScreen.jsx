import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from '../../../hooks/useForm';
import { LOGIN_USER } from '../../../graphql/mutation';
import { AuthContext } from '../../../context/auth';

import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';
import BannerSVG from '../../../img/teaching.svg';

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
    background-color: #333399;
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
    transition: color 0.4s;
  }
  .input_login:focus ~ i {
    color: var(--green-color);
  }
  .button.submit {
    color: #fff;
    padding: 14px 64px;
    margin: 32px auto;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    background-image: linear-gradient(
      to right,
      var(--green-color),
      var(--blue-color)
    );
    cursor: pointer;
    transition: opacity 0.4s;
  }
  .button.submit:hover {
    opacity: 0.9;
  }
  .comeback {
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

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      login(userData);
      props.history.push('/');
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
      <div className="body-login">
        <section className="side">
          <img src={BannerSVG} alt="a" className="sideimage" />
        </section>

        <section className="main">
          <div className="loginxcontainer">
            <p className="title">Sophiano College</p>
            <div className="separator" />
            {loading ? (
              <LoadingBox />
            ) : errors ? (
              <MessageBox variant="danger">{errors.general}</MessageBox>
            ) : (
              <>
                <p className="welcomexmessage">Bienvenido docente</p>
              </>
            )}

            <form className="loginxform" onSubmit={submitHandler}>
              <div className="formxcontrol">
                <input
                  type="text"
                  placeholder="Usuario"
                  value={email}
                  onChange={(e) => onChange(e.target.value, 'email')}
                  className="input_login"
                  autoComplete="true"
                />
                <i className="fa fa-user" />
              </div>
              <div className="formxcontrol">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => onChange(e.target.value, 'password')}
                  className="input_login"
                  autoComplete="true"
                />
                <i className="fa fa-lock" />
              </div>
              <button className="button submit">Login</button>

              <div className="form_control_links">
                <Link to="/" className="comeback">
                  Inicio
                </Link>
                |
                <Link to="/login" className="comeback">
                  Soy estudiante
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </LoginStyled>
  );
}
