import { useNavigate } from 'react-router-dom';
import { useState } from "react"

export const useForm = () => {

    const navigate = useNavigate();
    const [profile, setProfile] = useState();

    const handleChange = (e) => {
        setProfile(e.target.value)
    };

    /**
     * If the profile is laborer, then set the profile in local storage and navigate to the userinfo page.
     */
    const handleSubmit = () => {
        if (profile === "person") {
            localStorage.setItem("profile", profile)
            navigate('/personcv');
        } else {
            localStorage.setItem("profile", profile)
            navigate('/businesscv');
        }
    }

    return { handleChange, handleSubmit }

}