import styles from './Publicar.module.css';
import ReturnTwo from '../returntwo/ReturnTwo';
import { useForm } from './useForm.js';
import Footer from "../footer/Footer.js";

function Publicar() {

    const { form, error, response, handleSubmit, handleChange, valueHabilidades, habilidades, habilidad, setHabilidad } = useForm();

    return (
        <div>
            <ReturnTwo />

            <div className={`${styles.container}`}>

                <div className="card-group text-center">

                    <form onSubmit={handleSubmit}>

                        <h1 className={`${styles.text_h1} ${"fw-semibold text-white text-center mb-5"}`}>Publica una oferta</h1>

                        <div className="form-floating mb-3">
                            <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={handleChange} name='tiempo' value={form.tiempo} id="floatingSelect" aria-label="Floating label select example">
                                <option value="Tiempo completo">Tiempo completo</option>
                                <option value="Flexible">Flexible</option>
                                <option value="Pasantía">Pasantía</option>
                            </select>
                            <label className='text-white' htmlFor="floatingSelect">Tipo de trabajo</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={handleChange} name='cargo' value={form.cargo} id="floatingInput" placeholder="cargo" list="cargo" />
                            <label className='text-white'>Cargo a ocupar</label>
                            <datalist id="cargo">
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

                        <div className='mb-3'>
                            <div className="form-floating d-flex">
                                <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6 me-2"}`} onChange={(e) => setHabilidad(e.target.value)} value={habilidad} id="floatingInput" placeholder="habilidades" list="habilidades" />
                                <label className='text-white'>Habilidades requeridas</label>
                                <button type="button" className="btn btn-primary" onClick={valueHabilidades}><i className="bi bi-plus-circle fs-3"></i></button>
                                <datalist id="habilidades">
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

                        <div className="form-floating mb-3">
                            <input type="number" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={handleChange} name='salario' value={form.salario} id="floatingInput" placeholder="Salario" />
                            <label className='text-white' htmlFor="floatingInput">Salario</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={handleChange} name='descripcion' value={form.descripcion} id="floatingInput" placeholder="Agrege un pequeña descripcion" />
                            <label className='text-white' htmlFor="floatingInput">Agrege un pequeña descripcion del puesto</label>
                        </div>

                        <div className='mb-4'>
                            {error && <div class="alert alert-warning fw-semibold" role="alert">{error}</div>}
                            {response && <div class="alert alert-primary fw-semibold" role="alert">{response}</div>}
                        </div>

                        <button type="submit" className="btn fw-semibold btn-primary">Agregar oferta</button>

                    </form>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Publicar