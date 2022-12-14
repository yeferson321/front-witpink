import styles from './FormTwo.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm';

function FormTwo() {

    const { nivel, setNivel, conocimiento, conocimientos, setConocimiento, valueConocimiento, habilidad, habilidades, setHabilidad, valueHabilidad } = useForm();

    return (
        <div>

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>

                    <h1 className="fw-bolder text-white mb-4">Cuentanos sobre tus habilidades y conocimientos</h1>

                    <div className="form-floating mb-3">
                        <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={(e) => setNivel(e.target.value)} value={nivel} name='nivel' id="floatingSelect" aria-label="Floating label select example">
                            <option value="Principiante">Principiante</option>
                            <option value="Competente">Competente</option>
                            <option value="Experto">Experto</option>
                            <option value="Máster">Máster</option>
                        </select>
                        <label className='text-white' htmlFor="floatingSelect">Tu nivel de competencia en {localStorage.getItem('ocupacion')}</label>
                    </div>

                    <div className='mb-3'>
                        <div className="form-floating d-flex">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setConocimiento(e.target.value)} value={conocimiento} id="floatingInput" placeholder="conocimientos" list="conocimientos" />
                            <label className='text-white'>Busca tus conocimientos</label>
                            <button type="button" className="btn btn-primary" onClick={valueConocimiento}><i className="bi bi-plus-circle fs-3"></i></button>
                            <datalist id="conocimientos">
                                <option value="Adobe"></option>
                                <option value="After"></option>
                                <option value="Angular"></option>
                                <option value="Azure"></option>
                                <option value="C+"></option>
                                <option value="C+"></option>
                                <option value="Canvas"></option>
                                <option value="Docker"></option>
                                <option value="Excel"></option>
                                <option value="Github"></option>
                                <option value="GoogleAds"></option>
                                <option value="Haskell"></option>
                                <option value="Java"></option>
                                <option value="Javascript"></option>
                                <option value="Jira"></option>
                                <option value="Mongodb"></option>
                                <option value="Proadobe"></option>
                                <option value="Python"></option>
                                <option value="React"></option>
                                <option value="Ruby"></option>
                                <option value="Scala"></option>
                                <option value="Scratch"></option>
                                <option value="Slack"></option>
                                <option value="Sql"></option>
                                <option value="Zsuite"></option>
                                <option value="Docker"></option>
                                <option value="Haskell"></option>
                            </datalist>
                        </div>

                        {conocimientos.length > 0 &&
                            <div className="container text-center pt-4">
                                <div className="row row-cols-2">
                                    {
                                        conocimientos.map((item, index) =>
                                            <h4 key={index} className="text-white-50 mb-3 p-0">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        }

                    </div>

                    <div>
                        <div className="form-floating d-flex">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setHabilidad(e.target.value)} value={habilidad} id="floatingInput" placeholder="habilidad" list="habilidad" />
                            <label className='text-white'>Busca tus hablidades personales</label>
                            <button type="button" className="btn btn-primary " onClick={valueHabilidad}><i className="bi bi-plus-circle fs-3"></i></button>
                            <datalist id="habilidad">
                                <option value="Adaptación"></option>
                                <option value="Comunicación"></option>
                                <option value="Control de las emociones"></option>
                                <option value="Empatía"></option>
                                <option value="Escucha activa"></option>
                                <option value="Lenguaje no verbal"></option>
                                <option value="Liderazgo"></option>
                                <option value="Metacognición"></option>
                                <option value="Motivación"></option>
                                <option value="Negociación"></option>
                                <option value="Paciencia"></option>
                                <option value="Persuasión"></option>
                                <option value="Proactividad"></option>
                                <option value="Relaciones interpersonales"></option>
                                <option value="Resolución de los problemas"></option>
                                <option value="Toma de decisiones"></option>
                                <option value="Trabajo bajo presión"></option>
                                <option value="Trabajo en equipo"></option>
                            </datalist>
                        </div>

                        {habilidades.length > 0 &&
                            <div className="container text-center pt-4">
                                <div className="row row-cols-2">
                                    {
                                        habilidades.map((item, index) =>
                                            <h4 key={index} className="text-white-50 mb-3 p-0">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        }

                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        <div className="text-center">
                            <Link to="/formusercv/three"><button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4">Siguiente <i className="bi bi-chevron-right ms-2"></i></button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormTwo;