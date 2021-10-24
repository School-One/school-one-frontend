import React from "react";
import SchoolLogo from "../../assets/img/logo_157x32.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="text-center bg-dark text-lg-start text-muted mt-5 py-5">
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-md-3 mt-4 footer-section__card">
                        <img src={SchoolLogo} className="img-fluid mb-3" />
                        <p className="text-white">
                            Sophiano College liderada por un equipo humano de
                            profesionales calificados, idóneos y comprometidos
                            que propician la formación integral de los
                            educandos.
                        </p>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h2 className="footer-section__title">Secciones</h2>
                        <hr />
                        <p>
                            <Link to="#" className="footer-section__link">
                                Iniciar sesión
                            </Link>
                        </p>
                        <p>
                            <Link to="#" className="footer-section__link">
                                Registrarse
                            </Link>
                        </p>
                        <p>
                            <Link to="#" className="footer-section__link">
                                Galería
                            </Link>
                        </p>
                        <p>
                            <Link to="#" className="footer-section__link">
                                Ayuda
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h2 className="footer-section__title">Contacto</h2>
                        <hr />
                        <p>
                            <a
                                href="mailto:sophiano@sophiano.edu.pe"
                                className="footer-section__link"
                            >
                                📨 sophiano@sophiano.edu.pe
                            </a>
                        </p>
                        <p>
                            <a
                                href="tel:929612594"
                                className="footer-section__link"
                            >
                                📞 929 612 594
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://goo.gl/maps/CZbbNpsbPaDJh1aN8"
                                className="footer-section__link"
                            >
                                🌎 Mz. C-4 LT. 1 y 2 -11 A.A. Cáceres,
                                Ventanilla - Callao (Frente a Plaza Vea y al
                                costado del banco Interbank)
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
