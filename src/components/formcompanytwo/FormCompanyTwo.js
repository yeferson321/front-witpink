import styles from './FormCompanyTwo.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm';

function FormCompanyTwo() {

    const { state, handleSubmit, ubicacion, setUbicacion, descripcion, setDescripcion, numero, setNumero } = useForm();

    return (
        <div>

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>

                    <h1 className="fw-bolder text-white mb-4">Ya casi lo tienes!</h1>

                    <div className='mb-3'>
                        <div className="form-floating d-flex mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setUbicacion(e.target.value)} value={ubicacion} id="floatingInput" placeholder="ubicacion" list="ubicacion" />
                            <label className='text-white'>Ubicacion</label>
                            <datalist id="ubicacion">
                                <option value="Argentina"></option>
                                <option value="Bolivia"></option>
                                <option value="Brasil"></option>
                                <option value="Chile"></option>
                                <option value="Colombia"></option>
                                <option value="Costa Rica"></option>
                                <option value="Cuba"></option>
                                <option value="Ecuador"></option>
                                <option value="El Salvador"></option>
                                <option value="Guatemala"></option>
                                <option value="Haití"></option>
                                <option value="Honduras"></option>
                                <option value="México"></option>
                                <option value="Nicaragua"></option>
                                <option value="Panamá"></option>
                                <option value="Paraguay"></option>
                                <option value="Perú"></option>
                                <option value="República Dominicana"></option>
                                <option value="Uruguay"></option>
                                <option value="Venezuela"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <div className="form-floating d-flex mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setNumero(e.target.value)} value={numero} id="floatingInput" placeholder="numero" list="numero" />
                            <label className='text-white'>Numero de empleados</label>
                            <datalist id="numero">
                                <option value="1 - 100"></option>
                                <option value="100 - 1000"></option>
                                <option value="1000 - 10000"></option>
                                <option value="10000 - Mas"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setDescripcion(e.target.value)} value={descripcion} id="floatingInput" placeholder="Descripcion de la empresa" />
                        <label className='text-white' htmlFor="floatingInput">Descripcion de la empresa</label>
                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        {state === false ?
                            <div className="text-center">
                                <Link to="/formcompanycv/formcompanyone"><button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4">Siguiente <i className="bi bi-chevron-right ms-2"></i></button></Link>
                            </div>
                            :
                            <div className="text-center">
                                <button type="button" className="btn btn-primary fw-semibold px-5 py-2 rounded-4" onClick={handleSubmit}>Enviar datos</button>
                            </div>
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormCompanyTwo;