import styles from './Nav.module.css';
import { AuthService } from '../services/Auth.js';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {

    const { checkToken } = AuthService();
    const { logout } = AuthService();
    const navigate = useNavigate();
    const img = `${localStorage.getItem("pinture")}`

    const salir = () => {
        logout()
        navigate('/')
    }

    return (

        <div>
            {checkToken() === true ?

                <nav className={`${styles.navbar} ${"navbar pt-3"}`}>
                    <div className="container-fluid px-4">
                        <h2 className={`${styles.text} ${"text-white  mb-0"}`}>WitPink</h2>
                        <div className="btn-group">
                            <a className="" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={img} className={`${styles.img} ${"rounded-circle"}`} alt="..." />
                            </a>
                            <ul className={`${styles.dropdown} ${"dropdown-menu dropdown-menu-end text-center"}`}>
                                <li><Link className="dropdown-item fw-semibold text-white" to="/">Inicio</Link></li>
                                <li><Link className="dropdown-item fw-semibold text-white" to="/welcome/profile">Perfil</Link></li>
                                <li><Link className="dropdown-item fw-semibold text-white" to="/welcome/search">Ofertas</Link></li>
                                <li><hr className="dropdown-divider bg-secondary" /></li>
                                <button type="button" className="btn btn-outline-primary" onClick={salir}>Salir ahora</button>
                            </ul>
                        </div>
                    </div>
                </nav>

                :

                <nav className={`${styles.navbar} ${"navbar position-fixed top-0 bg-opacity-50 w-100"}`}>
                    <div className="container-fluid px-4">
                        <h2 className={`${styles.text} ${"text-white fw-bolder mb-0"}`}>WitPink</h2>
                        <button className="btn border-0 px-0 pt-0 pb-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <i className={`${styles.bi} ${"bi bi-list text-white border-0"}`}></i>
                        </button>
                        <div className="collapse navbar-collapse px-4 pt-0 pb-0" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-semibold" aria-current="page" href="#">Ofertas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-semibold" href="#">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-semibold">Precios</a>
                                </li>
                            </ul>
                            <div className="button d-flex flex-column gap-3 pb-3">
                                <a className="btn btn-primary" href="/signin" role="button">Iniciar sesion</a>
                                <a className={`${styles.btn_dark} ${"btn btn-dark"}`} href="/signup" role="button">Unete</a>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </div>
    )
}

export default Nav