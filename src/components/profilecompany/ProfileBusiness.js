import styles from './ProfileBusiness.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm.js';

function ProfileBusiness() {

    const { datos, error, MaysPrimera, delateAccoun } = useForm();
    const img = `${localStorage.getItem("pinture")}`

    return (
        <div>
            <div className={`${styles.container}`}>

                <div className={`${styles.card_group} ${"card-group text-center"}`}>

                    <div className={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <img src={img} className={`${styles.img} ${"border border-primary rounded-circle align-self-center mt-4"}`} alt="..." />
                        <div className="card-body">
                            <h4 className="card-title fw-semibold text-white">{MaysPrimera(`${datos.name}`)}</h4>
                            <p className="card-text fw-semibold text-white">{datos.categoria} <i className="bi fs-5 text-primary bi-shield-check"></i></p>
                        </div>
                        <div className={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                            <p className="card-text fw-semibold text-white-50"><small>{MaysPrimera(`${datos.descripcion}`)}</small></p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${"card text-center mb-5 rounded-4"}`}>
                        <div className={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                            <p className="card-text fw-semibold text-white">Información Adicional</p>
                            <p className="card-text fw-semibold text-white-50">Contacto: <small>{MaysPrimera(`${datos.correo}`)}</small></p>
                            <p className="card-text fw-semibold text-white-50">Ubicacion: <small>{MaysPrimera(`${datos.ubicacion}`)}</small></p>
                            <div className='px-5'>
                                <Link to="/publicar"><button type="button" className="w-100 mb-3 fw-semibold btn btn-primary">Publicar una oferta</button></Link>
                                <button type="button" className="w-100 fw-semibold btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar esta cuenta</button>
                            </div>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Quieres eliminar esta cuenta?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" className="btn btn-primary" onClick={delateAccoun}>Si, estoy seguro</button>
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

export default ProfileBusiness