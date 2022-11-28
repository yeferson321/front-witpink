import { useState } from "react"
import { GoogleAuthProvider, GithubAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase.js";
import { HttpService } from '../services/Client.js';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/Auth.js';

export const useForm = () => {

    /* A hook that is used to navigate to a different page. */
    const { login } = AuthService();
    const navigate = useNavigate();
    const { postSignupClient } = HttpService();
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    /**
     * It takes the user's access token from Google's API and sends it to my backend to verify the user's
     * identity. If the user is verified, the backend sends back a token that I store in localStorage and
     * then redirect the user to the welcome page.
     */
    const handleGoogleSignin = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'consent' });

        try {
            const credentials = await signInWithPopup(auth, provider)
            postSignupClient(credentials.user.accessToken).then((res) => {
                if (res.data.auth === true) {
                    if (res.data.newuser) {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/acount');
                    } else {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/welcome/search');
                    }
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            if (error.code === "auth/account-exists-with-different-credential") {
                setError("Intente con un proveedor diferente")
            }
        }
    }

    /**
     * It takes the user's access token from the Github API and sends it to my backend to verify if the
     * user is registered in my database. If the user is registered, it saves the token in localStorage and
     * redirects the user to the welcome page. If the user is not registered, it shows an error message
     */
    const handleGithubSignin = async () => {
        const provider = new GithubAuthProvider()
        provider.setCustomParameters({ prompt: 'consent' });

        try {
            const credentials = await signInWithPopup(auth, provider)
            postSignupClient(credentials.user.accessToken).then((res) => {
                if (res.data.auth === true) {
                    if (res.data.newuser) {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/acount');
                    } else {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/welcome/search');
                    }
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            if (error.code === "auth/account-exists-with-different-credential") {
                setError("Intente con un proveedor diferente")
            }
        }
    }

    /**
     * It's a function that handles the sign in with Microsoft button, it uses the OAuthProvider to get the
     * user's credentials, then it sends the accessToken to the server to verify the user and if the user
     * is verified, it saves the token in the localStorage and redirects the user to the account page.
     */
    const handleMicrosoftSignin = async () => {
        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({ prompt: 'consent' });

        try {
            const credentials = await signInWithPopup(auth, provider)
            postSignupClient(credentials.user.accessToken).then((res) => {
                if (res.data.auth === true) {
                    if (res.data.newuser) {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/acount');
                    } else {
                        login(res.data.message)
                        localStorage.setItem('pinture', res.data.pinture)
                        navigate('/welcome/search');
                    }
                } else {
                    setResponse(res.data.message)
                }
            })
        } catch (error) {
            if (error.code === "auth/account-exists-with-different-credential") {
                setError("Intente con un proveedor diferente")
            }
        }
    }

    return { error, response, handleMicrosoftSignin, handleGithubSignin, handleGoogleSignin }

}