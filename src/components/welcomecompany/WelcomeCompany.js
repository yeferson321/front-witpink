import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer.js";
import Navtwo from "../navtwo/NavTwo.js";
import ScrollCompany from "../scrollcompany/ScrollCompany.js";

function Welcome() {
    return (
        <div>
            <Navtwo />
            <ScrollCompany />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Welcome