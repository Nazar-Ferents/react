import {Outlet} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import RecipeMenu from "../components/menus/RecipeMenu.tsx";

const Layout = () => {
    return (
        <div>

            <RecipeMenu/>
            <HomePage/>
            <Outlet/>

        </div>
    );
};

export default Layout;