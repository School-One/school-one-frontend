import React from 'react';
import styled from 'styled-components';

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

    return (
        <SidebarStyled>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-12">
                        
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li className={`li ${props.step === 'Home' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1">Home</p>
                            </li>
                            <li className={`li ${props.step === 'Clase' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2">Clase</p>
                            </li>
                            <li className={`li ${props.step === 'Drive' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2">Drive</p>
                            </li>
                            <li className={`li ${props.step === 'Asignaciones' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2">Asignaciones</p>
                            </li>
                            <li className={`li ${props.step === 'Foro' ? 'li-active' : ''} my-2`}>
                                <p className="li-text ms-1 my-2">Foro</p>
                            </li>
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
