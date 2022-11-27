import { useState, useEffect } from "react";
import { HttpService } from '../services/Client.js';

export const useForm = () => {

    const { getDataUsercv } = HttpService();
    const [datos, setDatos] = useState([]);

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


    return { datos, MaysPrimera }

}