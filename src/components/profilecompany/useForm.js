import { useState, useEffect } from "react";
import { HttpService } from '../services/Client.js';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/Auth.js';

export const useForm = () => {

    const { logout } = AuthService();
    const navigate = useNavigate();
    const { delateAccountBusiness } = HttpService();
    const { getDataBusinesscv } = HttpService();
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState();

    /* A hook that is used to fetch data from an API. */
    useEffect(() => {
        getDataBusinesscv().then((res) => {
            setDatos(res.data.message)
        })
    }, []);

    /*
    * @param string - The string to be capitalized.
    * @returns The first character of the string is being returned in uppercase.
    */
    function MaysPrimera(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * `delateAccoun` is a function that calls `delateAccount` and then, if the response is `true`, calls
     * `logout` and then `navigate` to `/`. Otherwise, it sets `error` to the response's `message`.
     */
    const delateAccoun = () => {
        delateAccountBusiness().then((res) => {
            if (res.data.auth === true) {
                navigate('/')
                logout()
            } else {
                setError(res.data.message)
            }
        })
    };

    return { datos, MaysPrimera, delateAccoun, error }

}