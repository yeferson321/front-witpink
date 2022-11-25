import styles from './Usercv.module.css';
import { useState, useEffect, useContext } from "react"
import { DataContext } from '../../context/DataContext.js'

function CarouselThree() {

    /* A hook that allows you to use the state of the component. */
    const { addItemthree } = useContext(DataContext);
    const [presentacion, setPresentacion] = useState(localStorage.getItem('presentacion') || "");
    const [idioma, setIdioma] = useState("");
    const [idiomas, setIdiomas] = useState(JSON.parse(localStorage.getItem('idiomas')) || []);
    const [interes, setInteres] = useState(localStorage.getItem('interes') || "")

    /**
     * If the value of the variable idioma is not empty, then add the value of the variable idioma to the
     * array idiomas and then set the value of the variable idioma to an empty string.
     */
    const valueIdioma = () => {
        if (idioma) {
            setIdiomas([...idiomas, idioma])
            setIdioma("")
        }
    }

    useEffect(() => {
        if (idiomas.length > 0 && presentacion && interes) {
            localStorage.setItem("presentacion", presentacion)
            localStorage.setItem("idiomas", JSON.stringify(idiomas))
            localStorage.setItem("interes", interes)
            addItemthree({ idiomas, presentacion, interes })
        }
    }, [idiomas, presentacion, interes]);

    return (

        <div>

            <h1 className="fw-bolder text-white mb-4">Ya casi lo tienes!</h1>

            <div className="form-floating mb-3">
                <input type="text" className={`${styles.input} ${"form-control border border-white text-white fw-semibold fs-6"}`} onChange={(e) => setPresentacion(e.target.value)} value={presentacion} id="floatingInput" placeholder="Agrege un pequeña presentacion" />
                <label className='text-white' htmlFor="floatingInput">Agrege un pequeña presentacion</label>
            </div>

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
                    <div class="container text-center pt-4">
                        <div class="row row-cols-2">
                            {
                                idiomas.map((item, index) =>
                                    <h4 key={index} class="mb-3 p-0">{item}</h4>
                                )
                            }
                        </div>
                    </div>
                }

            </div>

            <div className="form-floating">
                <select className={`${styles.input} ${"form-select border border-white text-white fw-semibold fs-6 me-5"}`} onChange={(e) => setInteres(e.target.value)} value={interes} id="floatingSelect" aria-label="Floating label select example">
                    <option value="No tengo empleo">No tengo empleo</option>
                    <option value="Estoy buscando trabajo activamente">Estoy buscando trabajo activamente</option>
                    <option value="Estoy trabajando actualmente">Estoy trabajando actualmente</option>
                    <option value="No busco trabajo pero estoy dispuesto a escuchar ofertas">No busco trabajo pero estoy dispuesto a escuchar ofertas</option>
                    <option value="No tengo ningún interés en un nuevo empleo">No tengo ningún interés en un nuevo empleo</option>
                </select>
                <label className='text-white' htmlFor="floatingSelect">Situación actual</label>
            </div>

        </div>

    )
}

export default CarouselThree;