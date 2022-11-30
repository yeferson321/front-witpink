import styles from './FormCompanyOne.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm';

function FormCompanyOne() {

    const { name, setName, categoria, setCategoria, correo, setCorreo } = useForm();

    return (
        <div>

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>

                    <h1 className="fw-bolder text-white mb-4">Vamos a conocernos un poco mas!</h1>

                    <div className="form-floating mb-3">
                        <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setName(e.target.value)} value={name} id="floatingInput" placeholder="Nombre de la empresa" />
                        <label className='text-white' htmlFor="floatingInput">Nombre de la empresa</label>
                    </div>

                    <div className='mb-3'>
                        <div className="form-floating d-flex mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setCategoria(e.target.value)} value={categoria} id="floatingInput" placeholder="categoria" list="categoria" />
                            <label className='text-white'>Categoria</label>
                            <datalist id="categoria">
                                <option value="Software"></option>
                                <option value="Redes y telecomunicaciones"></option>
                                <option value="Consultoría"></option>
                                <option value="Ecommerce"></option>
                                <option value="Marketing digital"></option>
                                <option value="Fintech"></option>
                                <option value="Big Data y business analytics"></option>
                                <option value="Automoción"></option>
                                <option value="Inteligencia artificial"></option>
                                <option value="Biotecnología"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className="form-floating w-100">
                        <input type="email" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setCorreo(e.target.value)} value={correo} id="floatingInput" placeholder="correo" />
                        <label className='text-white' htmlFor="floatingInput">Correo de contacto</label>
                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        <div className="text-center">
                            <Link to="/formcompanycv/formcompanytwo"><button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4">Siguiente <i className="bi bi-chevron-right ms-2"></i></button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormCompanyOne;