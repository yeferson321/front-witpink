import styles from './Profile.module.css';
import { useState, useEffect, useContext } from "react";
import { HttpService } from '../services/Client.js';

function Profile() {

    const { getDataUsercv } = HttpService();
    const [datos, setDatos] = useState([]);
    const [conocimientos, setConocimientos] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [idiomas, setIdiomas] = useState([]);

    /*
     * @param string - The string to be capitalized.
     * @returns The first character of the string is being returned in uppercase.
     */
    function MaysPrimera(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /* A hook that is used to fetch data from an API. */
    useEffect(() => {
        getDataUsercv().then((res) => {
            setDatos(res.data.message)
            setConocimientos(res.data.message.conocimientos)
            setHabilidades(res.data.message.habilidades)
            setIdiomas(res.data.message.idiomas)
        })
    }, []);

    return (
        <div>
            <div className={`${styles.container}`}>

                <div class="card-group text-center">

                    <div class={`${styles.card} ${"card text-center mb-5 rounded-4"}`}>
                        <img src="https://avatars.githubusercontent.com/u/70369030?v=4" className={`${styles.img} ${"border border-primary rounded-circle align-self-center mt-4"}`} alt="..." />
                        <div class="card-body">
                            <h4 class="card-title fw-semibold text-white">{MaysPrimera(`${datos.name}`)}</h4>
                            <p class="card-text fw-semibold text-white">{datos.ocupacion} <i class="bi fs-5 text-primary bi-shield-check"></i></p>
                        </div>
                        <div class={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                            <p class="card-text fw-semibold text-white-50"><small>{MaysPrimera(`${datos.presentacion}`)}</small></p>
                        </div>
                    </div>

                    <div class={`${styles.card} ${"card text-center mb-5 rounded-4"}`}>
                        <div class={`${styles.card_body} ${"card-body text-center rounded-2"}`}>
                        <p class="card-text fw-semibold text-white">{datos.ocupacion} <i class="bi bi-briefcase"></i></p>
                            <p class="card-text fw-semibold text-white-50">Contacto <small>{MaysPrimera(`${datos.prefijo}`)} {MaysPrimera(`${datos.telefono}`)}</small></p>
                            <p class="card-text fw-semibold text-white-50">Interes <small>{MaysPrimera(`${datos.interes}`)}</small></p>
                        </div>
                    </div>

                    <div class={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <div class="card-body p-2">
                            <h2 class="card-title fw-semibold text-white mb-3">Conocimientos</h2>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    {
                                        conocimientos.map((item, index) =>                                   
                                            <h4 key={index} class="mb-3 p-0">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <div class="card-body p-2">
                            <h2 class="card-title fw-semibold text-white mb-3">Habilidades</h2>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    {
                                        habilidades.map((item, index) =>
                                            <h4 key={index} class="mb-3 p-0">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class={`${styles.card} ${"card text-center mb-4 rounded-4"}`}>
                        <div class="card-body p-2">
                            <h2 class="card-title fw-semibold text-white mb-3 p-0">Idiomas</h2>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    {
                                        idiomas.map((item, index) =>                                      
                                            <h4 key={index} class="mb-3">{item}</h4>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile