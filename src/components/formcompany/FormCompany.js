import Return from '../return/Return.js';
import { Outlet } from "react-router-dom";

function FormCompany() {
    return (
        <div>
            <Return />
            <Outlet />
        </div>
    )
}

export default FormCompany