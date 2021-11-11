import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../context/auth';

const SidebarStyled = styled.div`
    .li {
        border-left: 0px solid #333399;
        transition: border-left 0.5s ease-in-out;
        .li-text{
            cursor: pointer;
        }
    }
    .li:hover {
        border-left: 5px solid #333399;
    }
    .li-active {
        border-left: 5px solid #333399;
    }
`;

export default function Sidebar(props) {
    const { user } = useContext(AuthContext);
    return (
        <SidebarStyled>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-12">
                        
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li className={`li ${props.step === 'Home' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1" style={{textDecoration: 'none', color: 'black'}} >Home</p>
                            </li>
                            <li className={`li ${props.step === 'Clase' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Clase</p>
                            </li>
                            <li className={`li ${props.step === 'Drive' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Drive</p>
                            </li>
                            <li className={`li ${props.step === 'Asignaciones' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Asignaciones</p>
                            </li>
                            <li className={`li ${props.step === 'Foro' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Foro</p>
                            </li>
                            {
                                user.rol === 'Profesor' ? (
                                    <>
                                        <li className={`li ${props.step === 'Administrar' ? 'li-active' : ''} my-2`}>
                                            <Link to="/manage" className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Administrar</Link>
                                        </li>
                                        <li className={`li ${props.step === 'Asistencia' ? 'li-active' : ''} my-2`}>
                                            <Link to="/attendance" className="li-text ms-1 my-2" style={{textDecoration: 'none', color: 'black'}} >Marcar Asistencia</Link>
                                        </li>
                                    </>
                                ) : (
                                    null
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-md-10">
                        {
                            props.children
                        }
                    </div>
                </div>
            </div>
        </SidebarStyled>
    )
}
