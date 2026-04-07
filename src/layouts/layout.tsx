import Menu from "../components/menus/menu.tsx";
import {Outlet} from "react-router-dom";
import './layout.css'

const Layout = () => {
    return (
        <div className='main'>

            <Menu/>
            <Outlet/>
            
            </div>
    );
};

export default Layout;