import styles from './NavTwo.module.css';
import { AuthService } from '../services/Auth.js';
import { useNavigate } from 'react-router-dom';

function Navtwo() {

    const navigate = useNavigate();
    const { logout } = AuthService();

    const salir = () => {
        logout()
        navigate('/')
    }

    return (
        <div>
            <nav className={`${styles.navbar} ${"navbar navbar-dark pt-3"}`}>
                <div className="container-fluid px-4">
                    <h2 className={`${styles.text} ${" text-white fw-bolder mb-0"}`}>WitPink</h2>
                    <div className="btn-group">
                        <a className="" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://avatars.githubusercontent.com/u/70369030?v=4" className={`${styles.img} ${"rounded-circle"}`} alt="..." />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end text-center bg-secondary">
                            <li><a className="dropdown-item fw-semibold" href="#">Inicio</a></li>
                            <li><a className="dropdown-item fw-semibold" href="#">Perfil</a></li>
                            <li><a className="dropdown-item fw-semibold" href="/acount">Actividad</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item fw-semibold" href="#" onClick={salir}>Salir</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navtwo