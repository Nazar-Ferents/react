import Menu from "../components/menus/menu.tsx";
import {Outlet} from "react-router-dom";

const Layouts = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>

        </div>
    );
};

export default Layouts;