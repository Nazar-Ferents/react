import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <p><Link to={'user'}>User Page</Link></p>
            <Outlet/>
        </div>
    );
};

export default Layout;