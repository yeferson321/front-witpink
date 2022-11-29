import styles from './Signin.module.css';
import Footer from '../footer/Footer.js';
import Return from '../return/Return.js';
import Carousel from '../carousel/Carousel.js';
import { useForm } from './useForm.js';

function Signin() {

    const { error, response, handleMicrosoftSignin, handleGithubSignin, handleGoogleSignin } = useForm();

    return (
        <div>
            <Return />

            <div className={`${styles.container} ${"mx-5 my-5"}`}>

                <h1 className={`${styles.text_h1} ${"fw-semibold text-white mb-4"}`}>Inicia sesión en Witpink</h1>

                <div className='d-flex flex-column align-items-center gap-3 mb-4'>
                    <button type="button" className="btn btn-secondary fw-semibold w-100 d-flex align-items-center justify-content-center" onClick={handleGoogleSignin}><i className="bi bi-google pe-3 fs-3"></i>Continua con Google</button>
                    <button type="button" className="btn btn-secondary fw-semibold w-100 d-flex align-items-center justify-content-center" onClick={handleGithubSignin}><i className="bi bi-github pe-3 fs-3"></i>Continua con Github</button>
                    <button type="button" className="btn btn-primary fw-semibold w-100 d-flex align-items-center justify-content-center" onClick={handleMicrosoftSignin}><i className="bi bi-microsoft pe-3 fs-3"></i>Continua con Microsoft</button>
                    {error && <div className="alert alert-warning w-100 mb-0 text-center fw-semibold" role="alert">{error}</div>}
                    {response && <div className="alert alert-warning w-100 mb-0 text-center fw-semibold" role="alert">{response}</div>}
                </div>

                <hr className="mx-4 my-5 text-white"></hr>

                <p className="text-center fs-6 fw-semibold text-white">¿No tienes una cuenta? <a className='text-decoration-none' href='/signup'>Únete</a></p>

            </div>

            <Carousel />

            <Footer />
        </div>
    )
}

export default Signin