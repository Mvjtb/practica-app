import React, { useEffect } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../img/Header/logo.png';

function Register() {
    useEffect(() => {
        const handleNavbarToggle = () => {
            const nav = document.getElementById('navbar');
            if (nav) {
                nav.classList.toggle('active');
            }
        };

        const bar = document.getElementById('bar');
        const close = document.getElementById('close');
        const nav = document.getElementById('navbar');

        if (bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            });
        }

        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        }

        return () => {
            if (bar) {
                bar.removeEventListener('click', handleNavbarToggle);
            }
            if (close) {
                close.removeEventListener('click', handleNavbarToggle);
            }
        };
    }, []);

    useEffect(() => {
        const handleNavbarToggle = () => {
            const navob = document.getElementById('navbar-online-banking');
            if (navob) {
                navob.classList.toggle('active');
            }
        };

        const barob = document.getElementById('bar-online-banking');
        const closeob = document.getElementById('close-online-banking');
        const navob = document.getElementById('navbar-online-banking');

        if (barob) {
            barob.addEventListener('click', () => {
                navob.classList.add('active');
            });
        }

        if (closeob) {
            closeob.addEventListener('click', () => {
                navob.classList.remove('active');
            });
        }

        return () => {
            if (barob) {
                barob.removeEventListener('click', handleNavbarToggle);
            }
            if (closeob) {
                closeob.removeEventListener('click', handleNavbarToggle);
            }
        };
    }, []);

    useEffect(() => {
        const handleTogglePassword = () => {
            const passwordInput = document.getElementById('password');
            const togglePasswordButton = document.getElementById('togglePassword');
            const passwordInput2 = document.getElementById('password2');
            const togglePasswordButton2 = document.getElementById('togglePassword2');

            if (passwordInput && togglePasswordButton) {
                const type = passwordInput.type === 'password' ? 'text' : 'password';
                passwordInput.type = type;
                togglePasswordButton.classList.toggle('fa-eye');
                togglePasswordButton.classList.toggle('fa-eye-slash');
            }

            if (passwordInput2 && togglePasswordButton2) {
                const type2 = passwordInput2.type === 'password' ? 'text' : 'password';
                passwordInput2.type = type2;
                togglePasswordButton2.classList.toggle('fa-eye');
                togglePasswordButton2.classList.toggle('fa-eye-slash');
            }
        };

        const togglePasswordButton = document.getElementById('togglePassword');
        const togglePasswordButton2 = document.getElementById('togglePassword2');

        if (togglePasswordButton) {
            togglePasswordButton.addEventListener('click', handleTogglePassword);
        }

        if (togglePasswordButton2) {
            togglePasswordButton2.addEventListener('click', handleTogglePassword);
        }

        return () => {
            if (togglePasswordButton) {
                togglePasswordButton.removeEventListener('click', handleTogglePassword);
            }
            if (togglePasswordButton2) {
                togglePasswordButton2.removeEventListener('click', handleTogglePassword);
            }
        };
    }, []);

    useEffect(() => {
        const handlePlaceholderColorChange = () => {
            const fechaInput = document.getElementById('input-fechan');
            fechaInput.type = 'text';
            fechaInput.addEventListener('blur', () => {
                fechaInput.type = 'text';
            });
            fechaInput.addEventListener('focus', () => {
                fechaInput.type = 'date';
            });
        };

        handlePlaceholderColorChange();

        return () => {
            const fechaInput = document.getElementById('input-fechan');
            fechaInput.removeEventListener('blur', () => {
                fechaInput.type = 'text';
            });
            fechaInput.removeEventListener('focus', () => {
                fechaInput.type = 'date';
            });
        };
    }, []);

    return (
        <div id="register">
            <div className="content-information">
                <div className="top-navbar-online-banking">
                    <a href="index.html">volver al inicio <i className="fa-solid fa-reply"></i> </a>
                </div>
                <header id="header-online-banking" className="top-head">
                    <div className="logo-left">
                        <a href="index.html"><img src={logo} className="logo" alt="Logo" /></a>
                    </div>
                    <nav className="nav-menu">
                        <ul id="navbar-online-banking">
                            <li><a href="filosofia.html">Sobre Nosotros</a></li>
                            <li><a href="index.html#Services">Servicios</a></li>
                            <li><a href="index.html#footer">Contáctanos</a></li>
                            <a href="#" id="close-online-banking"><i className="fa-solid fa-xmark"></i></a>
                        </ul>
                    </nav>
                    <div id="mobile-online-banking">
                        <i id="bar-online-banking" className="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
            <main id="main">
                <section id="register-section">
                    <div className="register-container">
                        <form action="#" method="POST" className="register-form">
                            <div className="input-box">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" required />
                            </div>

                            <div className="input-box">
                                <label htmlFor="nombre">Apellido:</label>
                                <input type="text" required />
                            </div>

                            <div className="column">
                                <div className="input-box">
                                    <label>Cédula</label>
                                    <input type="text" id="input-cedula" required />
                                </div>

                                <div className="input-box">
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" id="input-fechan" placeholder="aaaa/mm/dd" required />
                                </div>
                            </div>

                            <div className="box-t">
                                <label htmlFor="nombre">Teléfono:</label>
                                <input type="tel" id="input-telefono" placeholder="+" required />
                            </div>

                            <div className="input-box">
                                <label htmlFor="nombre">Correo Electrónico:</label>
                                <input type="email" required />
                            </div>

                            <div className="input-box">
                                <label for="nombre">Contraseña:</label>
                                    <div className="password-register">
                                        <input type="password" id="password" name="password" required/>
                                        <i className="fa-solid fa-eye-slash" id="togglePassword"></i>
                                    </div>
                            </div>
    
                            <div className="input-box">
                                    <label for="nombre">Confirmar Contraseña:</label>
                                    <div className="password-register">
                                        <input type="password" id="password2" name="password2" required/>
                                        <i className="fa-solid fa-eye-slash" id="togglePassword2"></i>
                                    </div>
                            </div>

                            <button type="submit">Registrarse <i className="fa-solid fa-right-to-bracket"></i></button>

                            <div className="cuenta-login">
                                <p>¿Ya posees cuenta?</p>
                                <a href="login.html">Ingresa aquí</a>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <div className="copyright">
                    <p>© Banco Universitario. Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    );
}

export default Register;
