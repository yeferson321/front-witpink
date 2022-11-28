import styles from './ReturnTwo.module.css';
import { AuthService } from '../services/Auth.js';
import { Link, useNavigate } from 'react-router-dom';

function ReturnTwo() {

    const history = useNavigate();
    const navigate = useNavigate();
    const { logout } = AuthService();
    const img = `${localStorage.getItem("pinture")}`
    
    const salir = () => {
        logout()
        navigate('/')
    }

    return (
        <div>
            <nav className={`${styles.navbar} ${"navbar pt-3"}`}>
                <div className="container-fluid px-4">
                    <div onClick={() => history(-1)}>
                        <i className="bi bi-chevron-left text-white fs-1"></i>
                    </div>
                    <div className="btn-group">
                        <a className="" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={img} className={`${styles.img} ${"rounded-circle"}`} alt="..." />
                        </a>
                        <ul className={`${styles.dropdown} ${"dropdown-menu dropdown-menu-end text-center"}`}>
                            <li><Link className="dropdown-item fw-semibold text-white" to="/">Inicio</Link></li>
                            <li><Link className="dropdown-item fw-semibold text-white" to="profile">Profile</Link></li>
                            <li><Link className="dropdown-item fw-semibold text-white" to="notification">Actividad</Link></li>
                            <li><hr className="dropdown-divider bg-secondary" /></li>
                            <button type="button" className="btn btn-outline-primary" onClick={salir}>Salir ahora</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ReturnTwo