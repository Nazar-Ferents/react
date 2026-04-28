import {Outlet} from "react-router-dom";
import Menu from "../components/menus/Menu.tsx";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default Layout;