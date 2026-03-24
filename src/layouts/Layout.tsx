import Menu from "../components/menu/menu.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>

            <Menu/>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default Layout;