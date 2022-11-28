import { useState, useEffect } from "react";
import { HttpService } from '../services/Client.js';

export const useForm = () => {

    const { getDataUsercv } = HttpService();
    const { updateDataUsercv } = HttpService();
    const [datos, setDatos] = useState({});
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    /* A hook that is used to fetch data from an API. */
    useEffect(() => {
        getDataUsercv().then((res) => {
            setDatos(res.data.message)
        })
    }, []);

    /**
     * It takes an event object, and then it sets the state of the datos object to the current state of the
     * datos object, but with the value of the event object's target's name property set to the value of
     * the event object's target's value property.
     */
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateDataUsercv(datos).then((res) => {
            if (res.data.auth === true) {
                setResponse(res.data.message)
            } else {
                setError(res.data.message)
            }
        })
    }

    return { datos, error, response, setDatos, handleSubmit, handleChange }

}