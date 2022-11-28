import Return from '../return/Return.js';
import ScrollTwo from '../scrolltwo/ScrollTwo';
import { Outlet } from "react-router-dom";

function FormUsercv() {
    return (
        <div>
            <Return />
            <ScrollTwo />
            <Outlet />
        </div>
    )
}

export default FormUsercv