import {Outlet} from "react-router-dom";
import Menu from "../component/menus/Menu.tsx";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default Layout;