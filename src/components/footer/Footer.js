import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={`${styles.footer} ${"card position-relative mb-0 px-2 py-3"}`}>
            <div className="d-flex flex-column align-items-center gap-1">
                <h5 className={`${styles.text} ${"text-white fw-bolder"}`}>WitPink</h5>
                <a className="text-white text-decoration-none" href='/privacidad'>Privacy Policy</a>
                <a className="text-decoration-none" href='/privacidad'><i className="bi bi-github text-secondary fs-2"></i></a>
                <p className="text-secondary mb-0">Copyright © 2022 WitPink Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer