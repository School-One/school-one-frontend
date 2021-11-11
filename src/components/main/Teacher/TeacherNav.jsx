import React from 'react';
import { Link } from 'react-router-dom';

export const TeacherNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h3 className="text-white">Revisión</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/teacher" className="nav-link active" aria-current="page">Volver</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
