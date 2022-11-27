import styles from './NavTwo.module.css';
import { AuthService } from '../services/Auth.js';
import { Link, useNavigate } from 'react-router-dom';

function Navtwo() {

    const navigate = useNavigate();
    const { logout } = AuthService();

    const salir = () => {
        logout()
        navigate('/')
    }

    return (
        <div>
            <nav className={`${styles.navbar} ${"navbar pt-3"}`}>
                <div className="container-fluid px-4">
                    <h2 className={`${styles.text} ${"text-white fw-bolder mb-0"}`}>WitPink</h2>
                    <div className="btn-group">
                        <a className="" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://avatars.githubusercontent.com/u/70369030?v=4" className={`${styles.img} ${"rounded-circle"}`} alt="..." />
                        </a>
                        <ul className={`${styles.dropdown} ${"dropdown-menu dropdown-menu-end text-center"}`}>
                            <li><Link className="dropdown-item fw-semibold text-white" to="/">Inicio</Link></li>
                            <li><Link className="dropdown-item fw-semibold text-white" to="profile">profile</Link></li>
                            <li><Link className="dropdown-item fw-semibold text-white" to="notification">Actividad</Link></li>
                            <li><hr className="dropdown-divider bg-secondary" /></li>
                            <button type="button" class="btn btn-outline-primary" onClick={salir}>Salir ahora</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navtwo