import { useState, useEffect, useContext } from "react"
import { DataContext } from '../../context/DataContext.js'

export const useForm = () => {

    /* A hook that allows you to use the state of the component. */
    const { addItemone } = useContext(DataContext);
    const accounttype = localStorage.getItem('profile')
    const [name, setName] = useState(localStorage.getItem('name') || "")
    const [ocupacion, setOcupacion] = useState(localStorage.getItem('ocupacion') || "")
    const [prefijo, setPrefijo] = useState(localStorage.getItem('prefijo') || "")
    const [telefono, setTelefono] = useState(localStorage.getItem('telefono') || "")

    useEffect(() => {
        if (accounttype && name && ocupacion && prefijo && telefono) {
            localStorage.setItem("name", name)
            localStorage.setItem("ocupacion", ocupacion)
            localStorage.setItem("prefijo", prefijo)
            localStorage.setItem("telefono", telefono)
            addItemone({accounttype, name, ocupacion, prefijo, telefono})
        }
    }, [accounttype, name, ocupacion, prefijo, telefono]);

    return { name, setName, ocupacion, setOcupacion, prefijo, setPrefijo, telefono, setTelefono }

}