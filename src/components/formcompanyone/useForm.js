import { useState, useEffect, useContext } from "react"
import { DataContext } from '../../context/DataContext.js'

export const useForm = () => {

    /* A hook that allows you to use the state of the component. */
    const { addItemone } = useContext(DataContext);
    const accounttype = localStorage.getItem('profile')
    const [name, setName] = useState(localStorage.getItem('name') || "")
    const [categoria, setCategoria] = useState(localStorage.getItem('categoria') || "")
    const [correo, setCorreo] = useState(localStorage.getItem('correo') || "")

    useEffect(() => {
        if (accounttype && name && categoria && correo) {
            localStorage.setItem("name", name)
            localStorage.setItem("categoria", categoria)
            localStorage.setItem("correo", correo)
            addItemone({accounttype, name, categoria, correo})
        }
    }, [accounttype, name, categoria, correo]);

    return { name, setName,categoria, setCategoria, correo, setCorreo }

}