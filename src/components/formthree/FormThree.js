import styles from './FormThree.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm';

function FormThree() {

    const { state, idiomas, idioma, setIdioma, valueIdioma, interes, setInteres, presentacion, setPresentacion, handleSubmit } = useForm();

    return (
        <div>

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>

                    <h1 className="fw-bolder text-white mb-4">Ya casi lo tienes!</h1>

                    <div className='mb-3'>
                        <div className="form-floating d-flex">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setIdioma(e.target.value)} value={idioma} id="floatingInput" placeholder="idiomas" list="idiomas" />
                            <label className='text-white'>Busca y agrega tus idiomas</label>
                            <button type="button" className="btn btn-primary" onClick={valueIdioma}><i className="bi bi-plus-circle fs-3"></i></button>
                            <datalist id="idiomas">
                                <option value="Arabe"></option>
                                <option value="Aleman"></option>
                                <option value="Español"></option>
                                <option value="Ingles"></option>
                                <option value="Italiano"></option>
                                <option value="Japones"></option>
                                <option value="Ruso"></option>
                                <option value="Frances"></option>
                                <option value="Catalan"></option>
                            </datalist>
                        </div>

                        {idiomas.length > 0 &&
                            <div className="container text-center pt-4">
                                <div className="row row-cols-2">
                                    {
                                        idiomas.map((item, index) =>
                                            <h4 key={index} className="text-white-50 mb-3 p-0">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        }

                    </div>

                    <div className="form-floating mb-3">
                        <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={(e) => setInteres(e.target.value)} value={interes} id="floatingSelect" aria-label="Floating label select example">
                            <option value="No tengo empleo">No tengo empleo</option>
                            <option value="Estoy buscando trabajo activamente">Estoy buscando trabajo activamente</option>
                            <option value="Estoy trabajando actualmente">Estoy trabajando actualmente</option>
                            <option value="No busco trabajo pero estoy dispuesto a escuchar ofertas">No busco trabajo pero estoy dispuesto a escuchar ofertas</option>
                            <option value="No tengo ningún interés en un nuevo empleo">No tengo ningún interés en un nuevo empleo</option>
                        </select>
                        <label className='text-white' htmlFor="floatingSelect">Situación actual</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setPresentacion(e.target.value)} value={presentacion} id="floatingInput" placeholder="Agrege un pequeña presentacion" />
                        <label className='text-white' htmlFor="floatingInput">Agrege un pequeña presentacion</label>
                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        {state === false ?
                            <div className="text-center">
                                <Link to="/personcv/one"><button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4">Siguiente <i className="bi bi-chevron-right ms-2"></i></button></Link>
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

export default FormThree;