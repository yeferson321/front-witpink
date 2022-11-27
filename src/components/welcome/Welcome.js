import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer.js";
import Navtwo from "../navtwo/NavTwo.js";
import Scroll from "../scroll/Scroll.js";

function Welcome() {
    return (
        <div>
            <Navtwo />
            <Scroll />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Welcome