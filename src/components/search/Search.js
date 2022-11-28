import styles from './Search.module.css';

function Search() {

    const search = () => {
        console.log("Hola")
    }

    return (
        <div className={`${styles.container}`}>

            <div className="input-group mb-3">
                <input type="text" class="form-control" placeholder="Busca un empleo" aria-label="Busca un empleo" aria-describedby="button-addon2"  list="ocupacion"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={search}>Buscar</button>
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
    )
}

export default Search