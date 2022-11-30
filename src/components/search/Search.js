import { useState, useEffect } from 'react';
import styles from './Search.module.css';
import { HttpService } from '../services/Client.js';

function Search() {

    const { getDataSearchjobs } = HttpService();
    const [search, setSearch] = useState("");
    const [datos, setDatos] = useState([]);

    console.log(datos)
    console.log(search)

    useEffect(() => {
        getDataSearchjobs(search).then((res) => {
            setDatos(res.data.message)
        })
    }, [search]);

    return (
        <div className={`${styles.container}`}>

            <div className="mb-5">
                <input type="text" className="form-control fw-semibold fs-6" onChange={(e) => setSearch(e.target.value)} value={search} id="floatingInput" placeholder='Busca las ofertas disponibles' list="search" />
                <datalist id="search">
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

            {datos.length > 0 ?

                <div className={`${styles.card_group} ${"card-group"}`} >
                    {datos?.map((item, index) => (
                        <div className={`${styles.card} ${"card rounded-4 mb-4"}`}>
                            <div className="card-body">
                                <p className="fw-semibold text-white mb-1">{item.cargo}</p>
                                <p className="fw-semibold text-white-50 m-0"><i class="bi bi-buildings pe-1"></i> Empresa solicitante: {item.empresa}</p>
                                <div className='d-flex'>
                                <p className="fw-semibold text-white-50 m-0"><i className="bi bi-currency-dollar pe-1"></i>Salario: {item.salario}</p>
                                <p className="fw-semibold text-white-50 m-0"><i className="bi bi-currency-dollar ps-2 pe-1"></i>Tiempo: {item.tiempo}</p>
                                </div>
                                <p className="fw-semibold text-white-50 m-0">{item.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>

                :

                <div className='text-center pt-5'>
                    <h2>No se encontro ningun resultado</h2>
                </div>

            }

        </div>
    )
}

export default Search