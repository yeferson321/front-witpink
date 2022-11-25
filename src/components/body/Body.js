import styles from './Body.module.css';
import { Link } from 'react-router-dom';

function Body() {

    return (
        <div>

            <div className={`${styles.fundraw} ${"d-flex flex-column align-items-center mx-5 mb-5"}`}>
                <video className="mb-4 w-100" loop autoPlay muted playsInline>
                    <source src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/witpink%2Fondas.mp4?alt=media&token=2c1e528d-8847-469b-8a8d-896a7fd68885" type="video/mp4" />
                </video>
                <h1 className={`${styles.text_h1} ${"fw-bolder text-center mb-3"}`}>Algoritmos de selección automática</h1>
                <p className="text-center mx-auto fs-5 fw-semibold text-secondary">Velocidad y confiabilidad que los innovadores necesitan para<strong className="text-white fw-semibold"> contratar al candidato perfecto</strong></p>
            </div>

            <div className="card text-center bg-transparent border border-dark border-2 rounded-4 my-5 mx-4">
                <div className="card-body p-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/witpink%2Fartificial_intellige.png?alt=media&token=d5ad47de-0dff-401a-8b82-293e14963191" className={`${styles.img_fluid} ${"img-fluid py-3"}`} alt="..."></img>
                    <h3 className="card-title text-white fw-semibold mb-2">Cada conocimiento cuenta</h3>
                    <p className="card-text fw-semibold text-secondary pb-3">Tus habilidades e intereses son utilizadas por el algoritmo para seleccionarte como el candidato más perfecto para el puesto de trabajo.</p>
                </div>
            </div>

            <div className={`${styles.border} ${"p-5 my-5 text-center"}`}>
                <i className="bi bi-file-arrow-down text-primary fs-1"></i>
                <h1 className={`${styles.text_info} ${"fw-bolder text-center my-3"}`}>Cómo funciona</h1>
                <p className="fs-5 mx-auto fs-6 fw-normal text-white-50 mb-4">Nuestro algoritmo de selección automática de candidatos analiza los requisitos de su trabajo y tiene en cuenta cada una de las habilidades y actitudes del aspirante para hacer más probable contratar al candidato deseado</p>
                <Link to="/signup">
                    <button type="button" className="btn btn-light fs fw-semibold px-5 py-2 rounded-4">Comience <i className="bi bi-chevron-right fw-bold ms-2"></i></button>
                </Link>
            </div>

            <div className="card text-center bg-transparent border border-dark border-2 rounded-4 my-5 mx-4">
                <div className="card-body p-4">
                    <h3 className="card-title text-white fw-semibold mb-2 mt-3">Selección automatizada</h3>
                    <p className="card-text fw-semibold text-secondary mb-0">Reducimos el tiempo de selección de candidatos y aumentamos la eficiencia general del proceso de contratación</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/witpink%2Fdata_managemen.png?alt=media&token=ff7a3928-c35e-4c35-a3c5-23539d36fdb9" className={`${styles.img_fluid} ${"img-fluid py-3"}`} alt="..."></img>
                </div>
            </div>

        </div>
    )
}

export default Body