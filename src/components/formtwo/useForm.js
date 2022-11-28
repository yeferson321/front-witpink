import { useState, useEffect, useContext } from "react"
import { DataContext } from '../../context/DataContext.js'

export const useForm = () => {

    const { additemtwo } = useContext(DataContext);
    const [ conocimiento, setConocimiento ] = useState("");
    const [ conocimientos, setConocimientos ] = useState(JSON.parse(localStorage.getItem('conocimientos')) || []);
    const [ habilidad, setHabilidad ] = useState("");
    const [ habilidades, setHabilidades ] = useState(JSON.parse(localStorage.getItem('habilidades')) || []);
    const [ nivel, setNivel ] = useState(localStorage.getItem('nivel') || "");

    /**
     * If the conocimiento variable is not empty, add it to the conocimientos array and then clear the
     * conocimiento variable.
     */
    const valueConocimiento = () => {
        if (conocimiento) {
            setConocimientos([...conocimientos, conocimiento])
            setConocimiento("")
        }
    }

    /**
     * If the habilidad variable is not empty, then add it to the habilidades array and clear the habilidad
     * variable.
     */
    const valueHabilidad = () => {
        if (habilidad) {
            setHabilidades([...habilidades, habilidad])
            setHabilidad("")
        }
    }

    useEffect(() => {
        if (habilidades.length > 0 && conocimientos.length > 0 && nivel) {
            localStorage.setItem("nivel", nivel)
            localStorage.setItem("conocimientos", JSON.stringify(conocimientos))
            localStorage.setItem("habilidades", JSON.stringify(habilidades))
            additemtwo({ nivel, conocimientos, habilidades })
        }
    }, [nivel, conocimiento, habilidad, habilidades, conocimientos]);


    return { nivel, setNivel, conocimiento, conocimientos, setConocimiento, valueConocimiento, habilidad, habilidades, setHabilidad, valueHabilidad }

}