import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm.js';

function Profile() {

    const { datos, error, MaysPrimera, delateAccoun } = useForm();
    const img = `${localStorage.getItem("pinture")}`

    return (
        <div>
            <div className={`${styles.container}`}>

                <div className="card-group text-center">

                    <div className={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <img src={img} className={`${styles.img} ${"border border-primary rounded-circle align-self-center mt-4"}`} alt="..." />
                        <div className="card-body">
                            <h4 className="card-title fw-semibold text-white">{MaysPrimera(`${datos.name}`)}</h4>
                            <p className="card-text fw-semibold text-white">{datos.ocupacion} <i className="bi fs-5 text-primary bi-shield-check"></i></p>
                        </div>
                        <div className={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                            <p className="card-text fw-semibold text-white-50"><small>{MaysPrimera(`${datos.presentacion}`)}</small></p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${"card text-center mb-5 rounded-4"}`}>
                        <div className={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                            <p className="card-text fw-semibold text-white">Información Adicional</p>
                            <p className="card-text fw-semibold text-white-50">Contacto: <small>{MaysPrimera(`${datos.prefijo}`)} {MaysPrimera(`${datos.telefono}`)}</small></p>
                            <p className="card-text fw-semibold text-white-50">Interes: <small>{MaysPrimera(`${datos.interes}`)}</small></p>
                            <div className='px-5'>
                                <Link to="/update"><button type="button" className="w-100 mb-3 fw-semibold btn btn-primary">Actualizar Perfil</button></Link>
                                <button type="button" className="w-100 fw-semibold btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar esta cuenta</button>
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">¿Quieres eliminar esta cuenta?</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='mb-4'>
                                            {error && <div class="alert alert-warning fw-semibold" role="alert">{error}</div>}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" class="btn btn-primary" onClick={delateAccoun}>Si, estoy seguro</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile