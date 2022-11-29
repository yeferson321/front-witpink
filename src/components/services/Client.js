import axios from 'axios'

/**
 * It's a function that returns an object with two functions that make a post request to the server.
 */
export const HttpService = () => {

    const postSignupClient = async (token) => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/signup/auth`,
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    const postSigninClient = async (token) => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/signin/auth`,
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    const postSigninRegistercv = async (form) => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/register/usercv`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: form
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    const getDataUsercv = async () => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/datos/usercv`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    const updateDataUsercv = async (form) => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/update/datos/usercv`,
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: form
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    const delateAccount = async (form) => {
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_PROXY}/v1/delete/account`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    return { postSignupClient, postSigninClient, postSigninRegistercv, getDataUsercv, updateDataUsercv }

}
