import { Navigate, Outlet } from "react-router-dom";
import { isExpired } from "react-jwt";
import { AuthService } from '../components/services/Auth';

const ProtectetedRouter = ({ children, redirectTo = "/signin" }) => {

    const { logout } = AuthService();
    const token = localStorage.getItem('token');
    const isMyTokenExpired = isExpired(token);

    if (!token || isMyTokenExpired === true) {
        logout()
        return <Navigate to={redirectTo} />
    }

    return <Outlet />
}

export default ProtectetedRouter;