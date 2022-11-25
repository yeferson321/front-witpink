import styles from './Usercv.module.css';
import { useState, useEffect, useContext } from "react"
import { DataContext } from '../../context/DataContext.js'

function CarouselOne() {

    /* A hook that allows you to use the state of the component. */
    const { addItemone } = useContext(DataContext);
    const [name, setName] = useState(localStorage.getItem('name') || "")
    const [ocupacion, setOcupacion] = useState(localStorage.getItem('ocupacion') || "")
    const [prefijo, setPrefijo] = useState(localStorage.getItem('prefijo') || "")
    const [telefono, setTelefono] = useState(localStorage.getItem('telefono') || "")

    useEffect(() => {
        if (name && ocupacion && prefijo && telefono) {
            localStorage.setItem("name", name)
            localStorage.setItem("ocupacion", ocupacion)
            /* Setting the value of the prefijo variable to the localStorage. */
            localStorage.setItem("prefijo", prefijo)
            localStorage.setItem("telefono", telefono)
            addItemone({ name, ocupacion, prefijo, telefono })
        }
    }, [name, ocupacion, prefijo, telefono]);

    return (
        <div>

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

        </div>
    )
}

export default CarouselOne;