import { useState, useEffect, useContext } from "react"
import { HttpService } from '../services/Client.js';
import { DataContext } from '../../context/DataContext.js'
import { useNavigate } from 'react-router-dom';

export const useForm = (send) => {

    /* A hook that is used to navigate to a different page. */
    const navigate = useNavigate();
    const { postSigninRegistercv } = HttpService();
    const [error, setError] = useState();
    const { itemone } = useContext(DataContext);
    const { itemtwo } = useContext(DataContext);
    const { itemthree } = useContext(DataContext);
    const [progress, setCounter] = useState(25)

    /**
     * When the button is clicked, if the progress is less than 100, then add 25 to the progress.
     */
    const handleClick = () => {
        if (progress < 100) {
            setCounter(progress + 25)
        }
    }

    const handleSubmit = () => {

        const form = { accounttype: localStorage.getItem('profile'), name: itemone.name, prefijo: itemone.prefijo, telefono: itemone.telefono, ocupacion: itemone.ocupacion, conocimientos: itemtwo.conocimientos, habilidades: itemtwo.habilidades, nivel: itemtwo.nivel, idiomas: itemthree.idiomas, interes: itemthree.interes, presentacion: itemthree.presentacion }

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
                    navigate('/welcome');
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            setError("Intente de nuevo")
        }

    }

    /* Checking if the itemone, itemtwo, itemthree are not empty, then it will display the send button. */
    useEffect(() => {
        if (itemone, itemtwo, itemthree) {
            send.style.display = 'block';
        }
    }, [itemone, itemtwo, itemthree, send]);

    return { progress, handleClick, handleSubmit }

}