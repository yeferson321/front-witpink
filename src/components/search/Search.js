import styles from './Search.module.css';
import { Link } from 'react-router-dom';

function Search() {
    return (
        <div>
            <div className={`${styles.container}`}>
                <div class="d-flex">
                    <input class={`${styles.input} ${"form-control text-white fw-semibold"}`} type="search" placeholder="Search" aria-label="Search" list="ocupacion" />
                    
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

                    <button class="btn btn-outline-primary" type="submit">Search</button>

                </div>
            </div>
        </div>
    )
}

export default Search