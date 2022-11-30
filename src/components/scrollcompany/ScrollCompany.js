import { Link } from 'react-router-dom';
import styles from './ScrollCompany.module.css';

function ScrollCompany() {
    return (
        <div>
            <ul className={`${styles.navbar} ${"nav d-flex justify-content-evenly"}`}>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary' to="search">Busqueda</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary' to="notification">Actividad</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary active' to="profilebusiness">Perfil</Link>
                </li>
            </ul>
        </div >
    )
}

export default ScrollCompany