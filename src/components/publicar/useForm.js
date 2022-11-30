import { useState, useEffect } from "react";
import { HttpService } from '../services/Client.js';

export const useForm = () => {

    const { postOfertaBusiness } = HttpService();
    const [error, setError] = useState();
    const [response, setResponse] = useState();
    const [form, setForm] = useState({});
    const [habilidad, setHabilidad] = useState("");
    const [habilidades, setHabilidades] = useState([]);

    const valueHabilidades = () => {
        if (habilidad) {
            setHabilidades([...habilidades, habilidad])
            setHabilidad("")
        }
    }

    /**
     * It takes an event object, and then it sets the state of the datos object to the current state of the
     * datos object, but with the value of the event object's target's name property set to the value of
     * the event object's target's value property.
     */
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {form, habilidades}
        postOfertaBusiness(data).then((res) => {
            if (res.data.auth === true) {
                setResponse(res.data.message)
            } else {
                setError(res.data.message)
            }
        })
    }

    return { form, error, response, handleSubmit, handleChange, valueHabilidades, habilidad, habilidades, setHabilidad }

}