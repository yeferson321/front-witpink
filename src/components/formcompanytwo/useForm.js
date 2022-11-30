import { useState, useEffect, useContext } from "react";
import { DataContext } from '../../context/DataContext.js'
import { HttpService } from '../services/Client.js';
import { useNavigate } from 'react-router-dom';

export const useForm = () => {

    /* A hook that allows you to use the state of the component. */
    const navigate = useNavigate();
    const { postSigninRegisterCompanycv } = HttpService();
    const [error, setError] = useState();
    const [response, setResponse] = useState();
    const { itemone } = useContext(DataContext);
    const accounttype = localStorage.getItem('profile')
    const [descripcion, setDescripcion] = useState(localStorage.getItem('descripcion') || "")
    const [numero, setNumero] = useState(localStorage.getItem('numero') || "")
    const [ubicacion, setUbicacion] = useState(localStorage.getItem('ubicacion') || "")
    const [state, setState] = useState(false)

    useEffect(() => {
        if (accounttype && descripcion && numero && ubicacion) {
            localStorage.setItem("descripcion", descripcion)
            localStorage.setItem("numero", numero)
            localStorage.setItem("ubicacion", ubicacion)
            setState(true)
        }
    }, [accounttype, descripcion, numero, ubicacion]);

    const handleSubmit = () => {
        const form = { accounttype: itemone.accounttype, name: itemone.name, categoria: itemone.categoria, correo: itemone.correo, ubicacion: ubicacion, numero: numero, descripcion: descripcion }
        try {
            postSigninRegisterCompanycv(form).then((res) => {

                if (res.data.auth === true) {
                    localStorage.removeItem('name')
                    localStorage.removeItem('categoria')
                    localStorage.removeItem('correo')
                    localStorage.removeItem('numero')
                    localStorage.removeItem('ubicacion')
                    localStorage.removeItem('descripcion')
                    localStorage.removeItem('profile')
                    navigate('/welcomecompany/profilebusiness');
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            setError("Intente de nuevo")
        }
    }

    return { state, handleSubmit, ubicacion, setUbicacion, descripcion, setDescripcion, numero, setNumero }

}