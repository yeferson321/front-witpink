import { Link } from 'react-router-dom';
import styles from './ScrollTwo.module.css';

function ScrollTwo() {
    return (
        <div>
            <ul className={`${styles.navbar} ${"nav p-2 d-flex justify-content-evenly"}`}>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary' to="one">Uno</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary' to="two">Dos</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link fw-semibold text-secondary active' to="three">Tres</Link>
                </li>
            </ul>
        </div >
    )
}

export default ScrollTwo