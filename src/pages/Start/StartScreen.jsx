import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import styled from 'styled-components';
import Tour from 'reactour';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../context/auth';
import DefaultPhoto from '../../img/default_photograph.png';

const SidebarStyled = styled.div`
  .sidebar {
    font-family: 'Poppins Regular';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 78px;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;
  }
  .sidebar_student {
    background-color: #1b1b55;
  }
  .sidebar_teacher {
    background-color: #42a5a4;
  }
  .sidebar.active {
    width: 240px;
    .logo-content {
      .logo {
        opacity: 1;
        pointer-events: none;
      }
      .logo i {
        opacity: 1;
      }
    }
    #btn {
      left: 90%;
    }
    ul li .tooltop {
      display: none;
    }
    .links_name {
      opacity: 1;
      pointer-events: auto;
    }
    .profile {
      .profile_details {
        opacity: 1;
        pointer-events: auto;
      }
      #log_out {
        left: 88%;
        background: none;
      }
    }
    .profile_student {
      background: #333399;
    }
    .profile_teacher {
      background: #2c6c6c;
    }
  }
  .sidebar.active ~ .home_content {
    width: calc(100% - 240px);
    overflow-y: scroll;
    scroll-behavior: smooth;
    left: 240px;
  }
  .logo-content {
    .logo {
      color: #fff;
      display: flex;
      height: 50px;
      width: 100%;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      .logo_name {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .logo i {
      font-size: 28px;
      margin-right: 5px;
      opacity: 0;
      transition: all 0.5s ease;
    }
  }
  #btn {
    position: absolute;
    color: #fff;
    left: 50%;
    top: 6px;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
  }
  ul {
    margin-top: 20px;
    padding: 0;
    li {
      position: relative;
      height: 50px;
      width: 100%;
      margin: 0 5px;
      list-style: none;
      line-height: 50px;
      .tooltop {
        position: absolute;
        left: 122px;
        top: 0;
        transform: translate(-50%, -50%);
        border-radius: 6px;
        height: 35px;
        width: 122px;
        background: #fff;
        line-height: 35px;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0s;
        opacity: 0;
        pointer-events: none;
        display: block;
      }
      .aa {
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        border-radius: 12px;
        white-space: nowrap;
        i {
          height: 50px;
          min-width: 50px;
          border-radius: 12px;
          line-height: 50px;
          text-align: center;
        }
        .links_name {
          opacity: 0;
          pointer-events: none;
        }
      }
      .aa:hover {
        color: #11101d;
        background: #fff;
      }
    }
    li:hover {
      .tooltop {
        transition: all 0.5s ease;
        opacity: 1;
        top: 50%;
      }
    }
  }
  .profile_content {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    .profile {
      position: relative;
      padding: 10px 6px;
      height: 60px;
      transition: all 0.5s ease;
      background: none;
      .profile_details {
        display: flex;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        img {
          height: 45px;
          width: 45px;
          object-fit: cover;
          border-radius: 12px;
        }
        .name_user {
          margin-left: 10px;
        }
        .name {
          font-size: 15px;
          font-weight: 400;
        }
        .surname {
          font-size: 12px;
        }
      }
      #log_out {
        position: absolute;
        left: 50%;
        bottom: 5px;
        transform: translateX(-50%);
        min-width: 50px;
        line-height: 50px;
        font-size: 20px;
        border-radius: 12px;
        text-align: center;
        transition: all 0.4s ease;
      }
      .log_out_student {
        background: #333399;
      }
      .log_out_teacher {
        background: #2c6c6c;
      }
    }
  }
  font-family: 'Poppins Regular';
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  .home_content {
    position: absolute;
    height: 100vh;
    width: calc(100% - 78px);
    overflow-y: scroll;
    scroll-behavior: smooth;
    left: 78px;
    transition: all 0.5s ease;
  }
  .sidebar.active ~ .home_content {
    width: calc(100% - 240px);
    left: 240px;
  }
`;
const steps = [
  {
    selector: '#sidebar',
    content: ({ setCurrentStep }) => (
      <p>
        Dentro de la barra, se encuentran las opciones principales con las que
        cuenta el sistema.
      </p>
    ),
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#cuenta',
    content: ({ setCurrentStep }) => <p>Aqui va la info</p>,
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#cursos',
    content: 'Aquí se puede visualizar los cursos que tiene el usuario',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#calendario',
    content: 'Aqui se puede ver a detalle la fecha de entrega de tarea',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#recordatorio',
    content: 'Aqui se avisa los cursos y tareas asignadas sin terminar',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#tablero',
    content:
      'Acá se puede visualizar todos los cursos que tiene disponible el alumno',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#por_hacer',
    content: 'Aquí se puede ver todos los trabajos que faltan realizar',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
  {
    selector: '#log_out',
    content: 'Este boton sirve cuando quieras salir del sistema',
    style: {
      background: '#333399',
      color: '#ffffff',
    },
  },
];

export default function StartScreen(props) {
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    const btn = document.querySelector('#btn');
    const sidebar = document.querySelector('.sidebar');

    btn.onclick = function () {
      sidebar.classList.toggle('active');
    };
  }, []);

  const logoutHandle = () => {
    logout();
    window.location.replace('/');
  };
  const [isTourOpen, setIsTourOpen] = useState(false);

  const history = useHistory();

  useHotkeys('C', () => {
    history.push('/');
  });

  useHotkeys('D', () => {
    history.push('/calendar');
  });

  useHotkeys('U', () => {
    history.push('/config');
  });

  useHotkeys('ctrl+i', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  });

  return (
    <>
      <Helmet>
        <title>Panel de Sophiano College</title>
      </Helmet>
      <SidebarStyled teacher={user.rol}>
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
        />
        <div
          className={`sidebar ${
            props.teacher === 'Profesor' ? 'sidebar_teacher' : 'sidebar_student'
          }`}
        >
          <div className="logo-content">
            <div className="logo">
              <i className="bx bxs-school icon" />
              <div className="logo_name">Sophiano</div>
            </div>
            <i className="bx bx-menu" id="btn" />
          </div>
          <ul className="nav_list" id="sidebar">
            <li>
              <Link to="/config" className="aa" id="cuenta">
                <i className="bx bx-user" />
                <span className="links_name">Cuenta</span>
              </Link>
              <span className="tooltop">Cuenta</span>
            </li>
            <li>
              {props.teacher === 'Profesor' ? (
                <Link to="/teacher" className="aa" id="cursos">
                  <i className="bx bxs-book-content" />
                  <span className="links_name">Cursos</span>
                </Link>
              ) : (
                <Link to="/student" className="aa" id="cursos">
                  <i className="bx bxs-book-content" />
                  <span className="links_name">Cursos</span>
                </Link>
              )}
              <span className="tooltop">Cursos</span>
            </li>
            <li>
              <Link to="/calendar" className="aa" id="calendario">
                <i className="bx bxs-calendar" />
                <span className="links_name">Calendario</span>
              </Link>
              <span className="tooltop">Calendario</span>
            </li>
            <li>
              <Link to="#" className="aa" id="recordatorio">
                <i className="bx bx-history" />
                <span className="links_name">Recordatorio</span>
              </Link>
              <span className="tooltop">Recordatorio</span>
            </li>
            <li>
              <Link
                onClick={() => setIsTourOpen(true)}
                to="#"
                className="aa"
                id="ayuda"
              >
                <i className="bx bx-help-circle" />
                <span className="links_name">Ayuda</span>
              </Link>
              <span className="tooltop">Ayuda</span>
            </li>
          </ul>
          <div className="profile_content">
            <div
              className={`profile ${
                props.teacher ? 'profile_teacher' : 'profile_student'
              }`}
            >
              <div className="profile_details">
                <img src={DefaultPhoto} alt="img" />
                <div className="name_user">
                  <div className="name">{user.name}</div>
                  <div className="surname">{user.lastname}</div>
                </div>
              </div>
              <i
                className={`bx bx-log-out ${
                  props.teacher ? 'log_out_teacher' : 'log_out_student'
                }`}
                id="log_out"
                onClick={logoutHandle}
              />
            </div>
          </div>
        </div>
        <div className="home_content">{props.children}</div>
      </SidebarStyled>
    </>
  );
}
