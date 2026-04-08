import {Outlet} from "react-router-dom";
import Menu from "../components/menu/menu.tsx";

const MainLayout = () => {
    return (
        <div>

            <Menu/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;