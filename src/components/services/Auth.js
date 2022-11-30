//import { isExpired, decodeToken } from "react-jwt";
//import { useNavigate } from 'react-router-dom';

export const AuthService = () => {

    /**
     * If there is a token in local storage, return true, otherwise return false.
     */
    const checkToken = () => {
        return !!localStorage.getItem('token');
    }

    /**
     * It takes a token as an argument and stores it in localStorage.
     */
    const login = (data) => {
        localStorage.setItem('token', data.message);
        localStorage.setItem('pinture', data.pinture);
    };

    /**
     * It removes the token from local storage.
     */
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('pinture')
    };

    return { login, logout, checkToken }

}
