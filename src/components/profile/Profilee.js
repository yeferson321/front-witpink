import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm.js';

function Profile() {

    const { datos, MaysPrimera } = useForm();

    return (
        <div>
            <div className={`${styles.container}`}>

                <div className="card-group text-center">

                    <div className={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <img src="https://avatars.githubusercontent.com/u/70369030?v=4" className={`${styles.img} ${"border border-primary rounded-circle align-self-center mt-4"}`} alt="..." />
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
                            <Link to="/update"><button type="button" className="fw-semibold btn btn-primary">Actualizar Perfil</button></Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile