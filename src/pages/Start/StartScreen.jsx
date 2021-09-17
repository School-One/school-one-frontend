import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../img/Perfil.png';

import styled from 'styled-components';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/actions/userActions';

const SidebarStyled = styled.div`
    .sidebar {
        font-family: 'Poppins Regular';
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 78px;
        background-color: #1B1B55;
        padding: 6px 14px;
        z-index: 99;
        transition: all 0.5s ease;
        
    }
    .sidebar.active{
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
            background: #333399;
            .profile_details {
                opacity: 1;
                pointer-events: auto;
            }
            #log_out {
                left: 88%;
                background: none;
            }
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
            transition: all 0.5s ease;
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
                box-shadow: 0 5px 10px rgba(0,0,0,0.2);
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
                background: #333399;
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

export default function StartScreen(props) {

    const userSignin = useSelector((state) => state.userSignin);

    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
        
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function() {
            sidebar.classList.toggle("active");
        }

    }, []);

    const logout = () => {

        dispatch(signout());
        window.location.replace('/');

    }

    return (
        <SidebarStyled>
            <div className="sidebar">
                <div className="logo-content">
                    <div className="logo">
                        <i className='bx bxs-school icon' ></i>
                        <div className="logo_name">Academy</div>
                    </div>
                    <i className="bx bx-menu" id="btn" ></i>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link to="/student" className="aa" >
                            <i className="bx bx-user"></i>
                            <span className="links_name">User</span>
                        </Link>
                        <span className="tooltop">User</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bxl-zoom' ></i>
                            <span className="links_name">Clase</span>
                        </Link>
                        <span className="tooltop">Clase</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bxs-archive' ></i>
                            <span className="links_name">Archivos</span>
                        </Link>
                        <span className="tooltop">Archivos</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bx-calendar' ></i>
                            <span className="links_name">Calendario</span>
                        </Link>
                        <span className="tooltop">Archivos</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bxs-book-alt' ></i>
                            <span className="links_name">Calificaciones</span>
                        </Link>
                        <span className="tooltop">Calificaciones</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bx-conversation'></i>
                            <span className="links_name">Foro</span>
                        </Link>
                        <span className="tooltop">Foro</span>
                    </li>
                    <li>
                        <Link to="#" className="aa" >
                            <i className='bx bx-brightness'></i>
                            <span className="links_name">Configuración</span>
                        </Link>
                        <span className="tooltop">Configuración</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src={Profile} alt="img" />
                            <div className="name_user">
                                <div className="name">
                                    {userInfo.name}
                                </div>
                                <div className="surname">
                                    {userInfo.lastname}
                                </div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out" onClick={logout} ></i>
                    </div>
                </div>
            </div>
            <div className="home_content">
                {props.children}
            </div>
        </SidebarStyled>
    )
}
