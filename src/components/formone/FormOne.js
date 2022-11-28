import styles from './FormOne.module.css';
import { Link } from 'react-router-dom';
import { useForm } from './useForm';

function FormOne() {

    const { name, setName, ocupacion, setOcupacion, prefijo, setPrefijo, telefono, setTelefono } = useForm();

    return (
        <div>

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>

                    <h1 className="fw-bolder text-white mb-4">Vamos a conocernos un poco mas!</h1>

                    <div className="form-floating mb-3">
                        <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setName(e.target.value)} value={name} id="floatingInput" placeholder="Nombre completo" />
                        <label className='text-white' htmlFor="floatingInput">Nombre completo</label>
                    </div>

                    <div className='mb-3'>
                        <div className="form-floating d-flex mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setOcupacion(e.target.value)} value={ocupacion} id="floatingInput" placeholder="ocupacion" list="ocupacion" />
                            <label className='text-white'>Busca tu puesto u ocupacion</label>
                            <datalist id="ocupacion">
                                <option value="Administrador de sistemas"></option>
                                <option value="Analista digital"></option>
                                <option value="Analista de seguridad de la información"></option>
                                <option value="Analista de sistemas informáticos"></option>
                                <option value="Arquitecto de soluciones"></option>
                                <option value="Consultor SEO"></option>
                                <option value="Copy y bloguero"></option>
                                <option value="Creador contenidos digitales"></option>
                                <option value="Desarrollador de efectos especiales"></option>
                                <option value="Desarrollador de software"></option>
                                <option value="Desarrollador java"></option>
                                <option value="Diseñador UX"></option>
                                <option value="Experto en datos"></option>
                                <option value="Experto en comercio electrónico"></option>
                                <option value="Gerente de producto"></option>
                                <option value="Game tester"></option>
                                <option value="Ingeniero de aplicaciones"></option>
                                <option value="Investigación y desarrollo para el servicio"></option>
                                <option value="Ingeniero de datos"></option>
                                <option value="Ingeniero devops"></option>
                                <option value="Ingeniero de seguridad"></option>
                                <option value="Ingeniero de ventas"></option>
                                <option value="Reseñador de dispositivos"></option>
                                <option value="Social media manager"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className='d-flex'>

                        <div className="form-floating me-2">
                            <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={(e) => setPrefijo(e.target.value)} value={prefijo} id="floatingSelect" aria-label="Floating label select example">
                                <option defaultValue="+57">+**</option>
                                <option value="+57">+57</option>
                                <option value="+51">+51</option>
                                <option value="+52">+52</option>
                                <option value="+53">+53</option>
                                <option value="+55">+55</option>
                                <option value="+56">+56</option>
                                <option value="+502">+502</option>
                                <option value="+504">+504</option>
                                <option value="+507">+507</option>
                            </select>
                            <label className='text-white' htmlFor="floatingSelect">Prefijo</label>
                        </div>

                        <div className="form-floating w-100">
                            <input type="tel" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setTelefono(e.target.value)} value={telefono} id="floatingInput" placeholder="Telefono" />
                            <label className='text-white' htmlFor="floatingInput">Telefono</label>
                        </div>

                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        <div className="text-center">
                            <Link to="/formusercv/two"><button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4">Siguiente <i className="bi bi-chevron-right ms-2"></i></button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormOne;