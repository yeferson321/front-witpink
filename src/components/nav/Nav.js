import styles from './Nav.module.css';

function Nav() {
    return (
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
    )
}

export default Nav