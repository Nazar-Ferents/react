import {Outlet} from "react-router-dom";
import Menu from "../component/menu/menu.tsx";


const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;