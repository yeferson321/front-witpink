import styles from './Update.module.css';
import ReturnTwo from '../returntwo/ReturnTwo';
import { useForm } from './useForm.js';
import Footer from "../footer/Footer.js";

function Update() {

    const { datos, error, response, handleSubmit, handleChange } = useForm();

    return (
        <div>
            <ReturnTwo />

            <div className={`${styles.container}`}>

                <div className="card-group text-center">

                    <form onSubmit={handleSubmit}>

                        <h1 className={`${styles.text_h1} ${"fw-semibold text-white text-center mb-5"}`}>Actializa tus datos</h1>

                        <div className="form-floating mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={handleChange} name='name' value={datos.name} id="floatingInput" placeholder="Nombre completo" />
                            <label className='text-white' htmlFor="floatingInput">Nombre completo</label>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className="form-floating me-2">
                                <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={handleChange} name='prefijo' value={datos.prefijo} id="floatingSelect" aria-label="Floating label select example">
                                    <option defaultValue="">{datos.prefijo}</option>
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
                                <input type="tel" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={handleChange} name='telefono' value={datos.telefono} id="floatingInput" placeholder="Telefono" />
                                <label className='text-white' htmlFor="floatingInput">Telefono</label>
                            </div>
                        </div>

                        <div className="form-floating d-flex mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={handleChange} name='ocupacion' value={datos.ocupacion} id="floatingInput" placeholder="ocupacion" list="ocupacion" />
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

                        <div className="form-floating mb-3">
                            <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={handleChange} name='nivel' value={datos.nivel} id="floatingSelect" aria-label="Floating label select example">
                                <option defaultValue="">{datos.nivel}</option>
                                <option value="Principiante">Principiante</option>
                                <option value="Competente">Competente</option>
                                <option value="Experto">Experto</option>
                                <option value="Máster">Máster</option>
                            </select>
                            <label className='text-white' htmlFor="floatingSelect">Tu nivel de competencia</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={handleChange} name='presentacion' value={datos.presentacion} id="floatingInput" placeholder="Agrege un pequeña presentacion" />
                            <label className='text-white' htmlFor="floatingInput">Agrege un pequeña presentacion</label>
                        </div>

                        <div className="form-floating mb-4">
                            <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={handleChange} name='interes' value={datos.interes} id="floatingSelect" aria-label="Floating label select example">
                                <option defaultValue="">{datos.interes}</option>
                                <option value="No tengo empleo">No tengo empleo</option>
                                <option value="Estoy buscando trabajo activamente">Estoy buscando trabajo activamente</option>
                                <option value="Estoy trabajando actualmente">Estoy trabajando actualmente</option>
                                <option value="No busco trabajo pero estoy dispuesto a escuchar ofertas">No busco trabajo pero estoy dispuesto a escuchar ofertas</option>
                                <option value="No tengo ningún interés en un nuevo empleo">No tengo ningún interés en un nuevo empleo</option>
                            </select>
                            <label className='text-white' htmlFor="floatingSelect">Situación actual</label>
                        </div>

                        <div className='mb-4'>
                            {error && <div class="alert alert-warning fw-semibold" role="alert">{error}</div>}
                            {response && <div class="alert alert-primary fw-semibold" role="alert">{response}</div>}
                        </div>

                        <button type="submit" className="btn fw-semibold btn-primary">Actualizar datos</button>

                    </form>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Update