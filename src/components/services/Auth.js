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
    const login = (token) => {
        localStorage.setItem('token', token);
    };

    /**
     * It removes the token from local storage.
     */
    const logout = () => {
        localStorage.removeItem('token');
    };

    return { login, logout, checkToken }

}
