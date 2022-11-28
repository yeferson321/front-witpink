import { useState, useEffect, useContext } from "react";
import { HttpService } from '../services/Client.js';
import { DataContext } from '../../context/DataContext.js';
import { useNavigate } from 'react-router-dom';

export const useForm = () => {

    /* A hook that allows you to use the state of the component. */
    const navigate = useNavigate();
    const { itemone } = useContext(DataContext);
    const { itemtwo } = useContext(DataContext);
    const { postSigninRegistercv } = HttpService();
    const [error, setError] = useState();
    const [response, setResponse] = useState();
    const [presentacion, setPresentacion] = useState(localStorage.getItem('presentacion') || "");
    const [idioma, setIdioma] = useState("");
    const [idiomas, setIdiomas] = useState(JSON.parse(localStorage.getItem('idiomas')) || []);
    const [interes, setInteres] = useState(localStorage.getItem('interes') || "")
    const [state, setState] = useState(false)

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
        if (itemone && itemtwo && idiomas.length > 0 && presentacion && interes) {
            localStorage.setItem("presentacion", presentacion)
            localStorage.setItem("idiomas", JSON.stringify(idiomas))
            localStorage.setItem("interes", interes)
            setState(true)
        }
    }, [idiomas, presentacion, interes]);

    const handleSubmit = () => {
        const form = { accounttype: itemone.accounttype, name: itemone.name, prefijo: itemone.prefijo, telefono: itemone.telefono, ocupacion: itemone.ocupacion, conocimientos: itemtwo.conocimientos, habilidades: itemtwo.habilidades, nivel: itemtwo.nivel, idiomas: idiomas, interes: interes, presentacion: presentacion }
        try {
            postSigninRegistercv(form).then((res) => {

                if (res.data.auth === true) {
                    localStorage.removeItem('name')
                    localStorage.removeItem('ocupacion')
                    localStorage.removeItem('prefijo')
                    localStorage.removeItem('telefono')
                    localStorage.removeItem('nivel')
                    localStorage.removeItem('conocimientos')
                    localStorage.removeItem('habilidades')
                    localStorage.removeItem('presentacion')
                    localStorage.removeItem('idiomas')
                    localStorage.removeItem('interes')
                    localStorage.removeItem('profile')
                    navigate('/welcome/profile');
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            setError("Intente de nuevo")
        }
    }

    return { state, idiomas, idioma, setIdioma, valueIdioma, interes, setInteres, presentacion, setPresentacion, handleSubmit }

}