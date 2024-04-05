import React, { useEffect } from 'react';
import logo from '../img/Header/logo.png';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
    useEffect(() => {
        const handleTogglePassword = () => {
            const passwordInput = document.getElementById('password');
            const togglePasswordButton = document.getElementById('togglePassword');

            if (passwordInput && togglePasswordButton) {
                const type = passwordInput.type === 'password' ? 'text' : 'password';
                passwordInput.type = type;

                togglePasswordButton.classList.toggle('fa-eye');
                togglePasswordButton.classList.toggle('fa-eye-slash');
            }
        };

        const togglePasswordButton = document.getElementById('togglePassword');
        if (togglePasswordButton) {
            togglePasswordButton.addEventListener('click', handleTogglePassword);
        }

        return () => {
            if (togglePasswordButton) {
                togglePasswordButton.removeEventListener('click', handleTogglePassword);
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

        if (barob) {
            barob.addEventListener('click', handleNavbarToggle);
        }

        if (closeob) {
            closeob.addEventListener('click', handleNavbarToggle);
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

    return (
        <div id="login">
            <div className="content-information">
                <div className="top-navbar-online-banking">
                    <a href="index.html">volver al inicio <i className="fa-solid fa-reply"></i></a>
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
                <section id="login-section">
                    <div className="login-container">
                        <form action="#" method="POST" id="login-form">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Contraseña:</label>
                            <div className="password-container">
                                <input type="password" id="password" name="password" required />
                                <i className="fa-solid fa-eye-slash" id="togglePassword"></i>
                            </div>
                            <button type="submit"> <i className="fa-solid fa-user"></i> Ingresar</button>
                        </form>
                        <div id="login-register-container">
                            <div className="login-register">
                                <p>¿Primera vez que ingresas?</p>
                                <a href="register.html">Regístrate aquí</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="copyright">
                    <p>© Banco Universitario. Todos los derechos reservados</p>
                </div>
            </footer>
            <script src="assets/js/script.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    );
}

export default Login;
