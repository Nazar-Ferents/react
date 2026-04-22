import Menu from "../components/menus/Menu.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>

            <Menu/>
            <Outlet/>

        </div>
    );
};

export default Layout;